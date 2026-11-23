const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

router.post(
  "/register",
  [
    body("name")
      .custom((value) => {
        if (value.includes("<") || value.includes(">")) {
          throw new Error("HTML tags are not allowed");
        }
        return true;
      }),

    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],
  registerUser
);

router.post("/login", loginUser);
router.get("/profile", protect, getProfile);

module.exports = router;