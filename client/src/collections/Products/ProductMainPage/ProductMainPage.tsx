import { Product } from "../../../models";
import * as S from "./elements";

export const ProductMainPage = ({
  _id,
  createdAt,
  description,
  name,
  updatedAt,
  ...props
}: Product) => {
  return (
    <S.Product {...props}>
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
    </S.Product>
  );
};
