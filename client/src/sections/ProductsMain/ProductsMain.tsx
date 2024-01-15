import { useEffect, useState } from "react";
import * as S from "./elements";
import axios from "axios";
import { Product } from "../../models";

export const ProductsMain = ({ ...props }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const results = await axios.get("/api/products");
        const products = results.data;
        setProducts(products);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }

    loadProducts();
  }, []);

  return (
    <S.ProductsMain {...props}>
      {products.map((product, index) => {
        return <S.ProductMainPage {...product} />;
      })}
    </S.ProductsMain>
  );
};
