import styles from "./Button.Module.css";

export default function Button({ handleClick, text }) {
  return (
    <button className={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
}
