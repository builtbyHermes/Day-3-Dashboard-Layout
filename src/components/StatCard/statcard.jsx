import styles from "./statcard.module.css";

function StatCard({
  title,
  value,
  change,
  icon,
}) {
  return (
    <div className={styles.card}>

      <div className={styles.top}>

        <div>
          <p className={styles.title}>
            {title}
          </p>

          <h2 className={styles.value}>
            {value}
          </h2>
        </div>

        <div className={styles.icon}>
          {icon}
        </div>

      </div>

      <p className={styles.change}>
        {change}
      </p>

    </div>
  );
}

export default StatCard;