"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const subjectOptions = [
  "商品について",
  "配送・送料について",
  "返品・交換について",
  "お支払いについて",
  "その他",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ダミー送信（1秒後に完了）
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setShowToast(false), 4000);
    }, 1000);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* ページヘッダー */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.4em] text-text-muted mb-3">
            SUPPORT
          </p>
          <h1 className="text-2xl sm:text-3xl font-light tracking-wider text-accent">
            お問い合わせ
          </h1>
          <p className="text-sm text-accent-light mt-4">
            ご質問やご要望がございましたら、下記フォームよりお気軽にお問い合わせください。
          </p>
        </div>

        {/* フォーム */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* お名前 */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs tracking-wider text-text-muted mb-2"
            >
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="山田 太郎"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-accent placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
            />
          </div>

          {/* メールアドレス */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs tracking-wider text-text-muted mb-2"
            >
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-accent placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
            />
          </div>

          {/* 件名 */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs tracking-wider text-text-muted mb-2"
            >
              件名 <span className="text-red-500">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-accent focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
                backgroundSize: "20px",
              }}
            >
              <option value="" disabled>
                お問い合わせの種類を選択してください
              </option>
              {subjectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* お問い合わせ内容 */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs tracking-wider text-text-muted mb-2"
            >
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="お問い合わせ内容をご記入ください"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-accent placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors resize-none"
            />
          </div>

          {/* 送信ボタン */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-4 rounded-lg text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                送信中...
              </span>
            ) : (
              "送信する"
            )}
          </button>
        </form>

        {/* 補足情報 */}
        <div className="mt-12 p-6 bg-background-light rounded-lg">
          <h3 className="text-xs tracking-[0.3em] text-text-muted mb-3">
            OTHER CONTACT
          </h3>
          <div className="space-y-2 text-sm text-accent-light">
            <p>メール: info@demo-store.jp</p>
            <p>電話: 03-1234-5678（受付時間 10:00〜20:00）</p>
          </div>
        </div>

        {/* 戻るリンク */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm tracking-wider text-accent-light hover:text-accent transition-colors duration-200"
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

      {/* トースト通知 */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-sm text-center py-4 px-8 rounded-lg shadow-xl z-50"
          >
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              お問い合わせを受け付けました。（デモのため実際の送信はされません）
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
