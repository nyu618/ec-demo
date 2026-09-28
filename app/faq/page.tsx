"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "配送について",
    items: [
      {
        question: "注文からどのくらいで届きますか？",
        answer:
          "ご注文確認後、通常3〜5営業日以内に発送いたします。配送先やお届け地域により、発送後1〜3日程度でお届けとなります。離島・一部地域につきましては、さらに数日かかる場合がございますので予めご了承ください。",
      },
      {
        question: "送料はいくらですか？",
        answer:
          "全国一律 ¥550（税込）でお届けいたします。¥10,000以上のお買い上げで送料無料となります。",
      },
      {
        question: "配送状況の確認はできますか？",
        answer:
          "商品発送後、ご登録のメールアドレスに追跡番号をお送りいたします。配送業者のウェブサイトにて、リアルタイムで配送状況をご確認いただけます。",
      },
    ],
  },
  {
    title: "返品・交換について",
    items: [
      {
        question: "返品・交換は可能ですか？",
        answer:
          "商品到着後7日以内に限り、未使用・未開封の商品に限り返品・交換を承ります。お客様のご都合による返品の場合、返送料はお客様のご負担となります。不良品や誤配送の場合は、送料当社負担にて交換いたします。",
      },
      {
        question: "返品の手続き方法を教えてください。",
        answer:
          "まず、お問い合わせフォームまたはメール（info@demo-store.jp）にて返品のご希望をご連絡ください。担当者より返品手続きの詳細をご案内いたします。事前のご連絡なく返送された場合、対応いたしかねますのでご注意ください。",
      },
    ],
  },
  {
    title: "お支払いについて",
    items: [
      {
        question: "利用できるお支払い方法を教えてください。",
        answer:
          "クレジットカード（VISA / Mastercard / JCB / American Express）、コンビニ決済、銀行振込、代金引換がご利用いただけます。",
      },
      {
        question: "クレジットカードの分割払いは可能ですか？",
        answer:
          "VISA・Mastercardのみ、3回・6回・12回の分割払いに対応しております。分割手数料はカード会社の規定に準じます。JCB・American Expressにつきましては一括払いのみのご対応となります。",
      },
      {
        question: "領収書の発行はできますか？",
        answer:
          "はい、ご注文完了後にマイページから電子領収書をダウンロードいただけます。紙の領収書が必要な場合は、お問い合わせフォームよりご連絡ください。",
      },
    ],
  },
];

function AccordionItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm font-medium text-accent pr-4 group-hover:text-accent-light transition-colors">
          {item.question}
        </span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-text-muted flex-shrink-0"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-text-secondary leading-relaxed pb-5 pr-8">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* ページヘッダー */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.4em] text-text-muted mb-3">
            SUPPORT
          </p>
          <h1 className="text-2xl sm:text-3xl font-light tracking-wider text-accent">
            よくある質問
          </h1>
          <p className="text-sm text-text-secondary mt-4">
            お客様からよくいただくご質問をまとめました。
          </p>
        </div>

        {/* FAQ セクション */}
        <div className="space-y-10">
          {faqData.map((category) => (
            <section key={category.title}>
              <h2 className="text-xs tracking-[0.3em] text-text-muted mb-4 uppercase">
                {category.title}
              </h2>
              <div className="border-t border-border">
                {category.items.map((item) => (
                  <AccordionItem key={item.question} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* お問い合わせ誘導 */}
        <div className="text-center mt-16 p-8 bg-base-light rounded-lg">
          <p className="text-sm text-text-secondary mb-4">
            解決しない場合は、お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm tracking-wider text-accent border-b border-accent pb-1 hover:text-accent-light hover:border-accent-light transition-colors duration-200"
          >
            お問い合わせフォームへ
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

        {/* 戻るリンク */}
        <div className="text-center mt-12">
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
