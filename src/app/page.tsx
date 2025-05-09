"use client";

import { useSearchParams } from "next/navigation";

import { useCatsGetter } from "@/hooks/useCatsGetter";
import { CardListing } from "@/components/CardListing";
import { CardListingLoading } from "@/components/CardListing/loading";

import styles from "./page.module.css";
import { CategorySelector } from "@/components/CategorySelector";
import { useCategoryGetter } from "@/hooks/useCategoryGetter";

export default function CatGallery() {
  const searchParams = useSearchParams();
  const categoryIdParam = searchParams.get("categoryId");

  const categoryId = categoryIdParam ? Number(categoryIdParam) : undefined;

  const { data, error, isLoading, isLoadingMore, loadNextPage } =
    useCatsGetter(categoryId);
  const { data: categoriesData, isLoading: categoriesIsLoading } =
    useCategoryGetter();

  const renderPrincipal = () => {
    if (isLoading && !data.length) {
      return <CardListingLoading />;
    } else if (error) {
      return <div>{error}</div>;
    }
    return (
      <>
        <CardListing
          data={data}
          imageField="url"
          titleField="name"
          countyCodeField="countyCode"
          blockCall={isLoading || !data.length}
          loadNextPage={loadNextPage}
        />
        {isLoadingMore && <CardListingLoading forceOnlyOneLine />}
      </>
    );
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Cat Encyclopedia</h1>
        <CategorySelector
          categories={categoriesData}
          isLoading={categoriesIsLoading}
        />
        {renderPrincipal()}
      </div>
    </main>
  );
}
