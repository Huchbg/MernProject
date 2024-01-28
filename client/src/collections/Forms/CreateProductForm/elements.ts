import styled, { css } from "styled-components";
import {
  Button as _Button,
  FormInput as _FormInput,
} from "../../../components";

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
  padding: 1rem 50px;
  position: relative;
  transition: all 0.3s;
  vertical-align: middle;

  max-width: 190px;

  &:hover {
    background-color: darken(#f15d22, 10%);
  }

  background-color: #99c793;
  border-radius: 50px;
  overflow: hidden;

  &::before {
    color: #fff;
    content: "\f382";
    font-size: 100%;
    height: 100%;
    right: 130%;
    line-height: 3.3;
    position: absolute;
    top: 0px;
    transition: all 0.3s;
  }

  &:hover {
    background-color: darken(#99c793, 30%);

    &::before {
      right: 75%;
    }
  }
`;

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
