"use client";

import * as S from "./elements";
import { useEffect, useState } from "react";
import { Product } from "../../models";
import { CreateProductProps } from "../../collections";
import { ProductApiClient } from "@/network";

export interface ProductsMainProps {
  buttonText: string;
  createProductProps: CreateProductProps;
}

export const ProductsMain = ({
  buttonText,
  createProductProps,
  ...props
}: ProductsMainProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [openCreateProduct, setOpenCreateProduct] = useState<boolean>(false);

  useEffect(() => {
    async function loadProducts() {
      try {
        const productApiClient = new ProductApiClient("http://localhost:5000");

        const products = await productApiClient.fetchNotes();
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
          {buttonText}
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
          {...createProductProps}
        />
      )}
    </>
  );
};
