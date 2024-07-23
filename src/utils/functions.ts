import { Language } from "@utils/properties";

export function isWindowLessThan(size: number): boolean {
  return window.innerWidth < size;
}

export function isValidLanguage(value: string): boolean {
  return Object.values(Language).includes(value as Language);
}
