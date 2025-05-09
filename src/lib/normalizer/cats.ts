import { last } from "random-name";

import { CatDetailedNormalized, CatDetailedReceived } from "@/types";

export const defaultCountryCode = "AQ";

const randomCatName = () => {
  return last();
};

export const normalizeCatDetailed = (
  data: CatDetailedReceived[]
): CatDetailedNormalized[] => {
  return data.map((item) => ({
    ...item,
    name: item.breeds[0]?.name ?? randomCatName(),
    countyCode: item.breeds[0]?.country_code ?? "AQ",
  }));
};
