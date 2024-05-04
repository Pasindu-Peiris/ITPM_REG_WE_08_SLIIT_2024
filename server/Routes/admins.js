// adminRoutes.js

const express = require("express");
const router = express.Router();
const admins = require("../models/admins");
const jwt = require('jsonwebtoken');

router.post("/reg", async (req, res) => {
  // Extract username, password, and role from request body
  const { username, password, role } = req.body;

  try {
    // Check if username is already taken
    const existingUser = await admins.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username is already taken" });
    }

    // Create a new admin instance using the admins model
    const newAdmin = new admins({ username, password, role });

    // Save the new admin to the database
    await newAdmin.save();

    // Respond with success message
    res.json("Admin added successfully");
  } catch (error) {
    // Log the error
    console.error("Error adding admin:", error);
    // Respond with an error message
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  // Extract username and password from request body
  const { username, password } = req.body;

  try {
    // Find admin by username
    const admin = await admins.findOne({ username });
    if (!admin) {
      return res.status(400).json({ error: "No records found" });
    }

    // Check if passwords match
    if (admin.password === password) {
      // Passwords match, generate JWT token
      const token = jwt.sign({ username: admin.username, role: admin.role }, "jwt-secret-key", { expiresIn: '1d' });

      // Set token in cookie
      res.cookie('token', token, { httpOnly: true });

      // Respond with success message
      return res.json({ message: "Success" });
    } else {
      // Passwords don't match
      return res.status(400).json({ error: "Password is incorrect" });
    }
  } catch (error) {
    // Handle other errors
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
