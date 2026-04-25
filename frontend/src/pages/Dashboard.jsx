import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container py-4">
      {/* Top Cards */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6 className="text-muted">Total Balance</h6>
              <h4>₹0</h4>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6 className="text-muted">Income</h6>
              <h4 className="text-success">₹0</h4>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6 className="text-muted">Expense</h6>
              <h4 className="text-danger">₹0</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Add Button */}
      <div className="d-flex justify-content-end mb-3">
        <Link to="/add" className="btn btn-primary">
          + Add Transaction
        </Link>
      </div>

      {/* Transactions */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="mb-3">Recent Transactions</h5>

          <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
            <span>Food</span>
            <span className="text-danger">-₹500</span>
          </div>

          <div className="d-flex justify-content-between border-bottom pb-2">
            <span>Salary</span>
            <span className="text-success">+₹20000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
