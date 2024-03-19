const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destSchema =  new Schema({
    trid:{
        type:String
    },
    name:{
        type:[String]
    },
    lat:{
        type:[String]
    },
    log:{
        type:[String]
    },
    des:{
        type:[String]
    },
    pdf:{
        type:String
    }

})

const dest = mongoose.model("dest", toursSchema);
module.exports = dest;