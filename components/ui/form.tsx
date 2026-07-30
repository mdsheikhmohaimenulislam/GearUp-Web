"use client";

import * as React from "react";
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";

import { cn } from "@/lib/utils";

// Context
type FormFieldContextValue = {
  name: string;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({
  name: "",
});

// Form
function Form<TFieldValues extends FieldValues>({
  children,
  ...props
}: UseFormReturn<TFieldValues> & { children: React.ReactNode }) {
  return <FormProvider {...props}>{children}</FormProvider>;
}

// FormField
function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}

// FormItem
function FormItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="form-item"
      className={cn("space-y-2", className)}
      {...props}
    />
  );
}

// FormLabel
function FormLabel({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  const { name } = React.useContext(FormFieldContext);

  return (
    <label
      htmlFor={name}
      className={cn("text-sm font-medium leading-none", className)}
      {...props}
    />
  );
}

// FormControl
function FormControl({ children }: { children: React.ReactNode }) {
  return <div data-slot="form-control">{children}</div>;
}

// FormMessage
function FormMessage({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const { name } = React.useContext(FormFieldContext);

  const { getFieldState, formState } = useFormContext();

  const error = getFieldState(name, formState).error;

  if (!error?.message) return null;

  return (
    <p
      className={cn("text-sm font-medium text-red-500", className)}
      {...props}
    >
      {String(error.message)}
    </p>
  );
}

export {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
};