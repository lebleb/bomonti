import { useContext } from 'react';
import { ThemeContext } from '../comp/ThemeProvider';

export const useTheme = () => {
  const value = useContext(ThemeContext);
  return { theme: value || { breakpoints: {} } };
};
