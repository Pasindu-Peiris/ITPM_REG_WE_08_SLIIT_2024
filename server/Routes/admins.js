// adminRoutes.js

const express = require("express");
const router = express.Router();
const admins = require("../models/admins");

router.post("/reg", async (req, res) => {
  // Extract username, email, and phone number from request body
  const { username, email, phone } = req.body;

  try {
    // Check if username is already taken
    const existingUser = await admins.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username is already taken" });
    }

    // Check if email is already associated with an account
    const existingEmail = await admins.findOne({ email });
    if (existingEmail) {
      return res
        .status(400)
        .json({ error: "Email is already associated with an account" });
    }

    // Create a new admin instance using the admins model
    const newAdmin = new admins({ username, email, phone });

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

module.exports = router;
