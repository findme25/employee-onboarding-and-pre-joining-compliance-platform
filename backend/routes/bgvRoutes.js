const express = require("express");

const router = express.Router();

const {
  createBGV,
  updateBGVStatus,
  getBGVs,
} = require(
  "../controllers/bgvController"
);

router.post("/", createBGV);
router.get("/", getBGVs);
router.patch("/:id", updateBGVStatus);

module.exports = router;