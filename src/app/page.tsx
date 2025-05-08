"use client";

import { useEffect } from "react";

import { CardListing } from "@/components/CardListing";
import { useCatsGetter } from "@/hooks/useCatsGetter";

import styles from "./page.module.css";

export default function CatGallery({ categoryId }: { categoryId: number }) {
  const { data, error, isLoading, isLoadingMore, loadNextPage, setFilters } =
    useCatsGetter();

  useEffect(() => {
    setFilters((prev) => ({ ...prev, categoryId }));
  }, [categoryId, setFilters]);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Cat Encyclopedia</h1>
        <CardListing
          data={data}
          imageField="url"
          titleField="name"
          countyCodeField="countyCode"
        />
      </div>
    </main>
  );
}
