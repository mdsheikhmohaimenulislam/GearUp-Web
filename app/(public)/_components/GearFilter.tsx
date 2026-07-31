"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Category = {
  id: string;
  name: string;
  slug: string;
};

type GearFilterProps = {
  categories: Category[];
};

export default function GearFilter({ categories }: GearFilterProps) {
  const router = useRouter();

  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const [category, setCategory] = useState(searchParams.get("slug") || "");

  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");

  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");

  const [sortOrder, setSortOrder] = useState(
    searchParams.get("sortOrder") || "desc",
  );

  const [sortBy, setSortBy] = useState(
    searchParams.get("sortBy") || "createdAt",
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams();

      if (search) {
        params.set("search", search);
      }

      if (category) {
        params.set("slug", category);
      }

      if (minPrice) {
        params.set("minPrice", minPrice);
      }

      if (maxPrice) {
        params.set("maxPrice", maxPrice);
      }

      params.set("sortBy", sortBy);

      params.set("sortOrder", sortOrder);

      router.push(`/gear?${params.toString()}`);
    }, 1000);

    return () => clearTimeout(timer);
  }, [search, category, minPrice, maxPrice, sortBy, sortOrder, router]);

  return (
    <div className="grid md:grid-cols-6 gap-4 mb-8">
      <input
        type="text"
        placeholder="Search gear"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-md px-4 py-2"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-md px-4 py-2 dark:bg-black cursor-pointer"
      >
        <option value="">All Category</option>

        {categories.map((cat) => (
          <option key={cat.id} value={cat.slug}>
            {cat.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Min price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="border rounded-md px-4 py-2"
      />

      <input
        type="number"
        placeholder="Max price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="border rounded-md px-4 py-2"
      />

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border rounded-md px-4 py-2"
      >
        <option value="createdAt">Date</option>

        <option value="pricePerDay">Price</option>

        <option value="title">Name</option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="border rounded-md px-4 py-2 dark:bg-black cursor-pointer"
      >
        <option   value="desc">Descending ↓</option>

        <option  value="asc">Ascending ↑</option>
      </select>
    </div>
  );
}
