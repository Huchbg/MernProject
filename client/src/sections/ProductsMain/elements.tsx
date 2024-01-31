import {
  ProductMainPage as _ProductMainPage,
  CreateProduct as _CreateProduct,
} from "../../collections";
import styled, { css } from "styled-components";

export const ProductsMain = styled.section(
  ({ theme: { breakpoint } }) => css`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 50px;
  `
);

export const ProductMainPage = styled(_ProductMainPage)(() => css``);

export const Button = styled.button(
  () => css`
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
  `
);

export const CreateProduct = styled(_CreateProduct)(() => css``);
