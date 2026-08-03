
type Props = {
  status: string;
};

export default function OrderStatusBadge({ status }: Props) {
  return (
    <span
      className={`
px-3
py-1
rounded-full
text-xs
font-medium

${
  status === "CONFIRMED"
    ? "bg-green-100 text-green-700"
    : status === "PENDING"
      ? "bg-yellow-100 text-yellow-700"
      : status === "RETURNED"
        ? "bg-blue-100 text-blue-700"
        : "bg-red-100 text-red-700"
}

`}
    >
      {status}
    </span>
  );
}
