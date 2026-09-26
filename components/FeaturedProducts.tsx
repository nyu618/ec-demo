"use client";

import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { FadeInView } from "./FadeInView";
import Link from "next/link";

export function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-20 sm:py-28 px-4 bg-base-light">
      <div className="max-w-7xl mx-auto">
        <FadeInView>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs tracking-[0.4em] text-text-muted mb-3">
              FEATURED
            </p>
            <h2 className="text-2xl sm:text-3xl font-light tracking-wider text-accent">
              おすすめアイテム
            </h2>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <FadeInView delay={0.4}>
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm tracking-wider text-accent border-b border-accent pb-1 hover:text-accent-light hover:border-accent-light transition-colors duration-200"
            >
              VIEW ALL PRODUCTS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
