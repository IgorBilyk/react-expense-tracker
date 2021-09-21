import React, { useState } from "react";
import '../../styles.css'
import ExpensesFilter from "../Filter/ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const { expenses } = props;
  let [year, setYear] = useState(2021);

  const handleFilter = (date) => {
    setYear(date);
  };
  //Filtering and rendering Expense Item components
  const filteredArray = expenses.filter(
    (item) => item.date.getFullYear().toString() === year
  );
  return (
    <div className='card'>
      <ExpensesFilter onFilterHandler={handleFilter} year={year} />
      <ExpensesChart expenses={filteredArray} />
      <ExpenseList expenses={filteredArray} />
      
    </div>
  );
};

export default Expenses;
