const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // built-in body parser for JSON

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/lighteningCandles', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Use routes
app.use('/api/contact', contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
