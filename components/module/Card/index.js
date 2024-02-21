import React from "react";

const Card = ({ title, style, children }) => {
  return (
    <div className="card" style={style}>
      <div className="card-header">{title}</div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
