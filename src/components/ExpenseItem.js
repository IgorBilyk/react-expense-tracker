import React from "react";
import Date from "./Date";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { title, amount, date } = props.date;
  return (
    <div className="expense-item">
      <Date date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">:${amount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
