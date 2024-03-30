import { FilterParams } from "./types";

export const callApi = async (queryParams?: FilterParams) => {
  const params: RequestInit = {
    headers: {
      "content-type": "application/json",
    },
  };
  try {
    console.log("QUERY PARAMS", queryParams);
    const response = await fetch(
      createUrl(
        "https://gymbeam.sk/rest/V1/gb/catalog/products?category_ids[]=2416",
        queryParams
      ),
      params
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};

const createUrl = (baseUrl: string, queryParams?: FilterParams) => {
  if (queryParams) {
    const { manufacturer, form } = queryParams;
    if (form && manufacturer) {
      const finalUrl = `${baseUrl}&manufacturer[]=${manufacturer}&form[]=${form}`;
      return finalUrl;
    }
    if (form) {
      const finalUrl = `${baseUrl}&form[]=${form}`;
      return finalUrl;
    }
    if (manufacturer) {
      const finalUrl = `${baseUrl}&manufacturer[]=${manufacturer}`;
      return finalUrl;
    }
  }
  return baseUrl;
};
