"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";


export default function GearSearch() {

  const router = useRouter();

  const searchParams = useSearchParams();


  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );


  const handleSearch = () => {

    const params = new URLSearchParams(
      searchParams.toString()
    );


    if(search){

      params.set(
        "search",
        search
      );

    }else{

      params.delete("search");

    }


    router.push(
      `/gear?${params.toString()}`
    );

  };



  return (

    <div className="flex gap-3 mb-8">


      <input
        type="text"
        placeholder="Search gear..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="border rounded-md px-4 py-2 w-full"
      />


      <button
        onClick={handleSearch}
        className="bg-black text-white px-5 rounded-md"
      >
        Search
      </button>


    </div>

  );

}