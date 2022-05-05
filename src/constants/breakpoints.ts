export type Breakpoints = 'MOBILE' | 'TABLET' | 'DESKTOP' | 'DESKTOP_M' | 'DESKTOP_L' | 'DESKTOP_XL';

export type BreakpointMap<T extends Breakpoints> = {
  [key in T]: number;
};

export const breakpoints: BreakpointMap<Breakpoints> = {
  MOBILE: 375,
  TABLET: 768,
  DESKTOP: 1024,
  DESKTOP_M: 1440,
  DESKTOP_L: 1920,
  DESKTOP_XL: 2560,
};