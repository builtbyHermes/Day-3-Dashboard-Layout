import styles from "./card.module.css";

/**
 * Card Component
 *
 * A reusable container used to group related content.
 */

function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        ${styles.card}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;