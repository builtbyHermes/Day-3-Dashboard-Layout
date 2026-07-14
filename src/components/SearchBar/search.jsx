import { FiSearch } from "react-icons/fi";
import styles from "./search.module.css";

function SearchBar({
  value = "",
  onChange,
  placeholder = "Search...",
}) {
  return (
    <div className={styles.searchBar}>
      <FiSearch className={styles.icon} />

      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;