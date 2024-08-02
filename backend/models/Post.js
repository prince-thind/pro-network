const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  media: [
    {
      url: {
        type: String,
      },
      type: {
        type: String, // e.g., "image", "video"
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  dislikes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  tags: [
    {
      type: String,
    },
  ],
  shares: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  bookmarks: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  visibility: {
    type: String,
    enum: ["public", "private", "friends"],
    default: "public",
  },
  location: {
    type: String,
  },
  edited: {
    type: Boolean,
    default: false,
  },
  reports: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      reason: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
