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

// @desc    Search for users
// @route   GET /api/users/search
// @access  Public
exports.searchUsers = async (req, res) => {
  try {
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};

    const users = await User.find({ ...keyword }).select("-password");
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @desc    Get trending users
// @route   GET /api/users/trending
// @access  Public
exports.getTrendingUsers = async (req, res) => {
  try {
    const users = await User.find()
      .sort({ followers: -1 })
      .limit(10)
      .select("-password");
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
