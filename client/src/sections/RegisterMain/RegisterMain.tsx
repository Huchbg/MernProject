import { useEffect, useState } from "react";
import * as S from "./elements";
import { UsersApiClient } from "@/network";
import { useRouter } from "next/navigation";

export const RegisterMain = () => {
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
    <S.RegisterMain>
      <S.H2>Register</S.H2>
      <S.RegisterForm />
      <S._Link href="/login">Want to login</S._Link>
    </S.RegisterMain>
  );
};
