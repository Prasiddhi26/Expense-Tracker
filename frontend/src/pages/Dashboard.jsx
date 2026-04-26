import { Link } from "react-router-dom";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Dashboard = () => {
  const { transactions = [] } = useContext(TransactionContext);
  const safeTransactions = Array.isArray(transactions) ? transactions : [];
  // 💰 calculations
  const income = safeTransactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const expense = safeTransactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const balance = income - expense;

  // 📊 recent 3 transactions
  const recentTransactions = safeTransactions.slice(-3).reverse();

  return (
    <div className="container py-4">
      {/* Top Cards */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6 className="text-muted">Total Balance</h6>
              <h4>₹{balance}</h4>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6 className="text-muted">Income</h6>
              <h4 className="text-success">₹{income}</h4>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6 className="text-muted">Expense</h6>
              <h4 className="text-danger">₹{expense}</h4>
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

          {recentTransactions.length === 0 ? (
            <p>No transactions yet</p>
          ) : (
            recentTransactions.map((t) => (
              <div
                key={t._id}
                className="d-flex justify-content-between border-bottom pb-2 mb-2"
              >
                <span>{t.title}</span>
                <span
                  className={
                    t.type === "income" ? "text-success" : "text-danger"
                  }
                >
                  {t.type === "income" ? "+" : "-"}₹{t.amount}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
