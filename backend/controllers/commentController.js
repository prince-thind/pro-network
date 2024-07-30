const Comment = require("../models/Comment");
const Notification = require("../models/Notification");
const Post = require("../models/Post");
const User = require("../models/User");
const { validationResult } = require("express-validator");

// @desc    Add a comment to a post
// @route   POST /api/comments
// @access  Private
exports.addComment = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { text, postId } = req.body;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    const newComment = new Comment({
      text,
      post: postId,
      user: req.user.id,
    });

    const comment = await newComment.save();

    // Fetch the user's name
    const user = await User.findById(req.user.id);
    const userName = user.name;

    // Create a notification
    const notification = new Notification({
      user: post.user, // The user who created the post
      message: `User ${userName} commented on your post: "${text}"`,
    });

    await notification.save();

    res.json(comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @desc    Get comments for a post
// @route   GET /api/comments/:postId
// @access  Private
exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).sort({
      date: -1,
    });
    res.json(comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
