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
  } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "passwords need to be same" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const newUser = new user({
    username,
    firstname,
    lastname,
    password: hashedPassword,
    confirmPassword:hashedPassword,
    birthdate,
    country,
  });

  newUser
    .save()
    .then(() => {
      res.json("User registered successfully");
    })
    .catch((err) => {
      res.json("cant register the user");
    });
});

module.exports = router;
