const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());

// API Routes
app.get('/', (req, res) => res.send('API is working')); //for testing the setup
app.use('/api/admin', require('./routes/admin'));
app.use('/api/client', require('./routes/client'));

// Serve frontends
app.use('/admin', express.static(path.join(__dirname, 'public/admin')));
app.use('/', express.static(path.join(__dirname, 'public/client')));

module.exports = app;
