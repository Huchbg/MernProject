"use client";

import * as S from "./elements";
import { useEffect, useState } from "react";
import { Product } from "../../models";
import { ProductApiClient, UsersApiClient } from "@/network";
import { HTMLSectionProps } from "@/types";
import { useRouter } from "next/navigation";

export const ProductsMain = ({ ...props }: HTMLSectionProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [openCreateProduct, setOpenCreateProduct] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    async function loadProducts() {
      try {
        const productApiDomain = process.env.productApiDomain || "";

        const productApiClient = new ProductApiClient(productApiDomain);

        const products = await productApiClient.fetchProducts();
        setProducts(products);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }

    loadProducts();
  }, []);

  const LogOut = async () => {
    try {
      const productApiDomain = process.env.productApiDomain || "";

      const usersApiClient = new UsersApiClient(productApiDomain);

      await usersApiClient.logout();
      router.push("/login");
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <>
      <S.ProductsMain {...props}>
        <S.ButonsContainer>
          <S.Button
            onClick={() => {
              setOpenCreateProduct(true);
            }}
          >
            Create Product
          </S.Button>
          <S.Button
            onClick={() => {
              LogOut();
            }}
          >
            Log out
          </S.Button>
        </S.ButonsContainer>

        {products.map((product, index) => {
          return (
            <S.ProductMainPage
              {...product}
              key={product._id + index}
              setProducts={setProducts}
            />
          );
        })}
      </S.ProductsMain>
      {openCreateProduct && (
        <S.CreateProduct
          setOpenCreateProduct={setOpenCreateProduct}
          setProducts={setProducts}
        />
      )}
    </>
  );
};
