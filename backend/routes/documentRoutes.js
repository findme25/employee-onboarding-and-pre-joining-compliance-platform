const express = require("express");

const router = express.Router();

const upload = require("../config/multer");

const {
  uploadDocument,
  getDocuments,
} = require("../controllers/documentController");

router.post(
  "/upload",
  upload.single("file"),
  uploadDocument
);

router.get("/", getDocuments);

module.exports = router;