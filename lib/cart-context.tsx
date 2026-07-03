"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { CartItem } from "@/lib/types";

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: CartItem) => void;
  removeItem: (slug: string, topSize: string, bottomSize: string) => void;
  updateQuantity: (slug: string, topSize: string, bottomSize: string, quantity: number) => void;
  subtotal: number;
  count: number;
};

const CartContext = createContext<CartContextValue | null>(null);

function sameLine(a: CartItem, b: Pick<CartItem, "slug" | "topSize" | "bottomSize">) {
  return a.slug === b.slug && a.topSize === b.topSize && a.bottomSize === b.bottomSize;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((line) => sameLine(line, item));
      if (existing) {
        return prev.map((line) =>
          sameLine(line, item) ? { ...line, quantity: line.quantity + item.quantity } : line
        );
      }
      return [...prev, item];
    });
    setIsOpen(true);
  };

  const removeItem = (slug: string, topSize: string, bottomSize: string) => {
    setItems((prev) => prev.filter((line) => !sameLine(line, { slug, topSize, bottomSize })));
  };

  const updateQuantity = (slug: string, topSize: string, bottomSize: string, quantity: number) => {
    setItems((prev) =>
      prev.map((line) =>
        sameLine(line, { slug, topSize, bottomSize }) ? { ...line, quantity: Math.max(1, quantity) } : line
      )
    );
  };

  const subtotal = useMemo(
    () => items.reduce((sum, line) => sum + line.price * line.quantity, 0),
    [items]
  );
  const count = useMemo(() => items.reduce((sum, line) => sum + line.quantity, 0), [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        removeItem,
        updateQuantity,
        subtotal,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
