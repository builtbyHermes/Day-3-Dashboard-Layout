import {
  FiDollarSign,
  FiUsers,
  FiShoppingCart,
  FiActivity,
} from "react-icons/fi";

import StatCard from "../components/StatCard";

import styles from "./Pages.module.css";

function Dashboard() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Dashboard</h1>
        <p>Welcome back </p>
      </div>

      <div className={styles.cards}>
        <StatCard
          title="Revenue"
          value="$24,560"
          change="+12%"
          icon={<FiDollarSign />}
        />

        <StatCard
          title="Users"
          value="8,421"
          change="+8%"
          icon={<FiUsers />}
        />

        <StatCard
          title="Orders"
          value="1,240"
          change="+5%"
          icon={<FiShoppingCart />}
        />

        <StatCard
          title="Activity"
          value="97%"
          change="+2%"
          icon={<FiActivity />}
        />
      </div>
    </section>
  );
}

export default Dashboard;