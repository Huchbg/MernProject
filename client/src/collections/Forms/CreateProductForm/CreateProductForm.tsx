import * as S from "./elements";
import { useZodForm } from "../../../hooks";
import { createFormSchema } from "../../../schemas";
import { ChangeEvent, useState, FormEvent } from "react";
import { Product } from "@/models";
import { ProductApiClient } from "@/network";

interface HooksProps {
  setOpenCreateProduct: React.Dispatch<React.SetStateAction<boolean>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
export const CreateProductForm = ({
  setOpenCreateProduct,
  setProducts,
  ...props
}: HooksProps) => {
  const [error, setError] = useState<string>("");
  const [image, setImage] = useState({
    image: null as File | null,
  });
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

      if (image != null) {
      }
      const results = await productApiclient.createProduct({
        name: name,
        description: description,
        image: image.image ? image.image : null,
      });

      setOpenCreateProduct(false);
      // setProducts(([...prev]) => [results, ...prev]);
    } catch (error) {
      setHasError(true);
      console.error(error);
      alert(error);
    }
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setImage({ image: selectedFile || null });
  };

  return (
    <S.FormContainer
      {...props}
      onSubmit={submitHandler}
      encType="multipart/form-data"
    >
      <S.Input
        control={control}
        placeholder="Enter Product Name"
        name="name"
        type="text"
      />
      <S.Input
        control={control}
        placeholder="Enter Product Description"
        textarea
        rows={3}
        name="description"
      />
      <S.FileInput type="file" name="image" onChange={handleImageChange} />

      <S.Button variant="secondary" type="submit">
        Create Produc
      </S.Button>
      {hasError && <S.ErrorP>Please fill both fields</S.ErrorP>}
    </S.FormContainer>
  );
};
