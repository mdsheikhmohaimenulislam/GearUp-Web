"use client";
import { useState } from "react";
import Image from "next/image";
import { PackageCheck } from "lucide-react";
type Props = {
  images: string[];
  title: string;
  categoryName?: string;
  quantityAvailable: number;
  pricePerDay: string | number;
  brand?: string;
};
const GearGallery = ({
  images,
  title,
  categoryName,
  quantityAvailable,
  pricePerDay,
  brand,
}: Props) => {
  const [selectedImage, setSelectedImage] = useState(images?.[0] || "");
  return (
    <div className="space-y-5">
      {" "}
      {/* Main Image */}{" "}
      <div className="relative overflow-hidden rounded-[28px] border bg-white dark:bg-zinc-950 shadow-xl">
        {" "}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          {" "}
          <span className="rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm border">
            {" "}
            {categoryName}{" "}
          </span>{" "}
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold shadow-sm border backdrop-blur ${quantityAvailable > 0 ? "bg-green-100/90 text-green-700 border-green-200" : "bg-red-100/90 text-red-700 border-red-200"}`}
          >
            {" "}
            {quantityAvailable > 0 ? "Available" : "Out of stock"}{" "}
          </span>{" "}
        </div>{" "}
        <div className="group relative h-[500px] overflow-hidden">
          {" "}
          {selectedImage ? (
            <>
              {" "}
              <Image
                src={selectedImage}
                alt={title}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />{" "}
              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between">
                {" "}
                <div className="text-white">
                  {" "}
                  <p className="text-sm font-medium opacity-90">
                    {" "}
                    {brand}{" "}
                  </p>{" "}
                  <h3 className="text-lg font-semibold"> {title} </h3>{" "}
                </div>{" "}
                <div className="rounded-2xl bg-white/15 backdrop-blur-md px-4 py-2 text-white border border-white/20 shadow-lg">
                  {" "}
                  <p className="text-xs opacity-80"> Per day </p>{" "}
                  <p className="text-lg font-bold"> ৳{pricePerDay} </p>{" "}
                </div>{" "}
              </div>{" "}
            </>
          ) : (
            <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-900 dark:to-zinc-800">
              {" "}
              <div className="text-center text-gray-500">
                {" "}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-zinc-900 shadow-sm border">
                  {" "}
                  <PackageCheck size={28} />{" "}
                </div>{" "}
                <p className="font-medium"> No image available </p>{" "}
              </div>{" "}
            </div>
          )}{" "}
        </div>{" "}
      </div>{" "}
      {/* Thumbnails */}{" "}
      {images?.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {" "}
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`group relative h-24 overflow-hidden rounded-2xl border bg-white dark:bg-zinc-950 shadow-sm transition-all duration-300 ${selectedImage === image ? "ring-2 ring-green-600 border-green-200 shadow-md scale-[1.02]" : "hover:ring-2 hover:ring-green-400 hover:-translate-y-0.5"}`}
            >
              {" "}
              <Image
                src={image}
                alt={`${title} ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="120px"
              />{" "}
            </button>
          ))}{" "}
        </div>
      )}{" "}
    </div>
  );
};
export default GearGallery;
