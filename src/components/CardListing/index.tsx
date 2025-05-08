import styles from "./index.module.css";
import { CardItem } from "../CardItem";

export interface CardListingProps<T> {
  data: T[];
  titleField: keyof T;
  imageField: keyof T;
  countyCodeField: keyof T;
}

export const CardListing = <T,>({
  data,
  imageField,
  titleField,
  countyCodeField,
}: CardListingProps<T>) => {
  return (
    <div className={styles.grid}>
      {data.map((item, index) => (
        <CardItem
          key={`card-item-${index}`}
          image={String(item[imageField])}
          title={String(item[titleField])}
          countyCode={String(item[countyCodeField])}
        />
      ))}
    </div>
  );
};
