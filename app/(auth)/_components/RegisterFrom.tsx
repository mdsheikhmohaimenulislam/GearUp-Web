
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  Phone,
  MapPin,
  ImageIcon,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";

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

import { registerAction } from "../_actions/authAction";
import { registerSchema } from "../_actions/zodSchema";

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

      if (!result.success) {
        toast.error(result.message || "Registration failed");
        return;
      }

      toast.success(result.message || "Account created successfully");

      const role = result.data.user.role;

      if (role === "CUSTOMER") {
        router.push("/customerDashboard");
      } else if (role === "PROVIDER") {
        router.push("/providerDashboard");
      } else {
        router.push("/");
      }

      router.refresh();
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-background to-emerald-50 px-4 py-10 dark:from-background dark:via-background dark:to-green-950/20">
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-3xl border bg-background shadow-2xl lg:grid-cols-2">
        {/* Left Side */}
<div
  className="
    relative hidden min-h-full overflow-hidden
    p-8 text-white
    lg:flex lg:flex-col
    xl:p-10
  "
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://i.ibb.co.com/dsYhhH86/patrick-hendry-e-Dg-Uy-Gu93-Yw-unsplash.jpg')",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Green Tint */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-br
      from-green-950/40
      via-transparent
      to-green-950/60
    "
  />

  {/* Content */}
  <div className="relative z-10 flex h-full flex-col">
    {/* ================= LOGO ================= */}
    <div>
      <Link
        href="/"
        className="inline-flex items-center gap-3"
      >
        <div
          className="
            flex h-11 w-11 items-center justify-center
            rounded-xl
            bg-white/10
            ring-1 ring-white/20
            backdrop-blur-md
          "
        >
          <ShieldCheck className="h-5 w-5" />
        </div>

        <div>
          <p className="text-xl font-bold tracking-tight">
            GearUp
          </p>

          <p className="text-xs font-medium text-white/70">
            Outdoor gear marketplace
          </p>
        </div>
      </Link>
    </div>

    {/* ================= HERO ================= */}
    <div className="mt-20 max-w-xl xl:mt-24">
      {/* Badge */}
      <div
        className="
          inline-flex items-center gap-2
          rounded-full
          border border-white/20
          bg-black/20
          px-4 py-2
          text-sm font-medium
          text-white/90
          backdrop-blur-md
        "
      >
        <span className="h-2 w-2 rounded-full bg-green-400" />
        Join GearUp
      </div>

      {/* Heading */}
      <h1
        className="
          mt-6
          text-4xl font-bold
          leading-[1.08]
          tracking-tight
          xl:text-5xl
        "
      >
        Your next adventure
        <br />

        <span className="text-green-400">
          starts with the right gear.
        </span>
      </h1>

      {/* Description */}
      <p
        className="
          mt-5
          max-w-lg
          text-base
          leading-7
         text-white font-extrabold
        "
      >
        Create your GearUp account and discover
        quality outdoor equipment from trusted
        providers—all in one place.
      </p>

      {/* Features */}
      <div className="mt-8 space-y-3">
        {/* Secure Account */}
        <div
          className="
            flex items-center gap-4
            rounded-2xl
            border border-white/15
            bg-black/20
            px-4 py-3
            backdrop-blur-md
          "
        >
          <div
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-xl
              bg-green-500/20
              text-green-400
            "
          >
            <ShieldCheck className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm font-semibold">
              Secure Account
            </p>

            <p className="mt-0.5 text-xs text-white">
              Your account information stays protected.
            </p>
          </div>
        </div>

        {/* Easy Access */}
        <div
          className="
            flex items-center gap-4
            rounded-2xl
            border border-white/15
            bg-black/20
            px-4 py-3
            backdrop-blur-md
          "
        >
          <div
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-xl
              bg-green-500/20
              text-green-400
            "
          >
            <ArrowRight className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm font-semibold">
              Easy Access
            </p>

            <p className="mt-0.5 text-xs text-white">
              Manage your rentals from one dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* ================= FOOTER ================= */}
    <div className="mt-auto pt-10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-extrabold text-green-500">
            Rent. Explore. Repeat.
          </p>

          <p className="mt-1 text-xs text-white font-extrabold">
            GearUp — built for people who love the outdoors.
          </p>
        </div>

        <div className="hidden xl:flex">
          <div
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-white/20
              bg-white/10
              backdrop-blur-md
            "
          >
            <ArrowRight className="h-4 w-4 -rotate-45" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-5 sm:p-8 lg:p-10">
          <div className="w-full max-w-lg">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400">
                <User className="h-7 w-7" />
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight">
                Create your account
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Join GearUp and start exploring today
              </p>
            </div>

            {/* Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>

                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                          <Input
                            placeholder="Enter your full name"
                            className="h-12 rounded-xl pl-10"
                            {...field}
                          />
                        </div>
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
                      <FormLabel>Email Address</FormLabel>

                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                          <Input
                            type="email"
                            placeholder="you@example.com"
                            className="h-12 rounded-xl pl-10"
                            {...field}
                          />
                        </div>
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
                          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            className="h-12 rounded-xl pl-10 pr-10"
                            {...field}
                          />

                          <button
                            type="button"
                            onClick={() =>
                              setShowPassword((previous) => !previous)
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                            aria-label={
                              showPassword
                                ? "Hide password"
                                : "Show password"
                            }
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone + Role */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>

                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                              placeholder="018XXXXXXXX"
                              className="h-12 rounded-xl pl-10"
                              {...field}
                            />
                          </div>
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
                        <FormLabel>Account Type</FormLabel>

                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-xl">
                              <SelectValue placeholder="Select account type" />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            <SelectItem value="CUSTOMER">
                              Customer
                            </SelectItem>

                            <SelectItem value="PROVIDER">
                              Provider
                            </SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Address */}
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>

                      <FormControl>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                          <Input
                            placeholder="Dhaka, Bangladesh"
                            className="h-12 rounded-xl pl-10"
                            {...field}
                          />
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Profile Photo */}
                <FormField
                  control={form.control}
                  name="profilePhoto"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profile Photo URL</FormLabel>

                      <FormControl>
                        <div className="relative">
                          <ImageIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                          <Input
                            placeholder="https://example.com/image.jpg"
                            className="h-12 rounded-xl pl-10"
                            {...field}
                          />
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="group h-12 w-full rounded-xl bg-green-600 text-base font-semibold hover:bg-green-700"
                >
                  {loading ? (
                    "Creating Account..."
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      Create Account
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>
              </form>
            </Form>

            {/* Login Link */}
            <div className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-green-700 hover:underline dark:text-green-400"
              >
                Login
              </Link>
            </div>

            {/* Security Info */}
            <div className="mt-6 rounded-2xl border bg-muted/40 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
                Secure Registration
              </div>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Your account information is protected with secure
                authentication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

