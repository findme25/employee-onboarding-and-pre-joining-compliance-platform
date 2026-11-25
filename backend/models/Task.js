const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },

    department: {
      type: String,
      enum: ["HR", "IT", "Finance", "Admin"],
      required: true,
    },

    taskName: {
      type: String,
      required: true,
    },

    assignedTo: {
      type: String,
    },

    dueDate: {
      type: Date,
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "In Progress",
        "Completed"
      ],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);