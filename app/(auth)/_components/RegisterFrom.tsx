"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "sonner";

import { registerAction } from "../_actions/authAction";
import { registerSchema } from "../_actions/zodSchema";

import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

type RegisterValues = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      profilePhoto: "",
      role: "CUSTOMER",
    },
  });

  const onSubmit = async (values: RegisterValues) => {
    try {
      setLoading(true);

      const result = await registerAction(values);

      console.log(result);

      if (result.success) {
        toast.success(result.message);
        setTimeout(() => {
          router.push("/login");
        }, 1000);
        router.refresh();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg border p-6 shadow-sm">
        <h1 className="mb-6 text-center text-2xl font-bold">Create Account</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>

                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>

                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>

                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        {...field}
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>

                  <FormControl>
                    <Input placeholder="018XXXXXXXX" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Address */}

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>

                  <FormControl>
                    <Input placeholder="Dhaka, Bangladesh" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Profile Photo URL */}

            <FormField
              control={form.control}
              name="profilePhoto"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile Photo URL</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="https://example.com/image.jpg"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Role */}

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>

                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="CUSTOMER">Customer</SelectItem>

                      <SelectItem value="PROVIDER">Provider</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating Account..." : "Register"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
