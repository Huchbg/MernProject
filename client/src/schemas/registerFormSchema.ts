import { z } from "zod";

export const registerFormSchema = z
  .object({
    username: z.string({ invalid_type_error: "" }).nonempty().min(5),
    email: z.string({ invalid_type_error: "" }).nonempty().email(),
    password: z.string({ invalid_type_error: "" }).min(8).max(20),
    confirmPassword: z.string({ invalid_type_error: "" }).min(8).max(20),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerFormSchema>;
