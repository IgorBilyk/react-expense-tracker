import React, { useState } from "react";
import "./styles.css";
import Card from "./components/Card/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/expenses/Expenses";
import AddExpense from "./components/AddExpense/AddExpense";

const App = () => {
  let [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 2, 12)
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2019, 2, 28)
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2020, 5, 12)
    },
    {
      id: "e5",
      title: "Computer Mouse",
      amount: 100,
      date: new Date(2020, 4, 19)
    }
  ]);
  let [isClicked, setIsClicked] = useState(false);

  const handleClick = (date) => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };
  const addExpenseHandler = (expense) => {
    setExpenses([expense[0], ...expenses]);
  };

  const handleAddExpense = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="App">
      <h1>Let's gets started !</h1>
      {!isClicked ? (
        <AddExpense handleAddExpense={handleAddExpense} />
      ) : (
        <NewExpense
          onExpenseHandler={addExpenseHandler}
          handleClick={handleClick}
        />
      )}
      <Card>
        <Expenses expenses={expenses} />
      </Card>
    </div>
  );
};
export default App;
