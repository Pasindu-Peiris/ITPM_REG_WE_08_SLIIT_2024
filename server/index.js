const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
const app = express();

// //upload images
// app.use(express.json());
// app.use(express.static('public'));
// app.use('/Upload/images', express.static('Upload/images'));

const PORT = process.env.PORT || 8090;

app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods:["POST","GET","PUT","DELETE"],
    credentials: true
}));

const  URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB database connected successfully!");
});






app.listen(PORT, () => {
    console.log(`\nServer is running on port ${PORT}`);
});