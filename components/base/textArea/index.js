import React from "react";


const TextArea = ({ placeholder, title, style, className, type="text", ...props}) => {
  return (
    <div className="form-floating">
      <textarea
        {...props}
        className={`form-control ${className}`}
        placeholder={placeholder}
        id="floatingTextarea2"
        style={style}
        type={type}
      ></textarea>
      <label htmlFor="floatingTextarea2">{title}</label>
    </div>
  );
};

export default TextArea;
