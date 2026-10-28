import { pool } from "@/app/lib/db";
import { notFound } from "next/navigation";
import AddToCartBtn from "@/app/components/AddToCartBtn";
import { useCart } from "@/app/lib/cart";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!Number.isInteger(Number(id))) notFound();

  const { rows } = await pool.query(
    "SELECT id, name, price, description, stock FROM products WHERE id = $1",
    [id],
  );

  const product = rows[0];

  if (!product) notFound();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl mt-2">Rs. {product.price}</p>
      <p className="mt-4 text-gray-600">{product.description}</p>

      {product.stock > 0 ? (
        <p className="mt-4 text-green-600">In stock ({product.stock} left)</p>
      ) : (
        <p className="mt-4 text-red-600">Out of stock</p>
      )}
      <AddToCartBtn
        product={{ id: product.id, name: product.name, price: product.price }}
        disabled={product.stock === 0}
      />
    </main>
  );
}
