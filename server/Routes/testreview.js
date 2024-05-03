const express = require("express");
const router = express.Router();
const TestReview = require("../models/testreview");

// insert new
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

// all read
router.route("/read").get(async (req, res) => {
  TestReview
  .find()
  .then((review)=> {
    res.json(review);
  })
  .catch((err) => {
    res
    .status(500)
    .send({ status: "Error with get message", error: err.message });
  }); 
 
});

// delete
router.route("/delete/:id").delete(async (req, res) => {
  let id = req.params.id;
  await TestReview
    .findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: " Review deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with deleting Review", error: err.message });
    });
});


//update
router.route("/update/:id").put(async (req, res) => {
  let reviewId = req.params.id;
  const {fullName,
    email,
    review,
    date,
    destination,
     } = req.body;

  try {
    const updatedReview = await TestReview.findByIdAndUpdate(
      reviewId,
      { fullName,
        email,
        review,
        date,
        destination,
         },
      { new: true } // Set to true to return the updated document
    );

    if (!updatedReview) {
      return res.status(404).send({ status: "Review not found" });
    }

    res.status(200).send({ status: "updated", review : updatedReview });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error with updating data", error: err.message });
  }
});

module.exports = router;
