const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter a firstName"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter a lastName"],
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", user, "user");
