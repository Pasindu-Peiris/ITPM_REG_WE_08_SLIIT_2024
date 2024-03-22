// blogs.js routes

const express = require('express');
const router = express.Router();
const Blog = require('../models/blogs');

// Create a new blog
router.post('/', async (req, res) => {
    try {
        const { Title, Author, Category, FeaturedImage, Content, Excerpt, PublishDate } = req.body;

        // Check if a blog with the same title already exists
        const existingBlog = await Blog.findOne({ Title });
        if (existingBlog) {
            return res.status(400).json({ message: "Blog with this title already exists" });
        }

        // Create the new blog
        const newBlog = await Blog.create({
            Title,
            Author,
            Category,
            FeaturedImage,
            Content,
            Excerpt,
            PublishDate
        });

        res.status(201).json(newBlog);
    } catch (error) {
        console.error("Error creating blog:", error);
        res.status(500).json({ message: "Failed to create blog", error: error.message });
    }
});

// Get all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single blog by ID
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a blog
router.put('/:id', async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a blog
router.delete('/:id', async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: 'Blog deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
