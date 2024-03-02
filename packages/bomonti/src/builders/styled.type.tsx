import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { DefaultTheme } from '../global';

export type NativeStyles = ViewStyle | TextStyle | ImageStyle;
export type StyledItem<T> = T | ((argument: { theme: DefaultTheme }) => T);
export type StyledObject<T> = { [K in keyof T]: StyledItem<T[K]> };
export type StyledObjectWithMediaQuery<T> = StyledObject<T> & {
  [Key in keyof DefaultTheme['breakpoints']]?: StyledObject<T>;
};
