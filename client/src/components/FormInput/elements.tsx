import styled, { css } from "styled-components";

export const FormInput = styled.input<{ variant?: string }>(
  ({ variant }) => css`
    ${variant === "alert" &&
    css`
      border: 2px solid red;
    `}
  `
);
