
const express = require('express');
const Contact = require('../models/Contact'); // Assuming Contact model is in the same file as User model
const router = express.Router();

// Route for handling contact form submissions
router.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Insert contact form data into the database
    const contactId = await Contact.insertContactData(name, email, message);
    res.status(201).json({ message: 'Contact data submitted successfully', contactId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Contact data submission failed' });
  }
});

module.exports = router;
