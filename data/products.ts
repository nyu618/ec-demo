import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "ウールブレンド オーバーサイズコート",
    nameEn: "Wool Blend Oversized Coat",
    price: 49800,
    category: "outerwear",
    description: "上質なウールブレンド素材を使用したオーバーサイズシルエットのコート。ミニマルなデザインでありながら、確かな存在感を放つ一着です。裏地付きで保温性も確保。日常使いからフォーマルシーンまで幅広く対応します。",
    images: [
      "https://placehold.co/600x800/111827/FFFFFF?text=Black+Coat",
      "https://placehold.co/600x800/B45309/FFFFFF?text=Camel+Coat",
      "https://placehold.co/600x800/9CA3AF/FFFFFF?text=Grey+Coat"
    ],
    variants: [
      { type: "サイズ", options: ["S", "M", "L", "XL"] },
      { type: "カラー", options: ["ブラック", "キャメル", "グレー"] }
    ],
    featured: true
  },
  {
    id: "2",
    name: "オーガニックコットン Tシャツ",
    nameEn: "Organic Cotton T-Shirt",
    price: 7800,
    category: "tops",
    description: "厳選されたオーガニックコットンを100%使用。肌に優しい着心地と、洗い込むほどに風合いが増す素材感が魅力です。ベーシックでありながら、シルエットにこだわった一枚。",
    images: [
      "https://placehold.co/600x800/FFFFFF/000000?text=White+T-Shirt",
      "https://placehold.co/600x800/111827/FFFFFF?text=Black+T-Shirt",
      "https://placehold.co/600x800/1E3A8A/FFFFFF?text=Navy+T-Shirt",
      "https://placehold.co/600x800/D1D5DB/000000?text=Beige+T-Shirt"
    ],
    variants: [
      { type: "サイズ", options: ["XS", "S", "M", "L", "XL"] },
      { type: "カラー", options: ["ホワイト", "ブラック", "ネイビー", "ベージュ"] }
    ],
    featured: true
  },
  {
    id: "3",
    name: "リネンワイドパンツ",
    nameEn: "Linen Wide Pants",
    price: 15800,
    category: "bottoms",
    description: "フレンチリネンを贅沢に使用したワイドシルエットパンツ。ナチュラルな風合いと、リラックスした履き心地が特徴。ウエストはゴム仕様で快適な着用感を実現。",
    images: [
      "https://placehold.co/600x800/F5F5F4/000000?text=Natural+Pants",
      "https://placehold.co/600x800/111827/FFFFFF?text=Black+Pants",
      "https://placehold.co/600x800/4B5563/FFFFFF?text=Khaki+Pants"
    ],
    variants: [
      { type: "サイズ", options: ["S", "M", "L"] },
      { type: "カラー", options: ["ナチュラル", "ブラック", "カーキ"] }
    ],
    featured: true
  },
  {
    id: "4",
    name: "レザーミニマルウォレット",
    nameEn: "Leather Minimal Wallet",
    price: 12800,
    category: "accessories",
    description: "イタリアンレザーを使用したコンパクトウォレット。必要最小限のカードスロットとコインポケットを備え、ミニマリストのための洗練されたデザイン。",
    images: [
      "https://placehold.co/600x800/111827/FFFFFF?text=Black+Wallet",
      "https://placehold.co/600x800/78350F/FFFFFF?text=Brown+Wallet",
      "https://placehold.co/600x800/1E3A8A/FFFFFF?text=Navy+Wallet"
    ],
    variants: [
      { type: "カラー", options: ["ブラック", "ブラウン", "ネイビー"] }
    ],
    featured: true
  },
  {
    id: "5",
    name: "カシミヤブレンド クルーネックニット",
    nameEn: "Cashmere Blend Crew Neck Knit",
    price: 24800,
    category: "tops",
    description: "カシミヤをブレンドした極上の肌触りのクルーネックニット。上品な光沢感と軽やかな着心地を両立。レイヤードスタイルにも最適です。",
    images: [
      "https://placehold.co/600x800/FEF3C7/000000?text=Ivory+Knit",
      "https://placehold.co/600x800/374151/FFFFFF?text=Charcoal+Knit",
      "https://placehold.co/600x800/7F1D1D/FFFFFF?text=Bordeaux+Knit"
    ],
    variants: [
      { type: "サイズ", options: ["S", "M", "L", "XL"] },
      { type: "カラー", options: ["アイボリー", "チャコール", "ボルドー"] }
    ],
    featured: false
  },
  {
    id: "6",
    name: "テーパードスラックス",
    nameEn: "Tapered Slacks",
    price: 18500,
    category: "bottoms",
    description: "美しいテーパードシルエットのスラックス。ストレッチ素材で動きやすく、オンオフ問わず着用可能。センタープレス入りできちんと感も演出。",
    images: [
      "https://placehold.co/600x800/111827/FFFFFF?text=Black+Slacks",
      "https://placehold.co/600x800/1E3A8A/FFFFFF?text=Navy+Slacks",
      "https://placehold.co/600x800/D1D5DB/000000?text=Beige+Slacks"
    ],
    variants: [
      { type: "サイズ", options: ["S", "M", "L", "XL"] },
      { type: "カラー", options: ["ブラック", "ネイビー", "ベージュ"] }
    ],
    featured: false
  },
  {
    id: "7",
    name: "シルクスカーフ",
    nameEn: "Silk Scarf",
    price: 9800,
    category: "accessories",
    description: "上質なシルク100%のスカーフ。繊細なプリントパターンが上品なアクセントに。首元に巻いたり、バッグに添えたり、多彩なアレンジが楽しめます。",
    images: [
      "https://placehold.co/600x800/FEF3C7/000000?text=Ivory+Scarf",
      "https://placehold.co/600x800/1E3A8A/FFFFFF?text=Navy+Scarf",
      "https://placehold.co/600x800/7F1D1D/FFFFFF?text=Burgundy+Scarf"
    ],
    variants: [
      { type: "カラー", options: ["アイボリー", "ネイビー", "バーガンディ"] }
    ],
    featured: false
  },
  {
    id: "8",
    name: "ライトダウンジャケット",
    nameEn: "Light Down Jacket",
    price: 35800,
    category: "outerwear",
    description: "高品質ダウンを使用した軽量ジャケット。コンパクトに収納可能でありながら、高い保温性を実現。インナーダウンとしても活躍する汎用性の高い一着。",
    images: [
      "https://placehold.co/600x800/111827/FFFFFF?text=Black+Down",
      "https://placehold.co/600x800/1E3A8A/FFFFFF?text=Navy+Down",
      "https://placehold.co/600x800/4D7C0F/FFFFFF?text=Olive+Down"
    ],
    variants: [
      { type: "サイズ", options: ["S", "M", "L", "XL"] },
      { type: "カラー", options: ["ブラック", "ネイビー", "オリーブ"] }
    ],
    featured: false
  }
];
