"use client";

import { useHydrated } from "../lib/useHydrated";
import Link from "next/link";
import { useCart } from "../lib/cart";

export default function CartLink() {
  const count = useCart((state) =>
    state.items.reduce((sum, i) => sum + i.quantity, 0),
  );
  const hydrated = useHydrated();

  return <Link href="/cart">{hydrated ? count : 0}</Link>;
}
