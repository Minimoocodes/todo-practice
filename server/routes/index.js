const express = require("express");
const router = express.Router();
const taskApi = require("./task.api");
const userApi = require("./user.api");
// to avoid repeating, CRUD is in a task.api file.
// This is easy to organize different apis.

router.use("/tasks", taskApi);
// when /tasks is called, go to taskApi.
router.use("/user", userApi);

module.exports = router;
