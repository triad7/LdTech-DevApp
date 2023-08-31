const express = require('express');
const User = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

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
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});

// Other routes (signin, etc.)
router.post('/signin', async (req, res) => {
  try {
    const { username, password } = req.body;

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
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = router;
