"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const orderHistory = [
  {
    id: "ORD-2026-0917",
    date: "2026年9月17日",
    status: "配送済み",
    items: [
      { name: "ウールブレンド オーバーサイズコート", color: "ブラック", size: "M", price: 49800, image: "/images/coat-black.jpg" },
    ],
    total: 49800,
  },
  {
    id: "ORD-2026-0903",
    date: "2026年9月3日",
    status: "配送済み",
    items: [
      { name: "オーガニックコットン Tシャツ", color: "ホワイト", size: "L", price: 7800, image: "/images/tshirt-white.jpg" },
      { name: "オーガニックコットン Tシャツ", color: "ブラック", size: "L", price: 7800, image: "/images/tshirt-black.jpg" },
    ],
    total: 15600,
  },
];

type Tab = "orders" | "profile";

export default function MyPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("orders");

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* ページヘッダー */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs tracking-[0.4em] text-text-muted mb-3">
            MY ACCOUNT
          </p>
          <h1 className="text-2xl sm:text-3xl font-light tracking-wider text-accent">
            マイページ
          </h1>
          <p className="text-sm text-text-secondary mt-4">
            DEMO 太郎 様、ようこそ
          </p>
        </div>

        {/* タブ */}
        <div className="flex border-b border-border mb-8">
          <button
            onClick={() => setActiveTab("orders")}
            className={`flex-1 py-3 text-sm tracking-wider text-center transition-colors relative ${
              activeTab === "orders"
                ? "text-accent font-medium"
                : "text-text-muted hover:text-text-secondary"
            }`}
          >
            注文履歴
            {activeTab === "orders" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex-1 py-3 text-sm tracking-wider text-center transition-colors relative ${
              activeTab === "profile"
                ? "text-accent font-medium"
                : "text-text-muted hover:text-text-secondary"
            }`}
          >
            会員情報
            {activeTab === "profile" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
            )}
          </button>
        </div>

        {/* 注文履歴タブ */}
        {activeTab === "orders" && (
          <div className="space-y-6">
            {orderHistory.map((order) => (
              <div
                key={order.id}
                className="border border-border rounded-lg overflow-hidden"
              >
                {/* 注文ヘッダー */}
                <div className="bg-base-light px-5 py-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-text-muted tracking-wider">
                      {order.id}
                    </span>
                    <span className="text-xs text-text-secondary">
                      {order.date}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                    {order.status}
                  </span>
                </div>

                {/* 注文アイテム */}
                <div className="divide-y divide-border">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 px-5 py-4">
                      <div className="w-14 h-18 relative rounded overflow-hidden bg-base-light flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={56}
                          height={72}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-accent truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-text-muted mt-0.5">
                          カラー: {item.color} / サイズ: {item.size}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-accent flex-shrink-0">
                        ¥{item.price.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                {/* 合計 */}
                <div className="bg-base-light px-5 py-3 flex items-center justify-between">
                  <span className="text-xs text-text-muted">合計</span>
                  <span className="text-sm font-semibold text-accent">
                    ¥{order.total.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 会員情報タブ */}
        {activeTab === "profile" && (
          <div className="border border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border">
                <tr>
                  <th className="bg-base-light px-6 py-4 text-left font-medium text-accent w-1/3">
                    お名前
                  </th>
                  <td className="px-6 py-4 text-text-secondary">
                    DEMO 太郎
                  </td>
                </tr>
                <tr>
                  <th className="bg-base-light px-6 py-4 text-left font-medium text-accent w-1/3">
                    メールアドレス
                  </th>
                  <td className="px-6 py-4 text-text-secondary">
                    demo-taro@email.com
                  </td>
                </tr>
                <tr>
                  <th className="bg-base-light px-6 py-4 text-left font-medium text-accent w-1/3">
                    住所
                  </th>
                  <td className="px-6 py-4 text-text-secondary">
                    〒100-0001 東京都千代田区千代田1-1-1
                  </td>
                </tr>
                <tr>
                  <th className="bg-base-light px-6 py-4 text-left font-medium text-accent w-1/3">
                    電話番号
                  </th>
                  <td className="px-6 py-4 text-text-secondary">
                    090-1234-5678
                  </td>
                </tr>
                <tr>
                  <th className="bg-base-light px-6 py-4 text-left font-medium text-accent w-1/3">
                    会員登録日
                  </th>
                  <td className="px-6 py-4 text-text-secondary">
                    2026年1月15日
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* ログアウトボタン */}
        <div className="mt-10 text-center">
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 text-sm tracking-wider text-text-muted hover:text-accent transition-colors duration-200"
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
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>
            ログアウト
          </button>
        </div>

        {/* トップへ戻るリンク */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm tracking-wider text-text-secondary hover:text-accent transition-colors duration-200"
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
