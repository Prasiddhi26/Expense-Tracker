const express = require("express");
const router = express.Router();

const {createExpense} = require("../controllers/expenseControllers");

// POST route
router.post("/", createExpense);

module.exports = router;