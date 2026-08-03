"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  useState,
} from "react";


const ROUTE = "/adminDashboard/gears";


export default function GearFilter() {


  const router = useRouter();


  const searchParams =
    useSearchParams();




  const [search,setSearch] =
    useState(
      searchParams.get("search") || ""
    );





  const updateQuery = (
    key:string,
    value:string
  )=>{


    const params =
      new URLSearchParams(
        searchParams.toString()
      );



    if(value){

      params.set(
        key,
        value
      );

    }else{

      params.delete(
        key
      );

    }



    params.set(
      "page",
      "1"
    );



    router.replace(
      `${ROUTE}?${params.toString()}`
    );


  };








  const handleSearch = (
    e:React.FormEvent
  )=>{


    e.preventDefault();


    updateQuery(
      "search",
      search.trim()
    );


  };








  const clearFilter = ()=>{


    setSearch("");



    router.replace(
      `${ROUTE}?page=1`
    );


  };








  return (

    <form

      onSubmit={handleSearch}

      className="
      flex
      gap-3
      mb-6
      flex-wrap
      items-center
      "

    >



      <input

        value={search}


        onChange={(e)=>
          setSearch(
            e.target.value
          )
        }


        placeholder="Search gears..."


        className="
        border
        rounded-lg
        px-4
        py-2
        w-64
        "

      />





      <button

        type="submit"

        className="
        border
        rounded-lg
        px-4
        py-2
        "

      >

        Search

      </button>






      <select
        value={
          searchParams.get("available")
          || ""
        }


        onChange={(e)=>

          updateQuery(
            "available",
            e.target.value
          )

        }


        className="
        border
        rounded-lg
       dark:bg-black
       dark:text-white
        px-4
        py-2
        "

      >

        <option value="">
          All Gears
        </option>


        <option value="true">
          Available
        </option>


        <option value="false">
          Out Of Stock
        </option>


      </select>






      {
        (
          search ||
          searchParams.get("available")
        )
        &&

        <button

          type="button"

          onClick={clearFilter}


          className="
          border
          rounded-lg
          px-4
          py-2
          text-red-600
          "

        >

          Clear

        </button>

      }




    </form>

  );

}