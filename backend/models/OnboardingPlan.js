const mongoose = require("mongoose");

const onboardingPlanSchema = new mongoose.Schema(
  {
    planName: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    createdBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "OnboardingPlan",
  onboardingPlanSchema
);