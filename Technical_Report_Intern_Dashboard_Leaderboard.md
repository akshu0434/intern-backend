# Technical Report: Intern Dashboard & Leaderboard

## Objective
The objective of this project was to develop a full-stack web application for an intern fundraising portal. The application includes a demo login page, an intern dashboard displaying key information, and a leaderboard showcasing top interns based on donation amounts. The focus was on creating a clean, modular, and beginner-friendly solution using static frontend pages and a Node.js backend serving dummy data via REST APIs.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Other:** CORS middleware for API access, static file serving via Express

## Pages Developed
1. **login.html**  
   A simple login/signup interface with username and password fields. This page is purely demonstrative with no real authentication logic.

2. **dashboard.html**  
   Displays the intern's name, referral code, total donation amount (fetched from backend API), and a static section listing unlocked rewards such as certificates and badges.

3. **leaderboard.html**  
   Shows a table listing the top 5 interns ranked by their total donation amounts. Data is fetched from the backend API.

## Features
- REST API endpoints `/api/intern` and `/api/leaderboard` serving static JSON data.
- Frontend pages fetch data asynchronously from the backend and update the UI dynamically.
- Backend serves static frontend files, enabling the entire app to be accessed via a single URL.
- Simple, clean UI design focused on clarity and ease of use.
- CORS enabled to allow frontend-backend communication during local development.

## Challenges Faced
- Managing port conflicts during backend server startup required changing the default port.
- Serving static frontend files from the backend to provide a unified access point.
- Ensuring CORS configuration allowed smooth API requests from frontend pages.
- Balancing simplicity and modularity to keep the project beginner-friendly while meeting all requirements.

## Conclusion
This project successfully demonstrates a full-stack web application with a Node.js backend and static frontend pages. It meets the assignment requirements by providing a dummy login page, an intern dashboard, and a leaderboard with dummy data. The codebase is clean and modular, making it suitable for beginners to understand and extend. The backend and frontend integration via REST APIs and static file serving provides a solid foundation for further development and deployment.

---
