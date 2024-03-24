const express = require("express");
const router = express.Router();
const contactus = require("../models/contactus");
const ResponseLog = require("../models/conresponse");

// insert new contactus
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const subject = req.body.subject;
  const message = req.body.message;

  const newContactus = new contactus({ name, email, phone, subject, message });

  newContactus
    .save()
    .then(() => {
      res.json({ message: "Message added successfully!" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: " Error adding message" });
    });
});

// retrieve all contactus
router.route("/read").get(async (req, res) => {
  contactus
    .find()
    .then((contactus) => {
      res.json(contactus);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with get message", error: err.message });
    });
});

//read one

router.route("/get/:id").get(async (req, res) => {
  let contactid = req.params.id;
  await contactus
    .findById(contactid)
    .then(() => {
      res.status(200).send({ status: "Message fetched", contactus });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with get message", error: err.message });
    });
});

//search

router.route("/search").get(async (req, res) => {
  const { name } = req.query;
  const query = {};

  if (name) {
    // If a name query parameter is provided, add it to the query
    query.name = { $regex: new RegExp(name, "i") }; // Case-insensitive search
  }
  try {
    const contactus = await contactus.find(query);
    res.json(contactus);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

//delete
router.route("/delete/:id").delete(async (req, res) => {
  let id = req.params.id;
  await contactus
    .findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: "Message deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with delete message", error: err.message });
    });
});

// Add new response and insert contact form submission
router.post("/addresponse", async (req, res) => {
  try {
    // Extract data from request body
    const { name, email, phone, subject, message, response } = req.body;

    // Create new contact form entry
    const newContactus = new Contactus({ name, email, phone, subject, message });
    await newContactus.save();

    // Create new response log entry
    const newResponseLog = new ResponseLog({ contactUsId: newContactus._id, response });
    await newResponseLog.save();

    res.status(200).json({ message: "Response added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding response", error: error.message });
  }
});


// Define routes for fetching contact form submissions and updating responses

{/*router.get('/submissions', async (req, res) => {
  try {
    const contactUsEntries = await ContactUs.find();
    res.json(contactUsEntries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});*/}

module.exports = router;
