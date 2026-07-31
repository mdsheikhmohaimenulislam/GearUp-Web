"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Image from "next/image";

import { createGearAction } from "@/app/(public)/_components/(provider)/createGearAction";
import { getCategoriesAction } from "./(Category fetch)/getCategoriesAction";

const gearSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),

  description: z.string().min(10, "Description must be at least 10 characters"),

  brand: z.string().min(2, "Brand is required"),

  pricePerDay: z.number().positive("Price must be greater than 0"),

  quantityTotal: z.number().min(1, "Quantity must be at least 1"),

  quantityAvailable: z.number().min(0),

  images: z.string().url("Please enter valid image URL"),
  categoryId: z.string().min(1, "Category required"),
});

type GearFormValues = z.infer<typeof gearSchema>;
type Category = {
  id: string;
  name: string;
  slug: string;
};

export default  function AddGearPage() {
  const [loading, setLoading] = useState(false);

  const [imagePreview, setImagePreview] = useState("");

const [categories, setCategories] = useState<Category[]>([]);


  useEffect(() => {

    const loadCategories = async () => {

      const result = await getCategoriesAction();

      setCategories(
        result?.data?.categories || []
      );

    };


    loadCategories();

  }, []);

  const form = useForm<GearFormValues>({
    resolver: zodResolver(gearSchema),

    defaultValues: {
      title: "",
      description: "",
      brand: "",
      categoryId: "",
      pricePerDay: undefined,
      quantityTotal: undefined,
      quantityAvailable: undefined,
      images: "",
    },
  });

  const onSubmit = async (values: GearFormValues) => {
    try {
      setLoading(true);

      const result = await createGearAction({
        title: values.title,

        description: values.description,

        brand: values.brand,

        pricePerDay: values.pricePerDay,

        quantityTotal: values.quantityTotal,

        quantityAvailable: values.quantityAvailable,

        images: [values.images],

     categoryId: values.categoryId
      });

      if (result.success) {
        toast.success(result.message || "Gear created successfully");

        form.reset();

        setImagePreview("");
      } else {
        toast.error(result.message || "Failed to create gear");
      }
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Add New Gear</h1>

        <p className="text-gray-500 mt-2">
          Create equipment for your rental inventory
        </p>
      </div>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="
space-y-6
rounded-xl
border
p-8
shadow-sm
bg-white
dark:bg-black
"
      >
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium">Gear Title</label>

            <input
              {...form.register("title")}
              placeholder="Football"
              className="
w-full
mt-2
border
rounded-md
px-4
py-3
"
            />

            <p className="text-red-500 text-sm">
              {form.formState.errors.title?.message}
            </p>
          </div>

          <div>
            <label className="text-sm font-medium">Brand</label>

            <input
              {...form.register("brand")}
              placeholder="Adidas"
              className="
w-full
mt-2
border
rounded-md
px-4
py-3
"
            />

            <p className="text-red-500 text-sm">
              {form.formState.errors.brand?.message}
            </p>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Category</label>

          <select
            {...form.register("categoryId")}
            className="
      border
      rounded-md
      px-4
      py-3
      w-full
      mt-2
    "
          >
            <option value="">Select Category</option>

            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>

          <p className="text-red-500 text-sm">
            {form.formState.errors.categoryId?.message}
          </p>
        </div>

        <div>
          <label className="text-sm font-medium">Description</label>

          <textarea
            {...form.register("description")}
            placeholder="FIFA Quality Pro Football"
            className="
w-full
mt-2
border
rounded-md
px-4
py-3
h-32
"
          />

          <p className="text-red-500 text-sm">
            {form.formState.errors.description?.message}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div>
            <label className="text-sm font-medium">Price Per Day</label>

            <input
              type="number"
              {...form.register("pricePerDay", {
                valueAsNumber: true,
              })}
              placeholder="250"
              className="border rounded-md px-4 py-3 w-full mt-2"
            />

            <p className="text-red-500 text-sm">
              {form.formState.errors.pricePerDay?.message}
            </p>
          </div>

          <div>
            <label className="text-sm font-medium">Total Quantity</label>

            <input
              type="number"
              {...form.register("quantityTotal", {
                valueAsNumber: true,
              })}
              placeholder="10"
              className="border rounded-md px-4 py-3 w-full mt-2"
            />

            <p className="text-red-500 text-sm">
              {form.formState.errors.quantityTotal?.message}
            </p>
          </div>

          <div>
            <label className="text-sm font-medium">Available Quantity</label>

            <input
              type="number"
              {...form.register("quantityAvailable", {
                valueAsNumber: true,
              })}
              placeholder="5"
              className="border rounded-md px-4 py-3 w-full mt-2"
            />

            <p className="text-red-500 text-sm">
              {form.formState.errors.quantityAvailable?.message}
            </p>
          </div>
        </div>

        {/* Image URL */}

        <div>
          <label className="text-sm font-medium">Image URL</label>

          <input
            {...form.register("images")}
            onChange={(e) => {
              form.setValue("images", e.target.value);

              setImagePreview(e.target.value);
            }}
            placeholder="https://image.com/photo.jpg"
            className="
      w-full
      mt-2
      border
      rounded-md
      px-4
      py-3
    "
          />

          {imagePreview && imagePreview.startsWith("http") && (
            <div className="mt-4">
              <Image
                src={imagePreview}
                alt="Preview"
                width={250}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          )}
        </div>

        <button
          disabled={loading}
          className="
    w-full
    bg-green-700
    text-white
    py-3
    rounded-md
  "
        >
          {loading ? "Creating..." : "Create Gear"}
        </button>
      </form>
    </div>
  );
}
