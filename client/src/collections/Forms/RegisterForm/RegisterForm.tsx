import { useZodForm } from "@/hooks";
import * as S from "./elements";
import { registerFormSchema } from "@/schemas";
import { useState } from "react";

export const RegisterForm = ({ ...props }) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [nError, setError] = useState<string>("");
  const { control, handleSubmit } = useZodForm(registerFormSchema, {
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const submitHandler = handleSubmit(async ({ username, email, password }) => {
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
        name="username"
        type="text"
        placeholder="Enter Username"
      />
      <S.Input
        control={control}
        name="email"
        type="email"
        placeholder="Enter Email"
      />
      <S.Input
        control={control}
        name="password"
        type="password"
        placeholder="Enter Password"
      />
      <S.Input
        control={control}
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />

      <S.Button variant="primary" type="submit">
        Register
      </S.Button>
      {hasError && <S.ErrorP>{nError}</S.ErrorP>}
    </S.FormContainer>
  );
};
