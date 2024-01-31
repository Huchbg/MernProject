import styled, { css } from "styled-components";
import {
  FormInput as _FormInput,
  H2 as _H2,
  Button as _Button,
  Paragraph as _Paragraph,
} from "@/components";

export const FormContainer = styled.form(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 14px;
  `
);

export const Input = styled(_FormInput)(
  () => css`
    &:nth-child(2) {
      margin-top: 20px;
    }

    padding: 13px 16px;
  `
) as typeof _FormInput;

export const H2 = styled(_H2)(({ theme: { colors, breakpoint } }) => css``);

export const Button = styled(_Button)(
  () => css`
    margin: 0 auto;
    margin-top: 30px;
  `
);

export const ErrorP = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    text-align: center;
    color: ${colors.vividRed};
    margin: 20px;
  `
);

export const CheckBoxContainer = styled.div(
  () => css`
    margin-top: 20px;
    display: flex;
    align-items: center;
  `
);

export const CheckBoxText = styled(_Paragraph)(
  ({ theme: { colors } }) => css`
    margin-left: 10px;
    color: ${colors.white};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  `
);
