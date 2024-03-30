import { ApiReponse } from "./types";

export const getProducts = (response: ApiReponse) => {
  return response.items;
};

export const getFilters = (response: ApiReponse) => {
  return response.filters;
};
