const express = require("express");
const router = express.Router();
const Image = require("../models/Image");

router.get("/:id", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }
     const responseData = {
       _id: image._id,
       imagePaths: image.imagePaths,
       musicPath: image.musicPath,
     };
    res.json(responseData);
  } catch (error) {
    console.error("Error retrieving image by ID:", error);
    res.status(500).json({ error: "Failed to retrieve image" });
  }
});

module.exports = router;
