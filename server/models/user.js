const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
    },
    password: {
        type: String,
        required:true,
    },
    confirmPassword: {
        type: String,
        required:true,
    },
    birthdate: {
        type: String,
        required:true,
    },
    country: {
        type: String,
        required:true,
    }

});


const user = mongoose.model("user", userSchema);
module.exports = user;
