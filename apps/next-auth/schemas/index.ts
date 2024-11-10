import * as z from "zod";

export const ResetSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Email is required",
    })
    .email({
      message: "Please enter a valid email address",
  }),
});

export const LoginSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Email is required",
    })
    .email({
      message: "Please enter a valid email address",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = LoginSchema.extend({
  email: z
    .string()
    .email({
      message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});