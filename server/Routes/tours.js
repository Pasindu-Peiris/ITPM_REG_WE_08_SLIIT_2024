const express = require('express');
const router = express.Router();
const Tour = require('../models/tours');

// Create a new tour
router.post('/', async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);
        res.status(201).json(newTour);
    } catch (error) {
        console.error("Error creating tour:", error); // Log detailed error
        res.status(500).json({ message: "Failed to create tour", error: error.message }); // Send detailed error message to client
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