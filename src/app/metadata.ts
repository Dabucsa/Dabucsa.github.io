import type { Metadata } from "next";
import type { Lang } from "@/i18n";

type RouteKey =
  | "home"
  | "itinerarios"
  | "restaurantes"
  | "termas"
  | "aventura"
  | "naturaleza"
  | "cultura"
  | "info";

const baseUrl = "https://pucontour.zeroaustral.cl";

const routeMeta: Record<RouteKey, Record<Lang, { title: string; description: string }>> = {
  home: {
    es: {
      title: "Descubre Pucón — Guía Turística para Huéspedes",
      description:
        "Tu guía completa para explorar Pucón y alrededores. Restaurantes, termas, aventura, naturaleza y cultura con criterio práctico.",
    },
    en: {
      title: "Discover Pucón — Guest Travel Guide",
      description:
        "Your practical guide to Pucón and the surrounding area. Restaurants, hot springs, adventure, nature, and culture with clear decision support.",
    },
  },
  itinerarios: {
    es: {
      title: "Itinerarios",
      description:
        "Itinerarios sugeridos de 1 a 7 días para organizar una estadía en Pucón según tiempo disponible, ritmo y clima.",
    },
    en: {
      title: "Itineraries",
      description:
        "Suggested 1 to 7-day itineraries to organize a stay in Pucón based on time, pace, and weather.",
    },
  },
  restaurantes: {
    es: {
      title: "Restaurantes",
      description:
        "Restaurantes recomendados en Pucón para comidas especiales, opciones familiares, almuerzos rápidos y cierres de día con buen criterio.",
    },
    en: {
      title: "Restaurants",
      description:
        "Recommended restaurants in Pucón for special meals, family-friendly options, quick lunches, and smart end-of-day choices.",
    },
  },
  termas: {
    es: {
      title: "Termas",
      description:
        "Guía de termas en Pucón para elegir entre opciones rústicas, cómodas y premium según clima, tiempo disponible y tipo de viaje.",
    },
    en: {
      title: "Hot Springs",
      description:
        "A hot springs guide for Pucón to choose between rustic, comfortable, and premium options based on weather, available time, and trip style.",
    },
  },
  aventura: {
    es: {
      title: "Aventura",
      description:
        "Actividades de aventura en Pucón ordenadas por intensidad, clima y logística: rafting, volcán, kayak, canopy, escalada y más.",
    },
    en: {
      title: "Adventure",
      description:
        "Adventure activities in Pucón organized by intensity, weather, and logistics: rafting, volcano, kayaking, canopy, climbing, and more.",
    },
  },
  naturaleza: {
    es: {
      title: "Naturaleza",
      description:
        "Bosques, lagos, playas volcánicas y senderos en Pucón con una guía clara para elegir planes de medio día o jornadas completas.",
    },
    en: {
      title: "Nature",
      description:
        "Forests, lakes, volcanic beaches, and trails in Pucón with a clear guide for choosing half-day plans or full outdoor days.",
    },
  },
  cultura: {
    es: {
      title: "Cultura",
      description:
        "Experiencias culturales en Pucón y alrededores: mundo mapuche, gastronomía, artesanía, museos y planes tranquilos para equilibrar el viaje.",
    },
    en: {
      title: "Culture",
      description:
        "Cultural experiences in Pucón and nearby areas: Mapuche world, food, crafts, museums, and slower plans to balance the trip.",
    },
  },
  info: {
    es: {
      title: "Info Útil",
      description:
        "Información práctica para moverse por Pucón: emergencias, clima, conectividad, transporte, servicios cercanos y consejos por temporada.",
    },
    en: {
      title: "Useful Info",
      description:
        "Practical information for getting around Pucón: emergencies, weather, connectivity, transport, nearby services, and seasonal advice.",
    },
  },
};

export function getRouteMetadata(route: RouteKey, lang: Lang): Metadata {
  const meta = routeMeta[route][lang];
  const locale = lang === "es" ? "es_CL" : "en_US";

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: route === "home" ? baseUrl : `${baseUrl}/${route}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: route === "home" ? baseUrl : `${baseUrl}/${route}`,
      locale,
      siteName: lang === "es" ? "Descubre Pucón" : "Discover Pucón",
      type: "website",
    },
  };
}
