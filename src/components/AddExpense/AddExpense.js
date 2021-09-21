import React from "react";
import "../../styles.css";

const AddExpense = (props) => {
  const handleAddExpense = () => {
    props.handleAddExpense();
  };

  return (
    <button onClick={handleAddExpense} className="addExpense">
      Add Expense
    </button>
  );
};

export default AddExpense;
