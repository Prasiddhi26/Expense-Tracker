const express = require("express");
const router = express.Router();

const {createExpense, getAllExpenses} = require("../controllers/expenseControllers");

router.post("/", createExpense);
router.get("/", getAllExpenses);

module.exports = router;