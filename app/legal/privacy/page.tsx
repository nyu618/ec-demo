import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* ページヘッダー */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.4em] text-text-muted mb-3">
            LEGAL
          </p>
          <h1 className="text-2xl sm:text-3xl font-light tracking-wider text-accent">
            プライバシーポリシー
          </h1>
        </div>

        {/* 本文 */}
        <div className="space-y-10 text-sm text-accent-light leading-relaxed">
          <p>
            DEMO Inc.（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、以下のプライバシーポリシーに基づき、個人情報の適切な取り扱いと保護に努めます。
          </p>

          <section>
            <h2 className="text-base font-medium text-accent mb-4 tracking-wider">
              1. 個人情報の収集方法
            </h2>
            <p>当社は、以下の方法により個人情報を取得いたします。</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>商品のご購入時にお客様がご入力される情報（氏名、住所、電話番号、メールアドレス等）</li>
              <li>お問い合わせフォームからのご連絡時にご提供いただく情報</li>
              <li>アカウント登録時にご入力いただく情報</li>
              <li>Cookieやアクセスログ等の技術的手段により自動的に取得する情報（IPアドレス、ブラウザ情報、閲覧履歴等）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-accent mb-4 tracking-wider">
              2. 個人情報の利用目的
            </h2>
            <p>当社は、取得した個人情報を以下の目的で利用いたします。</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>商品の発送およびサービスの提供</li>
              <li>ご注文内容の確認、お問い合わせへの対応</li>
              <li>新商品やキャンペーン等に関するご案内（メールマガジン等）</li>
              <li>サービスの改善およびマーケティング分析</li>
              <li>不正アクセスや不正利用の防止</li>
              <li>利用規約に違反した行為への対応</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-accent mb-4 tracking-wider">
              3. 第三者への提供
            </h2>
            <p>
              当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合であって、お客様の同意を得ることが困難であるとき</li>
              <li>商品の配送業務等、サービスの提供に必要な範囲で業務委託先に提供する場合（この場合、委託先に対して適切な監督を行います）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-accent mb-4 tracking-wider">
              4. 安全管理措置
            </h2>
            <p>
              当社は、個人情報の漏洩、滅失、毀損を防止するため、以下の安全管理措置を講じています。
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>SSL/TLS暗号化通信によるデータの保護</li>
              <li>アクセス権限の適切な管理</li>
              <li>個人情報を取り扱う従業員への教育・研修の実施</li>
              <li>不正アクセス防止のためのセキュリティシステムの導入</li>
              <li>個人情報保護に関する内部規程の整備と定期的な見直し</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-accent mb-4 tracking-wider">
              5. Cookieの使用について
            </h2>
            <p>
              当社のウェブサイトでは、ユーザー体験の向上やアクセス解析のためにCookieを使用しています。
              Cookieの使用を望まない場合は、ブラウザの設定により無効にすることができますが、一部のサービスが正常に機能しなくなる可能性があります。
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-accent mb-4 tracking-wider">
              6. 個人情報の開示・訂正・削除
            </h2>
            <p>
              お客様ご自身の個人情報について、開示・訂正・削除をご希望される場合は、以下のお問い合わせ先までご連絡ください。
              ご本人確認のうえ、合理的な範囲で速やかに対応いたします。
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-accent mb-4 tracking-wider">
              7. お問い合わせ窓口
            </h2>
            <div className="bg-base-light rounded-lg p-6">
              <p className="font-medium text-accent mb-2">DEMO Inc. 個人情報保護担当</p>
              <p>メール: privacy@demo-store.jp</p>
              <p>電話: 03-1234-5678（受付時間 10:00〜20:00）</p>
            </div>
          </section>

          <section>
            <h2 className="text-base font-medium text-accent mb-4 tracking-wider">
              8. プライバシーポリシーの変更
            </h2>
            <p>
              当社は、必要に応じて本プライバシーポリシーを変更することがあります。
              変更した場合は、当ウェブサイト上でお知らせいたします。
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
    </div>
  );
}
