const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // ✅ dotenv import

const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB URI (Atlas/Render ke env me se lega, warna local default)
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/lighteningCandles';

// ✅ MongoDB connection (without deprecated options)
mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/contact', contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
