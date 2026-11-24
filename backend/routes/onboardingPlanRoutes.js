const express = require("express");

const router = express.Router();

const {
  createPlan,
  getPlans,
} = require("../controllers/onboardingPlanController");

router.post("/", createPlan);
router.get("/", getPlans);

module.exports = router;