import styled, { css } from "styled-components";
import { Image as _Image, H3 as _H3 } from "@/components";
import Link from "next/link";

export const Product = styled.div(
  () => css`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #242424;

    padding: 30px 20px;

    padding-bottom: 50px;

    &:not(:first-child) {
      margin-top: 20px;
    }
  `
);

export const Name = styled.h1(
  () => css`
    margin: 0;
    padding: 0;
    font-size: 30px;
    color: #d9d9d9;
    font-family: "Space Grotesk", sans-serif;
  `
);

export const DeleteButton = styled.button(
  () => css`
    height: 30px;
    width: 30px;
    outline: transparent;
    background-color: #242424;
    color: #d9d9d9;
    border: transparent;
    border: 2px solid #e4270e;
    cursor: pointer;
    transition: 200ms ease-in-out;
    border-radius: 50%;

    position: absolute;

    top: -15px;
    right: -15px;

    &:hover,
    :focus {
      background-color: #e4270e;
    }
  `
);

export const Description = styled.h3(
  () => css`
    font-size: 18px;
    margin: 0;
    margin-top: 20px;
    padding: 0;
    color: #ffffff;
    font-family: "Space Grotesk", sans-serif;
  `
);

export const ImageContainer = styled.div(
  () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `
);

export const Image = styled(_Image)(() => css``);

export const ProductImageContainer = styled(Link)(
  () => css`
    margin: 10px;
    width: 100%;
    max-width: 200px;
    position: relative;
    height: 100%;
    min-height: 200px;
  `
);

export const ProductImagesContiner = styled.div(
  () => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  `
);

export const UserName = styled(_H3)(
  ({ theme: { colors } }) => css`
    color: ${colors.grayUser};
    font-size: 15px;
    position: absolute;
    bottom: 10px;
  `
);
