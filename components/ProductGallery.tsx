"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProductGalleryProps {
  images: string[];
  productName: string;
  selectedIndex: number;
  onSelectImage: (index: number) => void;
}

export function ProductGallery({ images, productName, selectedIndex, onSelectImage }: ProductGalleryProps) {

  return (
    <div className="space-y-4">
      {/* メイン画像 */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-base-light">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={images[selectedIndex]}
              alt={`${productName} - ${selectedIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              unoptimized
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* サムネイル */}
      <div className="flex gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onSelectImage(index)}
            className={`relative aspect-square w-16 sm:w-20 rounded-lg overflow-hidden transition-all duration-200 ${
              index === selectedIndex
                ? "ring-2 ring-accent ring-offset-2"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={image}
              alt={`${productName} サムネイル ${index + 1}`}
              fill
              className="object-cover"
              sizes="80px"
              unoptimized
            />
          </button>
        ))}
      </div>
    </div>
  );
}
