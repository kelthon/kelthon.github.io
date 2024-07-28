import { createContext, useContext } from 'react';
import {
  LanguageObject,
  Language,
  LanguageProviderProps,
} from '@utils/properties';

export const LanguageContext = createContext<LanguageObject>({
  language: Language.English,
  setLanguage: () => {},
});

export default function useLanguage(): LanguageObject {
  return useContext(LanguageContext);
}

export function LanguageProvider({ value, children }: LanguageProviderProps) {
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
