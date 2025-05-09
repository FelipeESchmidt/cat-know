import styles from "./index.module.css";

import { CardItemLoading } from "../CardItem/loading";

export interface CardListingLoadingProps {
  items?: number;
  forceOnlyOneLine?: boolean;
}

export const CardListingLoading: React.FC<CardListingLoadingProps> = ({
  items = 12,
  forceOnlyOneLine = false,
}) => {
  return (
    <div
      className={`${styles.grid} ${forceOnlyOneLine ? styles.gridLoading : ""}`}
    >
      {Array.from({ length: items }).map((_, index) => (
        <CardItemLoading key={`card-item-loading-${index}`} />
      ))}
    </div>
  );
};
