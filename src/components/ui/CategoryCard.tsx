"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { CategoryInfo } from "@/data/types";
import { useLanguage, useT } from "@/i18n";

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
  const { lang } = useLanguage();
  const t = useT(lang);
  const name = t(`cat.${category.slug}.name`);
  const description = t(`cat.${category.slug}.desc`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <Link
        href={`/${category.slug}`}
        className="glass-card p-4 sm:p-5 flex flex-col gap-3 group block hover:-translate-y-1 transition-transform"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-card-hover border border-border flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform">
            {category.emoji}
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card-hover px-2.5 py-1 text-[11px] text-muted2">
            {count} {count === 1 ? t("card.place") : t("card.places")}
          </span>
        </div>
        <h3 className="text-base font-bold text-foreground">{name}</h3>
        <p className="text-sm text-muted2 leading-relaxed">
          {description}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
          {t("card.explore")}
          <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </Link>
    </motion.div>
  );
}
