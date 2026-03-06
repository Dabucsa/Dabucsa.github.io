import type { Lang } from "@/i18n";

interface LocalizedText {
  es: string;
  en: string;
}

export interface PracticalLinkItem {
  label: LocalizedText;
  detail: LocalizedText;
  href?: string;
}

export interface EmergencyNumber {
  num: string;
  label: LocalizedText;
  color: string;
}

export interface ServiceLocation {
  name: string;
  detail: LocalizedText;
  mapUrl: string;
}

export interface PracticalInfoContent {
  emergencyNumbers: EmergencyNumber[];
  hospital: {
    address: LocalizedText;
    phoneLabel: string;
    phoneHref: string;
    mapUrl: string;
  };
  howToGet: PracticalLinkItem[];
  localTransport: PracticalLinkItem[];
  nearbyServices: {
    supermarkets: ServiceLocation[];
    pharmacies: ServiceLocation[];
  };
}

export const practicalInfoContent: PracticalInfoContent = {
  emergencyNumbers: [
    {
      num: "131",
      label: { es: "SAMU (Ambulancia)", en: "SAMU (Ambulance)" },
      color: "text-red-400",
    },
    {
      num: "132",
      label: { es: "Bomberos", en: "Fire Department" },
      color: "text-orange-400",
    },
    {
      num: "133",
      label: { es: "Carabineros", en: "Police" },
      color: "text-sky-400",
    },
    {
      num: "134",
      label: { es: "PDI (Investigaciones)", en: "PDI (Investigations)" },
      color: "text-violet-400",
    },
    {
      num: "137",
      label: { es: "CONAF (Incendios forestales)", en: "CONAF (Forest fires)" },
      color: "text-emerald-400",
    },
    {
      num: "130",
      label: { es: "Rescate marítimo", en: "Maritime rescue" },
      color: "text-blue-400",
    },
  ],
  hospital: {
    address: {
      es: "Colo Colo 635, Pucón",
      en: "Colo Colo 635, Pucon",
    },
    phoneLabel: "(045) 244-3500",
    phoneHref: "tel:+56452443500",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hospital+Pucon+Colo+Colo+635",
  },
  howToGet: [
    {
      label: { es: "Desde Santiago en avión:", en: "From Santiago by plane:" },
      detail: {
        es: "Vuelo a Temuco (ZCO) ~1.5 hrs. Luego transfer o auto a Pucón (~1.5 hrs). También hay vuelos a Villarrica más cerca pero menos frecuentes.",
        en: "Flight to Temuco (ZCO) ~1.5 hrs. Then transfer or car to Pucon (~1.5 hrs). There are also flights to Villarrica, closer but less frequent.",
      },
    },
    {
      label: { es: "En auto desde Santiago:", en: "By car from Santiago:" },
      detail: {
        es: "~8 hrs por Ruta 5 Sur hasta Freire, luego desvío a Villarrica/Pucón. Ruta en excelente estado.",
        en: "~8 hrs on Ruta 5 South to Freire, then detour to Villarrica/Pucon. Road in excellent condition.",
      },
    },
    {
      label: { es: "En bus:", en: "By bus:" },
      detail: {
        es: "Pullman Bus, Tur Bus y JAC tienen servicios directos Santiago-Pucón (~10 hrs). Salón cama recomendado para viaje nocturno.",
        en: "Pullman Bus, Tur Bus and JAC have direct Santiago-Pucon services (~10 hrs). Sleeper seat recommended for overnight travel.",
      },
    },
  ],
  localTransport: [
    {
      label: { es: "Arriendo de auto", en: "Car rental" },
      detail: {
        es: "Lo más práctico para llegar a termas, parques y lagos. Varias empresas en el centro y aeropuerto de Temuco.",
        en: "Most practical for reaching hot springs, parks and lakes. Several companies in the center and Temuco airport.",
      },
    },
    {
      label: { es: "Transfers", en: "Transfers" },
      detail: {
        es: "Todas las agencias de turismo ofrecen transfers a termas, Huerquehue, Caburgua, etc. Preguntar en la oficina de turismo.",
        en: "All tourism agencies offer transfers to hot springs, Huerquehue, Caburgua, etc. Ask at the tourist office.",
      },
    },
    {
      label: { es: "A pie", en: "On foot" },
      detail: {
        es: "El centro de Pucón es completamente caminable. Restaurantes, playa y feria a pocos minutos.",
        en: "Downtown Pucon is entirely walkable. Restaurants, beach, and market are minutes away.",
      },
    },
    {
      label: { es: "Buses locales", en: "Local buses" },
      detail: {
        es: "Línea Pucón-Villarrica cada 15 min (~$1.000). También hay micros a Caburgua.",
        en: "Pucon-Villarrica line every 15 min (~$1,000). There are also buses to Caburgua.",
      },
    },
    {
      label: { es: "Taxis", en: "Taxis" },
      detail: {
        es: "Apps locales y taxis en la calle. Negociar precio antes de subir para destinos fuera del pueblo.",
        en: "Local apps and street taxis. Negotiate price before getting in for destinations outside town.",
      },
    },
  ],
  nearbyServices: {
    supermarkets: [
      {
        name: "Unimarc",
        detail: { es: "Centro de Pucón", en: "Downtown Pucon" },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Unimarc+Pucon",
      },
      {
        name: "Santa Isabel",
        detail: { es: "Av. O'Higgins", en: "O'Higgins Ave." },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Isabel+Pucon",
      },
      {
        name: "Minimarkets",
        detail: { es: "Varios en el centro", en: "Several downtown" },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=minimarket+centro+Pucon",
      },
    ],
    pharmacies: [
      {
        name: "Cruz Verde",
        detail: { es: "Centro", en: "Downtown" },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Cruz+Verde+Pucon",
      },
      {
        name: "Salcobrand",
        detail: { es: "Av. O'Higgins", en: "O'Higgins Ave." },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Salcobrand+Pucon",
      },
      {
        name: "Farmacia del Pueblo",
        detail: { es: "Centro", en: "Downtown" },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Farmacia+del+Pueblo+Pucon",
      },
    ],
  },
};

export function getLocalizedText(text: LocalizedText, lang: Lang) {
  return text[lang];
}
