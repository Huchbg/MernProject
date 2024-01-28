"use client";

import * as S from "./elements";
import { useEffect, useState } from "react";
import { Product } from "../../models";
import { ProductApiClient } from "@/network";
import { HTMLSectionProps } from "@/types";

export const ProductsMain = ({ ...props }: HTMLSectionProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [openCreateProduct, setOpenCreateProduct] = useState<boolean>(false);

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

  return (
    <>
      <S.ProductsMain {...props}>
        <S.Button
          onClick={() => {
            setOpenCreateProduct(true);
          }}
        >
          Create Product
        </S.Button>
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
