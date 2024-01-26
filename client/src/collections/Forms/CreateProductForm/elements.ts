import styled, { css } from "styled-components";
import {
  Button as _Button,
  FormInput as _FormInput,
} from "../../../components";

export const FormContainer = styled.form(
  ({ theme: { colors, breakpoint } }) => css`
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
    padding-bottom: 20px;
    width: 100%;
    text-align: center;
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

export const FileInput = styled.input(
  () => css`
    margin-top: 20px;

    font-size: 16px;
    color: white;
    padding: 10px;
    background: transparent;

    border: 2px solid #4ee1ad;
    border-radius: 5px;
    cursor: pointer;
    outline: none;

    &:hover,
    &:focus {
      border-color: #d9d9d9;
    }

    &::-webkit-file-upload-button {
      visibility: hidden;
    }
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
