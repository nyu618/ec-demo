import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* ページヘッダー */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.4em] text-text-muted mb-3">
            LEGAL
          </p>
          <h1 className="text-2xl sm:text-3xl font-light tracking-wider text-accent">
            利用規約
          </h1>
        </div>

        {/* 本文 */}
        <div className="space-y-10 text-sm text-text-secondary leading-relaxed">
          <section>
            <h2 className="text-base font-medium text-accent mb-4 tracking-wider">
              第1条（総則）
            </h2>
            <p>
              本利用規約（以下「本規約」）は、DEMO Inc.（以下「当社」）が運営するオンラインストア「DEMO」（以下「本サービス」）の利用に関する条件を定めるものです。
              ご利用者様（以下「ユーザー」）は、本規約に同意のうえ、本サービスをご利用ください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-accent mb-4 tracking-wider">
              第2条（利用条件）
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>ユーザーは、本規約に同意したうえで本サービスを利用するものとします。</li>
              <li>未成年者の方は、法定代理人の同意を得たうえでご利用ください。</li>
              <li>当社は、ユーザーが本規約に違反した場合、事前の通知なくサービスの利用を制限または停止することができます。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-base font-medium text-accent mb-4 tracking-wider">
              第3条（禁止事項）
            </h2>
            <p className="mb-3">ユーザーは、本サービスの利用にあたり、以下の行為を禁止します。</p>
            <ul className="list-disc list-inside space-y-2">
              <li>法令または公序良俗に反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社のサーバーまたはネットワークの機能を妨害する行為</li>
              <li>当社のサービス運営を妨げる行為</li>
              <li>他のユーザーに関する個人情報等を収集・蓄積する行為</li>
              <li>不正アクセスをし、またはこれを試みる行為</li>
              <li>他のユーザーに成りすます行為</li>
              <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-accent mb-4 tracking-wider">
              第4条（サービスの中断・停止）
            </h2>
            <p>
              当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を中断・停止することができるものとします。
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
              <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
              <li>その他、当社が本サービスの提供が困難と判断した場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-accent mb-4 tracking-wider">
              第5条（免責事項）
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>当社は、本サービスに事実上または法律上の瑕疵がないことを明示的にも黙示的にも保証しておりません。</li>
              <li>当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意または重過失による場合を除き、一切の責任を負いません。</li>
              <li>当社は、ユーザー間またはユーザーと第三者間で生じた取引、連絡または紛争等について一切責任を負いません。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-base font-medium text-accent mb-4 tracking-wider">
              第6条（知的財産権）
            </h2>
            <p>
              本サービスに掲載されているコンテンツ（テキスト、画像、ロゴ、デザイン等）に関する著作権、商標権その他の知的財産権は、当社または正当な権利を有する第三者に帰属します。
              ユーザーは、当社の事前の書面による承諾なく、これらを複製、転載、改変、販売その他の二次利用をすることはできません。
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-accent mb-4 tracking-wider">
              第7条（規約の変更）
            </h2>
            <p>
              当社は、必要と判断した場合には、ユーザーに通知することなく本規約を変更することができるものとします。
              変更後の利用規約は、本サービス上に表示した時点より効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-accent mb-4 tracking-wider">
              第8条（準拠法・裁判管轄）
            </h2>
            <p>
              本規約の解釈にあたっては、日本法を準拠法とします。
              本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <div className="pt-6 border-t border-border">
            <p className="text-xs text-text-muted">
              制定日: 2026年1月1日<br />
              最終改定日: 2026年9月1日
            </p>
          </div>
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
