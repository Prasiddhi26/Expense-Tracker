const expenseRoutes = require("./routes/expenseRoutes");
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Connect database
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/expenses", expenseRoutes);
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("Server is running...");
});

const PORT = process.env.PORT||5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});