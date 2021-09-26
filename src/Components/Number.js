import React from "react";
import styles from "./Number.module.css";

const Number = function (props) {
  return (
    <div className={styles.number} style={{ color: props.color }}>
      {props.number}
    </div>
  );
};

export default Number;
