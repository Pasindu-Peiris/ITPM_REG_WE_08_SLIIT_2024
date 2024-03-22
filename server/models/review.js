const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({

    fullName :{
        type: String,
        required : true
    },
    email :{
        type: String,
        required : true
    },
    review :{
        type: String,
        required : true
    },
    rate :{
        type: Number,
        required : true
    },
    date:{
        type: String,
        required : true
    },
    destination:{
        type: String,
        required : true
    },
    images: [{
        type: String, // Assuming you store image URLs
        required: true
    }]

});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
