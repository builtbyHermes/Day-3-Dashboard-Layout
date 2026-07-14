import styles from "./button.module.css";

/**
 * Button Component
 *
 * A reusable button with support for variants, sizes,
 * loading state, disabled state, and custom button types.
 */

function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${styles.button}
        ${styles[variant]}
        ${styles[size]}
      `}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;