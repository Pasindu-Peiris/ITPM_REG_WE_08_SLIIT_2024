const express = require('express');
const router = express.Router();
const contactus = require('../models/contactus');

// insert new contactus
router.route('/add').post(async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const subject = req.body.subject;
    const message = req.body.message;

    const newContactus = new contactus({name, email, phone, subject, message});

    newContactus.save().then(() => {
        res.json({message: 'Message added successfully!'});
        }).catch((err) => {
            console.log(err);
            res.status(500).json({message:" Error adding message"});
        });
})

// retrieve all contactus
router.route('/read').get(async (req, res) => {
    contactus.find((err, contactus) => {
        if(err) {
            console.log(err);
            res.status(500).json({message:" Error retrieving message"});
        } else {
            res.json(contactus);
        }
    })
    
})

module.exports = router;