"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Router } from "lucide-react";
import { loginAction } from "../_actions/authAction";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    try {
      const result = await loginAction(data);

      
      if (result.success) {
        toast.success(result.message || "Login Successful");

        router.push("/");
      } else {
        toast.error(result.message || "Login Failed");
      }
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-5 rounded-lg border p-6 shadow"
      >
        <h2 className="text-center text-2xl font-bold">Login</h2>

        <div>
          <label className="mb-1 block">Email</label>

          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="off"
            suppressHydrationWarning
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="mb-1 block">Password</label>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              autoComplete="off"
              className="w-full rounded border px-3 py-2 pr-10"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer"
        >
          {loading ? "Loading..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
