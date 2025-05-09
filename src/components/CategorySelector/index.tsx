"use client";

import { usePathname } from "next/navigation";

import styles from "./index.module.css";
import { CategorySelectorLoading } from "./loading";

interface Category {
  id: number;
  name: string;
}

interface CategorySelectorProps {
  categories: Category[];
  isLoading?: boolean;
  categoryId?: number;
}

export const CategorySelector = ({
  categories,
  isLoading,
  categoryId,
}: CategorySelectorProps) => {
  const pathname = usePathname();

  const handleClick = (id?: number) => {
    const params = new URLSearchParams();
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
        className={`${styles.button} ${!categoryId ? styles.active : ""}`}
        onClick={() => handleClick(undefined)}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`${styles.button} ${
            categoryId === cat.id ? styles.active : ""
          }`}
          onClick={() => handleClick(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};
