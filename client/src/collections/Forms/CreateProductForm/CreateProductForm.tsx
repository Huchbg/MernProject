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
  const MAX_FILES_LIMIT = 5;
  const [error, setError] = useState<string>("");
  const [images, setImages] = useState<FileList | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const { control, handleSubmit } = useZodForm(createFormSchema, {
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const submitHandler = handleSubmit(async ({ name, description }) => {
    try {
      const productApiDomain = process.env.productApiDomain || "";

      const productApiClient = new ProductApiClient(productApiDomain);

      // Assuming your API expects an array of images
      const imageArray = images ? Array.from(images) : [];

      // console.log(imageArray);
      const results = await productApiClient.createProduct({
        name,
        description,
        images: imageArray,
      });

      setOpenCreateProduct(false);
      setProducts(([...prev]) => [results, ...prev]);
    } catch (error) {
      setHasError(true);
      console.error(error);

      alert(error);
    }
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;

    // Check if the number of selected files exceeds the limit
    if (selectedFiles && selectedFiles.length <= MAX_FILES_LIMIT) {
      // You can display an error message or take any appropriate action
      setImages(selectedFiles);
    } else {
      alert(`Please select up to ${MAX_FILES_LIMIT} files.`);
      e.target.value = "";
      setImages(null);
    }
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
      <S.FileInput
        type="file"
        name="images"
        multiple
        id="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <S.FileInputLabel htmlFor="file">Choose File</S.FileInputLabel>

      <S.Button variant="secondary" type="submit">
        Create Product
      </S.Button>
      {hasError && <S.ErrorP>Please fill both fields</S.ErrorP>}
    </S.FormContainer>
  );
};
