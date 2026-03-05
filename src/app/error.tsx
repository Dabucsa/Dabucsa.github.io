"use client";

import { useEffect } from "react";
import { useLanguage, useT } from "@/i18n";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { lang } = useLanguage();
  const t = useT(lang);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-md mx-auto px-4 py-20 text-center">
      <span className="text-6xl mb-6 block">⚠️</span>
      <h1 className="text-3xl font-extrabold mb-3">{t("error.title")}</h1>
      <p className="text-muted2 mb-6">
        {t("error.desc")}
      </p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white rounded-2xl font-bold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
      >
        {t("error.retry")}
      </button>
    </div>
  );
}
