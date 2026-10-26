import Link from "next/link";
import { pool } from "../app/lib/db";

export default async function Home() {
  const { rows: products } = await pool.query(
    "SELECT id, name, price FROM products ORDER BY id",
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
            <p>Rs. {p.price}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
