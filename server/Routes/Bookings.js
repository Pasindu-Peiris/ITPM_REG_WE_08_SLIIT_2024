const express = require('express');
const router = express.Router();
const Booking = require('../models/bookings');

// Create a new booking
router.post('/', async (req, res) => {
    try {
        console.log("Received booking data:", req.body);
        const { tourName, dayDetails, travellers, price, name, email, phone, nic, country, address } = req.body;

        const newBooking = await Booking.create({
            tourName,
            dayDetails, // Ensure dayDetails is an array
            travellers,
            price,
            name,
            email,
            phone,
            nic,
            country,
            address
        });

        console.log("New booking created:", newBooking);

        res.status(201).json(newBooking);
    } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({ message: "Failed to create booking", error: error.message });
    }
});

// Get all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single booking by ID
router.get('/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a booking
router.put('/:id', async (req, res) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a booking
router.delete('/:id', async (req, res) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.json({ message: 'Booking deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
