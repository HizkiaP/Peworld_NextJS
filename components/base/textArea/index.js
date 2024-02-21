import React from "react";


const TextArea = ({ placeholder, title, style, className,}) => {
  return (
    <div className="form-floating">
      <textarea
        className={`form-control ${className}`}
        placeholder={placeholder}
        id="floatingTextarea2"
        style={style}
      ></textarea>
      <label htmlFor="floatingTextarea2">{title}</label>
    </div>
  );
};

export default TextArea;
