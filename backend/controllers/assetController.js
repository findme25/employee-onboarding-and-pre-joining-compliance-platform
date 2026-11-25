

// Create Asset
const Asset = require("../models/Asset");

const createAsset = async (req, res) => {
  try {
    const {
      employeeId,
      assetType,
      assetNumber,
    } = req.body;

    // Required fields
    if (!employeeId || !assetType) {
      return res.status(400).json({
        message:
          "Employee ID and Asset Type are required",
      });
    }

    // Asset Types Validation
    const validAssetTypes = [
      "Laptop",
      "Email ID",
      "VPN Access",
      "ID Card",
      "Workstation",
    ];

    if (
      !validAssetTypes.includes(assetType)
    ) {
      return res.status(400).json({
        message: "Invalid asset type",
      });
    }

    // Asset Number Validation
    if (
      assetNumber &&
      assetNumber.length < 4
    ) {
      return res.status(400).json({
        message:
          "Asset number should be at least 4 characters",
      });
    }

    const asset = await Asset.create({
      employeeId,
      assetType,
      assetNumber,
    });

    res.status(201).json({
      message: "Asset created successfully",
      asset,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Assets
const getAssets = async (req, res) => {
  try {
    const assets = await Asset.find();

    res.status(200).json(assets);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Asset Status
const updateAssetStatus = async (req, res) => {
  try {
    const asset = await Asset.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        returnDocument: "after",
      }
    );

    if (!asset) {
      return res.status(404).json({
        message: "Asset not found",
      });
    }

    res.status(200).json({
      message: "Asset updated successfully",
      asset,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createAsset,
  getAssets,
  updateAssetStatus,
};