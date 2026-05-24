const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["student", "organizer"],
      // default: "student",
    },
  },
  { timestamps: true },
);

userSchema.plugin(passportLocalMongoose);
// This plugin adds username and password fields, along with authentication methods automatically. It also adds a salt and hash field to store the password securely. It creates various methods for user registration, authentication, and password management, making it easier to implement user authentication in your application.
module.exports = mongoose.model("User", userSchema);
