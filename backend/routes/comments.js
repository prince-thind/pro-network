const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const auth = require('../middleware/auth');
const commentController = require('../controllers/commentController');

// @route   POST /api/comments
// @desc    Add a comment to a post
// @access  Private
router.post(
  '/',
  [auth, [check('text', 'Text is required').not().isEmpty(), check('postId', 'Post ID is required').not().isEmpty()]],
  commentController.addComment
);

// @route   GET /api/comments/:postId
// @desc    Get comments for a post
// @access  Private
router.get('/:postId', auth, commentController.getComments);

module.exports = router;
