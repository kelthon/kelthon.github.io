import React from 'react';

export interface ChildrenElementProps {
  children?: React.ReactNode;
}

export interface ProviderElement<T> extends ChildrenElementProps {
  value: T;
}

export enum ColorScheme {
  Dark = 'dark',
  Light = 'light',
}

export enum Language {
  English = 'en',
  Portuguese = 'pt-br',
}

export type MenuOptions = {
  showMenu: boolean;
  isCollapsed: boolean;
};

export type ThemeObject = {
  theme: ColorScheme;
  setTheme: (theme: ColorScheme) => void;
};

export type LanguageObject = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export type MenuObject = {
  menu: MenuOptions;
  setMenu: ({ showMenu, isCollapsed }: MenuOptions) => void;
};

export type ThemeProviderProps = ProviderElement<ThemeObject>;

export type MenuProviderProps = ProviderElement<MenuObject>;

export type LanguageProviderProps = ProviderElement<LanguageObject>;
