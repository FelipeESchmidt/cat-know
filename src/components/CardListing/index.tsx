import React from "react";

import styles from "./index.module.css";
import { CardItem } from "../CardItem";
import {
  InfiniteScrollTrigger,
  InfiniteScrollTriggerProps,
} from "../InfiniteScrollTrigger";
import { ScrollToTopButton } from "../ScrollToTopButton";

export interface CardListingProps<T> extends InfiniteScrollTriggerProps {
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
  ...infiniteScrollProps
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
      <ScrollToTopButton />
      <InfiniteScrollTrigger {...infiniteScrollProps} />
    </div>
  );
};
