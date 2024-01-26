import { HTMLDivProps } from "@/types";
import { Product } from "../../../models";
import { ProductApiClient } from "@/network";
import * as S from "./elements";

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
  console.log(imageURL);
  return (
    <S.Product {...props}>
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
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
        <S.Image
          alt="Lo"
          src={imageURL ? imageURL : ""}
          width={20}
          height={20}
        />
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
