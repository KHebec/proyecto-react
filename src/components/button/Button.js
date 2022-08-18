import React from "react";
import "./Button.css";

export const Button = (props) => {
  return (
    <div className="container">
      <button onClick={props.onclik}>{props.name}</button>
    </div>
  );
};
