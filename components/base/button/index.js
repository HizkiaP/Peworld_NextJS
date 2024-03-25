import React from "react";
import styles from "./button.module.css";

const Button = ({ onClick, child, className, children, style, type="button", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${className} ${styles.allButton}`}
      type={type}
      style={style}
      {...props}
    >
      {child}
      {children}
    </button>
  );
};

export default Button;
