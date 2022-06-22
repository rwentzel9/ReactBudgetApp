import React, { useState, useEffect } from "react";
import TransactionCard from "./TransactionCard";

export default function Transactions(props) {
  const [transactions, setTransactions] = useState([
    {
      accountId: 1,
      amount: 30,
      category: { primary: "travel", secondary: "taxi" },
      categoryId: 1,
      date: 1 - 1 - 2019,
      name: "Test Transaction",
      pending: false
    },
    {
      accountId: 2,
      amount: 55,
      category: { primary: "grocery", secondary: null },
      categoryId: 2,
      date: 1 - 2 - 2019,
      name: "Test Transaction 2",
      pending: true
    }
  ]);

  return (
    <div>
      {transactions.map(t => {
        return <TransactionCard transaction={t} />;
      })}
    </div>
  );
}
