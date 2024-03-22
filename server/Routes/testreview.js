const express = require("express");
const router = express.Router();
const TestReview = require("../models/testreview");


router.route("/add").post((req, res) => {
   const fullName = req.body.fullName;
   const email = req.body.email;
   const review = req.body.review;
   const date = req.body.date;
   const destination = req.body.destination;

  const newTestreview = new TestReview({ fullName, email, review, date, destination});
  newTestreview
    .save()
    .then(() => {
      res.json({ message: "Test Review Added successfully!" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error adding Test Review" });
    });
    
});
    
module.exports = router;
  