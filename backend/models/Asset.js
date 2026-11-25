const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema(
  {
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },

    assetType: {
      type: String,
      enum: [
        "Laptop",
        "Email ID",
        "VPN Access",
        "ID Card",
        "Workstation"
      ],
      required: true,
    },

    assetNumber: {
      type: String,
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Allocated",
        "Ready"
      ],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Asset", assetSchema);