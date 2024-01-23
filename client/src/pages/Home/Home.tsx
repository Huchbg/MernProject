import * as S from "./elements";
import { ProductsMain } from "../../sections";
import { productMainProps } from "../../data";

export const Home = () => {
  return (
    <S.Home>
      <ProductsMain {...productMainProps} />
    </S.Home>
  );
};
