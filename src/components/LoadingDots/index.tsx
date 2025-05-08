import styles from "./index.module.css";

export const LoadingDots = () => {
  return (
    <div className={styles.placeholder}>
      <div className={styles.dots}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};
