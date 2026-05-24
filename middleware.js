// const e = require("connect-flash");
const Event = require("./models/event.js");
const Review = require("./models/review.js");
const ExpressError = require("./utils/ExpressError.js");
const { eventSchema, reviewSchema } = require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    // Store the original URL in the session and redirect to login page (or any other page) so that after successful login we can redirect the user back to the page they originally wanted to access
    req.flash("error", "You must be logged in first!");
    return res.redirect("/users/login");
  }
  next();
};

// this middleware is used to make the redirectUrl available in res.locals for all routes as the passport bydefault resets the session after successful login and we need to access the redirectUrl in the login route to redirect the user to the page they originally wanted to access after successful login
module.exports.savedRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl; // Make it available in res.locals
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  const { id } = req.params;

  const event = await Event.findById(id);

  // if (!event) {
  //   req.flash("error", "Event not found!");
  //   return res.redirect("/events");
  // }

  if (
    !res.locals.currentUser ||
    !event.owner ||
    !event.owner.equals(res.locals.currentUser._id)
  ) {
    req.flash("error", "You are not the owner of this event!");
    return res.redirect(`/events/${id}`);
  }

  next();
};

module.exports.isOrganizer = (req, res, next) => {
  if (!res.locals.currentUser || res.locals.currentUser.role !== "organizer") {
    req.flash("error", "Only organizers can create events!");
    return res.redirect("/events");
  }
  next();
};

// This is a middleware that checks form data BEFORE saving it to the database.
module.exports.validateEvent = (req, res, next) => {
  const fields = ["technologies", "prizes", "rules"];

  // Convert multiline strings → arrays
  fields.forEach((field) => {
    if (typeof req.body.event[field] === "string") {
      req.body.event[field] = req.body.event[field]
        .split("\n")
        .map((item) => item.trim())
        .filter((item) => item.length > 0);
    }
  });

  // Validate using Joi schema
  const { error } = eventSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }

  next();
};

module.exports.validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

module.exports.isReviewAuthor = async (req, res, next) => {
  const { id, reviewId } = req.params;
  const review = await Review.findById(reviewId);

  if (
    !res.locals.currentUser ||
    !review.author ||
    !review.author.equals(res.locals.currentUser._id)
  ) {
    req.flash("error", "You are not the author of this review!");
    return res.redirect(`/events/${id}`);
  }

  next();
};
