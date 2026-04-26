const express = require("express");
const router = express.Router();

const {
  createExpense,
  getAllExpenses,
  deleteExpense,
  updateExpense,
} = require("../controllers/expenseControllers");
const protect = require("../middleware/authMiddleware");

router.post("/", protect, createExpense);
router.get("/", protect, getAllExpenses);
router.put("/:id", protect, updateExpense);
router.delete("/:id", protect, deleteExpense);


module.exports = router;
