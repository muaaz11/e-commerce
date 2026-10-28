import Link from "next/link";
import { pool } from "../app/lib/db";

type Products = {
  id: Number;
  name: String;
  price: Number;
  description: String;
  stock: Number;
};

export default async function Home() {
  const { rows: products } = await pool.query(
    "SELECT id, name, price, description, stock FROM products ORDER BY id",
  );

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-3 gap-4">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/products/${p.id}`}
            className="border rounded p-4 block"
          >
            <h2 className="font-semibold">{p.name}</h2>
            <p className="mt-4 text-gray-600">{p.description}</p>

            {p.stock === 0 ? (
              <p className="text-red-600 text-sm">Out of stock</p>
            ) : (
              <p className="text-green-600 text-sm">{p.stock} left</p>
            )}

            <p className="text-white">Rs. {p.price}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
