import * as S from "./elements";

export const RegisterMain = () => {
  return (
    <S.RegisterMain>
      <S.H2>Register</S.H2>
      <S.RegisterForm />
      <S._Link href="/login">Want to login</S._Link>
    </S.RegisterMain>
  );
};
