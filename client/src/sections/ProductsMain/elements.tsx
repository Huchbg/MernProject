import { ProductMainPage as _ProductMainPage } from "../../collections";
import styled, { css } from "styled-components";

export const ProductsMain = styled.section(
  () => css`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 50px;
  `
);

export const ProductMainPage = styled(_ProductMainPage)(() => css``);
