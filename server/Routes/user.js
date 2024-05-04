const router = require("express").Router();
const user = require("../models/user");
const Booking = require("../models/bookings");
const bcrypt = require("bcrypt");

router.route("/reg").post(async (req, res) => {
  const {
    username,
    firstname,
    lastname,
    password,
    confirmPassword,
    birthdate,
    country,
    phone,
    email,
    payments,
    trip
  } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "passwords need to be same" });
  }

  try {
    
    const existingUser = await user.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username is already taken" });
    }

   
    const existingEmail = await user.findOne({ email });
    if (existingEmail) {
      return res
        .status(400)
        .json({ error: "Email is already associated with an account" });
    }

    
    const hashedPassword = bcrypt.hashSync(password, 10);


    const newUser = new user({
      username,
      firstname,
      lastname,
      password: hashedPassword,
      confirmPassword: hashedPassword, 
      birthdate,
      country,
      phone,
      email,
      payments,
      trip
    });

    await newUser.save();

    
    res.json("User registered successfully");
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json("Cannot register the user");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const foundUser = await user.findById(userId);

    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(foundUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
      const users = await user.find();
      res.json(users);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// Get all users with their ongoing tour information
router.get('/withOngoingTours', async (req, res) => {
  try {
    const users = await user.find();
    // Fetch ongoing tour information for each user
    const usersWithOngoingTours = await Promise.all(users.map(async (user) => {
      // Fetch ongoing tour information for the user based on their username
      const bookings = await Booking.find({ name: user.username }); // Adjusted query to match the username field
      // Assuming a user can have multiple ongoing bookings, you can collect all tour names
      const ongoingTours = bookings.map(booking => booking.tourName);
      return { ...user._doc, ongoing: ongoingTours }; // Merge ongoing tour information with user data
    }));
    res.json(usersWithOngoingTours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single user by ID
router.get('/:id', async (req, res) => {
    try {
        const users = await user.findById(req.params.id);
        if (!users) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update user information
router.put("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUserData = req.body; // Assuming req.body contains the updated user data

    // Find the user by ID and update their information
    const updatedUser = await user.findByIdAndUpdate(userId, updatedUserData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a user by ID
router.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    // Find the user by ID and delete them
    const deletedUser = await user.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
