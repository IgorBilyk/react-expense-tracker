import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  let [date, setDate] = useState({
    title: "",
    amount: "",
    date: new Date().toISOString().substr(0, 10)
  });
  //Function updating every inputs
  const handleInput = (e) => {
    setDate((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const handleForm = (e) => {
    e.preventDefault();
    props.handleClick(1);
    //Reset inputs values
    setDate({ title: "", amount: "", date: "" });

    //passing props up to parent component
    const inputDate = {
      title: date.title,
      amount: date.amount,
      date: new Date(date.date)
    };
    props.onSaveDate(inputDate);
  };
  const onClickHandler = () => {
    props.handleClick(1);
    setDate({
      title: "",
      amount: "",
      date: ""
    });
  };

  return (
    <form onSubmit={handleForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={handleInput}
            type="text"
            name="title"
            value={date.title}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required
            onChange={handleInput}
            type="number"
            min="0.1"
            step="0.01"
            name="amount"
            value={date.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            onChange={handleInput}
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            name="date"
            value={date.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onClickHandler}>
          Reset
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
