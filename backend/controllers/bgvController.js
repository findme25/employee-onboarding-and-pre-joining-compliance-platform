const BackgroundVerification =
require("../models/BackgroundVerification");
const createBGV = async (req, res) => {
  try {
    const bgv =
      await BackgroundVerification.create(
        req.body
      );

    res.status(201).json({
      message:
        "Background verification created",
      bgv,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateBGVStatus = async (req, res) => {
  try {
    const bgv =
      await BackgroundVerification.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status,
          remarks: req.body.remarks,
        },
        {
          returnDocument: "after",
        }
      );

    res.status(200).json({
      message: "BGV updated",
      bgv,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getBGVs = async (req, res) => {
  const bgvs =
    await BackgroundVerification.find();

  res.status(200).json(bgvs);
}; 
module.exports = {
  createBGV,
  updateBGVStatus,
  getBGVs,
};