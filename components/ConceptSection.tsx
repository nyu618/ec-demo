"use client";

import { FadeInView } from "./FadeInView";

export function ConceptSection() {
  return (
    <section className="py-24 sm:py-32 px-4 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <FadeInView>
          <p className="text-xs tracking-[0.4em] text-text-muted mb-8">
            OUR PHILOSOPHY
          </p>
        </FadeInView>

        <FadeInView delay={0.15}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed tracking-wide text-accent mb-8">
            本質的な美しさを追求し、
            <br className="hidden sm:block" />
            日常に寄り添う上質なアイテムを。
          </h2>
        </FadeInView>

        <FadeInView delay={0.3}>
          <p className="text-sm sm:text-base text-accent-light leading-loose max-w-2xl mx-auto">
            MAISONは、素材・デザイン・機能性のすべてにおいて妥協のないものづくりを追求しています。
            流行に左右されない、本当に価値のあるアイテムだけを厳選してお届けします。
            一つひとつの製品が、あなたの日常を少しだけ特別なものに変える存在であることを願って。
          </p>
        </FadeInView>

        <FadeInView delay={0.45}>
          <div className="mt-12 flex flex-col items-center gap-8">
            <div className="w-12 h-px bg-border" />
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-sm tracking-wider text-accent border-b border-accent pb-1 hover:text-accent-light hover:border-accent-light transition-colors duration-200"
            >
              私たちについて
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
            </a>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
