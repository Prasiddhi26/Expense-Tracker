const express = require("express");
const router = express.Router();

const {
  createExpense,
  getAllExpenses,
  deleteExpense,
  updateExpense,
} = require("../controllers/expenseControllers");

router.post("/", createExpense);
router.get("/", getAllExpenses);
router.put("/:id", updateExpense);
router.delete("/:id", deleteExpense);


module.exports = router;
