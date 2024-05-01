const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  blogId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Blog",
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  parentComment: {
    type: Schema.Types.ObjectId,
    ref: "Comment",
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model("Comment", commentsSchema);
module.exports = Comment;
