import React, { useState } from "react";
//import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../Filter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const { expenses } = props;
  let [filter, setFilter] = useState();

  const handleFilter = (date) => {
    setFilter(date);
  };

  //Filtering and rendering Expense Item components
  const filteredArray = expenses
    .filter((item) => item.date.getFullYear().toString() === filter)
    .map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        filter={filter}
      />
    ));

  //{!filteredArray.length ? <NoItemDisplayed /> : filteredArray}
  return (
    <>
      <ExpensesFilter onFilterHandler={handleFilter} filter={filter} />
      {filteredArray}
    </>
  );
};

export default Expenses;
