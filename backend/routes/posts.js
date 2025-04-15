const express = require("express");
const router = express.Router();
const Post = require("../models/post");

// Fetch all blog posts
// In your backend Post.js route
router.get("/", async (req, res) => {
  const { page = 1, limit = 5 } = req.query; // Get page and limit from query params
  try {
    const posts = await Post.find()
      .sort({ date: -1 }) // Sort by the latest posts
      .skip((page - 1) * limit) // Skip posts for the previous pages
      .limit(Number(limit)); // Limit the number of posts per page
    res.json(posts);
  } catch (err) {
    console.error("Failed to fetch posts:", err);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});


// Fetch single post by ID
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (err) {
    console.error("Error fetching post by ID:", err);
    res.status(500).json({ error: "Error fetching post" });
  }
});

// Update blog post by ID
router.put("/:id", async (req, res) => {
  try {
    const { title, content, date } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content, date },
      { new: true }
    );
    res.json(updatedPost);
  } catch (err) {
    console.error("Error updating post:", err);
    res.status(500).json({ error: "Failed to update post" });
  }
});

// Delete blog post
router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error("Error deleting post:", err);
    res.status(500).json({ error: "Failed to delete post" });
  }
});

// POST - Create a new blog post
router.post("/", async (req, res) => {
  const { title, content, date } = req.body;

  if (!title || !content || !date) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const newPost = new Post({ title, content, date });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ error: "Failed to create post" });
  }
});


module.exports = router;
