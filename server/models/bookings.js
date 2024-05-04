// bookingsModel.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingsSchema = new Schema({

  userid: {
    type:String,
  },
  tourid: {
    type:String,
  },
  tourName: {
    type: String,
    
  },
  dayDetails: {
    type: Date,
    
  },
  travellers: {
    type: Number,
    
  },
  price: {
    type: Number,
    
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

  cardNumber: {
    type: String,
    
  },

  expDate: {
    type: String,
    
  },

  cvv: {
    type: String,
    
  },


}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingsSchema);
module.exports = Booking;

