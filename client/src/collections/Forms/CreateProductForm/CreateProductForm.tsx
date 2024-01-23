import * as S from "./elements";
import { useZodForm } from "../../../hooks";
import { createFormSchema } from "../../../schemas";
import { useState } from "react";
import * as ProductsApi from "../../../network/products_api";

export interface CreateProductFormProps {
  productNameInputText: string;
  productDescriptionInputText: string;
  buttonText: string;
}

export const CreateProductForm = ({
  buttonText,
  productNameInputText,
  productDescriptionInputText,
  ...props
}: CreateProductFormProps) => {
  const [error, setError] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);
  const { control, handleSubmit } = useZodForm(createFormSchema, {
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const submitHandler = handleSubmit(async ({ name, description }) => {
    try {
      const results = await ProductsApi.createProduct({
        name: name,
        description: description,
      });
    } catch (error) {
      setHasError(true);
      console.error(error);
      alert(error);
    }
  });

  return (
    <S.FormContainer {...props} onSubmit={submitHandler}>
      <S.Input
        control={control}
        placeholder={productDescriptionInputText}
        name="name"
        type="text"
      />
      <S.Input
        control={control}
        placeholder={productNameInputText}
        textarea
        rows={3}
        name="description"
      />

      <S.Button variant="secondary" type="submit">
        {buttonText}
      </S.Button>
      {hasError && <S.ErrorP>Please fill both fields</S.ErrorP>}
    </S.FormContainer>
  );
};
