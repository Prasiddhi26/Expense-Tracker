import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Expense Tracker
        </Link>

        <div>
          <Link to="/" className="btn btn-light me-2">
            Dashboard
          </Link>

          <Link to="/transactions" className="btn btn-light me-2">
            Transactions
          </Link>

          <Link to="/add" className="btn btn-warning me-2">
            + Add
          </Link>

          <Link to="/login" className="btn btn-outline-light me-2">
            Login
          </Link>

          <Link to="/register" className="btn btn-success">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;