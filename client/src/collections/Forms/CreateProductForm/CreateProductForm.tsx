import * as S from "./elements";
import { useZodForm } from "../../../hooks";
import { createFormSchema } from "../../../schemas";
import { useState } from "react";
import { Product } from "@/models";
import { ProductApiClient } from "@/network";

export interface CreateProductFormProps {
  productNameInputText: string;
  productDescriptionInputText: string;
  buttonText: string;
}

interface HooksProps {
  setOpenCreateProduct: React.Dispatch<React.SetStateAction<boolean>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
export const CreateProductForm = ({
  buttonText,
  productNameInputText,
  productDescriptionInputText,
  setOpenCreateProduct,
  setProducts,
  ...props
}: CreateProductFormProps & HooksProps) => {
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
      const productApiclient = new ProductApiClient("http://localhost:5000");

      const results = await productApiclient.createProduct({
        name: name,
        description: description,
      });

      setOpenCreateProduct(false);
      setProducts(([...prev]) => [...prev, results]);
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
