import { BreedDetailed } from "./breed";
import { CategoryReceived } from "./category";

export interface CatDetailedReceived {
  id: string;
  url: string;
  breeds?: BreedDetailed[] | [];
  categories?: CategoryReceived[] | [];
  width: number;
  height: number;
}

export interface CatDetailedNormalized extends CatDetailedReceived {
  name: string;
  countyCode: string;
  origin?: string;
}
