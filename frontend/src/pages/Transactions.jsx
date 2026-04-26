import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Transactions = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <table>
      <tbody>
        {transactions.map((t) => (
          <tr key={t._id}>
            <td>{t.title}</td>
            <td className={t.type === "income" ? "text-success" : "text-danger"}>
              {t.type === "income" ? "+" : "-"}₹{t.amount}
            </td>
            <td>{t.category}</td>
            <td>{t.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Transactions;