import React from "react";
import styles from "./Input.Module.css";
export default function Input({ type, onChange, onClick, value, readOnly }) {
  return (
    <input
      className={styles.input}
      type={type}
      onChange={onChange}
      onClick={onClick}
      value={value}
      readOnly={readOnly}
    ></input>
  );
}
