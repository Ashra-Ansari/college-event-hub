if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("./models/User.js");

// const Joi = require("joi");

const eventRoutes = require("./routes/event.js");
const reviewRoutes = require("./routes/review.js");
const userRoutes = require("./routes/user.js");

// const MONGODB_URL = "mongodb://127.0.0.1:27017/eventHub";

const dbURL = process.env.ATLASDB_URL;

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbURL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

// 1. Create the store instance first
const store = MongoStore.create({
  mongoUrl: dbURL,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600, // time period in seconds
});

// 2. Now you can safely use store.on() (Fixed the 'err' parameter too)
store.on("error", (err) => {
  console.log("Session Store Error", err);
});

// 3. Pass the defined store into your options
const sessionOptions = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: store, // Uses the store variable from step 1
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 1 week
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

app.get("/", (req, res) => {
  res.render("index1.ejs");
});

app.use("/events", eventRoutes);
app.use("/events/:id/reviews", reviewRoutes);
app.use("/users", userRoutes);

app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occured" } = err;
  res.status(status).render("error.ejs", { message });
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
