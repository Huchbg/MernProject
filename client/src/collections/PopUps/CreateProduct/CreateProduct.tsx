import * as S from "./elements";
import { CreateProductFormProps } from "../../Forms";

export interface CreateProductProps {
  formProps: CreateProductFormProps;
  title: string;
}

interface HooksProps {
  setOpenCreateProduct: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateProduct = ({
  setOpenCreateProduct,
  formProps,
  title,
}: CreateProductProps & HooksProps) => {
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
        <S.Title>{title}</S.Title>
        <S.CreateProductForm {...formProps} />
      </S.FormContainer>
    </S.Overlay>
  );
};
