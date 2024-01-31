import { DefaultTheme } from "styled-components";
import { breakpoints, maxWidth, minWidth } from "./breakpoints";
import { typography } from "./commonStyles";

export const theme: DefaultTheme = {
  colors: {
    primary: "#24CAE2",
    secondary: "#1692A4",
    black: "#000000",
    white: "#ffffff",
    vividRed: "#cf2e2e",
    main: "#191919",
    darkGray: "#1F1F1F",
    lightGray: "#929292",
    silver: "#BCBCBC",
    gold: "#DEA30A",
    purplish: "#793E3E",
    yellow: "#F2C44E",
    purple: "#6A6DB0",
    bordersGray: "#ffffff66"
  },
  typography,
  gradients: {
    blueToPurple: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
    buttonBackground: "linear-gradient(180deg, #FFDB7D 0%, #DEA30A 100%)",
    silverToGray: "linear-gradient(180deg, #BCBCBC 0%, #4A4A4A 100%)",
    yellowToGold: "linear-gradient(180deg, #DEA30A 0%, #584001 100%)",
    purplishToBlack: "linear-gradient(180deg, #793E3E 0%, #301818 100%)",
    heroImage:
      "linear-gradient(180deg,rgba(0, 0, 0, 0.00) 0%,rgba(0, 0, 0, 0.50) 100%),url(<path-to-image>)"
  },
  breakpoint: {
    max: maxWidth,
    min: minWidth,
    val: breakpoints
  }
};
