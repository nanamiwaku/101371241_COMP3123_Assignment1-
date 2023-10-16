const express = require("express");
const userModel = require('../models/userModel'); // Import the user model
const routes = express.Router();

// Add NEW User
routes.post("/signup", async (req, res) => {
    try {
        const newUser = new userModel({
            ...req.body
        });
        await newUser.save();
        res.status(201).send(newUser); // Status 201 for "Created"
    } catch (error) {
        res.status(500).send(error);
    }
});

// Route to get all user
router.post('/login', async (req, res) => {
  const { username, password } = req.body
  try {
      const users = await User.findOne({ username });
      if (password !== users.password) {
          return res.status(400).json({ error: 'Password does not match' });
      }
      res.status(200).json({ status: true, username: users.username, message: "User logged in successfully" });
  } catch (error) {
      res.status(400).json({ error: 'Failed to fetch user.' });
  }
});


module.exports = routes;
