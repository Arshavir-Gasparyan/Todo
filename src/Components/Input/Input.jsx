import React from "react";
import styles from "./Input.Module.css";
export default function Input({
  type,
  onChange,
  onClick,
  value,
  readOnly,
  style,
}) {
  return (
    <input
      style={style}
      className={styles.input}
      type={type}
      onChange={onChange}
      onClick={onClick}
      value={value}
      readOnly={readOnly}
      style={style}
    ></input>
  );
}
