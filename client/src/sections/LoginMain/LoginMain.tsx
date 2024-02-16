import * as S from "./elements";

export const LoginMain = () => {
  return (
    <S.LoginMain>
      <S.H2>Login</S.H2>
      <S.LoginForm />
      <S._Link href="/register">Want to register</S._Link>
    </S.LoginMain>
  );
};
