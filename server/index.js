const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
const app = express();
const toursRouter = require('./Routes/tours')



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


//test route
const test = require('./Routes/test');
app.use("/test", test);

//user route
const user = require('./Routes/user');
app.use("/user", user);

//signin route
const login = require('./Routes/login');
app.use("/login",login)

// Tours Route
app.use('/tours', toursRouter);

//contactus Route
const contactus = require('./Routes/contactus');
app.use('/contactus',contactus);

//dest
const Dest = require('./Routes/Dest');
app.use('/dest', Dest);

app.listen(PORT, () => {
    console.log(`\nServer is running on port ${PORT}`);
});

