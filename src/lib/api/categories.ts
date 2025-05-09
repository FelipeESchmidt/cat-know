import { CategoryReceived } from "@/types";

import { api } from "./axios";
import { CATEGORIES_LIST } from "./endpoints";

export const PAGE_SIZE = 20;

export const fetchCategories = async (): Promise<CategoryReceived[]> => {
  const res = await api.get<CategoryReceived[]>(CATEGORIES_LIST);
  return res.data;
};
