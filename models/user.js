const { model, Schema } = require("mongoose");

const userScehma = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
});

module.exports = model("User", userScehma);
