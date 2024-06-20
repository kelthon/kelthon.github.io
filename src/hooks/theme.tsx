import {
  RefObject,
  ReactNode,
  createContext,
  createRef,
  useContext,
} from 'react';

export interface ThemeProps {
  children?: ReactNode;
}

export type ColorScheme = 'dark' | 'light';

const themeRef = createRef<ColorScheme>();

export const ThemeContext = createContext<RefObject<ColorScheme>>(themeRef);

export function ThemeProvider({ children }: ThemeProps) {
  return (
    <ThemeContext.Provider value={themeRef}>{children}</ThemeContext.Provider>
  );
}

export default function useTheme() {
  return useContext(ThemeContext);
}
