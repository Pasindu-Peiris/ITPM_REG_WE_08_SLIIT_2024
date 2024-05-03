import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaReply, FaSave, FaTimes } from "react-icons/fa";

const CommentSection = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replyCommentId, setReplyCommentId] = useState(null);
  const [replyContent, setReplyContent] = useState("");
  const [editMode, setEditMode] = useState(null);
  const [editContent, setEditContent] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/comments/blog/${blogId}`);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [blogId]);

  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return;
    try {
      const response = await axios.post("http://localhost:8090/comments", {
        blogId,
        author: "Anonymous",
        content: newComment,
        parentComment: null,
      });
      setComments((prevComments) => [...prevComments, response.data]);
      setNewComment("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const handleReplySubmit = async () => {
    if (!replyContent.trim()) return;
    try {
      const response = await axios.post("http://localhost:8090/comments", {
        blogId,
        author: "Anonymous",
        content: replyContent,
        parentComment: replyCommentId,
      });
      setComments((prevComments) => [...prevComments, response.data]);
      setReplyContent("");
      setReplyCommentId(null);
    } catch (error) {
      console.error("Error submitting reply:", error);
    }
  };

  const handleEditComment = async () => {
    if (!editContent.trim()) return;
    try {
      const response = await axios.put(`http://localhost:8090/comments/${editMode}`, {
        content: editContent,
      });
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment._id === response.data._id ? response.data : comment
        )
      );
      setEditMode(null);
      setEditContent("");
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:8090/comments/${commentId}`);
      setComments((prevComments) => prevComments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const setEditState = (comment) => {
    setEditMode(comment._id);
    setEditContent(comment.content); // Populate with the current content
  };

  const renderComments = (comments, parentId = null, level = 0) => {
    return comments
      .filter((comment) => comment.parentComment === parentId)
      .map((comment) => (
        <div
          key={comment._id}
          style={{
            borderBottom: "1px solid #ddd",
            padding: "10px",
            marginLeft: `${20 * level}px`,
          }}
        >
          {editMode === comment._id ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="text"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  flex: 1,
                }}
              />
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#666",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
                onClick={handleEditComment}
              >
                <FaSave />
              </button>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#666",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setEditMode(null);
                  setEditContent("");
                }}
              >
                <FaTimes />
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>
                <strong>{comment.author}</strong>: {comment.content}
              </span>
              <div>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: "#666",
                    cursor: "pointer",
                    marginLeft: "10px",
                  }}
                  onClick={() => setReplyCommentId(comment._id)}
                >
                  <FaReply />
                </button>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: "#666",
                    cursor: "pointer",
                    marginLeft: "10px",
                  }}
                  onClick={() => setEditState(comment)}
                >
                  <FaEdit />
                </button>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: "#666",
                    cursor: "pointer",
                    marginLeft: "10px",
                  }}
                  onClick={() => handleDeleteComment(comment._id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          )}

          {replyCommentId === comment._id && (
            <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
              <input
                type="text"
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Add a reply..."
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
              />
              <button
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  background: "#f0f0f0",
                  borderRadius: "5px",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
                onClick={handleReplySubmit}
              >
                Submit
              </button>
            </div>
          )}

          {renderComments(comments, comment._id, level + 1)}
        </div>
      ));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h3 style={{ marginBottom: "20px", fontWeight: "bold" }}>Comments</h3>
      {comments.length > 0 ? renderComments(comments) : <p>No comments yet.</p>}
      <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
        <button
          style={{
            padding: "10px",
            border: "1px solid #ddd",
            background: "#f0f0f0",
          
          borderRadius: "5px", marginLeft: "10px", cursor: "pointer"}}
          onClick={handleCommentSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
