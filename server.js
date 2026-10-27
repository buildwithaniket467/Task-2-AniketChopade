
const express = require("express");

const app = express();
const PORT = 5000;

// Middleware to read JSON request data
app.use(express.json());

// Temporary student data
let students = [
  { id: 1, name: "Aniket", email: "aniket@example.com" },
  { id: 2, name: "Rahul", email: "rahul@example.com" }
];

// GET: Home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "DecodeLabs Project 2 API is running!"
  });
});

// GET: Retrieve all students
app.get("/api/students", (req, res) => {
  res.status(200).json({
    success: true,
    data: students
  });
});

// POST: Add a new student
app.post("/api/students", (req, res) => {
  const { name, email } = req.body;

  // Validate required fields
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    name.trim() === "" ||
    email.trim() === ""
  ) {
    return res.status(400).json({
      success: false,
      message: "Name and email are required."
    });
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address."
    });
  }

  // Create a student record
  const newStudent = {
    id: students.length
      ? Math.max(...students.map(s => s.id)) + 1
      : 1,
    name: name.trim(),
    email: email.trim()
  };

  students.push(newStudent);

  res.status(201).json({
    success: true,
    message: "Student added successfully.",
    data: newStudent
  });
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found."
  });
});

// Handle invalid JSON and server errors
app.use((err, req, res, next) => {
  if (
    err instanceof SyntaxError &&
    err.status === 400 &&
    "body" in err
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON format."
    });
  }

  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal server error."
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

