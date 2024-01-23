import React from "react";
import * as S from "./elements";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { HTMLInputProps } from "../../types";

export interface FormInputProps<T extends FieldValues = any>
  extends Omit<HTMLInputProps, "name" | "defaultValue"> {
  name: Path<T>;
  label?: string;
  control: Control<T, any>;
  variant?: string;
  textarea?: boolean;
  rows?: number; // Add rows for textarea
}

export const FormInput = <T extends FieldValues = any>({
  placeholder,
  variant,
  name,
  control,
  textarea,
  rows, // Include rows prop
  ...props
}: FormInputProps<T>) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, isTouched, isDirty, error },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "" as any,
  });

  const InputComponent = textarea ? "textarea" : "input";

  if (error) {
    console.log("There is error");
  }

  if (error) {
    return (
      <>
        <S.FormInput
          {...props}
          as={InputComponent}
          variant="alert"
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
          rows={textarea ? rows : undefined} // Only include rows for textarea
        />
      </>
    );
  }
  return (
    <>
      <S.FormInput
        {...props}
        as={InputComponent}
        variant={error ? "alert" : variant}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        ref={ref}
        rows={textarea ? rows : undefined} // Only include rows for textarea
      />
    </>
  );
};
