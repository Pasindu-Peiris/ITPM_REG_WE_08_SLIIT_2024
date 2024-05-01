const express = require("express");
const router = express.Router();
const sendEmails = require("../models/emailservice");

router.post("/send-mail", async (req, res) => {
  const { name, email } = req.body;

  // Send the email and handle the response
  sendEmails(name, email, (error, response) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to send email.' });
    } else {
      return res.status(200).json({ message: 'Email sent successfully.' });
    }
  });
});

module.exports = router;
