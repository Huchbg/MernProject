import styled, { css } from "styled-components";
import { LoginForm as _LoginForm } from "@/collections";
import { H2 as _H2 } from "@/components";
import Link from "next/link";

export const LoginMain = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: relative;
    justify-content: center;
    align-items: center;
  `
);

export const LoginForm = styled(_LoginForm)(
  () => css`
    padding: 20px;
    border-radius: 10px;
    border: 2px solid gray;
  `
);
export const H2 = styled(_H2)(
  () => css`
    color: white;
    padding-bottom: 10px;
  `
);

export const _Link = styled(Link)(
  ({ theme: { colors } }) => css`
    color: ${colors.green};
    margin-top: 15px;
  `
);
