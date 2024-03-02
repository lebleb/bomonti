import React, { createContext } from 'react';
import { DefaultTheme } from '../global';

export const DefaultThemeObject: DefaultTheme = {};
export const ThemeContext = createContext<DefaultTheme>(DefaultThemeObject);

type Properties = {
  value: DefaultTheme;
  children: React.ReactNode;
};

export const ThemeProvider = ({ value, children }: Properties) => {
  return (
    <ThemeContext.Provider value={{ ...value }}>
      {children}
    </ThemeContext.Provider>
  );
};
