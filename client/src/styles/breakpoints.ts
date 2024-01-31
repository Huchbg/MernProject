export type BreakpointsValuesType = {
  S: number;
  M: number;
  L: number;
  XL: number;
  XXL: number;
};

type MaxWidthType = `(max-width: ${number}px)`;
type MinWidthType = `(min-width: ${number}px)`;

export type MinWidthBreakpointsType = {
  S: MinWidthType;
  M: MinWidthType;
  L: MinWidthType;
  XL: MinWidthType;
  XXL: MinWidthType;
};

export type MaxWidthBreakpointsType = {
  S: MaxWidthType;
  M: MaxWidthType;
  L: MaxWidthType;
  XL: MaxWidthType;
  XXL: MaxWidthType;
};

export const breakpoints: BreakpointsValuesType = {
  S: 599,
  M: 899,
  L: 1199,
  XL: 1499,
  XXL: 2559
};

export const maxWidth: MaxWidthBreakpointsType = {
  S: `(max-width: ${breakpoints.S}px)`,
  M: `(max-width: ${breakpoints.M}px)`,
  L: `(max-width: ${breakpoints.L}px)`,
  XL: `(max-width: ${breakpoints.XL}px)`,
  XXL: `(max-width: ${breakpoints.XXL}px)`
};

export const minWidth: MinWidthBreakpointsType = {
  S: `(min-width: ${breakpoints.S + 1}px)`,
  M: `(min-width: ${breakpoints.M + 1}px)`,
  L: `(min-width: ${breakpoints.L + 1}px)`,
  XL: `(min-width: ${breakpoints.XL + 1}px)`,
  XXL: `(min-width: ${breakpoints.XXL + 1}px)`
};
