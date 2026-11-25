const express = require("express");

const router = express.Router();

const {
  createAsset,
  getAssets,
  updateAssetStatus,
} = require("../controllers/assetController");

router.post("/", createAsset);

router.get("/", getAssets);

router.patch("/:id", updateAssetStatus);

module.exports = router;