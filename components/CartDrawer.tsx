"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const [showToast, setShowToast] = useState(false);
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } =
    useCart();

  /** 価格フォーマット */
  const formatPrice = (price: number) =>
    `¥${price.toLocaleString()}`;

  const handleCheckout = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* オーバーレイ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-overlay z-50"
            onClick={closeCart}
          />

          {/* ドロワー本体 */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-base z-50 shadow-2xl flex flex-col"
          >
            {/* ヘッダー */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <h2 className="text-lg font-semibold tracking-wider">CART</h2>
              <button
                onClick={closeCart}
                className="p-2 text-text-secondary hover:text-accent transition-colors"
                aria-label="カートを閉じる"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* カート内容 */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-text-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-16 h-16 mb-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <p className="text-sm">カートは空です</p>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <motion.li
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4"
                    >
                      {/* 商品画像 */}
                      <div className="w-20 h-24 relative rounded-lg overflow-hidden bg-base-light flex-shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>

                      {/* 商品情報 */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium truncate">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-text-secondary mt-1">
                          {formatPrice(item.product.price)}
                        </p>

                        {/* 数量コントロール */}
                        <div className="flex items-center gap-3 mt-3">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1
                              )
                            }
                            className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-accent hover:text-accent transition-colors"
                          >
                            <span className="text-xs">−</span>
                          </button>
                          <span className="text-sm font-medium w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1
                              )
                            }
                            className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-accent hover:text-accent transition-colors"
                          >
                            <span className="text-xs">+</span>
                          </button>
                        </div>
                      </div>

                      {/* 削除ボタン */}
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="self-start p-1 text-text-muted hover:text-accent transition-colors"
                        aria-label="商品を削除"
                      >
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
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* フッター（合計＋チェックアウト） */}
            {items.length > 0 && (
              <div className="border-t border-border px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">小計</span>
                  <span className="text-lg font-semibold">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-accent text-base py-4 rounded-lg text-sm font-medium tracking-wider hover:bg-accent-hover transition-colors duration-200"
                >
                  ご購入手続きへ
                </button>
                <p className="text-xs text-text-muted text-center">
                  送料・税はチェックアウト時に計算されます
                </p>
              </div>
            )}
            
            {/* トースト通知 */}
            <AnimatePresence>
              {showToast && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  className="absolute bottom-24 left-1/2 -translate-x-1/2 w-11/12 bg-gray-900 text-white text-sm text-center py-3 px-4 rounded-lg shadow-xl z-50"
                >
                  デモサイトのため決済は行われません
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
