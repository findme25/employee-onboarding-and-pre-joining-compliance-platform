const mongoose = require("mongoose");

const bgvSchema = new mongoose.Schema(
  {
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },

    agencyName: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Requested",
        "In Progress",
        "Completed",
        "Failed"
      ],
      default: "Requested",
    },

    remarks: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "BackgroundVerification",
  bgvSchema
);