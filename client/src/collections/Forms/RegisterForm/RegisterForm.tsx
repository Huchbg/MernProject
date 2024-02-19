import { useZodForm } from "@/hooks";
import * as S from "./elements";
import { registerFormSchema } from "@/schemas";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UsersApiClient } from "@/network";

export const RegisterForm = ({ ...props }) => {
  const router = useRouter();
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
    try {
      const ApiDomain = process.env.productApiDomain || "";

      const usersApiClient = new UsersApiClient(ApiDomain);

      const user = await usersApiClient.signUp({ username, email, password });

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
