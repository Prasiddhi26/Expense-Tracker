import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TransactionContext } from "../context/TransactionContext";

const AddTransaction = () => {
  const { fetchTransactions } = useContext(TransactionContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "",
    date: "",
  });

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        title: formData.title,
        amount: Number(formData.amount),
        type: formData.type,
        category: formData.category,
        date: formData.date ? new Date(formData.date) : new Date(),
      };

      const res = await fetch("https://expense-tracker-backend-h1es.onrender.com/api/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      console.log("Server Response:", data);

      if (!res.ok) {
        alert(data.message || "Failed to add transaction");
        return;
      }

      // refresh dashboard data
      fetchTransactions();

      // reset form
      setFormData({
        title: "",
        amount: "",
        type: "expense",
        category: "",
        date: "",
      });

      // ✅ NAVIGATION TO DASHBOARD
      navigate("/");

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container py-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="mb-4">Add Transaction</h4>

          <form onSubmit={handleSubmit}>
            
            {/* Title */}
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            {/* Amount */}
            <div className="mb-3">
              <label className="form-label">Amount</label>
              <input
                type="number"
                className="form-control"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>

            {/* Type */}
            <div className="mb-3">
              <label className="form-label">Type</label>
              <select
                className="form-select"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>

            {/* Category */}
            <div className="mb-3">
              <label className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </div>

            {/* Date */}
            <div className="mb-3">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary">
              Add Transaction
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;