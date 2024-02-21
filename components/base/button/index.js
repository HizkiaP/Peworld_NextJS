import React from "react";
import styles from "./button.module.css";

const Button = ({ onClick, child, className, children, style, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${className} ${styles.allButton}`}
      type="button"
      style={style}
      {...props}
    >
      {child}
      {children}
    </button>
  );
};

export default Button;
