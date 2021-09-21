import React from "react";
import ExpenseItem from "./ExpenseItem";
import NoItemDisplayed from "./NoItemDisplayed";

const ExpenseList = (props) => {
  const { expenses } = props;
  //console.log(expenses.length)
  const result = expenses.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));

  return <ul>{expenses.length === 0 ? <NoItemDisplayed /> : result}</ul>;
};

export default ExpenseList;
