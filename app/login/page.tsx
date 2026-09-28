"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/mypage");
    }, 800);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4">
      <div className="max-w-md mx-auto">
        {/* ページヘッダー */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs tracking-[0.4em] text-text-muted mb-3">
            ACCOUNT
          </p>
          <h1 className="text-2xl sm:text-3xl font-light tracking-wider text-accent">
            ログイン
          </h1>
        </div>

        {/* フォーム */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-xs tracking-wider text-text-muted mb-2"
            >
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full px-4 py-3 bg-base border border-border rounded-lg text-sm text-accent placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs tracking-wider text-text-muted mb-2"
            >
              パスワード
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-base border border-border rounded-lg text-sm text-accent placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent text-base py-4 rounded-lg text-sm font-medium tracking-wider hover:bg-accent-hover transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
                ログイン中...
              </span>
            ) : (
              "ログイン"
            )}
          </button>
        </form>

        {/* 区切り線 */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 border-t border-border" />
          <span className="text-xs text-text-muted tracking-wider">OR</span>
          <div className="flex-1 border-t border-border" />
        </div>

        {/* 新規登録リンク */}
        <div className="text-center">
          <p className="text-sm text-accent-light mb-3">
            アカウントをお持ちでない方
          </p>
          <Link
            href="/register"
            className="inline-block w-full py-4 border border-accent rounded-lg text-sm font-medium tracking-wider text-accent hover:bg-accent hover:text-base transition-colors duration-200 text-center"
          >
            新規会員登録はこちら
          </Link>
        </div>
      </div>
    </div>
  );
}
