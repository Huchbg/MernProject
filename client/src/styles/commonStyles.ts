import { css, FlattenSimpleInterpolation } from "styled-components";

export interface TypographyStylesProps {
  h1: { regular: FlattenSimpleInterpolation };
  h2: { regular: FlattenSimpleInterpolation };
  h3: { regular: FlattenSimpleInterpolation };
  h4: { regular: FlattenSimpleInterpolation };
  h5: { regular: FlattenSimpleInterpolation };
  h6: { regular: FlattenSimpleInterpolation };
  p: {
    regular: FlattenSimpleInterpolation;
  };
}

export const typography: TypographyStylesProps = {
  h1: {
    regular: css``
  },
  h2: {
    regular: css``
  },
  h3: {
    regular: css``
  },
  h4: {
    regular: css``
  },
  h5: {
    regular: css``
  },
  h6: {
    regular: css``
  },
  p: {
    regular: css``
  }
};
