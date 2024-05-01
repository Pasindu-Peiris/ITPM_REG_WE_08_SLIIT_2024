const express = require("express");
const router = express.Router();
const ContactUs = require("../models/contactus"); 

// insert new contactus
router.route("/add").post((req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const newContactUs = new ContactUs({ name, email, phone, subject, message });

  newContactUs
    .save()
    .then(() => {
      res.json({ message: "Message added successfully!" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error adding message" });
    });
});

// retrieve all contactus
router.route("/read").get(async (req, res) => {
  try {
    const contactList = await ContactUs.find(); // Rename variable to contactList
    res.json(contactList);
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "Error with get message", error: err.message });
  }
});

// GET response details by ID
router.get('/:id', async (req, res) => {
  try {
    const response = await ContactUs.findById(req.params.id);
    if (!response) {
      return res.status(404).json({ message: 'Response not found' });
    }
    res.json(response);
  } catch (error) {
    console.error("Error fetching response:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// search
router.route("/search").get(async (req, res) => {
  const { name } = req.query;
  const query = {};

  if (name) {
    query.name = { $regex: new RegExp(name, "i") };
  }

  try {
    const contactList = await ContactUs.find(query); // Rename variable to contactList
    res.json(contactList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// delete
router.route("/delete/:id").delete(async (req, res) => {
  try {
    await ContactUs.findByIdAndDelete(req.params.id); // Use findByIdAndDelete directly
    res.status(200).json({ status: "Message deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "Error with delete message", error: err.message });
  }
});

// Route to add response to contact form submission
router.post("/addresponse", async (req, res) => {
  try {
    const { id, response } = req.body;
    // Find the contact form submission by ID and update its response field
    const contact = await ContactUs.findByIdAndUpdate(
      id,
      { response: response, responded: true },
      { new: true }
    );
    if (!contact) {
      return res.status(404).json({ message: "Contact form submission not found" });
    }
    res.status(200).json({ message: "Response added successfully", contact });
  } catch (error) {
    console.error("Error adding response:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
