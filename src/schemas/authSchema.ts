import { z } from "zod";
import { UserRoles } from "prisma/generated";

export const signupSchema = z.object({
    username: z.string().min(3, 'Name must be at least 3 characters'),
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    email: z.email('Invalid email address'),
    phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid phone number'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    role: z.enum(UserRoles),
});

export const loginSchema = z.object({
    identifier: z.string().refine((val) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;
        return emailRegex.test(val) || phoneRegex.test(val);
        }, {
        message: "Must be a valid email or phone number"
        }),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});
