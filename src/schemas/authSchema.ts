import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const registrationSchema = z.object({
  name: z.string().min(4, {
    message: "Invalid name",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export type RegistrationFormInputs = z.infer<typeof registrationSchema>;

export type LoginFormInputs = z.infer<typeof loginSchema>;
