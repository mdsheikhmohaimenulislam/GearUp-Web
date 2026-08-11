"use client";

import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { toast } from "sonner";

import { LoginValues } from "@/lib/types";

const demoAccounts = [
  {
    role: "CUSTOMER",
    label: "Customer Account",
    email: "loi6@gmail.com",
    password: "12345678",
    badge: "User",
    color: "blue",
  },
  {
    role: "PROVIDER",
    label: "Provider Account",
    email: "tanjirokamado@gmail.com",
    password: "tanjirokamado",
    badge: "Business",
    color: "green",
  },
  {
    role: "ADMIN",
    label: "Management Account",
    email: "admin@gmail.com",
    password: "12345678",
    badge: "Admin",
    color: "purple",
  },
] as const;

type FillDemoAccountProps = {
  form: UseFormReturn<LoginValues>;
  onLogin: (values: LoginValues) => Promise<void>;
};

export default function FillDemoAccount({
  form,
  onLogin,
}: FillDemoAccountProps) {
  const fillDemoAccount = async (account: (typeof demoAccounts)[number]) => {
    const values: LoginValues = {
      email: account.email,
      password: account.password,
    };

    form.setValue("email", account.email, {
      shouldValidate: true,
    });

    form.setValue("password", account.password, {
      shouldValidate: true,
    });

    toast.success(`${account.role} demo account selected`);

    await onLogin(values);
  };

  return (
    <div className="mt-8 rounded-3xl border bg-background p-5 shadow-sm">
      <div className="text-center">
        <h3 className="text-lg font-bold text-foreground">Quick Demo Access</h3>

        <p className="mt-1 text-sm text-muted-foreground">
          Try different GearUp roles instantly
        </p>
      </div>

      <div className="mt-5 space-y-3">
        {demoAccounts.map((account) => (
          <button
            key={account.role}
            type="button"
            onClick={() => fillDemoAccount(account)}
            className="group w-full rounded-2xl border bg-background p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between cursor-pointer ">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    account.color === "blue"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400"
                      : account.color === "green"
                        ? "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400"
                        : "bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400"
                  }`}
                >
                  <ShieldCheck className="h-5 w-5 " />
                </div>

                <div>
                  <p className="font-semibold text-foreground">
                    {account.role}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {account.label}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  {account.badge}
                </span>

                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border bg-muted/30 p-4 text-center">
          <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400">
            <ShieldCheck className="h-4 w-4" />
          </div>

          <p className="mt-2 text-sm font-semibold text-foreground">
            Secure Login
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            Protected authentication
          </p>
        </div>

        <div className="rounded-2xl border bg-muted/30 p-4 text-center">
          <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400">
            <Zap className="h-4 w-4" />
          </div>

          <p className="mt-2 text-sm font-semibold text-foreground">
            Fast Access
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            Instant dashboard entry
          </p>
        </div>
      </div>
    </div>
  );
}
