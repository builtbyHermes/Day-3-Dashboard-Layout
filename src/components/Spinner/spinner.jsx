import styles from "./spinner.module.css";

function Spinner({
  size = "medium",
  color = "#2563eb",
}) {
  return (
    <span
      className={`${styles.spinner} ${styles[size]}`}
      style={{ borderTopColor: color }}
      aria-label="Loading"
      role="status"
    />
  );
}

export default Spinner;