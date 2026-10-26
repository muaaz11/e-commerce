import { pool } from "@/app/lib/db";
import { notFound } from "next/navigation";
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!Number.isInteger(Number(id))) notFound();

  const { rows } = await pool.query(
    "SELECT id, name, price from products where id = $1",
    [id],
  );

  const product = rows[0];

  if (!product) notFound();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl mt-2">Rs. {product.price}</p>
    </main>
  );
}
