"use client";

import { useCallback, useEffect, useState } from "react";

import { CatsFiltersAvailable, fetchCatsPaginated } from "@/lib/api/cats";
import { CatDetailedNormalized } from "@/types";

export const useCatsGetter = (categoryId?: number) => {
  const [page, setPage] = useState(1);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<CatDetailedNormalized[]>([]);
  const [filters, setFilters] = useState<CatsFiltersAvailable>({ categoryId });

  const loadNextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const fetchCats = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const cats = await fetchCatsPaginated(page, filters);

      if (page === 1) {
        return setData(cats);
      }
      setData((prev) => [...prev, ...cats]);
    } catch (err: any | { message?: string }) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [page, filters]);

  useEffect(() => {
    fetchCats();
  }, [filters, page, fetchCats]);

  return {
    loadNextPage,
    setFilters,
    data,
    error,
    isLoading,
    isLoadingMore: isLoading && page !== 1,
  };
};
