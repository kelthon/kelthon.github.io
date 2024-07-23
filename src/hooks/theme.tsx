import React from 'react';
import { ColorScheme, ThemeObject, ThemeProviderProps } from '../utils/properties';

const ThemeContext = React.createContext<ThemeObject>({
  theme: ColorScheme.Light,
  setTheme: () => {},
});

export function ThemeProvider({ value, children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default function useTheme() {
  return React.useContext(ThemeContext);
}
