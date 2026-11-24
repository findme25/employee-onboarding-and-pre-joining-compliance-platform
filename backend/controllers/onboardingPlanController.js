const OnboardingPlan = require("../models/OnboardingPlan");

const createPlan = async (req, res) => {
  try {
    const plan = await OnboardingPlan.create(req.body);

    res.status(201).json({
      message: "Plan created successfully",
      plan,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getPlans = async (req, res) => {
  try {
    const plans = await OnboardingPlan.find();

    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createPlan,
  getPlans,
};