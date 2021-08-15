const { model } = require("mongoose");

const { userSchema } = require("./schemas");

const User = model("users", userSchema);

module.exports = User;