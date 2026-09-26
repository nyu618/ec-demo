"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const formatPrice = (price: number) =>
    `¥${price.toLocaleString()}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link href={`/products/${product.id}`} className="group block">
        {/* 画像コンテナ */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-base-light">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            unoptimized
          />
        </div>

        {/* 商品情報 */}
        <div className="mt-4 space-y-1">
          <h3 className="text-sm font-medium text-text-primary group-hover:text-accent-light transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-xs text-text-muted tracking-wider">
            {product.nameEn}
          </p>
          <p className="text-sm font-semibold text-accent pt-1">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
