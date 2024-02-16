"use client";

import { ProductsMain } from "@/sections";
import { UsersApiClient } from "@/network";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [loading, setlLoading] = useState<boolean>(true);

  useEffect(() => {
    async function load() {
      try {
        const ApiDomain = process.env.productApiDomain || "";

        const usersApiClient = new UsersApiClient(ApiDomain);

        const logged = await usersApiClient.getLoggedInUser();

        if (logged) {
          setlLoading(false);
        } else {
          console.log("Trying for login");
          router.push("/login");
        }
      } catch (error) {
        console.error(error);
        // alert(error);
        router.push("/login");
      }
    }

    load();
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <main>
      <ProductsMain />
    </main>
  );
}
