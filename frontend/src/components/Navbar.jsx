import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Expense Tracker
        </Link>

        <div>
          {token ? (
            <>
              <Link to="/" className="btn btn-light me-2">
                Dashboard
              </Link>

              <Link to="/transactions" className="btn btn-light me-2">
                Transactions
              </Link>

              <Link to="/add" className="btn btn-warning me-2">
                + Add
              </Link>

              <button className="btn btn-danger" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-light me-2">
                Login
              </Link>

              <Link to="/register" className="btn btn-light">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;