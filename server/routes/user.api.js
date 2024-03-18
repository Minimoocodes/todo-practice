const express = require("express");
const userController = require("../controller/user.controller");
const router = express.Router();

// 1. registration endpoint
router.post("/", userController.createUser);

// using post because it has to read the email and password.
// get cannot use req.body
router.post("/login", userController.loginWithEmail);

module.exports = router;
