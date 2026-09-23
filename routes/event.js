const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");

const {
  isLoggedIn,
  isOwner,
  isOrganizer,
  validateEvent,
} = require("../middleware.js");
const eventController = require("../controllers/events.js");
const multer = require("multer"); // For handling multipart/form-data, which is primarily used for uploading files
const { storage } = require("../cloudConfig.js"); // Importing the Cloudinary storage configuration
const upload = multer({ storage }); // Setting up multer to use Cloudinary storage

// index and create route

router
  .route("/")
  .get(isLoggedIn, wrapAsync(eventController.index))
  .post(
    isLoggedIn,
    isOrganizer,
    upload.single("event[image]"),
    validateEvent,
    wrapAsync(eventController.createEvent),
  );

//New route
router.get("/new", isLoggedIn, isOrganizer, eventController.renderNewForm);

// show, update and delete route
router
  .route("/:id")
  .get(wrapAsync(eventController.showEvent))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("event[image]"), // first we upload the new image, then validate the rest of the data
    validateEvent,
    wrapAsync(eventController.updateEvent),
  )
  .delete(isLoggedIn, isOwner, wrapAsync(eventController.destroyEvent));

//edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(eventController.renderEditForm),
);

// category filter route
router.get(
  "/category/:category",
  isLoggedIn,
  wrapAsync(eventController.filterByCategory),
);

module.exports = router;
