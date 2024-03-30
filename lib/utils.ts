import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { QueryParam } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function composeQueryParams(url: string, params: Array<QueryParam>) {
  const paramStrings = params.map(
    (param) => `${param.filterName}[]=${param.filters.join(",")}`
  );
  const paramPart =
    paramStrings.length > 1 ? paramStrings.join("&") : paramStrings[0];
  return `${url}?${paramPart}`;
}
