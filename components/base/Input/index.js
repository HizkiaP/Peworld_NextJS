import React from "react";
import styles from './input.module.css'

const Input = ({child, type="text", className, classNameLabel, id, placeholder, ...props}) => {
  return (
    <div className="formInput">
      <label htmlFor={id} className={`form-label ${classNameLabel} ${styles.allLabel}`}>
        {child}
      </label>
      <input
        {...props}
        type={type}
        className={`form-control ${className} ${styles.allInput}`}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
