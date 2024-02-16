import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string({ invalid_type_error: "" }).email(),
  password: z.string({ invalid_type_error: "" }).min(8).max(20),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;
