const Users = require("../models/User.js");

module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs", { isAuthPage: true });
};

module.exports.signup = async (req, res) => {
  try {
    let { username, email, password, role } = req.body;
    const newUser = new Users({ username, email, role });
    const registeredUser = await Users.register(newUser, password);
    console.log(registeredUser);

    // Automatically log in the user after successful registration1
    req.login(registeredUser, (err) => {
      if (err) {
        req.flash(
          "error",
          "Login failed after registration. Please try logging in.",
        );
        return res.redirect("/users/login");
      }
      req.flash("success", "Welcome to EventHub!");
      res.redirect("/events");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/users/signup");
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs", { isAuthPage: true });
};

module.exports.login = async (req, res) => {
  req.flash("success", "Logged in successfully!");
  let redirectUrl = res.locals.redirectUrl || "/events"; // Use the redirectUrl from res.locals (if exists) or default to /events
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "Logged out successfully!");
    res.redirect("/");
  });
};

module.exports.renderRules = (req, res) => {
  res.render("users/rules.ejs");
};

module.exports.renderFAQ = (req, res) => {
  res.render("users/faq.ejs");
};
