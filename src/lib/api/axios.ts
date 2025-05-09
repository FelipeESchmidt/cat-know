import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_CAT_API_KEY ?? "", // boa prática
  },
});
