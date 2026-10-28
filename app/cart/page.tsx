"use client";

import CartLink from "../components/CartLink";
import { useCart } from "../lib/cart";
import { useHydrated } from "../lib/useHydrated";

export default function CartPage() {
  const items = useCart((state) => state.items);
  const removeItem = useCart((state) => state.removeItem);
  const increase = useCart((state) => state.increaseItem);
  const decrease = useCart((state) => state.decreaseItem);
  const hydrated = useHydrated();

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0) {
    return <main className="p-8">Your cart is empty.</main>;
  }

  if (!hydrated) return null;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>

      {items.map((i) => (
        <div key={i.id} className="flex justify-between border-b py-3">
          <div>
            <p className="font-semibold">{i.name}</p>
            <p>
              Rs. {i.price} x {i.quantity}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => decrease(i.id)}
              className="border px-2 rounded"
            >
              -
            </button>
            <span>{i.quantity}</span>
            <button
              onClick={() => increase(i.id)}
              className="border px-2 rounded"
            >
              +
            </button>
            <button
              onClick={() => removeItem({ id: i.id })}
              className="text-red-600 ml-4"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <p className="text-xl font-bold mt-6">Total: Rs. {total}</p>
    </main>
  );
}
