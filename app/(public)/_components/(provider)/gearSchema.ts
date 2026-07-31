import { z } from "zod";

export const gearSchema = z.object({
  title: z.string().min(3, "Title minimum 3 characters"),

  description: z.string().min(10, "Description minimum 10 characters"),
  categoryId: z.string().min(1, "Category required"),

  brand: z.string().min(2, "Brand required"),

  pricePerDay: z.coerce.number().positive("Price must be greater than 0"),

  quantityTotal: z.coerce.number().min(1, "Quantity must be at least 1"),

  quantityAvailable: z.coerce
    .number()
    .min(0, "Available quantity cannot be negative"),

  images: z
    .array(z.string().url("Invalid image URL"))
    .min(1, "At least one image is required"),
});
