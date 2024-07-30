const Post = require("../models/Post");

// @desc    Like a post
// @route   PUT /api/posts/like/:id
// @access  Private
exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked by this user
    if (post.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: "Post already liked" });
    }

    post.likes.unshift({ user: req.user.id });
    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @desc    Dislike a post
// @route   PUT /api/posts/dislike/:id
// @access  Private
exports.dislikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been disliked by this user
    if (
      post.dislikes.some((dislike) => dislike.user.toString() === req.user.id)
    ) {
      return res.status(400).json({ msg: "Post already disliked" });
    }

    post.dislikes.unshift({ user: req.user.id });
    await post.save();

    res.json(post.dislikes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @desc    Remove like from a post
// @route   PUT /api/posts/unlike/:id
// @access  Private
exports.unlikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has not yet been liked by this user
    if (!post.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: "Post has not yet been liked" });
    }

    // Remove the like
    post.likes = post.likes.filter(
      ({ user }) => user.toString() !== req.user.id
    );

    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @desc    Remove dislike from a post
// @route   PUT /api/posts/undislike/:id
// @access  Private
exports.undislikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has not yet been disliked by this user
    if (
      !post.dislikes.some((dislike) => dislike.user.toString() === req.user.id)
    ) {
      return res.status(400).json({ msg: "Post has not yet been disliked" });
    }

    // Remove the dislike
    post.dislikes = post.dislikes.filter(
      ({ user }) => user.toString() !== req.user.id
    );

    await post.save();

    res.json(post.dislikes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
