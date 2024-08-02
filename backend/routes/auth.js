const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../controllers/authController");

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({
      min: 6,
    }),
  ],
  authController.register
);

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post(
  "/login",
  [
    check("identifier", "Please include a valid email or username")
      .not()
      .isEmpty(),
    check("password", "Password is required").exists(),
  ],
  authController.login
);

router.post("/refresh-token", (req, res) =>
  res.send("todo: implement refresh-token")
);
router.post("/password-reset", (req, res) =>
  res.send("todo: implement password-reset")
);
router.post("/verify-email", (req, res) =>
  res.send("todo: implement verify-email")
);

module.exports = router;
