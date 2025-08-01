const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend')));

// API endpoint returning intern data
app.get('/api/intern', (req, res) => {
  res.json({
    name: "Akshay Gujar",
    referralCode: "akshay2025",
    totalDonation: 12500
  });
});

// Bonus: API endpoint returning dummy leaderboard data
app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: "Akshay Gujar", totalDonation: 12500 },
    { name: "Priya Sharma", totalDonation: 11000 },
    { name: "Rohit Singh", totalDonation: 9500 },
    { name: "Sneha Patel", totalDonation: 9000 },
    { name: "Ankit Kumar", totalDonation: 8500 }
  ]);
});

// Serve login.html on root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
