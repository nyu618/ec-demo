"use client";

import { motion } from "framer-motion";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface StickyAddToCartProps {
  product: Product;
  selectedVariants: Record<string, string>;
}

export function StickyAddToCart({ product, selectedVariants }: StickyAddToCartProps) {
  const { addItem } = useCart();

  const formatPrice = (price: number) =>
    `¥${price.toLocaleString()}`;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="fixed bottom-0 left-0 right-0 md:hidden z-40 bg-background/90 backdrop-blur-lg border-t border-border px-4 py-3"
    >
      <div className="flex items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{product.name}</p>
          <p className="text-sm font-semibold text-accent">
            {formatPrice(product.price)}
          </p>
        </div>
        <button
          onClick={() => addItem(product, selectedVariants)}
          className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap"
        >
          カートに追加
        </button>
      </div>
    </motion.div>
  );
}
