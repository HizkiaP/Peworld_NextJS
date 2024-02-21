import React from "react";
import styles from "./card.module.css"

const CardBody = ({ children, style }) => {
  return (
    <div className={`card-body ${styles.card}`}  style={style}>
      {children} 
    </div>
  );
};

export default CardBody;
