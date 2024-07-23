import { ColorScheme, ThemeObject, ThemeProviderProps } from '@utils/properties';
import React from 'react';

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
