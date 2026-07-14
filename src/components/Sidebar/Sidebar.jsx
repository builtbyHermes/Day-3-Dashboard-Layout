import {
  FiHome,
  FiBarChart2,
  FiUsers,
  FiMessageSquare,
  FiSettings,
} from "react-icons/fi";

import SidebarItem from "../SidebarItem";

import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <h2>Dashboard</h2>
      </div>

      <nav className={styles.navigation}>
        <SidebarItem
          to="/dashboard"
          icon={<FiHome />}
        >
          Dashboard
        </SidebarItem>

        <SidebarItem
          to="/analytics"
          icon={<FiBarChart2 />}
        >
          Analytics
        </SidebarItem>

        <SidebarItem
          to="/users"
          icon={<FiUsers />}
        >
          Users
        </SidebarItem>

        <SidebarItem
          to="/messages"
          icon={<FiMessageSquare />}
        >
          Messages
        </SidebarItem>

        <SidebarItem
          to="/settings"
          icon={<FiSettings />}
        >
          Settings
        </SidebarItem>
      </nav>
    </aside>
  );
}

export default Sidebar;