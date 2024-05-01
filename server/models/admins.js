const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    role: {
        type: String
    }

});

// Define and export the 'admins' model
const admins = mongoose.model("admins", adminSchema);
module.exports =admins;