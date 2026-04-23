import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "@tanstack/react-router"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { useForm } from "react-hook-form"
import type { SignupInput } from "@/features/auth/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { signupSchema } from "@approval/shared/schemas/auth"
import { useRegister } from "@/features/auth/hooks/useAuth"
import { UserRoles } from "@approval/shared/constants/enums"



export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const signup = useRegister()

  const {register,handleSubmit,formState: { errors },} = useForm<SignupInput>({resolver: zodResolver(signupSchema),defaultValues: { username: "", email: "", phone: "", password: "", role: "USER" },})

  const onSubmit = handleSubmit((values) => signup.mutate(values))

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} noValidate>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input id="username" type="text" placeholder="John Doe" required {...register("username")}/>
                <FieldError errors={errors.username ? [errors.username] : []} />
              </Field>
             <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                  <Input id="firstName" type="text" placeholder="John Doe" required {...register("first_name")}/>
                  <FieldError errors={errors.first_name ? [errors.first_name] : []} />
                </Field>
                <Field>
                  <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                  <Input id="lastName" type="text" placeholder="John Doe" required {...register("last_name")}/>
                  <FieldError errors={errors.last_name ? [errors.last_name] : []} />
                </Field>
             </div>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    {...register("email")}
                  />
                  <FieldError errors={errors.email ? [errors.email] : []} />

                </Field>
                <Field>
                  <FieldLabel htmlFor="phone">Phone</FieldLabel>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="123-456-7890"
                    required
                    {...register("phone")}
                  />
                  <FieldError errors={errors.phone ? [errors.phone] : []} />
                </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" type="password" required {...register("password")} />
                    <FieldError errors={errors.password ? [errors.password] : []} />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <Input id="confirm-password" type="password" required />
                  </Field>
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>

             <Field>
              <FieldLabel>Select User Role</FieldLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a role" />
                </SelectTrigger>
                <SelectContent  {...register("role")}>
                  {Object.values(UserRoles).map((role) => (
                    <SelectItem key={role} value={role}>
                      {role.charAt(0).toUpperCase() + role.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldError errors={errors.role ? [errors.role] : []} />
                </Field>

              <Field>
                <Button type="submit">Create Account</Button>
                <FieldDescription className="text-center">
                  Already have an account?  <Link to="/auth/login">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
