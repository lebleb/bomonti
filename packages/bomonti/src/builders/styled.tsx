import React, { ComponentType } from 'react';
import { Dimensions } from 'react-native';
import { DefaultTheme } from '../global';
import { useTheme } from '../hooks/useTheme';
import {
  NativeStyles,
  StyledObject,
  StyledObjectWithMediaQuery,
} from './styled.type';

const prepareStyled = (
  object: StyledObjectWithMediaQuery<NativeStyles>,
  theme: DefaultTheme | undefined,
): NativeStyles => {
  if (!theme) return {};

  let style: NativeStyles = {};

  for (const key in object) {
    type Key = keyof typeof object;
    const styleAttribute =
      object[key as keyof StyledObjectWithMediaQuery<NativeStyles>];

    // @ts-expect-error Sub item of object has same type if it is not function
    style[key as Key] =
      key in object && typeof styleAttribute === 'function'
        ? styleAttribute({ theme })
        : object[key as Key];
  }

  const { width } = Dimensions.get('window');
  for (const mediaKey in theme.breakpoints) {
    type Key = keyof DefaultTheme['breakpoints'];
    if (mediaKey in object && width <= theme.breakpoints[mediaKey as Key]) {
      const item = object[mediaKey as Key] as StyledObject<NativeStyles>;
      style = { ...style, ...prepareStyled(item, theme) };
    }
  }

  return style;
};

export function styled<P>(Component: ComponentType<P>) {
  type HasStyleProperty<T> = T extends { style?: infer U } ? U : never;
  type StyleArgumentItem = StyledObjectWithMediaQuery<HasStyleProperty<P>>;

  type StyleArgument =
    | StyleArgumentItem
    | (({ theme }: { theme: DefaultTheme }) => StyleArgumentItem);

  return (style: StyleArgument) => {
    type PropertiesWithStyle = P & { style?: HasStyleProperty<P> };

    return function StyledComponent(properties: PropertiesWithStyle) {
      const { theme } = useTheme();
      let componentStyleSheet = {};
      if (style) {
        const rawStyleObject: StyleArgumentItem =
          typeof style === 'function' ? style({ theme: theme }) : style;
        componentStyleSheet = prepareStyled(rawStyleObject, theme);
      }

      return (
        <Component
          {...properties}
          style={[componentStyleSheet, properties.style]}
        />
      );
    };
  };
}

export default styled;
