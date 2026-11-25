const mongoose = require("mongoose");

const complianceSchema = new mongoose.Schema(
  {
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },

    onboardingStatus: {
      type: String,
      enum: [
        "Ready",
        "Partially Ready",
        "Delayed",
        "Blocked",
      ],
      default: "Partially Ready",
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
  "Compliance",
  complianceSchema
);