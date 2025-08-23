const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST route to save contact
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Server-side validation (optional)
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Required fields missing' });
    }

    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(200).json({ success: true, message: 'Contact saved' });
  } catch (error) {
    console.error('❌ Error saving contact:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
