import styled, { css } from "styled-components";
import type { ButtonProps } from "./Button";

const buttonStyles = {
  primary: css`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.buttonGreen};
    border: none;
    transition: opacity 300ms ease;
    box-shadow: 0 2px 0 ${({ theme }) => theme.colors.buttonShadow};
    font-size: 14px;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.white};
    background-color: transparent;
    padding: 0.9em 2em;
    transition: color 500ms ease, background-color 500ms ease;

    &:hover {
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.white};
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  font-family: "Playfair Display";
  font-weight: 700;
  font-size: 0.8em;
  line-height: 1;
  cursor: pointer;
  outline: none;
  border-radius: 50px;
  white-space: nowrap;

  ${({ variant }) => buttonStyles[variant!]}
`;
