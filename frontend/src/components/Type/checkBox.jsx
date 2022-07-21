import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

//css
import "./checkbox.css";

const Check = ({ label, value, handleChange, checked, isCorrect }) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <FormControlLabel
      style={{
        boxShadow: checked && "5px 10px #888888",
        backgroundColor:
          isCorrect === "not empty" && checked === false
            ? null
            : isCorrect === true && checked === true
            ? "green"
            : isCorrect === false && checked === true && "crimson",
      }}
      control={<Checkbox onChange={() => handleChange(value, checked)} />}
      label={capitalize(label)}
      defaultChecked={false}
      checked={checked}
    />
  );
};

export default Check;
