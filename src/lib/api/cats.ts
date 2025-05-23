import { CatDetailedNormalized, CatDetailedReceived } from "@/types";

import {
  normalizeCatDetailed,
  normalizeCatsDetailed,
} from "../normalizer/cats";
import { api } from "./axios";
import { CAT_SINGLE, CATS_LIST } from "./endpoints";

export const PAGE_SIZE = 20;

export interface CatsFiltersAvailable {
  categoryId?: number;
}

export const fetchCatsPaginated = async (
  page: number,
  filters: CatsFiltersAvailable
): Promise<CatDetailedNormalized[]> => {
  const params: Record<string, number | string> = {
    limit: PAGE_SIZE,
    page,
  };

  if (filters.categoryId !== undefined) {
    params.category_ids = filters.categoryId;
  } else {
    params.has_breeds = 1;
  }

  params.mime_types = "jpg,png";

  const res = await api.get<CatDetailedReceived[]>(CATS_LIST, { params });
  return normalizeCatsDetailed(res.data);
};

export const fetchCatById = async (
  id: string,
  fallBackName?: string
): Promise<CatDetailedNormalized> => {
  const res = await api.get<CatDetailedReceived>(`${CAT_SINGLE}/${id}`);
  const cat = normalizeCatDetailed(res.data, fallBackName);
  return cat;
};
