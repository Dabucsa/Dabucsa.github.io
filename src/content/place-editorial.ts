import type { Lang } from "@/i18n";

type LocalizedText = { es: string; en: string };

export interface PlaceEditorial {
  bestMoment?: LocalizedText;
  logistics?: LocalizedText;
  caution?: LocalizedText;
  reservation?: LocalizedText;
}

export const placeEditorial: Record<string, PlaceEditorial> = {
  "la-maga": {
    bestMoment: {
      es: "Conviene para almuerzo largo o cena tranquila con vista.",
      en: "Best for a long lunch or a calm dinner with a view.",
    },
    reservation: {
      es: "Reservar ayuda mucho en verano si quieres terraza.",
      en: "Booking helps a lot in summer if you want a terrace table.",
    },
  },
  "pizza-cala": {
    logistics: {
      es: "Muy buen comodín cuando quieres comer bien sin convertir la comida en un evento.",
      en: "A very good fallback when you want to eat well without turning the meal into an event.",
    },
    caution: {
      es: "Se llena rápido en horarios punta.",
      en: "It fills up quickly at peak hours.",
    },
  },
  trawen: {
    reservation: {
      es: "Conviene reservar; es de las comidas más especiales del viaje.",
      en: "Worth booking ahead; it's one of the most special meals of the trip.",
    },
    bestMoment: {
      es: "Ideal para una noche tranquila sin apuro.",
      en: "Ideal for a calm, unhurried evening.",
    },
  },
  "cafe-amankay": {
    bestMoment: {
      es: "Funciona mejor cuando el día parte hacia Caburgua, termas o rutas fuera del centro.",
      en: "Works best when the day starts toward Caburgua, hot springs, or routes outside downtown.",
    },
    logistics: {
      es: "Tiene más sentido como parada de ruta que como café casual si vas a quedarte todo el día en el centro.",
      en: "It makes more sense as a route stop than as a casual café if you're staying downtown all day.",
    },
  },
  "mercado-municipal": {
    bestMoment: {
      es: "Funciona muy bien para almuerzo rápido o empezar el día temprano.",
      en: "Works very well for a quick lunch or an early start to the day.",
    },
  },
  "los-pozones": {
    bestMoment: {
      es: "Se disfruta más con lluvia o al atardecer.",
      en: "Best enjoyed in the rain or near sunset.",
    },
    logistics: {
      es: "Lleva toalla, sandalias y ropa fácil de cambiar.",
      en: "Bring a towel, sandals, and clothes that are easy to change in and out of.",
    },
  },
  "termas-huife": {
    reservation: {
      es: "Conviene reservar si buscas una experiencia más premium o privada.",
      en: "Worth reserving if you're after a more premium or private experience.",
    },
  },
  "termas-geometricas": {
    logistics: {
      es: "Implica más traslado que otras termas, pero tiene sentido si quieres una experiencia realmente memorable.",
      en: "It requires more travel time than other hot springs, but it makes sense if you're after a genuinely memorable experience.",
    },
    caution: {
      es: "Mejor no dejarla para un día apretado.",
      en: "Better not to leave it for an already packed day.",
    },
  },
  "termas-menetue": {
    bestMoment: {
      es: "Buena alternativa si buscas equilibrio entre naturaleza y comodidad.",
      en: "A strong option if you want balance between nature and comfort.",
    },
  },
  "ascenso-volcan": {
    reservation: {
      es: "Reserva con margen y vuelve a confirmar condiciones la tarde anterior.",
      en: "Book with some margin and confirm conditions again the afternoon before.",
    },
    caution: {
      es: "Es exigente y muy dependiente del clima; no lo mezcles con otro plan duro el mismo día.",
      en: "It's demanding and highly weather-dependent; don't combine it with another hard plan on the same day.",
    },
  },
  "rafting-trancura": {
    bestMoment: {
      es: "Muy buen plan central si quieres adrenalina sin gastar todo el día.",
      en: "A strong core plan if you want adrenaline without using up the whole day.",
    },
  },
  rocodromo: {
    logistics: {
      es: "Excelente plan B si amaneció lloviendo o quieres bajar intensidad.",
      en: "Excellent plan B if you wake up to rain or want to lower the intensity.",
    },
  },
  "kayak-lago": {
    bestMoment: {
      es: "Mejor temprano o con poco viento.",
      en: "Best early in the day or when the wind is low.",
    },
  },
  huerquehue: {
    bestMoment: {
      es: "Vale mucho más la pena si sales temprano y le das el día completo que merece.",
      en: "It's much more worth it if you start early and give it the full day it deserves.",
    },
    logistics: {
      es: "Agua, snack, capas y buen calzado cambian completamente la experiencia.",
      en: "Water, snacks, layers, and solid footwear change the experience completely.",
    },
  },
  "santuario-cani": {
    caution: {
      es: "Mejor para quienes ya vienen con ganas de caminar en serio.",
      en: "Better for people who are genuinely up for a real hike.",
    },
  },
  "playa-pucon": {
    bestMoment: {
      es: "Muy buena para bajar revoluciones al final del día.",
      en: "Very good for winding down at the end of the day.",
    },
  },
  "ojos-caburgua": {
    bestMoment: {
      es: "Funciona mejor como parada corta o en combo con Caburgua.",
      en: "Works best as a short stop or combined with Caburgua.",
    },
  },
  "museo-mapuche": {
    logistics: {
      es: "Buen plan para darle más profundidad al viaje antes de salir a buscar solo paisaje y actividad.",
      en: "A good plan if you want to add more depth to the trip before focusing only on scenery and activity.",
    },
  },
  "clase-cocina-mapuche": {
    reservation: {
      es: "Conviene coordinar antes; es una de las experiencias culturales más ricas del viaje.",
      en: "Best coordinated ahead of time; it's one of the richest cultural experiences in the trip.",
    },
  },
  astroturismo: {
    caution: {
      es: "Depende completamente del cielo; no lo tomes como plan fijo si está nublado.",
      en: "Completely sky-dependent; don't treat it as a fixed plan if clouds are likely.",
    },
  },
  "feria-artesanal": {
    bestMoment: {
      es: "Muy buena para rellenos de agenda, regalos y paseos sin apuro.",
      en: "Very good for filling small gaps in the day, gifts, and slower strolls.",
    },
  },
};

export function getPlaceEditorial(id: string, lang: Lang): Record<keyof PlaceEditorial, string | undefined> {
  const entry = placeEditorial[id];
  return {
    bestMoment: entry?.bestMoment?.[lang],
    logistics: entry?.logistics?.[lang],
    caution: entry?.caution?.[lang],
    reservation: entry?.reservation?.[lang],
  };
}
