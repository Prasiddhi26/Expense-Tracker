const Expense = require("../models/expenseModel");

const createExpense = async (req, res) => {
  console.log(req.body);
    try {
        const { title, amount, category, type } = req.body;

        // Validation
        if (!title || !category || !amount || !type == null) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if (Number(amount) < 0) {
            return res.status(400).json({
                message: "Amount must be a positive number"
            });
        }

        // Create and save to DB
        const newExpense = new Expense({
            title,
            amount,
            category,
            type,
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
    const { type } = req.query;

    let filter = {};

    if (type) {
      filter.type = type; // income or expense
    }

    const expenses = await Expense.find(filter).sort({ date: -1 });

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

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedExpense = await Expense.findByIdAndDelete(id);

    if (!deletedExpense) {
      return res.status(404).json({
        message: "Expense not found"
      });
    }

    res.status(200).json({
      message: "Expense deleted successfully",
      data: deletedExpense
    });

  } catch (error) {
    res.status(500).json({
      message: "Error deleting expense",
      error: error.message
    });
  }
};

const updateExpense = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, amount, category, type } = req.body;

        // find and update in one step
        const updatedExpense = await Expense.findByIdAndUpdate(
            id,
            {
                title,
                amount,
                category,
                type
            },
            {
                new: true,        // return updated document
                runValidators: true
            }
        );

        if (!updatedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        res.json({
            message: "Expense updated successfully",
            updatedExpense
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createExpense, getAllExpenses, deleteExpense, updateExpense };