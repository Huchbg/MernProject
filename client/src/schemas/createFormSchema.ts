import { z } from "zod";

export const createFormSchema = z.object({
  name: z.string({ invalid_type_error: "" }).min(1),
  description: z.string({ invalid_type_error: "" }).min(10),
});

export type CreateFormValues = z.infer<typeof createFormSchema>;
