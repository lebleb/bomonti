export const theme = {
  breakpoints: { mobile: 55 },
  color: {
    natural: {
      black: '#000000',
      gray1: '#2E2C30',
      gray2: '#757575',
      gray3: '#C3C3C3',
      gray4: '#D9D9D9',
      white: '#FFFFFF',
    },
    primary: '#A869C6',
    secondary: '#FFC93E',
    tertiary: '#DEBFED',
  },
  spacing: (index: number) => index * 4,
  font: {
    title: {
      family: 'Arial',
      size: 16,
    },
  },
};


export type Theme = typeof theme;


declare module 'bomonti' {
  export interface DefaultTheme extends Theme {
  }
}
