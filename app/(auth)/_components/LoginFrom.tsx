"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { jwtDecode } from "jwt-decode";

import { loginAction } from "../_actions/authAction";
import { loginSchema } from "../_actions/zodSchema";
import { JwtPayload } from "@/lib/types";

type LoginValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  // where user should go after login
  const redirectTo = searchParams.get("redirect");

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginValues) => {
    try {
      setLoading(true);

      const result = await loginAction(values);

      if (result.success) {
        toast.success(result.message || "Login Successful");

        // If user came from a protected page
        if (redirectTo) {
          router.replace(redirectTo);
          return;
        }

        // Otherwise go to role-based dashboard
        const token = result.data.accessToken;
        const decoded: JwtPayload = jwtDecode(token);

        const role = decoded.role;

        if (role === "CUSTOMER") {
          router.replace("/dashboard");
        } else if (role === "PROVIDER") {
          router.replace("/providerDashboard");
        } else if (role === "ADMIN") {
          router.replace("/adminDashboard");
        } else {
          router.replace("/");
        }
      } else {
        toast.error(result.message || "Login Failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-5 rounded-lg border p-6 shadow"
      >
        <h2 className="text-center text-2xl font-bold">Login</h2>

        <div>
          <label className="mb-1 block">Email</label>

          <Input
            type="email"
            placeholder="Enter your email"
            {...form.register("email")}
          />

          <p className="text-sm text-red-500">
            {form.formState.errors.email?.message}
          </p>
        </div>

        <div>
          <label className="mb-1 block">Password</label>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...form.register("password")}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <p className="text-sm text-red-500">
            {form.formState.errors.password?.message}
          </p>
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Loading..." : "Login"}
        </Button>
      </form>
    </div>
  );
}