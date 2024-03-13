import styled, { css } from "styled-components";

import { FormInput as _FormInput, Button as _Button } from "@/components";

export const FormContainer = styled.form(
  () => css`
    width: 100%;

    display: flex;
    flex-direction: column;
  `
);

export const Input = styled(_FormInput)(
  () => css`
    margin-top: 20px;

    &:nth-child(1) {
      margin-top: 0;
    }
  `
) as typeof _FormInput;

export const H2 = styled.h2(
  () => css`
    margin: 0;
    /* padding-bottom: 20px; */
    width: 100%;
    text-align: center;
    margin-top: 30px;
    color: white;
  `
);

export const Button = styled(_Button)(
  () => css`
    margin: 0 auto;
    margin-top: 30px;
  `
);

export const ErrorP = styled.p(
  () => css`
    margin: 0;
    margin-top: 20px;
    text-align: center;
  `
);

export const FileInput = styled.input`
  height: 0;
  overflow: hidden;
  width: 0;
`;

export const FileInputLabel = styled.label`
  background: #f15d22;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Rubik", sans-serif;
  font-size: inherit;
  font-weight: 500;
  margin-bottom: 1rem;
  outline: none;
  padding: 1rem 40px;
  position: relative;
  transition: all 0.3s;
  vertical-align: middle;

  max-width: 190px;

  margin: 0 auto;
  margin-top: 20px;

  word-wrap: unset;

  background-color: #4ee1ad;
  border-radius: 50px;
  overflow: hidden;

  &::before {
    content: ""; /* empty string */
    background: url("/imgs/upload.png") no-repeat; /* path to your image */
    background-size: cover; /* or contain, depending on your needs */
    width: 32px; /* set width and height according to your image size */
    height: 32px;
    display: inline-block; /* or block, depending on your layout */
    position: absolute;
    right: 130%;
    top: 9px;
    transition: all 0.3s;
  }

  &:hover {
    opacity: 0.8;

    &::before {
      right: 77%;
    }
  }
`;

export const H6 = styled.h6(
  () => css`
    margin: 0;
    /* padding-bottom: 20px; */
    width: 100%;
    text-align: center;
  `
);

// export const CheckBoxText = styled(_Paragraph)(
//   ({ theme: { colors } }) => css`
//     margin-left: 10px;
//     color: ${colors.white};
//     font-family: Inter;
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 24px;
//   `
// );
