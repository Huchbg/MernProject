import * as S from "./elements";
import { HTMLHeadingProps } from "types";

export interface H1Props extends HTMLHeadingProps {
  variant?: "regular";
}

export const H1 = ({ variant = "regular", ...props }: H1Props) => {
  return <S.Heading1 {...props} variant={variant} />;
};

export interface H2Props extends HTMLHeadingProps {
  variant?: "regular";
}

export const H2 = ({ variant = "regular", ...props }: H2Props) => {
  return <S.Heading2 {...props} variant={variant} />;
};

export interface H3Props extends HTMLHeadingProps {
  variant?: "regular";
}

export const H3 = ({ variant = "regular", ...props }: H3Props) => {
  return <S.Heading3 {...props} variant={variant} />;
};

export interface H4Props extends HTMLHeadingProps {
  variant?: "regular";
}

export const H4 = ({ variant = "regular", ...props }: H4Props) => {
  return <S.Heading4 {...props} variant={variant} />;
};

export interface H5Props extends HTMLHeadingProps {
  variant?: "regular";
}

export const H5 = ({ variant = "regular", ...props }: H5Props) => {
  return <S.Heading5 {...props} variant={variant} />;
};

export interface H6Props extends HTMLHeadingProps {
  variant?: "regular";
}

export const H6 = ({ variant = "regular", ...props }: H6Props) => {
  return <S.Heading6 {...props} variant={variant} />;
};

export interface ParagraphProps extends HTMLHeadingProps {
  variant?: "regular";
}

export const Paragraph = ({ variant = "regular", ...props }: ParagraphProps) => {
  return <S.Paragraph {...props} variant={variant} />;
};

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph
};
