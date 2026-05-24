const express = require("express");
const router = express.Router();
const Event = require("../models/event.js");
const wrapAsync = require("../utils/wrapAsync");
const { eventSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const {
  isLoggedIn,
  isOwner,
  isOrganizer,
  validateEvent,
} = require("../middleware.js");
const eventConroller = require("../controllers/events.js");
const multer = require("multer"); // For handling multipart/form-data, which is primarily used for uploading files
const { storage } = require("../cloudConfig.js"); // Importing the Cloudinary storage configuration
const upload = multer({ storage }); // Setting up multer to use Cloudinary storage

// index and create route

router
  .route("/")
  .get(isLoggedIn, wrapAsync(eventConroller.index))
  .post(
    isLoggedIn,
    isOrganizer,
    upload.single("event[image]"),
    validateEvent,
    wrapAsync(eventConroller.createEvent),
  );

//New route
router.get("/new", isLoggedIn, isOrganizer, eventConroller.renderNewForm);

// show, update and delete route
router
  .route("/:id")
  .get(wrapAsync(eventConroller.showEvent))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("event[image]"), // first we upload the new image, then validate the rest of the data
    validateEvent,
    wrapAsync(eventConroller.updateEvent),
  )
  .delete(isLoggedIn, isOwner, wrapAsync(eventConroller.destroyEvent));

//edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(eventConroller.renderEditForm),
);

// category filter route
router.get(
  "/category/:category",
  isLoggedIn,
  wrapAsync(eventConroller.filterByCategory),
);

module.exports = router;
