import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
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
import { Loader2 } from "lucide-react"

import { useForm } from "react-hook-form"
import type { LoginInput } from "@/features/auth/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "@approval/shared/schemas/auth"
import { useLogin } from "@/features/auth/hooks/useAuth"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const login = useLogin()

  const {register,handleSubmit,formState: { errors },} = useForm<LoginInput>({resolver: zodResolver(loginSchema),defaultValues: { identifier: "", password: "" },})

  const onSubmit = handleSubmit((values) => login.mutate(values))

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} noValidate>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="identifier">Email or phone</FieldLabel>
                <Input
                  id="identifier"
                  type="text"
                  placeholder="you@example.com"
                  {...register("identifier")}
                />
                <FieldError errors={errors.identifier ? [errors.identifier] : []} />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                />
                <FieldError errors={errors.password ? [errors.password] : []} />
              </Field>
              <Field>
                <Button type="submit" disabled={login.isPending}>
                  {login.isPending && (
                    <Loader2 className="mr-2 size-4 animate-spin" />
                  )}
                  Login
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <Link to="/auth/signup">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
