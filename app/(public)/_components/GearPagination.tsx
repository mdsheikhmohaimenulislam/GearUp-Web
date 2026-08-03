"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useRouter, useSearchParams } from "next/navigation";


interface GearPaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  limit: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}


export default function GearPagination({
  currentPage,
  totalPages,
  totalItems,
  limit,
  hasNextPage,
  hasPreviousPage,
}: GearPaginationProps) {


  const router = useRouter();

  const searchParams = useSearchParams();



  const changePage = (page:number)=>{

    const params = new URLSearchParams(
      searchParams.toString()
    );


    params.set(
      "page",
      String(page)
    );


    router.push(
      `/gear?${params.toString()}`
    );

  };



  const pages = Array.from(
    {
      length: totalPages,
    },
    (_, index)=> index + 1
  );


  const start =
    (currentPage - 1) * limit + 1;


  const end =
    Math.min(
      currentPage * limit,
      totalItems
    );



  return (

    <div className="mt-10 space-y-4">


      {/* Showing Text */}

      <p className="text-sm text-muted-foreground dark:text-white text-center">

        Showing {start}-{end} of {totalItems} gears

      </p>



      <Pagination>


        <PaginationContent>


          <PaginationItem>

            <PaginationPrevious

              href="#"

              onClick={(e)=>{

                e.preventDefault();

                if(hasPreviousPage){

                  changePage(
                    currentPage - 1
                  );

                }

              }}

              className={
                !hasPreviousPage
                ?
                "pointer-events-none opacity-50"
                :
                ""
              }

            />

          </PaginationItem>




          {
            pages.map((page)=>(

              <PaginationItem key={page}>


                <PaginationLink

                  href="#"

                  isActive={
                    currentPage === page
                  }

                  onClick={(e)=>{

                    e.preventDefault();

                    changePage(page);

                  }}

                >

                  {page}

                </PaginationLink>


              </PaginationItem>

            ))
          }





          <PaginationItem>


            <PaginationNext

              href="#"

              onClick={(e)=>{

                e.preventDefault();


                if(hasNextPage){

                  changePage(
                    currentPage + 1
                  );

                }

              }}


              className={
                !hasNextPage
                ?
                "pointer-events-none opacity-50"
                :
                ""
              }


            />


          </PaginationItem>



        </PaginationContent>


      </Pagination>


    </div>

  );
}