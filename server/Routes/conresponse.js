// routes/response.js
const express = require("express");
const router = express.Router();
const ResponseLog = require("../models/conresponse");

// Define routes for handling response submissions and logging

router.post("/submit", async (req, res) => {
  const responseLog = new ResponseLog({
    contactUsId: req.body.contactUsId,
    response: req.body.response,
  });

  try {
    const newResponseLog = await responseLog.save();
    res.status(201).json(newResponseLog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Other routes for updating responses, etc.
module.exports = router;
