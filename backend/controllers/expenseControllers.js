const Expense = require("../models/expenseModel");

const createExpense = async (req, res) => {
    try {
        const { title, amount, category } = req.body;

        // Validation
        if (!title || !category || amount == null) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if (amount < 0) {
            return res.status(400).json({
                message: "Amount must be a positive number"
            });
        }

        // Create and save to DB
        const newExpense = new Expense({
            title,
            amount,
            category,
            date: new Date()
        });

        const savedExpense = await newExpense.save();

        return res.status(201).json({
            message: "Expense created successfully",
            data: savedExpense
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();

    res.status(200).json({
      message: "Expenses fetched successfully",
      data: expenses
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching expenses",
      error: error.message
    });
  }
};


module.exports = { createExpense, getAllExpenses };