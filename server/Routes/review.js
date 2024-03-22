const express = require('express');
const Review = require("../models/review");
const router = express.Router();

// insert new review

router.route("/add").post((req,res)=>{

    const fullName =req.body.fullName;
    const email =req.body.email;
    const review = req.body.review;
    const rate = req.body.rate;
    const date = req.body.date;
    const destination = req.body.destination;
    const images = req.body.images;

    const NewReview = new Review({

        fullName,
        email,
        review,
        rate,
        date,
        destination,
        images
    })
    
    NewReview.save().then(() => {
        res.json({ message: "Review Added successfully!" });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Error adding Review" }); 
    });
})

//All data Read 
router.route("/read").get(async(req,res)=>{ 
   
    //call review model
    Review.find().then((reviews)=>{
        res.json(reviews)
    }).catch((err)=>{
        console.log(err);
        
    })

})

// Update
router.route("/update/:id").put(async (req, res) => {
    const reviewId = req.params.id;
    const {fullName,
        email,
        review,
        rate,
        date,
        destination,
        images } = req.body;

    try {
        const updatedReview = await Review.findByIdAndUpdate(
            reviewId,
            { fullName,
                email,
                review,
                rate,
                date,
                destination,
                images },
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

//delete

router.route("/delete/:id").delete(async(req,res) => {
    let materialId = req.params.id;

    await Review.findOneAndDelete(reviewIdId).then (() => {
        res.status(200).send({status: " Deleted" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : " Error with delete data",error:err.message});
    })

})

//read one 

router.route("/get/:id").get (async(req,res) =>{
    let reviewId =req.params.id;
    await Review.findById(reviewId)
    .then(()=>{
        res.status(200).send({status: " Review Fetched" , review});
    }).catch((err) => {
        coconsole.log(err);
        res.status(500).send({status : "Error with get review",error:err.message});
    })

})

//Search
// Update the "read" route to accept a query parameter for searching by name
router.route("/search").get(async (req, res) => {
    const { name } = req.query;
  
    const query = {};
  
    if (name) {
      // If a name query parameter is provided, add it to the query
      query.name = { $regex: new RegExp(name, "i") }; // Case-insensitive search
    }
  
    try {
      const review = await Material.find(query);
      res.json(review);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  });

  module.exports = router;
  