import { useEffect, useState } from "react";
import * as S from "./elements";
import { UsersApiClient } from "@/network";
import { useRouter } from "next/navigation";

export const LoginMain = () => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function loadUser() {
      try {
        setLoading(true);
        const ApiDomain = process.env.productApiDomain || "";

        const usersApiClient = new UsersApiClient(ApiDomain);

        const user = await usersApiClient.getLoggedInUser();

        if (user) router.push("/");
      } catch (error) {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <S.LoginMain>
      <S.H2>Login</S.H2>
      <S.LoginForm />
      <S._Link href="/register">Want to register</S._Link>
    </S.LoginMain>
  );
};
