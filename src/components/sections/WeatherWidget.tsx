"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  CloudRain,
  CloudSnow,
  CloudSun,
  Droplets,
  Sun,
  Thermometer,
  Wind,
} from "lucide-react";
import { useLanguage, useT } from "@/i18n";
import type { Lang } from "@/i18n";

interface WeatherData {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number;
  isDay: boolean;
  daily: {
    tempMax: number[];
    tempMin: number[];
    weatherCode: number[];
    date: string[];
  };
}

const WMO_CODES: Record<number, { es: string; en: string; icon: string }> = {
  0: { es: "Despejado", en: "Clear", icon: "☀️" },
  1: { es: "Mayormente despejado", en: "Mostly clear", icon: "🌤️" },
  2: { es: "Parcialmente nublado", en: "Partly cloudy", icon: "⛅" },
  3: { es: "Nublado", en: "Overcast", icon: "☁️" },
  45: { es: "Neblina", en: "Fog", icon: "🌫️" },
  48: { es: "Neblina helada", en: "Freezing fog", icon: "🌫️" },
  51: { es: "Llovizna leve", en: "Light drizzle", icon: "🌦️" },
  53: { es: "Llovizna", en: "Drizzle", icon: "🌦️" },
  55: { es: "Llovizna fuerte", en: "Heavy drizzle", icon: "🌧️" },
  61: { es: "Lluvia leve", en: "Light rain", icon: "🌧️" },
  63: { es: "Lluvia moderada", en: "Moderate rain", icon: "🌧️" },
  65: { es: "Lluvia fuerte", en: "Heavy rain", icon: "🌧️" },
  66: { es: "Lluvia helada", en: "Freezing rain", icon: "🌨️" },
  67: { es: "Lluvia helada fuerte", en: "Heavy freezing rain", icon: "🌨️" },
  71: { es: "Nieve leve", en: "Light snow", icon: "❄️" },
  73: { es: "Nieve moderada", en: "Moderate snow", icon: "❄️" },
  75: { es: "Nieve fuerte", en: "Heavy snow", icon: "❄️" },
  77: { es: "Granizo", en: "Hail", icon: "🌨️" },
  80: { es: "Chubascos leves", en: "Light showers", icon: "🌦️" },
  81: { es: "Chubascos", en: "Showers", icon: "🌧️" },
  82: { es: "Chubascos fuertes", en: "Heavy showers", icon: "⛈️" },
  85: { es: "Nieve leve", en: "Light snow", icon: "🌨️" },
  86: { es: "Nieve fuerte", en: "Heavy snow", icon: "🌨️" },
  95: { es: "Tormenta", en: "Thunderstorm", icon: "⛈️" },
  96: { es: "Tormenta con granizo", en: "Hailstorm", icon: "⛈️" },
  99: { es: "Tormenta fuerte", en: "Severe storm", icon: "⛈️" },
};

function getWeatherInfo(code: number, lang: Lang) {
  const entry = WMO_CODES[code] || { es: "Desconocido", en: "Unknown", icon: "🌡️" };
  return { label: entry[lang], icon: entry.icon };
}

function getWeatherIcon(code: number, size: number) {
  if (code <= 1) return <Sun size={size} className="text-yellow-400" />;
  if (code <= 3) return <CloudSun size={size} className="text-sky-300" />;
  if (code <= 48) return <Cloud size={size} className="text-zinc-400" />;
  if (code <= 67) return <CloudRain size={size} className="text-sky-400" />;
  if (code <= 77) return <CloudSnow size={size} className="text-blue-300" />;
  if (code <= 82) return <CloudRain size={size} className="text-sky-400" />;
  return <CloudRain size={size} className="text-violet-400" />;
}

function getDayName(dateStr: string, lang: Lang, t: (key: string) => string) {
  const d = new Date(dateStr + "T12:00:00");
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (d.toDateString() === today.toDateString()) return lang === "es" ? "Hoy" : "Today";
  if (d.toDateString() === tomorrow.toDateString()) return lang === "es" ? "Mañana" : "Tomorrow";
  const dayNames = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  return t(`weather.${dayNames[d.getDay()]}`);
}

// Pucón coordinates: -39.27, -71.97
const PUCON_LAT = -39.27;
const PUCON_LON = -71.97;

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { lang } = useLanguage();
  const t = useT(lang);

  useEffect(() => {
    const controller = new AbortController();
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${PUCON_LAT}&longitude=${PUCON_LON}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=America/Santiago&forecast_days=5`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!data?.current?.temperature_2m) throw new Error("Invalid data");
        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          apparentTemperature: Math.round(data.current.apparent_temperature),
          humidity: data.current.relative_humidity_2m,
          windSpeed: Math.round(data.current.wind_speed_10m),
          weatherCode: data.current.weather_code,
          isDay: data.current.is_day === 1,
          daily: {
            tempMax: data.daily.temperature_2m_max.map((t: number) => Math.round(t)),
            tempMin: data.daily.temperature_2m_min.map((t: number) => Math.round(t)),
            weatherCode: data.daily.weather_code,
            date: data.daily.time,
          },
        });
      } catch (e) {
        if (e instanceof DOMException && e.name === "AbortError") return;
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <div className="glass-card p-5 animate-pulse">
        <div className="h-4 bg-card-hover rounded w-1/3 mb-3" />
        <div className="h-8 bg-card-hover rounded w-1/4 mb-2" />
        <div className="h-3 bg-card-hover rounded w-1/2" />
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="glass-card p-5 text-center text-sm text-muted2">
        ☁️ {lang === "es" ? "No se pudo cargar el clima. Intenta más tarde." : "Could not load weather. Try again later."}
      </div>
    );
  }

  const current = getWeatherInfo(weather.weatherCode, lang);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="glass-card overflow-hidden"
    >
      {/* Current weather */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <Thermometer size={16} className="text-emerald-400" />
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {t("weather.title")}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{current.icon}</div>
            <div>
              <div className="text-3xl font-extrabold tracking-tight">
                {weather.temperature}°C
              </div>
              <div className="text-sm text-muted2">{current.label}</div>
              <div className="text-xs text-muted mt-0.5">
                {t("weather.feelsLike")} {weather.apparentTemperature}°C
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-muted2">
            <div className="flex items-center gap-1.5">
              <Droplets size={14} className="text-sky-400" />
              {weather.humidity}%
            </div>
            <div className="flex items-center gap-1.5">
              <Wind size={14} className="text-emerald-400" />
              {weather.windSpeed} km/h
            </div>
          </div>
        </div>
      </div>

      {/* 5-day forecast */}
      <div className="border-t border-border px-5 py-4">
        <div className="grid grid-cols-5 gap-2">
          {weather.daily.date.map((date, i) => {
            const dayInfo = getWeatherInfo(weather.daily.weatherCode[i], lang);
            return (
              <div
                key={date}
                className="flex flex-col items-center gap-1 text-center"
              >
                <span className="text-xs font-semibold text-muted2 uppercase">
                  {getDayName(date, lang, t)}
                </span>
                <span className="text-xl">{dayInfo.icon}</span>
                <div className="text-xs">
                  <span className="font-bold text-foreground">
                    {weather.daily.tempMax[i]}°
                  </span>
                  <span className="text-muted mx-0.5">/</span>
                  <span className="text-muted">
                    {weather.daily.tempMin[i]}°
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-border px-5 py-2">
        <p className="text-xs text-muted text-center">
          {t("weather.credit")}
        </p>
      </div>
    </motion.div>
  );
}
