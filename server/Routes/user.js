const router = require("express").Router();
const user = require("../models/user");
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
    email
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
      email,
    });

    await newUser.save();

    // Respond with success message
    res.json("User registered successfully");
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json("Cannot register the user");
  }
});
module.exports = router;
