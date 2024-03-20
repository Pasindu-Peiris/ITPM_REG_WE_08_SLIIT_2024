// bookingsModel.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingsSchema = new Schema({
  tourName: {
    type: String,
    required: true,
  },
  dayDetails: {
    type: String,
    required: true,
  },
  travellers: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  nic: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingsSchema);
module.exports = Booking;

