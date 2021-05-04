  
const express = require('express');
const app = express();
const timeRoutes = require('./routes/timeRoutes');
const metricsRoutes = require('./routes/metricsRoutes');

// Routes
app.use('/', timeRoutes);
app.use('/', metricsRoutes);

module.exports = app;