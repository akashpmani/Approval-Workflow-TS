import { z } from "zod"
import { USER_ROLE_VALUES } from "../constants/enums"

const phoneRegex = /^[6-9]\d{9}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const signupSchema = z.object({
  username: z.string().min(3, "Name must be at least 3 characters"),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email address"),
  phone: z.string().regex(phoneRegex, "Invalid phone number"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(USER_ROLE_VALUES),
})
export type SignupInput = z.infer<typeof signupSchema>

export const loginSchema = z.object({
  identifier: z
    .string()
    .refine((val) => emailRegex.test(val) || phoneRegex.test(val), {
      message: "Must be a valid email or phone number",
    }),
  password: z.string().min(6, "Password must be at least 6 characters"),
})
export type LoginInput = z.infer<typeof loginSchema>

export const authUserSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string(),
  first_name: z.string().nullable(),
  last_name: z.string().nullable(),
  phone: z.string().nullable(),
  role: z.enum(USER_ROLE_VALUES),
  is_active: z.boolean(),
  is_verified: z.boolean(),
})
export type AuthUser = z.infer<typeof authUserSchema>

export const loginResponseSchema = z.object({
  token: z.string(),
  user: authUserSchema,
})
export type LoginResponse = z.infer<typeof loginResponseSchema>
