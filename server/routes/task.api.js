const express = require("express");
const taskController = require("../controller/task.controller");
const router = express.Router();

router.post("/", taskController.createTask);
// Creates a task

router.get("/", taskController.getTask);
// Reads a task

router.put("/:id", taskController.updateTask);
// Updates a task

router.delete("/:id", taskController.deleteTask);
// Deletes a task

module.exports = router;
