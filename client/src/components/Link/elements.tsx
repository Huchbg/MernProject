import styled, { css } from "styled-components";
import { default as NextLink } from "next/link";

export const Link = styled.a<{ variant?: string }>(
  ({ theme: { colors, breakpoint }, variant }) => css`
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.gold};
    border-bottom: 2px solid ${colors.gold};

    &:hover {
      cursor: pointer;
    }

    ${variant === "discord" &&
    css`
      outline: none;
      border: none;
      background-color: ${({ theme }) => theme.colors.purple};

      display: flex;
      justify-content: center;
      align-items: center;
      width: 160px;
      height: 73px;
      border-radius: 10px;

      &:hover {
        opacity: 0.7;
      }
    `}
  `
);
