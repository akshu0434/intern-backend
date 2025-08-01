# Intern Dashboard - Full Stack Developer Internship Assignment

## Overview

This is a full-stack intern dashboard web application for a fundraising internship portal. It includes a backend API built with Node.js and Express, and a frontend built with HTML, CSS, and JavaScript.

## Features

- Dummy login/signup page (no actual authentication)
- Dashboard page displaying intern's name, referral code, total donation amount, and unlocked rewards
- Leaderboard page showing dummy intern names and donation amounts
- Backend REST API serving static JSON data
- Simple, clean, and beginner-friendly code

## Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the backend server:
   ```
   npm start
   ```

4. The backend server will run on `http://localhost:5000`.

## Frontend Setup

The frontend consists of static HTML/CSS/JS files located in the `frontend` directory.

### Running Locally

You can open the HTML files directly in your browser:

- `frontend/login.html`
- `frontend/dashboard.html`
- `frontend/leaderboard.html`

### Deployment

- Frontend can be deployed on Netlify or GitHub Pages by uploading the `frontend` folder contents.
- Backend can be deployed on Render or Railway by pushing the `backend` folder to a Git repository and connecting it to the platform.

## API Endpoints

- `GET /api/intern` - Returns intern data:
  ```json
  {
    "name": "Akshay Gujar",
    "referralCode": "akshay2025",
    "totalDonation": 12500
  }
  ```

- `GET /api/leaderboard` - Returns dummy leaderboard data:
  ```json
  [
    { "name": "Akshay Gujar", "totalDonation": 12500 },
    { "name": "Priya Sharma", "totalDonation": 11000 },
    { "name": "Rohit Singh", "totalDonation": 9500 },
    { "name": "Sneha Patel", "totalDonation": 9000 },
    { "name": "Ankit Kumar", "totalDonation": 8500 }
  ]
  ```

## Notes

- No actual authentication is implemented; the login/signup page is a dummy.
- The backend serves static dummy data.
- The frontend fetches data from the backend API.
- For local testing, ensure the backend server is running on `localhost:5000`.
- CORS is enabled on the backend to allow frontend requests.

## Optional Bonus

- You can extend the backend to connect to Firebase or MongoDB for static data storage if desired.

---

This project is designed to be simple, modular, and easy to understand for beginner full-stack developers.
