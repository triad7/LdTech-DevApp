

const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  try {
    // Check if the username already exists
    const existingUser = await User.findByUsername(username);
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
      
    }

    // Create a new user
    const userId = await User.createUser(username, email, password);
    res.status(201).json({ message: 'Registration successful', userId });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
    
  }
});

router.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findByUsername(username);

    // Check if the user exists
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Compare the provided password with the stored hash using bcrypt
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    // Generate a JWT token and include user information
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      'your_secret_key_here', // Replace with your secret key
      { expiresIn: '1h' } // Token expiration time (1 hour)
    );

    // Send the token as a response
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Example protected route (/profile)
router.get('/profile', (req, res) => {
  // Check if a valid token is present in the request headers
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify the token using the same secret key used for signing
    const decodedToken = jwt.verify(token, 'your_secret_key_here');

    // Token is valid; you can access user information here
    const { userId, username } = decodedToken;

    res.status(200).json({ userId, username });
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Unauthorized' });
  }
});


module.exports = router;