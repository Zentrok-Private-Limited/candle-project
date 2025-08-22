const express = require('express');
const router = express.Router();
const User = require('../models/user');

// POST route to save contact form data
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newUser = new User({ name, email, message });
    await newUser.save();

    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router; // 🔴 DON'T forget this!
