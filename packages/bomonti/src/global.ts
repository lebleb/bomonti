export interface Breakpoints {
  breakpoints?: { [key: string]: number };
}

export interface DefaultTheme extends Breakpoints {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string & Exclude<keyof any, keyof Breakpoints>]: any;
}
