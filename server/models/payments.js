const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentsSchema = new Schema ({
    username: {
        type: String,
        required: true
    },
    payment: {
        type: String,
        required: true
    }
})

const payments = mongoose.model("payments", paymentsSchema);
module.exports = payments;