const express = require('express');
<<<<<<< HEAD
const User = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
=======
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
>>>>>>> 4ddd17cb780d15bdd906d6e6be14791fd33f399d

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

<<<<<<< HEAD
    User.findByUsername(username, (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'An error occurred' });
      }
      if (results.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
      }

      User.createUser(username, email, password, (err) => {
        if (err) {
          return res.status(500).json({ message: 'An error occurred' });
        }
        return res.status(201).json({ message: 'User created successfully' });
      });
    });
=======
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
>>>>>>> 4ddd17cb780d15bdd906d6e6be14791fd33f399d
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});

<<<<<<< HEAD
// Other routes (signin, etc.)
=======
>>>>>>> 4ddd17cb780d15bdd906d6e6be14791fd33f399d
router.post('/signin', async (req, res) => {
  try {
    const { username, password } = req.body;

<<<<<<< HEAD
    User.findByUsername(username, (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'An error occurred' });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      const user = results[0];

      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
      res.status(200).json({ token });
    });
=======
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
    res.status(200).json({ token });
>>>>>>> 4ddd17cb780d15bdd906d6e6be14791fd33f399d
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = router;
