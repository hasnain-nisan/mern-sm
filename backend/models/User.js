const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide a first name"],
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: [true, "Please provide a last name"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
    },
    password: {
        type: String,
        required: [true, "Please provide an password"],
        minlength: 6,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
