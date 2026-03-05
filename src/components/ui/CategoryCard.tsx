"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CategoryInfo } from "@/data/types";

interface CategoryCardProps {
  category: CategoryInfo;
  index: number;
  count: number;
}

export default function CategoryCard({
  category,
  index,
  count,
}: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <Link
        href={`/${category.slug}`}
        className="glass-card p-5 flex flex-col gap-2 group block hover:-translate-y-1 transition-transform"
      >
        <div className="w-14 h-14 rounded-2xl bg-card-hover border border-border flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
          {category.emoji}
        </div>
        <h3 className="text-base font-bold text-foreground">{category.name}</h3>
        <p className="text-xs text-muted2 leading-relaxed">
          {category.description}
        </p>
        <span className="text-[11px] text-muted font-medium">
          {count} {count === 1 ? "lugar" : "lugares"} →
        </span>
      </Link>
    </motion.div>
  );
}
