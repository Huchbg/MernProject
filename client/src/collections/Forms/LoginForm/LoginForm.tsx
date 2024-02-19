import { useZodForm } from "@/hooks";
import * as S from "./elements";
import { loginFormSchema } from "@/schemas";
import { useState, useEffect } from "react";
import { UsersApiClient } from "@/network";
import { useRouter } from "next/navigation";

export const LoginForm = ({ ...props }) => {
  const router = useRouter();

  const [hasError, setHasError] = useState<boolean>(false);
  const [nError, setError] = useState<string>("");

  const { control, handleSubmit } = useZodForm(loginFormSchema, {
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = handleSubmit(async ({ email, password }) => {
    try {
      const ApiDomain = process.env.productApiDomain || "";

      const usersApiClient = new UsersApiClient(ApiDomain);

      const user = await usersApiClient.login({ email, password });

      // console.log(user);

      router.push("/");
    } catch (error: any) {
      setHasError(true);
      setError(error.message);
    }
  });

  return (
    <S.FormContainer {...props} onSubmit={submitHandler}>
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

      <S.Button variant="primary" type="submit">
        Login
      </S.Button>
      {hasError && <S.ErrorP>{nError}</S.ErrorP>}
    </S.FormContainer>
  );
};
