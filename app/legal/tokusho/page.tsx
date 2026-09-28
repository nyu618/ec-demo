import Link from "next/link";

export default function TokushoPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* ページヘッダー */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.4em] text-text-muted mb-3">
            LEGAL
          </p>
          <h1 className="text-2xl sm:text-3xl font-light tracking-wider text-accent">
            特定商取引法に基づく表記
          </h1>
        </div>

        {/* テーブル */}
        <div className="border border-border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-border">
              <tr>
                <th className="bg-base-light px-6 py-4 text-left font-medium text-accent w-1/3 align-top">
                  販売業者
                </th>
                <td className="px-6 py-4 text-accent-light leading-relaxed">
                  DEMO Inc.
                </td>
              </tr>
              <tr>
                <th className="bg-base-light px-6 py-4 text-left font-medium text-accent w-1/3 align-top">
                  運営統括責任者
                </th>
                <td className="px-6 py-4 text-accent-light leading-relaxed">
                  山田 太郎
                </td>
              </tr>
              <tr>
                <th className="bg-base-light px-6 py-4 text-left font-medium text-accent w-1/3 align-top">
                  所在地
                </th>
                <td className="px-6 py-4 text-accent-light leading-relaxed">
                  〒100-0001<br />
                  東京都千代田区千代田1-1-1 DEMOビル 5F
                </td>
              </tr>
              <tr>
                <th className="bg-base-light px-6 py-4 text-left font-medium text-accent w-1/3 align-top">
                  連絡先
                </th>
                <td className="px-6 py-4 text-accent-light leading-relaxed">
                  メール: info@demo-store.jp<br />
                  電話: 03-1234-5678（受付時間 10:00〜20:00）
                </td>
              </tr>
              <tr>
                <th className="bg-base-light px-6 py-4 text-left font-medium text-accent w-1/3 align-top">
                  販売価格
                </th>
                <td className="px-6 py-4 text-accent-light leading-relaxed">
                  各商品ページに表示された価格（税込）
                </td>
              </tr>
              <tr>
                <th className="bg-base-light px-6 py-4 text-left font-medium text-accent w-1/3 align-top">
                  商品代金以外の必要料金
                </th>
                <td className="px-6 py-4 text-accent-light leading-relaxed">
                  配送料: 全国一律 ¥550（税込）<br />
                  ¥10,000以上のお買い上げで送料無料<br />
                  ※代金引換の場合、代引手数料 ¥330（税込）が別途かかります
                </td>
              </tr>
              <tr>
                <th className="bg-base-light px-6 py-4 text-left font-medium text-accent w-1/3 align-top">
                  お支払い方法
                </th>
                <td className="px-6 py-4 text-accent-light leading-relaxed">
                  クレジットカード（VISA / Mastercard / JCB / American Express）<br />
                  コンビニ決済<br />
                  銀行振込<br />
                  代金引換
                </td>
              </tr>
              <tr>
                <th className="bg-base-light px-6 py-4 text-left font-medium text-accent w-1/3 align-top">
                  商品の引渡時期
                </th>
                <td className="px-6 py-4 text-accent-light leading-relaxed">
                  ご注文確認後、通常3〜5営業日以内に発送いたします。<br />
                  ※在庫状況や配送先により、お届けまでに7〜10日程度かかる場合がございます。
                </td>
              </tr>
              <tr>
                <th className="bg-base-light px-6 py-4 text-left font-medium text-accent w-1/3 align-top">
                  返品・交換について
                </th>
                <td className="px-6 py-4 text-accent-light leading-relaxed">
                  商品到着後7日以内に限り、未使用・未開封の商品に限り返品・交換を承ります。<br />
                  お客様のご都合による返品の場合、返送料はお客様のご負担となります。<br />
                  不良品や誤配送の場合は、送料当社負担にて交換いたします。
                </td>
              </tr>
            </tbody>
          </table>
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
