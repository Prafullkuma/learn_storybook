import React from "react";
import "./index.css";

const Input = (props) => {
  const { size = "medium", value, onChange, ...rest } = props;
  return (
    <input
      className={`input ${size}`}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
