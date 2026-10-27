# DecodeLabs Project 2 – Backend API Development

## Overview
A simple REST API developed using Node.js and Express.js as part of the DecodeLabs Full Stack Development program. The project demonstrates API development, request handling, input validation, and JSON responses.

## Features
- Retrieve student data using a GET request.
- Add new students using a POST request.
- Validate student name and email.
- Handle invalid input and unknown routes.
- Return responses in JSON format.

## Technologies Used
- Node.js
- Express.js
- JavaScript

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project directory:
   ```bash
   cd Project2
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   node server.js
   ```

5. Open `http://localhost:5000` in your browser to check the server status.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check server status |
| GET | `/api/students` | Retrieve all students |
| POST | `/api/students` | Add a new student |

## POST Request Example

**URL:** `http://localhost:5000/api/students`

**Request Body (JSON):**
```json
{
  "name": "Amit",
  "email": "amit@example.com"
}
```

## Note
Student data is stored temporarily in memory and resets when the server restarts.

## Author
Developed as part of the DecodeLabs Full Stack Development program.
