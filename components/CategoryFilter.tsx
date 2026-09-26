"use client";

import { motion } from "framer-motion";
import { Category, CATEGORY_LABELS } from "@/types";

interface CategoryFilterProps {
  selected: Category;
  onChange: (category: Category) => void;
}

const categories: Category[] = ["all", "tops", "bottoms", "accessories", "outerwear"];

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`relative px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm tracking-wider rounded-full transition-colors duration-200 ${
            selected === category
              ? "text-base"
              : "text-text-secondary hover:text-accent"
          }`}
        >
          {selected === category && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-accent rounded-full"
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{CATEGORY_LABELS[category]}</span>
        </button>
      ))}
    </div>
  );
}
