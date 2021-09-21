import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const users = [];
  const handleExpenseDate = (date) => {
    const newExpense = {
      ...date,
      id: Math.random().toString()
    };
    users.push(newExpense);
    props.onExpenseHandler(users);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveDate={handleExpenseDate}
        handleClick={props.handleClick}
      />
    </div>
  );
};

export default NewExpense;
