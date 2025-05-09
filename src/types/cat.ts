import { BreedDetailed } from "./breed";

export interface CatDetailedReceived {
  id: string;
  url: string;
  breeds: BreedDetailed[] | [];
  width: number;
  height: number;
}

export interface CatDetailedNormalized extends CatDetailedReceived {
  name: string;
  countyCode: string;
}
