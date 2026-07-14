import styles from "./input.module.css";

function Input({
  label,
  error,
  id,
  className = "",
  ...props
}) {
  const inputId =
    id || `input-${label?.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className={styles.container}>
      {label && (
        <label
          htmlFor={inputId}
          className={styles.label}
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        className={`${styles.input} ${className}`}
        aria-invalid={!!error}
        {...props}
      />

      {error && (
        <span className={styles.error}>
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;