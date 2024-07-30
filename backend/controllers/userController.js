const User = require("../models/User");

// @desc    Get current user's profile
// @route   GET /api/users/me
// @access  Private
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @desc    Update user profile
// @route   PUT /api/users/me
// @access  Private
exports.updateMe = async (req, res) => {
  const { name, email } = req.body;
  const userFields = {};

  if (name) userFields.name = name;
  if (email) userFields.email = email;

  try {
    let user = await User.findById(req.user.id);

    if (user) {
      user = await User.findByIdAndUpdate(
        req.user.id,
        { $set: userFields },
        { new: true }
      ).select("-password");

      return res.json(user);
    }

    res.status(400).json({ msg: "User not found" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @desc    Upload profile picture
// @route   POST /api/users/me/profilePicture
// @access  Private
exports.uploadProfilePicture = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (user) {
      user.profilePicture = req.file.path;
      await user.save();
      return res.json(user);
    }

    res.status(400).json({ msg: "User not found" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
