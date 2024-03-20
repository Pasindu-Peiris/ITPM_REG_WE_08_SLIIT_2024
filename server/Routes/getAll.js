const express = require("express");
const router = express.Router();
const Image = require("../models/Image");

router.get("/all", async (req, res) => {
  try {
    const images = await Image.find({});
    res.json(images);
  } catch (error) {
    console.error("Error retrieving all images:", error);
    res.status(500).json({ error: "Failed to retrieve documents" });
  }
});

module.exports = router;
