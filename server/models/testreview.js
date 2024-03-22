const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TestReviewSchema = new Schema({

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
     date:{
        type: String,
        required : true
    },
    destination:{
        type: String,
        required : true
    }
    

});

const TestReview = mongoose.model("TestReview", TestReviewSchema);

module.exports = TestReview;