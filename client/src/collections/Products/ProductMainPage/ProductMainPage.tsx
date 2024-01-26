import { HTMLDivProps } from "@/types";
import { Product } from "../../../models";
import { ProductApiClient } from "@/network";
import * as S from "./elements";
import { useState, useEffect } from "react";
import axios from "axios";

interface HooksProps {
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const ProductMainPage = ({
  _id,
  createdAt,
  description,
  name,
  updatedAt,
  imageURL,
  setProducts,
  ...props
}: Product & HooksProps & HTMLDivProps) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    async function getImages() {
      const response = await axios.get(imageURL ? imageURL : "");

      console.log(response);

      setImages(response.data);
    }

    if (imageURL) {
      try {
        getImages();
      } catch (error) {}
    }
  }, []);

  return (
    <S.Product {...props}>
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
      {images &&
        images.map((image, index) => (
          <S.Image
            width={40}
            height={40}
            src={image}
            alt={image}
            key={image + index}
          />
        ))}
      <S.DeleteButton
        onClick={async () => {
          const productApiClient = new ProductApiClient(
            "http://localhost:5000"
          );
          await productApiClient.deleteProduct(_id);

          setProducts(([...prev]) => {
            const newProducts = prev.filter((product) => product._id !== _id);

            return [...newProducts];
          });
        }}
      >
        <S.ImageContainer>
          <S.Image
            src="/imgs/trash-can (1).png"
            alt="image"
            width={16}
            height={16}
          />
        </S.ImageContainer>
      </S.DeleteButton>
    </S.Product>
  );
};
