import { LoadingDots } from "../LoadingDots";

import styles from "./index.module.css";

export interface CardItemProps {
  asGiant?: boolean;
}

export const CardItemLoading: React.FC<CardItemProps> = ({ asGiant }) => {
  if (asGiant) {
    return (
      <div className={`${styles.card} ${styles.cardGiant}`}>
        <LoadingDots />
      </div>
    );
  }
  return (
    <div className={styles.card}>
      <LoadingDots />
    </div>
  );
};
