import React from "react";

const Input = ({ placeholder, type, className, ...rest }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required
      className={`form-input ${className ?? ""}`}
      {...rest}
    />
  );
};

export default Input;
