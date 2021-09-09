import React from "react";

export default function Input({ type, onChange, onClick, value }) {
  return (
    <input
      type={type}
      onChange={onChange}
      onClick={onClick}
      value={value}
    ></input>
  );
}
