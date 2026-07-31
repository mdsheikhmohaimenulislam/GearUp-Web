import Link from "next/link";

export default function DeleteGearPage() {
  return (
    <div className="max-w-md space-y-6">
      <h1 className="text-3xl font-bold text-red-600">Delete Gear</h1>

      <p>
        Are you sure you want to delete this gear?
      </p>

      <div className="flex gap-3">
        <button className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-500">
          Confirm Delete
        </button>

        <Link
          href="/providerDashboard/gears"
          className="border px-5 py-2 rounded-md hover:bg-gray-100"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
}