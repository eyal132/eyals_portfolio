const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const app = express();
const secretKey = 'your_secret_key';

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Middleware (if needed)
app.use(cors());

// Serve static files from React app
app.use(express.static(path.join(__dirname, '/../client/build')));

// Serve React app for root and other routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Serve React app for all routes, let React Router handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


// HTTPS server options
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

// Start HTTPS server
const port = process.env.PORT || 3001;
https.createServer(options, app).listen(port, () => {
  console.log(`Listening on port ${port}`);
});