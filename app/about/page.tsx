"use client";

import Image from "next/image";
import { FadeInView } from "@/components/FadeInView";

export default function AboutPage() {
  return (
    <div className="pb-20">
      {/* ヒーローセクション */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About DEMO"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <FadeInView direction="up" delay={0.2}>
            <p className="text-xs sm:text-sm tracking-[0.4em] text-white/80 mb-6 uppercase">
              About Us
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-wider text-white leading-tight">
              日常を、
              <br className="sm:hidden" />
              特別にする。
            </h1>
          </FadeInView>
        </div>
      </section>

      {/* コンセプトセクション（ジグザグ） */}
      <section className="py-24 sm:py-32 px-4 max-w-7xl mx-auto">
        <div className="space-y-32 sm:space-y-48">
          {/* ブロック 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2">
              <FadeInView direction="right">
                <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/coat-grey.jpg"
                    alt="私たちの想い"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeInView>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <FadeInView direction="left" delay={0.2}>
                <h2 className="text-xs tracking-[0.3em] text-text-muted uppercase">Our Philosophy</h2>
                <h3 className="text-2xl sm:text-3xl font-light tracking-wide text-accent mt-4">
                  時を超えて愛されるデザイン
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-loose mt-6">
                  私たちはトレンドを追い求めるのではなく、長く寄り添える普遍的な美しさを大切にしています。<br />
                  無駄を削ぎ落としたミニマルなデザインは、着る人の個性を引き立て、どんなライフスタイルにも自然に溶け込みます。<br />
                  一過性の消費ではなく、愛着を持って使い続けられるアイテムをご提案します。
                </p>
              </FadeInView>
            </div>
          </div>

          {/* ブロック 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2">
              <FadeInView direction="left">
                <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/tshirt-beige.jpg"
                    alt="素材へのこだわり"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeInView>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <FadeInView direction="right" delay={0.2}>
                <h2 className="text-xs tracking-[0.3em] text-text-muted uppercase">Our Material</h2>
                <h3 className="text-2xl sm:text-3xl font-light tracking-wide text-accent mt-4">
                  妥協なき素材選び
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-loose mt-6">
                  素晴らしいデザインは、素晴らしい素材から生まれます。<br />
                  私たちは世界中から上質な生地を厳選し、肌触りや耐久性、環境への配慮など、あらゆる角度から検証を重ねています。<br />
                  オーガニックコットンやリサイクル素材の積極的な採用を通じ、サステナブルな未来へ向けたものづくりにも挑戦しています。
                </p>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* ブランドメッセージ */}
      <section className="py-24 sm:py-32 px-4 bg-accent text-center">
        <div className="max-w-3xl mx-auto">
          <FadeInView direction="up">
            <h2 className="text-xs tracking-[0.3em] text-white/60 mb-8 uppercase">
              Message
            </h2>
            <p className="text-base sm:text-lg text-white leading-loose tracking-wide font-medium">
              「衣服は、毎日を生きるための最も身近な道具である」<br /><br />
              その信念のもと、DEMOはスタートしました。<br />
              ただ着飾るためではなく、あなたの一日を少しだけ快適に、そして自信に満ちたものにするために。<br />
              私たちはこれからも、本質的な価値と真摯に向き合いながら、<br />
              皆さまの日常を彩る存在であり続けます。
            </p>
            <div className="mt-12 flex justify-center">
              <div className="w-12 h-px bg-white/20" />
            </div>
            <p className="mt-8 text-sm text-white/80 tracking-wider">
              DEMO Founder & Creative Director
            </p>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
