const Task = require("../models/Task");
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateTaskStatus = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        returnDocument: "after",
      }
    );

    res.status(200).json({
      message: "Task updated",
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}; 
module.exports = {
  createTask,
  getTasks,
  updateTaskStatus,
};