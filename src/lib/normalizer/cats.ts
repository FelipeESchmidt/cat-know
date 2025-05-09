import { last } from "random-name";

import { CatDetailedNormalized, CatDetailedReceived } from "@/types";

export const defaultCountryCode = "AQ";

const randomCatName = () => {
  return last();
};

export const normalizeCatDetailed = (
  data: CatDetailedReceived,
  fallBackName?: string
): CatDetailedNormalized => {
  return {
    ...data,
    name: (fallBackName || data.breeds[0]?.name) ?? randomCatName(),
    countyCode: data.breeds[0]?.country_code ?? "AQ",
  };
};

export const normalizeCatsDetailed = (
  data: CatDetailedReceived[]
): CatDetailedNormalized[] => {
  return data.map((item) => normalizeCatDetailed(item));
};
