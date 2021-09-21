import React from "react";
import "./Date.css";

const Date = (props) => {
  const { date } = props;
  //const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default Date;
