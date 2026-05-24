const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { reviewSchema } = require("../schema.js");
const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Tech & Hackathons",
        "Music & Concerts",
        "Career & Jobs",
        "Sports & Games",
        "Workshops",
        "Art & Culture",
        "Talks & Seminars",
        "Social & Clubs",
      ],
    },

    image: {
      url: String,
      filename: String,

      // type: String,
      // default:
      //   "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      // set: (v) =>
      //   v === ""
      //     ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
      //     : v,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },
    duration: String,
    venue: {
      type: String,
      required: true,
    },
    teamSize: String,

    technologies: [String],

    prizes: [String],

    rules: [String],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true },
);

// This middleware will run after an event is deleted. It will delete all reviews associated with that event.
eventSchema.post("findOneAndDelete", async (event) => {
  if (event) {
    await Review.deleteMany({ _id: { $in: event.reviews } });
  }
});
const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
