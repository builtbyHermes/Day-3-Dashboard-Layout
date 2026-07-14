import SearchBar from "../SearchBar";
import NotificationButton from "../NotificationButton";
import ProfileDropdown from "../ProfileDropdown";
import styles from "./header.module.css";

function Header({ onMenuClick }) {
  return (
    <header className={styles.header}>
      <button
        className={styles.menuButton}
        onClick={onMenuClick}
        aria-label="Open navigation"
      >
        ☰
      </button>

      <SearchBar />

      <div className={styles.actions}>
        <NotificationButton />
        <ProfileDropdown />
      </div>
    </header>
  );
}

export default Header;