/** 商品バリエーション */
export interface ProductVariant {
  type: string;  // 例: "サイズ", "カラー"
  options: string[];
}

/** 商品データ */
export interface Product {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  variants: ProductVariant[];
  featured: boolean;
}

/** カート内アイテム */
export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariants: Record<string, string>;
}

/** カテゴリ */
export type Category = "all" | "tops" | "bottoms" | "accessories" | "outerwear";

export const CATEGORY_LABELS: Record<Category, string> = {
  all: "すべて",
  tops: "トップス",
  bottoms: "ボトムス",
  accessories: "アクセサリー",
  outerwear: "アウター",
};
