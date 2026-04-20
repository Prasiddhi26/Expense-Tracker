const expenseRoutes = require("./routes/expenseRoutes");

require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect database
connectDB();

app.use(express.json());
app.use("/api/expenses", expenseRoutes);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

const PORT = process.env.PORT||5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});