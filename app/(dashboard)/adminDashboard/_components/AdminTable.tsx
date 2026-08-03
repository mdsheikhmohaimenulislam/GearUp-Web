
import React from "react";

export type Column<T> = {
  key: keyof T | string;
  label: string;
  render?: (item:T)=>React.ReactNode;
};

type Props<T extends { id?: string }> = {
  columns: Column<T>[];

  data: T[];
};

export default function AdminTable<T extends { id?: string }>({
  columns,
  data,
}: Props<T>) {
  return (
    <div className="overflow-x-auto border rounded-xl">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-muted/50">
            {columns.map((column, index) => (
              <th
                key={`${String(column.key)}-${index}`}
                className="p-4 text-left font-semibold"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={row.id ?? rowIndex}
                className="border-b hover:bg-muted/30"
              >
                {columns.map((column, columnIndex) => (
                  <td
                    key={`${String(column.key)}-${columnIndex}`}
                    className="p-4"
                  >
                    {column.render
                      ? column.render(row)
                      : String(row[column.key as keyof T] ?? "")}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="p-6 text-center text-muted-foreground"
              >
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
