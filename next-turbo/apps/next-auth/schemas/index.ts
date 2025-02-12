import { UserRole } from "@prisma/client";
import * as z from "zod";

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(6)),
  newPassword: z.optional(z.string().min(6)),
})
  .refine((data) => {
    if (data.password && !data.newPassword) {
      return false;
    }

    if (data.newPassword && !data.password) {
      return false;
    }

    return true;
    },
    {
      message: "New password is required",
      path: ["newPassword"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});

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
  code: z.optional(z.string()),
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
