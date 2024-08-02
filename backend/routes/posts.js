const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const postController = require("../controllers/postController");
const postInteractionController = require("../controllers/postInteractionController");
const commentController = require("../controllers/commentController");

// @route   POST /api/posts
// @desc    Create a new post
// @access  Private
router.post(
  "/",
  check("title", "Title is required").not().isEmpty(),
  check("text", "Text is required").not().isEmpty(),
  postController.createPost
);

// @route   GET /api/posts
// @desc    Get all posts
// @access  Private
router.get("/", postController.getPosts);

// @route   GET /api/posts/trending
// @desc    Get trending posts
// @access  Public
router.get("/trending", postController.getTrendingPosts);

// @route   GET /api/posts/search
// @desc    Search for posts
// @access  Public
router.get("/search/", postController.searchPosts);

// @route   GET /api/posts/:id
// @desc    Get post by ID
// @access  Private
router.get("/:id", postController.getPostById);
// @route   PUT /api/posts/like/:id
// @desc    Like a post
// @access  Private
router.put("/like/:id", postInteractionController.likePost);

// @route   PUT /api/posts/dislike/:id
// @desc    Dislike a post
// @access  Private
router.put("/dislike/:id", postInteractionController.dislikePost);

// @route   PUT /api/posts/unlike/:id
// @desc    Remove like from a post
// @access  Private
router.put("/unlike/:id", postInteractionController.unlikePost);

// @route   PUT /api/posts/undislike/:id
// @desc    Remove dislike from a post
// @access  Private
router.put("/undislike/:id", postInteractionController.undislikePost);

// Edit a post
router.put("/:id", postController.editPost);

// Delete a post
router.delete("/:id", postController.deletePost);

// @route   POST /api/posts/:id/comment
// @desc    Add a comment to a post
// @access  Private
router.post("/:id/comment", commentController.addComment);

// @route   GET /api/posts/:id/comments
// @desc    Get comments for a post
// @access  Private
router.get("/:id/comments", commentController.getComments);

// @route   DELETE /api/posts/:id/comment/:commentId
// @desc    Delete a comment
// @access  Private
router.delete("/:id/comment/:commentId", commentController.deleteComment);

module.exports = router;
