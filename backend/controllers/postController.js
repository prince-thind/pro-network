const Post = require("../models/Post");
const Comment = require("../models/Comment");
const { validationResult } = require("express-validator");

// @desc    Create a new post
// @route   POST /api/posts
// @access  Private
// POST /api/posts
// @access  Private
exports.createPost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { text, title, media, tags, visibility, location } = req.body;

  try {
    const newPost = new Post({
      user: req.user.id,
      text,
      title,
      media: media || [], // Default to an empty array if not provided
      tags: tags || [], // Default to an empty array if not provided
      visibility: visibility || "public", // Default to "public" if not provided
      location: location || "", // Default to an empty string if not provided
    });

    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @desc    Get all posts
// @route   GET /api/posts
// @access  Private
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user.id }).sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @desc    Get post by ID
// @route   GET /api/posts/:id
// @access  Private
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server error");
  }
};

// @desc    Search for posts
// @route   GET /api/posts/search
// @access  Public
exports.searchPosts = async (req, res) => {
  try {
    const keyword = req.query.keyword
      ? {
          text: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const posts = await Post.find({ ...keyword });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @desc    Get trending posts
// @route   GET /api/posts/trending
// @access  Public
exports.getTrendingPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ likes: -1 }).limit(10);
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// PUT /api/posts/:id
// @access Private
exports.editPost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { text, title, media, tags, visibility, location } = req.body;

  try {
    // Find the post by ID
    let post = await Post.findById(req.params.id);

    // Check if post exists
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    // Check if the user is the owner of the post
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    // Update the post
    post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          text,
          title,
          media: media || post.media,
          tags: tags || post.tags,
          visibility: visibility || post.visibility,
          location: location || post.location,
          edited: true, // Mark the post as edited
        },
      },
      { new: true } // Return the updated post
    );

    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
// DELETE /api/posts/:id
// @access Private
exports.deletePost = async (req, res) => {
  try {
    // Find the post by ID
    const post = await Post.findById(req.params.id);

    // Check if post exists
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    // Check if the user is the owner of the post
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    // Delete the post
    await post.deleteOne();

    // Delete all comments associated with this post
    await Comment.deleteMany({ post: req.params.id });

    res.json({ msg: "Post and associated comments removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
