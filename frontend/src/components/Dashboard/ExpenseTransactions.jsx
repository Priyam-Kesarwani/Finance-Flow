import moment from "moment";
import React from "react";
import { LuArrowRight } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";

const ExpenseTransactions = ({ transactions, onSeeMore }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between ">
        <h5 className="text-xl font-medium px-4">Expenses</h5>

        <button className="btn-ghost" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {(transactions && transactions.length > 0 ? transactions.slice(0, 4) : []).map((expense) => (
          <TransactionInfoCard
            key={expense._id}
            title={expense.category}
            icon={expense.icon}
            date={moment(expense.date).format("Do MMM YYYY")}
            amount={expense.amount}
            type="expense"
            hideDeleteBtn
          />
        ))}
        {(!transactions || transactions.length === 0) && (
          <div className="text-center muted">No expenses in the last 30 days.</div>
        )}
      </div>
    </div>
  );
};

export default ExpenseTransactions;
