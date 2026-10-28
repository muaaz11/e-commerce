"use client";
import { useCart } from "../lib/cart";
import { useHydrated } from "../lib/useHydrated";
export default function AddToCartBtn({
  product,
  disabled,
}: {
  product: { id: number; price: number; name: string };
  disabled: boolean;
}) {
  const addItem = useCart((state) => state.addItem);
  const quantity = useCart(
    (state) => state.items.find((p) => p.id === product.id)?.quantity ?? 0,
  );
  const hydrated = useHydrated();

  return (
    <div className="mt-4">
      <button
        onClick={() => addItem(product)}
        disabled={disabled}
        className="bg-black text-white px-4 py-2 rounded disabled:opacity-40"
      >
        Add to Cart
      </button>
      {hydrated && quantity > 0 && <p className="mt-2">In cart: {quantity}</p>}
    </div>
  );
}
