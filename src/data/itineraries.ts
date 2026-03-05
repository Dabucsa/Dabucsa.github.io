import { Itinerary } from "./types";

export const itineraries: Itinerary[] = [
  // ─── 1 DÍA ───
  {
    id: "1-dia-familia",
    days: 1,
    label: "1 Día en Familia",
    description: "Lo mejor de Pucón en un solo día con niños",
    emoji: "👨‍👩‍👧",
    plan: [
      {
        day: 1,
        title: "Un día completo en Pucón",
        activities: [
          { time: "09:00", placeId: "mercado-municipal", note: "Empanadas y sopaipillas para empezar el día" },
          { time: "10:30", placeId: "kayak-lago", note: "Ruta tranquila de 1.5 hrs, guía incluido" },
          { time: "13:00", placeId: "la-maga", note: "Almuerzo con vista al lago, carta infantil" },
          { time: "15:00", placeId: "playa-pucon", note: "Arena volcánica, juegos para niños, entrada libre" },
          { time: "18:00", placeId: "los-pozones", note: "Piscinas termales, niños menores de 6 gratis" },
          { time: "21:00", placeId: "da-alessandro", note: "Pizzas al horno de leña, ambiente familiar" },
        ],
      },
    ],
  },
  {
    id: "1-dia-aventura",
    days: 1,
    label: "1 Día de Aventura",
    description: "Alta intensidad de sol a sol",
    emoji: "🏔️",
    plan: [
      {
        day: 1,
        title: "Modo aventura activado",
        activities: [
          { time: "06:00", placeId: "ascenso-volcan", note: "Guía certificado, crampones y piolet incluidos" },
          { time: "15:00", placeId: "mercado-municipal", note: "Almuerzo post-ascenso, lo merecen" },
          { time: "17:00", placeId: "los-pozones", note: "Termas para recuperar los músculos — merecidísimo" },
          { time: "21:00", placeId: "cerveceria-artesanal", note: "Cervezas artesanales y tablas, cierre perfecto" },
        ],
      },
    ],
  },
  {
    id: "1-dia-pareja",
    days: 1,
    label: "1 Día Romántico",
    description: "Escapada perfecta para dos",
    emoji: "💑",
    plan: [
      {
        day: 1,
        title: "Un día para dos",
        activities: [
          { time: "09:30", placeId: "cafe-de-la-p", note: "Brunch tardío con café de especialidad" },
          { time: "11:00", placeId: "kayak-lago", note: "Canoa para dos con vista al volcán" },
          { time: "13:30", placeId: "ojos-caburgua", note: "Cascadas cristalinas y fotos imperdibles" },
          { time: "16:00", placeId: "termas-huife", note: "Cabina privada con jacuzzi termal" },
          { time: "20:30", placeId: "trawen", note: "Gastronomía mapuche contemporánea" },
        ],
      },
    ],
  },

  // ─── 2–3 DÍAS ───
  {
    id: "2-3-dias-general",
    days: 3,
    label: "2-3 Días Completos",
    description: "Lo esencial de Pucón sin apuro",
    emoji: "📅",
    plan: [
      {
        day: 1,
        title: "Naturaleza & Lago",
        activities: [
          { time: "08:30", placeId: "cafe-de-la-p", note: "Desayuno para cargar energías" },
          { time: "10:00", placeId: "huerquehue", note: "Sendero Los Lagos — el imperdible" },
          { time: "15:00", placeId: "mercado-municipal", note: "Almuerzo tardío con comida local" },
          { time: "17:00", placeId: "playa-pucon", note: "Relajo en la playa con atardecer" },
          { time: "20:30", placeId: "la-maga", note: "Cena con vista al lago" },
        ],
      },
      {
        day: 2,
        title: "Aventura & Termas",
        activities: [
          { time: "09:00", placeId: "rafting-trancura", note: "Adrenalina matutina en el río" },
          { time: "13:00", placeId: "feria-artesanal-cocina", note: "Almuerzo típico y artesanías" },
          { time: "15:00", placeId: "lago-caburgua", note: "Aguas turquesa y ojos de agua" },
          { time: "18:00", placeId: "los-pozones", note: "Termas para cerrar el día perfecto" },
          { time: "21:00", placeId: "cerveceria-artesanal", note: "Cervezas artesanales" },
        ],
      },
      {
        day: 3,
        title: "Cultura & Volcán",
        activities: [
          { time: "06:00", placeId: "ascenso-volcan", note: "Si el clima permite, THE experience" },
          { time: "14:00", placeId: "da-alessandro", note: "Almuerzo merecido post-volcán" },
          { time: "16:00", placeId: "feria-artesanal", note: "Souvenirs y artesanía local" },
          { time: "17:30", placeId: "museo-mapuche", note: "Cultura e historia mapuche" },
          { time: "20:30", placeId: "trawen", note: "Cena de despedida con cocina mapuche" },
        ],
      },
    ],
  },

  // ─── 4–5 DÍAS ───
  {
    id: "4-5-dias-general",
    days: 5,
    label: "4-5 Días Profundos",
    description: "Explorar Pucón a fondo, sin apuro",
    emoji: "🗺️",
    plan: [
      {
        day: 1,
        title: "Llegada & Exploración",
        activities: [
          { time: "10:00", placeId: "cafe-de-la-p", note: "Desayuno tardío, aclimatarse" },
          { time: "11:30", placeId: "playa-pucon", note: "Primeras vistas al volcán y lago" },
          { time: "13:00", placeId: "mercado-municipal", note: "Introducción a la comida local" },
          { time: "15:00", placeId: "feria-artesanal", note: "Recorrer el centro y la feria" },
          { time: "20:00", placeId: "la-maga", note: "Primera cena en Pucón" },
        ],
      },
      {
        day: 2,
        title: "Huerquehue — El Imperdible",
        activities: [
          { time: "08:00", placeId: "mercado-municipal", note: "Desayuno copioso para el trekking" },
          { time: "09:30", placeId: "huerquehue", note: "Sendero Los Lagos completo" },
          { time: "16:00", placeId: "los-pozones", note: "Termas para relajar las piernas" },
          { time: "20:30", placeId: "da-alessandro", note: "Pizzas merecidas" },
        ],
      },
      {
        day: 3,
        title: "Día de Adrenalina",
        activities: [
          { time: "08:30", placeId: "rafting-trancura", note: "Tramo alto para los valientes" },
          { time: "12:30", placeId: "cerveceria-artesanal", note: "Almuerzo y cerveza artesanal" },
          { time: "14:30", placeId: "canopy-pucon", note: "Tirolesas sobre el bosque" },
          { time: "17:00", placeId: "escalada-caburga", note: "Escalada con instructor" },
          { time: "20:30", placeId: "trawen", note: "Cocina mapuche contemporánea" },
        ],
      },
      {
        day: 4,
        title: "Caburgua & Cultura",
        activities: [
          { time: "09:00", placeId: "cafe-de-la-p", note: "Brunch tranquilo" },
          { time: "10:30", placeId: "lago-caburgua", note: "Playas turquesas y relax" },
          { time: "12:00", placeId: "ojos-caburgua", note: "Cascadas impresionantes" },
          { time: "14:00", placeId: "clase-cocina-mapuche", note: "Aprender cocina ancestral" },
          { time: "18:00", placeId: "termas-menetue", note: "Termas al atardecer" },
          { time: "21:00", placeId: "nepal", note: "Cena especial" },
        ],
      },
      {
        day: 5,
        title: "Volcán o Naturaleza",
        activities: [
          { time: "06:00", placeId: "ascenso-volcan", note: "El gran ascenso (si el clima permite)" },
          { time: "15:00", placeId: "feria-artesanal-cocina", note: "Comida reconfortante post-volcán" },
          { time: "17:00", placeId: "taller-ceramica", note: "Recuerdo artesanal para llevar" },
          { time: "19:30", placeId: "cata-vinos", note: "Cata de vinos y quesos" },
        ],
      },
    ],
  },

  // ─── 6–7 DÍAS ───
  {
    id: "6-7-dias-general",
    days: 7,
    label: "6-7 Días — La Experiencia Completa",
    description: "Una semana para vivir Pucón como local",
    emoji: "🏆",
    plan: [
      {
        day: 1,
        title: "Llegada & Primer Contacto",
        activities: [
          { time: "10:00", placeId: "cafe-de-la-p", note: "Bienvenida con buen café" },
          { time: "12:00", placeId: "playa-pucon", note: "Primeras vistas" },
          { time: "14:00", placeId: "mercado-municipal", note: "Almuerzo local" },
          { time: "16:00", placeId: "feria-artesanal", note: "Explorar artesanía" },
          { time: "20:00", placeId: "la-maga", note: "Cena con vista al volcán" },
        ],
      },
      {
        day: 2,
        title: "Huerquehue — El Clásico",
        activities: [
          { time: "08:00", placeId: "mercado-municipal", note: "Desayuno energético" },
          { time: "09:30", placeId: "huerquehue", note: "Sendero Los Lagos" },
          { time: "16:00", placeId: "los-pozones", note: "Termas naturales" },
          { time: "20:30", placeId: "da-alessandro", note: "Pizza al horno de leña" },
        ],
      },
      {
        day: 3,
        title: "Lago Caburgua",
        activities: [
          { time: "09:00", placeId: "cafe-de-la-p", note: "Brunch tranquilo" },
          { time: "10:30", placeId: "ojos-caburgua", note: "Cascadas mágicas" },
          { time: "12:30", placeId: "lago-caburgua", note: "Día de playa turquesa" },
          { time: "17:00", placeId: "termas-menetue", note: "Termas por la tarde" },
          { time: "20:30", placeId: "feria-artesanal-cocina", note: "Cena típica" },
        ],
      },
      {
        day: 4,
        title: "Aventura Acuática",
        activities: [
          { time: "08:30", placeId: "rafting-trancura", note: "Rápidos matutinos" },
          { time: "12:30", placeId: "cerveceria-artesanal", note: "Almuerzo merecido" },
          { time: "14:30", placeId: "kayak-lago", note: "Kayak al atardecer" },
          { time: "18:00", placeId: "termas-huife", note: "Spa premium" },
          { time: "21:00", placeId: "nepal", note: "Cena romántica" },
        ],
      },
      {
        day: 5,
        title: "Volcán Villarrica",
        activities: [
          { time: "06:00", placeId: "ascenso-volcan", note: "Ascenso al cráter activo" },
          { time: "15:00", placeId: "da-alessandro", note: "Almuerzo reconfortante" },
          { time: "17:00", placeId: "los-pozones", note: "Termas para los músculos" },
          { time: "20:30", placeId: "trawen", note: "Cena mapuche de celebración" },
        ],
      },
      {
        day: 6,
        title: "Cultura & Bosques",
        activities: [
          { time: "09:00", placeId: "museo-mapuche", note: "Historia y cultura local" },
          { time: "11:00", placeId: "clase-cocina-mapuche", note: "Cocina ancestral, reservar antes" },
          { time: "14:00", placeId: "taller-ceramica", note: "Crear tu propia pieza de recuerdo" },
          { time: "17:00", placeId: "cata-vinos", note: "Vinos y quesos de la zona" },
          { time: "21:00", placeId: "astroturismo", note: "Cielo austral con telescopio (solo si está despejado)" },
        ],
      },
      {
        day: 7,
        title: "Último Día — Lo que Faltó",
        activities: [
          { time: "09:00", placeId: "cafe-de-la-p", note: "Último brunch" },
          { time: "10:30", placeId: "canopy-pucon", note: "Tirolesas sobre el bosque" },
          { time: "12:30", placeId: "taller-ceramica", note: "Recuerdo artesanal" },
          { time: "15:00", placeId: "bosque-siempreverde", note: "Caminata de despedida" },
          { time: "17:00", placeId: "playa-pucon", note: "Último atardecer en la playa" },
          { time: "20:00", placeId: "trawen", note: "Cena de despedida" },
        ],
      },
    ],
  },
];
