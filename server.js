const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname)));

app.post('/calculate-bmi', (req, res) => {
  const { height, weight } = req.body;
  if (height && weight) {
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    res.json({ bmi });
  } else {
    res.status(400).json({ error: 'Invalid inputs' });
  }
});

// Handle all other routes (fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,  'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
