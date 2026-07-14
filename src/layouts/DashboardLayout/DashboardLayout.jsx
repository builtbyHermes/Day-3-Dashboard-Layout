import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

import styles from "./DashboardLayout.module.css";

function DashboardLayout() {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>

      <header className={styles.header}>
        <Header />
      </header>

      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;