import { createContext, useState, useEffect } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const token = localStorage.getItem("token");

  const fetchTransactions = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/expenses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      console.log("GET /expenses response:", data);

      // ✅ FIX: handle all possible backend formats safely
      const list =
        Array.isArray(data)
          ? data
          : Array.isArray(data.data)
          ? data.data
          : Array.isArray(data.transactions)
          ? data.transactions
          : [];

      setTransactions([...list]); // force re-render
    } catch (error) {
      console.error("Fetch error:", error);
      setTransactions([]);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, setTransactions, fetchTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
};