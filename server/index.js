const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
const app = express();
const toursRouter = require('./Routes/tours')
const blogsRouter = require('./Routes/blogs')
const commentsRouter = require('./Routes/comments');

//upload images
app.use(express.json());
app.use(express.static('public'));
app.use('/Upload/images', express.static('Upload/images'));

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

// Blogs Route
app.use('/blogs', blogsRouter);

const admins = require('./Routes/admins')
app.use("/admins", admins)


//Booking Route 
const Booking = require('./Routes/Bookings');
app.use('/bookings', Booking);

//contactus Route
const contactus = require('./Routes/contactus');
app.use('/contactus',contactus);

//dest
const Dest = require('./Routes/Dest');
app.use('/dest', Dest);

//Add virtual tour
const imageRoutes = require("./Routes/imageRoutes");
app.use("/api/images", imageRoutes);

//get all images
const getAll = require("./Routes/getAll");
app.use("/api/images", getAll);

//get images with the id
const getImage = require("./Routes/getImage");
app.use("/api/image", getImage);

//review
const TestReview = require('./Routes/testreview');
app.use('/testreview', TestReview);

//send email
const emailRoutes = require('./Routes/emailservice');
app.use('/email', emailRoutes);

// Add the comments route
app.use('/comments', commentsRouter);


app.listen(PORT, () => {
    console.log(`\nServer is running on port ${PORT}`);
});

app.use("/uploads", express.static("uploads"));
