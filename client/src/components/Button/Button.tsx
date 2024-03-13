// Вашият компонент
import * as S from "./elements";
import { forwardRef, ForwardedRef } from "react";
import type { HTMLButtonProps } from "../../types";

export interface ButtonProps extends HTMLButtonProps {
  variant?: "primary" | "secondary";
}

export const Button = forwardRef(
  (
    { variant, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return <S.Button {...props} variant={variant} ref={ref} />;
  }
);

Button.displayName = "Button"; // Добавяне на displayName

export default Button;
