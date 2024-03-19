const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destSchema =  new Schema({
    trid:{
        type:String
    },
    points1:{
        type:[String],
    },
    points2:{
        type:[String],
    },
    points3:{
        type:[String],
    },
    points4:{
        type:[String],
    },
    points5:{
        type:[String],
    },
    points6:{
        type:[String],
    } ,
    points7:{
        type:[String],
    },
    points8:{
        type:[String],
    },
    pdf:{
        type:String,
    }

},{ timestamps: true })

const dest = mongoose.model("dest", destSchema);
module.exports = dest;