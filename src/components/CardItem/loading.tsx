import { LoadingDots } from "../LoadingDots";

import styles from "./index.module.css";

export const CardItemLoading = () => {
  return (
    <div className={styles.card}>
      <LoadingDots />
    </div>
  );
};
