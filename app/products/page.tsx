"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { FadeInView } from "@/components/FadeInView";
import { Category } from "@/types";
import { AnimatePresence, motion } from "framer-motion";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ページヘッダー */}
        <FadeInView>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs tracking-[0.4em] text-text-muted mb-3">
              COLLECTION
            </p>
            <h1 className="text-3xl sm:text-4xl font-light tracking-wider text-accent">
              全商品一覧
            </h1>
          </div>
        </FadeInView>

        {/* カテゴリフィルター */}
        <FadeInView delay={0.15}>
          <div className="flex justify-center mb-12">
            <CategoryFilter
              selected={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>
        </FadeInView>

        {/* 商品グリッド */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 商品数表示 */}
        <FadeInView delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-xs text-text-muted tracking-wider">
              {filteredProducts.length} ITEMS
            </p>
          </div>
        </FadeInView>
      </div>
    </div>
  );
}
