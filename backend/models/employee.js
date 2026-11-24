const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      unique: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },

    designation: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    joiningDate: {
      type: Date,
    },

    reportingManager: {
      type: String,
    },

    status: {
      type: String,
      enum: [
        "Candidate",
        "Pre-Joining",
        "Ready",
        "Joined",
        "Blocked"
      ],
      default: "Candidate",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Employee", employeeSchema);
