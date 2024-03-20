const express = require("express");
const router = express.Router();
const contactus = require("../models/contactus");

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
  let id = req.params.id;
  await contactus
    .findById(id)
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

// Update the route to handle response submission
router.route("/respond").post(async (req, res) => {
  try {
      const { id, response } = req.body;
      await contactus.findByIdAndUpdate(id, { response });
      res.status(200).send({ status: "Response submitted successfully!" });
  } catch (err) {
      console.log(err);
      res.status(500).send({ status: "Error submitting response", error: err.message });
  }
});


module.exports = router;
