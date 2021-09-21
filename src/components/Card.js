import React from "react";
import "../styles.css";

const Card = (props) => {
  return <div className="expense-card">{props.children}</div>;
};
export default Card;
