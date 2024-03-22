const express = require("express");
const router = express.Router();
const TestReview = require("../models/testreview");

router.route("/add").post((req, res) => {
   const { fullName, email, review, date, destination } = req.body;

   const newTestReview = new TestReview({ fullName, email, review, date, destination });
   newTestReview
    .save()
    .then(() => {
      res.json({ message: "Test Review Added successfully!" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error adding Test Review" });
    });
});

router.route("/read").get(async (req, res) => {
  TestReview.find()
    .then((reviews) => {
      res.json(reviews);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with get message", error: err.message });
    });
});

module.exports = router;
