const express = require("express");
const router = express.Router();
const Comment = require("../models/comments");

// Get comments for a specific blog
router.get("/blog/:blogId", async (req, res) => {
  try {
    const comments = await Comment.find({ blogId: req.params.blogId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new comment
router.post("/", async (req, res) => {
  try {
    const { blogId, author, content, parentComment } = req.body;

    const newComment = await Comment.create({
      blogId,
      author,
      content,
      parentComment,
    });

    res.status(201).json(newComment);
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({ message: "Failed to create comment", error: error.message });
  }
});

// Update an existing comment
router.put("/:id", async (req, res) => {
  try {
    const { content } = req.body;
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      { content },
      { new: true }
    );
    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.json(updatedComment);
  } catch (error) {
    console.error("Error updating comment:", error);
    res.status(500).json({ message: "Failed to update comment", error: error.message });
  }
});

// Delete a comment
router.delete("/:id", async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.json({ message: "Comment deleted" });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ message: "Failed to delete comment", error: error.message });
  }
});

module.exports = router;
