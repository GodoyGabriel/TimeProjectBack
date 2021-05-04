  
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const timeRoutes = require('./routes/timeRoutes');
const metricsRoutes = require('./routes/metricsRoutes');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false} ));
app.use(bodyParser.json()); 

// Routes
app.use('/', timeRoutes);
app.use('/', metricsRoutes);

module.exports = app;