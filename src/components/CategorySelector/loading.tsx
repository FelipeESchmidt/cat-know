import { LoadingDots } from "../LoadingDots";
import styles from "./index.module.css";

export const CategorySelectorLoading = () => {
  return (
    <div className={styles.wrapper}>
      <button className={`${styles.button} ${styles.active}`} disabled>
        All
      </button>
      {Array.from({ length: 4 }).map((_, index) => (
        <button
          key={`category-loading-${index}`}
          className={styles.button}
          disabled
        >
          <LoadingDots />
        </button>
      ))}
    </div>
  );
};
