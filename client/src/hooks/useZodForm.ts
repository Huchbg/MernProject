import {
  useForm,
  FieldValues,
  DeepPartial,
  UseFormProps,
  DefaultValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type ZodFormOptions<TValues extends FieldValues> = Omit<
  UseFormProps<TValues>,
  "resolver" | "defaultValues"
> & {
  defaultValues?:
    | DeepPartial<TValues>
    | (() => DeepPartial<TValues> | Promise<DeepPartial<TValues>>)
    | undefined;
};

export const useZodForm = <TValues extends FieldValues>(
  formSchema: z.Schema<TValues>,
  options?: ZodFormOptions<TValues>
) => {
  const resolver = zodResolver(formSchema);

  const { defaultValues, ...restOptions } = options || {};

  return useForm<TValues>({
    resolver,
    defaultValues: defaultValues as DefaultValues<TValues> | undefined,
    ...restOptions,
  });
};
