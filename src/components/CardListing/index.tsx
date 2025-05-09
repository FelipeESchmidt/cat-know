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
  idField: keyof T;
  titleField: keyof T;
  imageField: keyof T;
  countyCodeField: keyof T;
  originField?: keyof T;
}

export const CardListing = <T,>({
  data,
  idField,
  imageField,
  titleField,
  countyCodeField,
  originField,
  ...infiniteScrollProps
}: CardListingProps<T>) => {
  return (
    <div className={styles.grid}>
      {data.map((item, index) => (
        <CardItem
          key={`card-item-${index}`}
          id={String(item[idField])}
          image={String(item[imageField])}
          title={String(item[titleField])}
          countyCode={String(item[countyCodeField])}
          origin={originField ? String(item[originField]) : undefined}
        />
      ))}
      <ScrollToTopButton />
      <InfiniteScrollTrigger {...infiniteScrollProps} />
    </div>
  );
};
