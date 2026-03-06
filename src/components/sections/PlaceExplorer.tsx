"use client";

import { useDeferredValue, useState } from "react";
import type { Place, ProfileType, Weather } from "@/data/types";
import PlaceCard from "@/components/ui/PlaceCard";
import { useLanguage, useT } from "@/i18n";

type BudgetFilter = "all" | "$" | "$$" | "$$$";
type WeatherFilter = "all" | Weather;
type ProfileFilter = "all" | ProfileType;

interface PlaceExplorerProps {
  places: Place[];
}

export default function PlaceExplorer({ places }: PlaceExplorerProps) {
  const { lang } = useLanguage();
  const t = useT(lang);
  const [profile, setProfile] = useState<ProfileFilter>("all");
  const [weather, setWeather] = useState<WeatherFilter>("all");
  const [budget, setBudget] = useState<BudgetFilter>("all");

  const deferredProfile = useDeferredValue(profile);
  const deferredWeather = useDeferredValue(weather);
  const deferredBudget = useDeferredValue(budget);

  const filteredPlaces = places.filter((place) => {
    if (deferredProfile !== "all" && !place.bestFor.includes(deferredProfile)) {
      return false;
    }
    if (deferredWeather !== "all" && place.weather !== deferredWeather) {
      return false;
    }
    if (deferredBudget !== "all" && place.price !== deferredBudget) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-5">
      <div className="glass-card p-4">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h2 className="text-sm font-bold">{t("filters.title")}</h2>
          <span className="text-xs text-muted2">
            {filteredPlaces.length} {t("filters.results")}
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          <div>
            <label className="block text-[11px] uppercase tracking-widest text-muted font-semibold mb-2">
              {t("filters.profile")}
            </label>
            <select
              value={profile}
              onChange={(e) => setProfile(e.target.value as ProfileFilter)}
              className="w-full rounded-xl border border-border bg-card-hover px-3 py-2.5 text-sm text-foreground"
            >
              <option value="all">{t("filters.all")}</option>
              <option value="familia">{t("place.family")}</option>
              <option value="pareja">{t("place.couple")}</option>
              <option value="aventura">{t("place.adventure")}</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-widest text-muted font-semibold mb-2">
              {t("filters.weather")}
            </label>
            <select
              value={weather}
              onChange={(e) => setWeather(e.target.value as WeatherFilter)}
              className="w-full rounded-xl border border-border bg-card-hover px-3 py-2.5 text-sm text-foreground"
            >
              <option value="all">{t("filters.all")}</option>
              <option value="indoor">{t("place.indoor")}</option>
              <option value="both">{t("filters.flexible")}</option>
              <option value="outdoor">{t("filters.outdoor")}</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-widest text-muted font-semibold mb-2">
              {t("filters.budget")}
            </label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value as BudgetFilter)}
              className="w-full rounded-xl border border-border bg-card-hover px-3 py-2.5 text-sm text-foreground"
            >
              <option value="all">{t("filters.all")}</option>
              <option value="$">{t("place.budget")}</option>
              <option value="$$">{t("place.midrange")}</option>
              <option value="$$$">{t("place.premium")}</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filteredPlaces.map((place, i) => (
          <PlaceCard key={place.id} place={place} index={i} />
        ))}
      </div>
    </div>
  );
}
