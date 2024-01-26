import * as S from "./elements";
import { Product } from "@/models";

interface HooksProps {
  setOpenCreateProduct: React.Dispatch<React.SetStateAction<boolean>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const CreateProduct = ({
  setOpenCreateProduct,
  setProducts,
}: HooksProps) => {
  const handleContainerClick = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    setOpenCreateProduct(false);
  };

  const handleContainerKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (
    e
  ) => {
    if (e.key === "Enter") {
      handleContainerClick(e);
    }
  };

  return (
    <S.Overlay
      onClick={handleContainerClick}
      onKeyDown={handleContainerKeyDown}
      role="button"
      tabIndex={0}
    >
      <S.FormContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
        role="presentation"
      >
        <S.Title>Create Product</S.Title>
        <S.CreateProductForm
          setProducts={setProducts}
          setOpenCreateProduct={setOpenCreateProduct}
        />
      </S.FormContainer>
    </S.Overlay>
  );
};
