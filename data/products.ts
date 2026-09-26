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
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&h=1000&fit=crop"
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
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=1000&fit=crop"
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
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&h=1000&fit=crop"
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
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1612902456551-404b9a18e81e?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=800&h=1000&fit=crop"
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
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cda3a01?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=1000&fit=crop"
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
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=800&h=1000&fit=crop"
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
      "https://images.unsplash.com/photo-1601924921557-45e6dea0c784?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=1000&fit=crop"
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
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1544923246-77307dd270aa?w=800&h=1000&fit=crop"
    ],
    variants: [
      { type: "サイズ", options: ["S", "M", "L", "XL"] },
      { type: "カラー", options: ["ブラック", "ネイビー", "オリーブ"] }
    ],
    featured: false
  }
];
