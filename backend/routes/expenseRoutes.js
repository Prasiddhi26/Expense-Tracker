const express = require("express");
const router = express.Router();

const {
  createExpense,
  getAllExpenses,
  deleteExpense,
} = require("../controllers/expenseControllers");

router.post("/", createExpense);
router.get("/", getAllExpenses);
router.delete("/:id", deleteExpense);

module.exports = router;
