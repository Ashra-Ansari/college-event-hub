const Event = require("../models/event");
const { cloudinary } = require("../cloudConfig.js");
const Registration = require("../models/register.js");

module.exports.index = async (req, res) => {
  const allEvents = await Event.find({});
  res.render("events/allevents.ejs", { allEvents });
};

module.exports.renderNewForm = (req, res) => {
  res.render("events/new.ejs");
};

module.exports.showEvent = async (req, res) => {
  let { id } = req.params;

  const event = await Event.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");

  if (!event) {
    req.flash("error", "Event you requested for does not exist!");
    return res.redirect("/events");
  }

  const registration = await Registration.findOne({
    event: id,
    student: req.user?._id,
  });

  res.render("events/show.ejs", { event, registration });
};
module.exports.createEvent = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const newEvent = new Event(req.body.event);
  newEvent.owner = req.user._id;
  newEvent.image = { url, filename };
  await newEvent.save();
  req.flash("success", "Event created successfully!");
  res.redirect("/events");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const event = await Event.findById(id);

  res.render("events/edit.ejs", { event }); // only render
};

module.exports.updateEvent = async (req, res) => {
  let { id } = req.params;
  if (!req.body.event) {
    throw new ExpressError(400, "Invalid event data");
  }
  let updatedEvent = await Event.findByIdAndUpdate(id, req.body.event, {
    runValidators: true,
    new: true,
  });
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    updatedEvent.image = { url, filename };
    await updatedEvent.save();
  }
  req.flash("success", "Event updated successfully!");
  res.redirect(`/events/${id}`);
};

module.exports.destroyEvent = async (req, res) => {
  let { id } = req.params;

  const event = await Event.findById(id);

  if (event.image && event.image.filename) {
    await cloudinary.uploader.destroy(event.image.filename);
  }

  await Event.findByIdAndDelete(id);

  console.log("Event deleted");

  req.flash("success", "Event deleted successfully!");

  res.redirect("/events");
};

module.exports.filterByCategory = async (req, res) => {
  const { category } = req.params;
  const categoryMap = {
    "tech-hackathons": "Tech & Hackathons",
    "music-concerts": "Music & Concerts",
    "career-jobs": "Career & Jobs",
    "sports-games": "Sports & Games",
    workshops: "Workshops",
    "art-culture": "Art & Culture",
    "talks-seminars": "Talks & Seminars",
    "social-clubs": "Social & Clubs",
  };
  const categoryName = categoryMap[category];
  const filteredEvents = await Event.find({ category: categoryName });
  res.render("events/filtered.ejs", { filteredEvents, categoryName });
};

module.exports.renderRegisterForm = async (req, res) => {
  let { id } = req.params;

  const event = await Event.findById(id);

  res.render("events/register.ejs", { event });
};

module.exports.registerForEvent = async (req, res) => {
  const { id } = req.params;

  const alreadyRegistered = await Registration.findOne({
    event: id,
    student: req.user._id,
  });

  if (alreadyRegistered) {
    req.flash("error", "You are already registered for this event!");
    return res.redirect(`/events/${id}`);
  }

  const registration = new Registration({
    event: id,
    student: req.user._id,
    name: req.body.name,
    email: req.body.email,
    department: req.body.department,
    phone: req.body.phone,
  });

  await registration.save();

  req.flash("success", "Successfully registered for the event!");
  res.redirect(`/events/${id}`);
};
