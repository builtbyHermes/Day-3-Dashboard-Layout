import { FiBell } from "react-icons/fi";
import styles from "./notification.module.css";

function NotificationButton({
  count = 0,
  onClick,
}) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      aria-label="Notifications"
    >
      <FiBell className={styles.icon} />

      {count > 0 && (
        <span className={styles.badge}>
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}

export default NotificationButton;
