import React from "react";

const Transactions = () => {
  return (
    <div className="container py-4">

      <h3 className="mb-4">All Transactions</h3>

      {/* Filter Buttons */}
      <div className="mb-3">
        <button className="btn btn-outline-primary me-2">All</button>
        <button className="btn btn-outline-success me-2">Income</button>
        <button className="btn btn-outline-danger">Expense</button>
      </div>

      {/* Table */}
      <div className="card shadow-sm">
        <div className="card-body">

          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {/* Dummy data for now */}
              <tr>
                <td>Food</td>
                <td className="text-danger">-₹500</td>
                <td>Food</td>
                <td>12 Apr</td>
              </tr>

              <tr>
                <td>Salary</td>
                <td className="text-success">+₹20000</td>
                <td>Salary</td>
                <td>10 Apr</td>
              </tr>
            </tbody>

          </table>

        </div>
      </div>

    </div>
  );
};

export default Transactions;