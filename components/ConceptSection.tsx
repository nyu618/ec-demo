"use client";

import { FadeInView } from "./FadeInView";

export function ConceptSection() {
  return (
    <section className="py-24 sm:py-32 px-4 bg-base">
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
          <p className="text-sm sm:text-base text-text-secondary leading-loose max-w-2xl mx-auto">
            MAISONは、素材・デザイン・機能性のすべてにおいて妥協のないものづくりを追求しています。
            流行に左右されない、本当に価値のあるアイテムだけを厳選してお届けします。
            一つひとつの製品が、あなたの日常を少しだけ特別なものに変える存在であることを願って。
          </p>
        </FadeInView>

        <FadeInView delay={0.45}>
          <div className="mt-12 flex justify-center">
            <div className="w-12 h-px bg-border" />
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
