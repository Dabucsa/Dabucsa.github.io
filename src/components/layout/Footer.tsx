"use client";

import Link from "next/link";
import { useLanguage, useT } from "@/i18n";

export default function Footer() {
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <footer className="relative z-10 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted2">
              {t("footer.made")}{" "}
              <span className="text-foreground font-medium">{t("footer.puconAndino")}</span>
            </p>
            <p className="text-xs text-muted mt-1">
              {t("footer.tagline")}
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted">
            <Link
              href="https://zeroaustral.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted2 transition-colors"
            >
              {t("footer.dev")} ZeroAustral
            </Link>
            <span>·</span>
            <span>Pucón, Chile 🇨🇱</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
