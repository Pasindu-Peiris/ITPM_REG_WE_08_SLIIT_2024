const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Tour = require('../models/tours');
const fs = require('fs');


// Set up multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = 'uploads/images/';
      fs.mkdir(uploadDir, { recursive: true }, (err) => {
        if (err) {
          return cb(err);
        }
        cb(null, uploadDir);
      });
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  // Initialize multer with the storage configuration
  const upload = multer({ storage: storage });
  
  // POST route to create a new tour with image upload
  router.post('/', upload.single('image'), async (req, res) => {
    try {
      const { tourName, description, numberOfDays, price, dayDetails } = req.body;
      const imagePath = req.file ? req.file.path : null;
  
      const newTour = await Tour.create({
        tourName,
        description,
        numberOfDays,
        price,
        dayDetails,
        images: imagePath // Correct field name to 'images'
      });
  
      res.status(201).json(newTour);
    } catch (error) {
      console.error("Error creating tour:", error);
      res.status(500).json({ message: "Failed to create tour", error: error.message });
    }
  });
  

// Get all tours
router.get('/', async (req, res) => {
    try {
        const tours = await Tour.find();
        res.json(tours);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single tour by ID
router.get('/:id', async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        if (!tour) {
            return res.status(404).json({ message: 'Tour not found' });
        }
        res.json(tour);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a tour
router.put('/:id', async (req, res) => {
    try {
        const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTour);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a tour
router.delete('/:id', async (req, res) => {
    try {
        await Tour.findByIdAndDelete(req.params.id);
        res.json({ message: 'Tour deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;