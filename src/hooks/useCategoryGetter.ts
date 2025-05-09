"use client";

import { useCallback, useEffect, useState } from "react";

import { fetchCategories } from "@/lib/api/categories";
import { CategoryReceived } from "@/types";

export const useCategoryGetter = () => {
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<CategoryReceived[]>([]);

  const loadCategories = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const categories = await fetchCategories();

      return setData(categories);
    } catch (err: any | { message?: string }) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return {
    data,
    error,
    isLoading,
  };
};
