"use client";

import { use, useState } from "react";
import { products } from "@/data/products";
import { ProductGallery } from "@/components/ProductGallery";
import { StickyAddToCart } from "@/components/StickyAddToCart";
import { FadeInView } from "@/components/FadeInView";
import { useCart } from "@/context/CartContext";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  // バリエーション選択状態
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>(() => {
    if (!product) return {};
    const initial: Record<string, string> = {};
    product.variants.forEach((v) => {
      initial[v.type] = v.options[0];
    });
    return initial;
  });

  if (!product) {
    notFound();
  }

  const formatPrice = (price: number) =>
    `¥${price.toLocaleString()}`;

  const handleVariantChange = (type: string, value: string) => {
    setSelectedVariants((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <>
      <div className="pt-24 sm:pt-32 pb-32 md:pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* パンくずリスト */}
          <FadeInView>
            <nav className="mb-8 sm:mb-12">
              <ol className="flex items-center gap-2 text-xs text-text-muted">
                <li>
                  <Link
                    href="/"
                    className="hover:text-accent transition-colors"
                  >
                    HOME
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href="/products"
                    className="hover:text-accent transition-colors"
                  >
                    PRODUCTS
                  </Link>
                </li>
                <li>/</li>
                <li className="text-text-primary">{product.name}</li>
              </ol>
            </nav>
          </FadeInView>

          {/* メインコンテンツ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* 左: 画像ギャラリー */}
            <FadeInView direction="left">
              <ProductGallery
                images={product.images}
                productName={product.name}
              />
            </FadeInView>

            {/* 右: 商品情報 */}
            <FadeInView direction="right" delay={0.15}>
              <div className="space-y-8">
                {/* 商品名・価格 */}
                <div>
                  <p className="text-xs tracking-[0.3em] text-text-muted mb-2">
                    {product.nameEn.toUpperCase()}
                  </p>
                  <h1 className="text-2xl sm:text-3xl font-medium tracking-wide text-accent mb-4">
                    {product.name}
                  </h1>
                  <p className="text-2xl font-semibold text-accent">
                    {formatPrice(product.price)}
                  </p>
                  <p className="text-xs text-text-muted mt-1">税込</p>
                </div>

                {/* 区切り線 */}
                <div className="h-px bg-border" />

                {/* バリエーション選択 */}
                <div className="space-y-6">
                  {product.variants.map((variant) => (
                    <div key={variant.type}>
                      <label className="block text-sm font-medium text-text-primary mb-3">
                        {variant.type}
                        <span className="ml-2 text-text-muted font-normal">
                          {selectedVariants[variant.type]}
                        </span>
                      </label>
                      <select
                        value={selectedVariants[variant.type]}
                        onChange={(e) =>
                          handleVariantChange(variant.type, e.target.value)
                        }
                        className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-base text-text-primary appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200"
                      >
                        {variant.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>

                {/* カートに追加ボタン (デスクトップ) */}
                <button
                  onClick={() => addItem(product, selectedVariants)}
                  className="hidden md:block w-full bg-accent text-base py-4 rounded-lg text-sm font-medium tracking-wider hover:bg-accent-hover active:scale-[0.98] transition-all duration-200"
                >
                  カートに追加する
                </button>

                {/* 区切り線 */}
                <div className="h-px bg-border" />

                {/* 商品説明 */}
                <div>
                  <h2 className="text-sm font-medium text-text-primary mb-3">
                    商品について
                  </h2>
                  <p className="text-sm text-text-secondary leading-loose">
                    {product.description}
                  </p>
                </div>

                {/* 配送情報 */}
                <div className="bg-base-light rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-text-muted flex-shrink-0 mt-0.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        送料無料
                      </p>
                      <p className="text-xs text-text-muted mt-1">
                        ¥10,000以上のお買い上げで送料無料。通常配送は2〜4営業日でお届けします。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>

      {/* モバイル追従カートボタン */}
      <StickyAddToCart product={product} selectedVariants={selectedVariants} />
    </>
  );
}
