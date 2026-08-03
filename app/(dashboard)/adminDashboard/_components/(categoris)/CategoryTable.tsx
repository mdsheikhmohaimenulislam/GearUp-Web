"use client";

import CategoryAction from "./CategoryAction";

type Category = {
  id: string;

  name: string;

  slug: string;

  createdAt: string;
};

export default function CategoryTable({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div
      className="
border
rounded-xl
overflow-hidden
shadow-sm
"
    >
      <table
        className="
w-full
"
      >
        <thead
          className="
bg-muted
"
        >
          <tr>
            <th className="p-4 text-left">Name</th>

            <th className="p-4 text-left">Slug</th>

            <th className="p-4 text-left">Created</th>

            <th className="p-4 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {categories.length === 0 ? (
            <tr>
              <td
                colSpan={4}
                className="
text-center
p-6
"
              >
                No Category Found
              </td>
            </tr>
          ) : (
            categories.map((category) => (
              <tr
                key={category.id}
                className="
border-t
"
              >
                <td className="p-4 font-medium">{category.name}</td>

                <td className="p-4">{category.slug}</td>

                <td className="p-4">
                  {new Date(category.createdAt).toLocaleDateString()}
                </td>

                <td className="p-4">
                  <CategoryAction category={category} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
