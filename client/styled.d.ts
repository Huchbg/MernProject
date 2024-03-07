import "styled-components";
import {
  BreakpointsValuesType,
  MaxWidthBreakpointsType,
  MinWidthBreakpointsType,
  TypographyStylesProps,
} from "@/styles";

declare module "styled-components" {
  type Colors =
    | "primary"
    | "secondary"
    | "black"
    | "white"
    | "vividRed"
    | "main"
    | "darkGray"
    | "lightGray"
    | "silver"
    | "gold"
    | "purplish"
    | "yellow"
    | "purple"
    | "bordersGray"
    | "green"
    | "grayUser";

  type Gradients =
    | "blueToPurple"
    | "buttonBackground"
    | "silverToGray"
    | "yellowToGold"
    | "purplishToBlack"
    | "heroImage";

  type Breakpoints = {
    max: MaxWidthBreakpointsType;
    min: MinWidthBreakpointsType;
    val: BreakpointsValuesType;
  };

  export interface DefaultTheme {
    colors: Record<Colors, string>;
    gradients: Record<Gradients, string>;
    typography: TypographyStylesProps;
    breakpoint: Breakpoints;
  }
}
