const express = require('express');
const cors = require('cors');
require('dotenv').config();
const gptRoutes = require('./routes/gptRoutes');
const ideogramRoutes = require('./routes/ideogramRoutes');
const connectDB = require('./config/mongoConfig');
const slideRoutes = require('./routes/slideRoutes'); // Assuming you've created this file

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

// Routes
app.use('/api', gptRoutes);
app.use('/api', ideogramRoutes);  // Ensure this is added
app.use('/api', slideRoutes);


module.exports = app;
