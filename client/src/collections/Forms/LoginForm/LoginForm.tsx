import { useZodForm } from "@/hooks";
import * as S from "./elements";
import { loginFormSchema } from "@/schemas";
import { useState } from "react";

export interface LoginFormProps {
  title: string;
  emailInputText: string;
  passwordInputText: string;
  buttonText: string;
  checkBoxText: string;
}

export const LoginForm = ({
  checkBoxText,
  title,
  emailInputText,
  buttonText,
  passwordInputText,
  ...props
}: LoginFormProps) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [nError, setError] = useState<string>("");
  const { control, handleSubmit } = useZodForm(loginFormSchema, {
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const submitHandler = handleSubmit(async ({ email, password }) => {
    // try {
    //   const user = await signIn("credentials", {
    //     email,
    //     password,
    //     redirect: false,
    //   });
    //   if (user?.error) {
    //     setError(user?.error);
    //     setHasError(true);
    //   } else {
    //     setHasError(false);
    //   }
    // } catch (error: any) {
    //   setHasError(true);
    //   setError(error.message);
    // }
  });

  return (
    <S.FormContainer {...props} onSubmit={submitHandler}>
      <S.Input
        control={control}
        name="email"
        type="email"
        placeholder={emailInputText}
      />
      <S.Input
        control={control}
        name="password"
        type="password"
        placeholder={passwordInputText}
      />

      <S.Button variant="primary" type="submit">
        {buttonText}
      </S.Button>
      {hasError && <S.ErrorP>{nError}</S.ErrorP>}
    </S.FormContainer>
  );
};
