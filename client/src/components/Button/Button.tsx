import * as S from "./elements";
import { forwardRef, ForwardedRef } from "react";
import type { HTMLButtonProps } from "../../types";

export interface ButtonProps extends HTMLButtonProps {
  variant?: "primary" | "secondary";
}

export const Button = forwardRef(
  (
    { variant = "primary", ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return <S.Button {...props} variant={variant} ref={ref} />;
  }
);
