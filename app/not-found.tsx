import Link from "next/link";

import NotFoundAnimation from "./(public)/_components/not-found";

export default function NotFound() {
  return (
    <div className="-mt-10 min-h-screen flex items-center justify-center px-5">
      <div className="text-center space-y-6">

        <div className="flex justify-center">
      <NotFoundAnimation />
        </div>


        <h2 className="text-4xl font-bold">
          404 - Page Not Found
        </h2>


        <p className=" text-lg">
          Sorry, the page you are looking for does not exist.
        </p>


        <Link
          href="/"
          className="inline-block rounded-md bg-green-700 px-6 py-3 text-white hover:bg-green-600 transition"
        >
          Return Home
        </Link>

      </div>
    </div>
  );
}