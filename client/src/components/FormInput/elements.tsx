import styled, { css } from "styled-components";

export const FormInput = styled.input<{ variant?: string }>(
  ({ variant }) => css`
    background-color: #242424;
    color: #d9d9d9;
    border: 2px solid #4ee1ad;
    border-radius: 5px;
    padding: 8px;
    outline: none;
    transition: border-color 0.3s;
    font-size: 20px;

    &:hover,
    &:focus {
      border-color: #d9d9d9;

      ${variant === "alert" &&
      css`
        border: 2px solid red;
      `}
    }

    ${variant === "alert" &&
    css`
      border: 2px solid red;
    `}
  `
);
