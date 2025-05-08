import { CatDetailedNormalized, CatDetailedReceived } from "@/types";

export const normalizeCatDetailed = (
  data: CatDetailedReceived[]
): CatDetailedNormalized[] => {
  return data.map((item) => ({
    ...item,
    name: item.breeds[0].name ?? "cat unnamed",
    countyCode: item.breeds[0].country_code,
  }));
};
