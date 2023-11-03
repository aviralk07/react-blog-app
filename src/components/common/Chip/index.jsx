import React from "react";
import "./style.css";
const Chip = ({ lable, isPrimary }) => (
  <div className={`chip ${isPrimary ? "chip-primary" : "chip-secondary"}`}>
    <span>{lable}</span>
  </div>
);

export default Chip;
