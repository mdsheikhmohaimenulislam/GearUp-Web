import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string(),
  address: z.string(),
  profilePhoto: z.string().url(),
  role: z.enum(["CUSTOMER", "PROVIDER"]),
});

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),

  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const gearSchema = z.object({
  title: z.string().min(2, "Title is required"),

  description: z.string().min(5, "Description is required"),

  brand: z.string().min(2, "Brand is required"),

  pricePerDay: z.string().min(1, "Price is required"),

  quantityTotal: z.number().min(1, "Quantity must be at least 1"),

  images: z.array(z.string()).min(1, "At least one image required"),

  categoryId: z.string().min(1, "Category is required"),
});
