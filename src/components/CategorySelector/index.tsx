"use client";

import { useSearchParams, usePathname } from "next/navigation";

import styles from "./index.module.css";
import { CategorySelectorLoading } from "./loading";

interface Category {
  id: number;
  name: string;
}

interface CategorySelectorProps {
  categories: Category[];
  isLoading?: boolean;
}

export const CategorySelector = ({
  categories,
  isLoading,
}: CategorySelectorProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const selectedId = Number(searchParams.get("categoryId"));

  const handleClick = (id?: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (id === undefined) {
      params.delete("categoryId");
    } else {
      params.set("categoryId", String(id));
    }
    window.location.href = `${pathname}?${params.toString()}`;
  };

  if (isLoading) {
    return <CategorySelectorLoading />;
  }

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.button} ${!selectedId ? styles.active : ""}`}
        onClick={() => handleClick(undefined)}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`${styles.button} ${
            selectedId === cat.id ? styles.active : ""
          }`}
          onClick={() => handleClick(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};
