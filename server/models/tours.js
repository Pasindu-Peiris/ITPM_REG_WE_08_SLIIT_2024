// tourModel.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toursSchema = new Schema({
  tourName: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  numberOfDays: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  dayDetails: {
    type: [String],
  },
  images: {
    type: String, 
  }
}, { timestamps: true });

const Tour = mongoose.model("Tour", toursSchema);
module.exports = Tour;
