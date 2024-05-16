import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPagedData(data: any, page: number, limit: number = 10) {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return data.slice(startIndex, endIndex);
}