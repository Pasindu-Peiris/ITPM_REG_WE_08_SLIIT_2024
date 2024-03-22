const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const responseLogSchema = new Schema({
  contactUsId: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "ContactUs" },
  response: {
     type: String, 
     required: true },
  timestamp: {
     type: Date, 
     default: Date.now },
});

module.exports = mongoose.model("ResponseLog", responseLogSchema);
