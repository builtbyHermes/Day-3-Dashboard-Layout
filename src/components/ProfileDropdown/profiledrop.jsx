import { FiChevronDown } from "react-icons/fi";
import Avatar from "../Avatar";
import styles from "./profiledrop.module.css";

function ProfileDropdown({
  name = "John Doe",
  role = "Administrator",
  avatar = "https://i.pravatar.cc/150?img=12",
}) {
  return (
    <button
      className={styles.profile}
      type="button"
    >
      <Avatar
        src={avatar}
        alt={name}
      />

      <div className={styles.info}>
        <span className={styles.name}>
          {name}
        </span>

        <span className={styles.role}>
          {role}
        </span>
      </div>

      <FiChevronDown className={styles.icon} />
    </button>
  );
}

export default ProfileDropdown;