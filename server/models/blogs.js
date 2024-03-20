//bolgs.js models

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogsSchema = new Schema({
  Title: {
    type: String,
    required: true,
    unique: true,
  },
  Author: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  FeaturedImage: {
    type: String,
    required: false,
  },
  Content: {
    type: String,
    required: true,
  },
  Excerpt: {
    type: String,
    required: true,
  },
  PublishDate: {
    type: Date,
    required: true,
  }
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogsSchema);
module.exports = Blog;