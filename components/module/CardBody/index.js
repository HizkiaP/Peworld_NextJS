import React from "react";
import styles from "./card.module.css"

const CardBody = ({ children, style, className }) => {
  return (
    <div className={`card-body ${className}  ${styles.card}`}  style={style}>
      {children} 
    </div>
  );
};

export default CardBody;
