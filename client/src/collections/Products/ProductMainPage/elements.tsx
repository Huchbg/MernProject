import styled, { css } from "styled-components";

export const Product = styled.div(
  () => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #242424;

    padding: 30px 20px;

    &:not(:first-child) {
      margin-top: 20px;
    }
  `
);

export const Name = styled.h1(
  () => css`
    margin: 0;
    padding: 0;
    color: #d9d9d9;
    font-family: "Space Grotesk", sans-serif;
  `
);
