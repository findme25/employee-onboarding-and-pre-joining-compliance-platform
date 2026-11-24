const express = require("express");

const router = express.Router();

const upload = require("../config/multer");

const {
  uploadDocument,
  getDocuments,
  verifyDocument,
  rejectDocument,
} = require("../controllers/documentController");

router.post(
  "/upload",
  upload.single("file"),
  uploadDocument
);

router.get("/", getDocuments);
router.patch("/verify/:id", verifyDocument);
router.patch("/reject/:id", rejectDocument);
module.exports = router;