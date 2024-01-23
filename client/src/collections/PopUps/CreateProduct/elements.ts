import styled, { css } from "styled-components";
import { Button as _Button } from "../../../components";
import { CreateProductForm as _CreateProductForm } from "../../Forms";

export const Overlay = styled.div(
  () => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 101;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  `
);

export const CreateProductForm = styled(_CreateProductForm)(() => css``);

export const Button = styled(_Button)(
  () => css`
    width: 100%;
    margin-top: 20px;
  `
);

export const FormContainer = styled.div(
  () => css`
    position: relative;
    z-index: 102;
    padding-top: 12px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 50px;

    border-radius: 10px;
    display: flex;
    flex-direction: column;
    min-width: 350px;
    width: 100%;
    max-width: 414px;

    background-color: #242424;
  `
);

export const Title = styled.h2(
  () => css`
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    text-align: center;
    margin-bottom: 20px;

    color: #d9d9d9;
    font-family: "Space Grotesk", sans-serif;
  `
);
