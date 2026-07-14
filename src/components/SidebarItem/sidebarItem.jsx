import { NavLink } from "react-router-dom";
import styles from "./sidebarItem.module.css";

function SidebarItem({
  to,
  icon,
  children,
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${styles.item} ${
          isActive ? styles.active : ""
        }`
      }
    >
      <span className={styles.icon}>
        {icon}
      </span>

      <span className={styles.label}>
        {children}
      </span>
    </NavLink>
  );
}

export default SidebarItem;