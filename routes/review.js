const express = require("express");
const router = express.Router({ mergeParams: true }); //mergeParams is used to access the params of the parent route in the child route
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync");

const Review = require("../models/review.js");
const Event = require("../models/event.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");
const reviewControllers = require("../controllers/reviews.js");

// Reviews - POST Route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewControllers.createReview),
);

//delete review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewControllers.destroyReview),
);

module.exports = router;
