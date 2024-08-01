const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../middleware/auth");
const postController = require("../controllers/postController");
const postInteractionController = require("../controllers/postInteractionController");

// @route   POST /api/posts
// @desc    Create a new post
// @access  Private
router.post(
  "/",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  postController.createPost
);

// @route   GET /api/posts
// @desc    Get all posts
// @access  Private
router.get("/", auth, postController.getPosts);

// @route   GET /api/posts/trending
// @desc    Get trending posts
// @access  Public
router.get("/trending", postController.getTrendingPosts);

// @route   GET /api/posts/:id
// @desc    Get post by ID
// @access  Private
router.get("/:id", auth, postController.getPostById);
// @route   PUT /api/posts/like/:id
// @desc    Like a post
// @access  Private
router.put("/like/:id", auth, postInteractionController.likePost);

// @route   PUT /api/posts/dislike/:id
// @desc    Dislike a post
// @access  Private
router.put("/dislike/:id", auth, postInteractionController.dislikePost);

// @route   PUT /api/posts/unlike/:id
// @desc    Remove like from a post
// @access  Private
router.put("/unlike/:id", auth, postInteractionController.unlikePost);

// @route   PUT /api/posts/undislike/:id
// @desc    Remove dislike from a post
// @access  Private
router.put("/undislike/:id", auth, postInteractionController.undislikePost);

// @route   GET /api/posts/search
// @desc    Search for posts
// @access  Public
router.get("/search", postController.searchPosts);

module.exports = router;
