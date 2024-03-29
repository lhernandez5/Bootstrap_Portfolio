import React from "react";
import "./Button.css";

const Button = (props) => (
  <a href={props.link} target="_blank">
    <img src={props.image} className="iconButton" alt="iconButton" />
  </a>
);

export default Button;
