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
  imagesId,
  images,
  setProducts,
  creator,
  ...props
}: Product & HooksProps & HTMLDivProps) => {
  console.log(creator);
  return (
    <S.Product {...props}>
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
      <S.ProductImagesContiner>
        {imagesId !== "" &&
          images.map((image, index) => (
            <S.ProductImageContainer
              href={image.link}
              target="_blank"
              key={image.link + index}
            >
              <S.Image
                src={image.link}
                alt={image.link}
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </S.ProductImageContainer>
          ))}
      </S.ProductImagesContiner>
      <S.DeleteButton
        onClick={async () => {
          const productApiDomain = process.env.productApiDomain || "";

          const productApiClient = new ProductApiClient(productApiDomain);
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
      <S.UserName>{creator.username}</S.UserName>
    </S.Product>
  );
};
