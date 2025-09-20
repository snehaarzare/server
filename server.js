// index.js
const express = require("express");
const app = express();

// Middleware (JSON parse karne ke liye)
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully!");
});

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend 👋" });
});

// Port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});


app.get("/api/data", (req, res) => {
  const sampleData = {
    id: 1,
    name: "Sample Data",
    description: "This is a sample data item.",
  };
  res.json(sampleData);
});
