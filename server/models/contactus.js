const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactusSchema = new Schema({
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
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    response: {
        type: String
    },
    responded: {
         type: Boolean, 
         default: false 
    }
});

const Contactus = mongoose.model("Contactus", contactusSchema);
module.exports = Contactus;