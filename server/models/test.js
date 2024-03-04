const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({

    name:{
        type:String
    },
    age:{
        type:String
    }


});

const test = mongoose.model( "test", testSchema );
module.exports = test;
