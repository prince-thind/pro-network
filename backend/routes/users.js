const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userController = require("../controllers/userController");
const upload = require("../middleware/uploadMiddleware");

// @route   GET /api/users/me
// @desc    Get current user's profile
// @access  Private
router.get("/me", auth, userController.getMe);

// @route   PUT /api/users/me
// @desc    Update user profile
// @access  Private
router.put("/me", auth, userController.updateMe);

// @route   POST /api/users/me/profilePicture
// @desc    Upload profile picture
// @access  Private
router.post(
  "/me/profilePicture",
  [auth, upload],
  userController.uploadProfilePicture
);

module.exports = router;