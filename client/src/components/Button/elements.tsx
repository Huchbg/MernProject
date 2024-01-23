import styled, { css } from "styled-components";
import type { ButtonProps } from "./Button";

const buttonStyles = {
  primary: css`
    height: 40px;
    font-size: 1.5rem;
    outline: transparent;
    background-color: transparent;
    color: #d9d9d9;
    border: transparent;
    border-bottom: 3px solid #4ee1ad;
    cursor: pointer;
    transition: 200ms ease-in-out;
    margin-top: 20px;

    width: 100%;
    max-width: 200px;

    &:hover {
      color: #4ee1ad;
    }
  `,
  secondary: css`
    height: 40px;
    font-size: 1.5rem;
    outline: transparent;
    background-color: transparent;
    color: #d9d9d9;
    border: transparent;
    border: 3px solid #4ee1ad;
    cursor: pointer;
    transition: 200ms ease-in-out;
    margin-top: 20px;
    border-radius: 10px;

    width: 100%;
    max-width: 200px;

    &:hover {
      color: #4ee1ad;
    }
  `,
};

export const Button = styled.button<ButtonProps>(
  ({ variant }) => css`
    ${variant == "primary" && buttonStyles}
    ${variant == "secondary" && buttonStyles}
  `
);
