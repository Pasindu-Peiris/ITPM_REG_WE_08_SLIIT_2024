const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true

    },
    password:{
        type: String,
        required: true
    }
})

const admins = mongoose.model("admins",adminSchema);
module.exports = admins;