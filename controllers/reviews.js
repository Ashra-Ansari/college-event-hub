const Event = require("../models/event");
const Review = require("../models/review");

module.exports.createReview = async (req, res) => {
  let event = await Event.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id; // Set the author of the review to the currently logged-in user
  event.reviews.push(newReview);

  await newReview.save();
  await event.save();
  console.log("Review added");
  req.flash("success", "Review added successfully!");
  res.redirect(`/events/${event._id}`);
};

module.exports.destroyReview = async (req, res) => {
  const { id, reviewId } = req.params;

  await Event.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }); //pull operator is used to remove the reviewId from the reviews array of the event document
  await Review.findByIdAndDelete(reviewId);
  console.log("Review deleted");
  req.flash("success", "Review deleted successfully!");
  res.redirect(`/events/${id}`);
};
