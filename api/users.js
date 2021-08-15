const express = require("express");
const passport = require("passport");
const { authenticate } = require("../middlewares");
const userGet = require("../controllers/users");

const router = express.Router();

router.get("/profile", authenticate, userGet.getProfile);

module.exports = router;