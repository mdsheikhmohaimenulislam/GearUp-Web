"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Loader2,
} from "lucide-react";

import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { jwtDecode } from "jwt-decode";

import { loginAction } from "../_actions/authAction";
import { loginSchema } from "../_actions/zodSchema";
import { JwtPayload } from "@/lib/types";

import FillDemoAccount from "../../../components/shared/fillDemoAccount";

import GoogleAutoLoginCard from "@/components/shared/GoogleSection";

type LoginValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectTo = searchParams.get("redirect");

  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

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

      if (!result.success) {
        toast.error(result.message || "Login failed");
        return;
      }

      toast.success(result.message || "Login successful");

      if (redirectTo) {
        router.replace(redirectTo);
        return;
      }

      const token = result.data.accessToken;

      const decoded: JwtPayload = jwtDecode<JwtPayload>(token);

      switch (decoded.role) {
        case "CUSTOMER":
          router.replace("/customerDashboard");
          break;

        case "PROVIDER":
          router.replace("/providerDashboard");
          break;

        case "ADMIN":
          router.replace("/adminDashboard");
          break;

        default:
          router.replace("/");
      }
    } catch (error) {
      console.error("Login error:", error);

      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* ================= LEFT SIDE ================= */}
<div
  className="
    relative hidden min-h-screen overflow-hidden
    lg:flex lg:flex-col
    bg-slate-950
    p-8
    text-white
    xl:p-10
  "
>
  {/* Background Image */}
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://i.ibb.co.com/n8zv326q/scott-goodwill-y8-Ngwq34-Ak-unsplash.jpg')",
  }}
/>

  {/* Dark Overlay */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-b
      from-black/60
      via-black/35
      to-black/85
    "
  />

  {/* Green Tint */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-br
      from-green-950/30
      via-transparent
      to-green-950/40
    "
  />

  {/* ================= CONTENT ================= */}
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
          <div className="text-xl font-bold tracking-tight">
            GearUp
          </div>

          <div className="text-xs  text-white font-extrabold">
            Outdoor gear marketplace
          </div>
        </div>
      </Link>
    </div>

    {/* ================= HERO ================= */}
    <div
      className="
        mt-20
        max-w-2xl
        xl:mt-24
      "
    >
      <div
        className="
          mb-5 inline-flex items-center
          rounded-full
          border border-white/20
          bg-white/10
          px-4 py-2
          text-sm text-white/90
          backdrop-blur-md
        "
      >
        <span className="mr-2 h-2 w-2 rounded-full bg-green-400" />
        Adventure starts here
      </div>

      <h1
        className="
          max-w-2xl
          text-5xl font-bold
          leading-[1.05]
          tracking-tight
          xl:text-6xl
        "
      >
        Find your gear.
        <br />

        <span className="text-green-400">
          Start your adventure.
        </span>
      </h1>

      <p
        className="
          mt-5
          max-w-xl
          text-lg
     font-extrabold
          leading-8
          text-white
        "
      >
        Discover quality outdoor gear from trusted
        providers and make your next adventure
        unforgettable.
      </p>

      {/* Trust Row */}
      <div className="mt-7 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-green-400" />

          <span className="text-sm font-extrabold text-white">
            Trusted gear
          </span>
        </div>

        <div className="h-4 w-px bg-white/20" />

        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-green-400" />

          <span className="text-sm font-extrabold text-white">
            Secure platform
          </span>
        </div>
      </div>
    </div>

    {/* ================= BOTTOM ================= */}
    <div
      className="
        mt-auto
        flex items-end justify-between
        gap-6
        pt-12
      "
    >
      <div>
        <p className="text-sm font-extrabold text-green-500 ">
          Rent. Explore. Repeat.
        </p>

        <p className="mt-1 text-xs text-white font-extrabold">
          GearUp — built for people who love the outdoors.
        </p>
      </div>

      <div className="hidden xl:block">
        <div
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full
            border border-white/20
            bg-white/10
            backdrop-blur-md
          "
        >
          <ArrowRight className="h-5 w-5 -rotate-45" />
        </div>
      </div>
    </div>
  </div>
</div>

        {/* ================= RIGHT SIDE ================= */}

        <div
          className="
            flex
            items-center
            justify-center
            px-4
            py-10
            sm:px-6
            lg:px-10
          "
        >
          <div className="w-full max-w-md">
            <div
              className="
                rounded-3xl
                border
                bg-background
                p-8
                shadow-2xl
              "
            >
              {/* Header */}

              <div className="text-center">
                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-green-100
                    text-green-700
                    dark:bg-green-950/40
                    dark:text-green-400
                  "
                >
                  <ShieldCheck className="h-7 w-7" />
                </div>

                <h2 className="mt-5 text-3xl font-bold tracking-tight">
                  Welcome Back!
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  Login to continue to your GearUp account
                </p>
              </div>

              {/* ================= NORMAL LOGIN ================= */}

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-8 space-y-5"
              >
                {/* Email */}

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>

                  <div className="relative">
                    <Mail
                      className="
                        absolute
                        left-3
                        top-1/2
                        h-4
                        w-4
                        -translate-y-1/2
                        text-muted-foreground
                      "
                    />

                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="
                        h-12
                        rounded-xl
                        border
                        pl-10
                        focus-visible:ring-green-500
                      "
                      {...form.register("email")}
                    />
                  </div>

                  <p className="text-xs text-red-500">
                    {form.formState.errors.email?.message}
                  </p>
                </div>

                {/* Password */}

                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>

                  <div className="relative">
                    <Lock
                      className="
                        absolute
                        left-3
                        top-1/2
                        h-4
                        w-4
                        -translate-y-1/2
                        text-muted-foreground
                      "
                    />

                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="
                        h-12
                        rounded-xl
                        border
                        pl-10
                        pr-10
                        focus-visible:ring-green-500
                      "
                      {...form.register("password")}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-muted-foreground
                        hover:text-foreground
                      "
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-red-500">
                    {form.formState.errors.password?.message}
                  </p>
                </div>

                {/* Login Button */}

                <Button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    h-12
                    w-full
                    rounded-xl
                    bg-green-600
                    text-base
                    font-semibold
                    hover:bg-green-700
                  "
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Logging in...
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      Login
                      <ArrowRight
                        className="
                          h-4
                          w-4
                          transition-transform
                          group-hover:translate-x-0.5
                        "
                      />
                    </span>
                  )}
                </Button>
              </form>

              {/* Register */}

              <div className="mt-6 text-center text-sm text-muted-foreground">
                Dont have an account?{" "}
                <Link
                  href="/register"
                  className="
                    font-semibold
                    text-green-700
                    hover:underline
                    dark:text-green-400
                  "
                >
                  Create Account
                </Link>
              </div>

              {/* Divider */}

              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-border" />

                <span className="text-xs text-muted-foreground">OR</span>

                <div className="h-px flex-1 bg-border" />
              </div>

              {/* ================= GOOGLE LOGIN ================= */}

              {googleClientId ? (
                <GoogleAutoLoginCard clientId={googleClientId} />
              ) : (
                <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4 text-center text-sm text-red-500">
                  Google login is not configured.
                </div>
              )}

              {/* Demo Account */}

              <FillDemoAccount form={form} onLogin={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
