import { createContext, useContext } from 'react';
import { MenuObject, MenuProviderProps } from '@utils/properties';

export const MenuContext = createContext<MenuObject>({
  menu: {
    showMenu: false,
    isCollapsed: false,
  },
  setMenu: () => {},
});

export default function useMenu(): MenuObject {
  return useContext(MenuContext);
}

export function MenuProvider({ value, children }: MenuProviderProps) {
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
