export default async function SingleGearPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Gear Details</h1>

      <p>Gear ID: {id}</p>
    </div>
  );
}