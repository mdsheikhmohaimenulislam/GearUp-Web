"use client";

import { useRouter, useSearchParams } from "next/navigation";

const ROUTE = "/adminDashboard/gears";

type Props = {
  page: number;
  totalPage: number;
};

export default function Pagination({ page, totalPage }: Props) {
  const router = useRouter();

  const searchParams = useSearchParams();

  const changePage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPage) {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());

    params.set("page", String(newPage));

    router.replace(`${ROUTE}?${params.toString()}`);
  };

  const pageNumbers = Array.from(
    {
      length: totalPage,
    },
    (_, index) => index + 1,
  );

  return (
    <div
      className="
      flex
      items-center
      justify-between
      mt-8
      "
    >
      {/* Left info */}

      <p
        className="
        text-sm
        text-muted-foreground
        "
      >
        Showing page {page} of {totalPage}
      </p>

      {/* Pagination */}

      <div
        className="
        flex
        items-center
        gap-2
        "
      >
        <button
          aria-label="First page"
          disabled={page === 1}
          onClick={() => changePage(1)}
          className="
          border
          rounded-lg
          px-3
          py-2
          disabled:opacity-40
          "
        >
          {"<<"}
        </button>

        <button
          aria-label="Previous page"
          disabled={page === 1}
          onClick={() => changePage(page - 1)}
          className="
          border
          rounded-lg
          px-4
          py-2
          disabled:opacity-40
          "
        >
          Previous
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => changePage(number)}
            className={`
                rounded-lg
                px-4
                py-2
                border
                transition

                ${page === number ? "bg-black text-white" : "hover:bg-muted"}

                `}
          >
            {number}
          </button>
        ))}

        <button
          aria-label="Next page"
          disabled={page === totalPage}
          onClick={() => changePage(page + 1)}
          className="
          border
          rounded-lg
          px-4
          py-2
          disabled:opacity-40
          "
        >
          Next
        </button>

        <button
          aria-label="Last page"
          disabled={page === totalPage}
          onClick={() => changePage(totalPage)}
          className="
          border
          rounded-lg
          px-3
          py-2
          disabled:opacity-40
          "
        >
          {">>"}
        </button>
      </div>
    </div>
  );
}
