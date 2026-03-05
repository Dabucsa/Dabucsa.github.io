export type Lang = "es" | "en";

type Translations = {
  [key: string]: { es: string; en: string };
};

const t: Translations = {
  // ─── Header ───
  "header.title": { es: "Descubre Pucón", en: "Discover Pucón" },
  "header.subtitle": { es: "Guía para huéspedes", en: "Guest Guide" },

  // ─── Nav ───
  "nav.inicio": { es: "Inicio", en: "Home" },
  "nav.restaurantes": { es: "Restaurantes", en: "Restaurants" },
  "nav.termas": { es: "Termas", en: "Hot Springs" },
  "nav.aventura": { es: "Aventura", en: "Adventure" },
  "nav.naturaleza": { es: "Naturaleza", en: "Nature" },
  "nav.cultura": { es: "Cultura", en: "Culture" },
  "nav.info": { es: "Info Útil", en: "Useful Info" },
  "nav.itinerarios": { es: "Itinerarios", en: "Itineraries" },

  // ─── Footer ───
  "footer.made": { es: "Hecho con ❤️ por tu anfitrión en", en: "Made with ❤️ by your host in" },
  "footer.puconAndino": { es: "Pucón Andino", en: "Pucón Andino" },
  "footer.tagline": { es: "Tu guía para explorar lo mejor del sur de Chile", en: "Your guide to explore the best of southern Chile" },
  "footer.dev": { es: "Desarrollado por", en: "Developed by" },

  // ─── Categories ───
  "cat.restaurantes.name": { es: "Restaurantes", en: "Restaurants" },
  "cat.restaurantes.desc": { es: "Gastronomía local, mapuche y internacional", en: "Local, Mapuche & international cuisine" },
  "cat.termas.name": { es: "Termas", en: "Hot Springs" },
  "cat.termas.desc": { es: "Aguas termales naturales en el bosque", en: "Natural hot springs in the forest" },
  "cat.aventura.name": { es: "Aventura", en: "Adventure" },
  "cat.aventura.desc": { es: "Deportes extremos y actividades outdoor", en: "Extreme sports & outdoor activities" },
  "cat.naturaleza.name": { es: "Naturaleza", en: "Nature" },
  "cat.naturaleza.desc": { es: "Parques, lagos y senderos del sur", en: "Parks, lakes & trails of the south" },
  "cat.cultura.name": { es: "Cultura", en: "Culture" },
  "cat.cultura.desc": { es: "Museos, artesanía y experiencias mapuche", en: "Museums, crafts & Mapuche experiences" },
  "cat.info.name": { es: "Info Útil", en: "Useful Info" },
  "cat.info.desc": { es: "Tips, emergencias, transporte y clima", en: "Tips, emergencies, transport & weather" },

  // ─── PlaceCard ───
  "place.seeMap": { es: "Ver mapa", en: "See map" },
  "place.family": { es: "Familia", en: "Family" },
  "place.adventure": { es: "Aventura", en: "Adventure" },
  "place.couple": { es: "Pareja", en: "Couples" },
  "place.indoor": { es: "Bajo techo", en: "Indoor" },
  "place.hostTip": { es: "Tip del anfitrión", en: "Host tip" },
  "place.approx": { es: "aprox.", en: "approx." },

  // ─── CategoryCard ───
  "card.place": { es: "lugar", en: "place" },
  "card.places": { es: "lugares", en: "places" },

  // ─── DaySelector ───
  "days.title": { es: "¿Cuántos días se quedan?", en: "How many days are you staying?" },
  "days.planned": { es: "días planificados", en: "days planned" },
  "days.1.label": { es: "1 día", en: "1 day" },
  "days.1.sub": { es: "Express", en: "Express" },
  "days.3.label": { es: "2-3 días", en: "2-3 days" },
  "days.3.sub": { es: "Lo esencial", en: "The essentials" },
  "days.5.label": { es: "4-5 días", en: "4-5 days" },
  "days.5.sub": { es: "Completo", en: "Complete" },
  "days.7.label": { es: "6-7 días", en: "6-7 days" },
  "days.7.sub": { es: "Full relax", en: "Full relax" },

  // ─── WeatherWidget ───
  "weather.title": { es: "Clima en Pucón · Ahora", en: "Weather in Pucón · Now" },
  "weather.feelsLike": { es: "Sensación", en: "Feels like" },
  "weather.credit": { es: "Datos de Open-Meteo", en: "Data from Open-Meteo" },
  "weather.mon": { es: "Lun", en: "Mon" },
  "weather.tue": { es: "Mar", en: "Tue" },
  "weather.wed": { es: "Mié", en: "Wed" },
  "weather.thu": { es: "Jue", en: "Thu" },
  "weather.fri": { es: "Vie", en: "Fri" },
  "weather.sat": { es: "Sáb", en: "Sat" },
  "weather.sun": { es: "Dom", en: "Sun" },

  // ─── ItineraryTimeline ───
  "timeline.day": { es: "Día", en: "Day" },
  "timeline.map": { es: "Mapa", en: "Map" },

  // ─── Home Page ───
  "home.hero.title": { es: "Descubre Pucón", en: "Discover Pucón" },
  "home.hero.subtitle": { es: "Guía curada por tu anfitrión · Gastronomía, aventura, termas y naturaleza del sur de Chile.", en: "Curated guide by your host · Gastronomy, adventure, hot springs & nature of southern Chile." },
  "home.hero.by": { es: "por tu anfitrión en", en: "by your host in" },
  "home.categories.title": { es: "Explora por categoría", en: "Explore by category" },
  "home.tips.title": { es: "Tips según la temporada", en: "Seasonal tips" },
  "home.tips.summer.title": { es: "☀️ Verano (Dic - Mar)", en: "☀️ Summer (Dec - Mar)" },
  "home.tips.summer.items": {
    es: "Protector solar siempre (el sol del sur es fuerte)|Reservar restaurantes populares con anticipación|Madrugar para los trekkings (menos calor y gente)|Llevar agua en todas las excursiones",
    en: "Always wear sunscreen (southern sun is strong)|Book popular restaurants in advance|Start early for treks (less heat and crowds)|Bring water on all excursions",
  },
  "home.tips.winter.title": { es: "❄️ Invierno (Jun - Sep)", en: "❄️ Winter (Jun - Sep)" },
  "home.tips.winter.items": {
    es: "Vestir en capas (puede cambiar rápido)|Las termas son MÁGICAS bajo la lluvia|Consultar estado de caminos antes de salir|Reservar actividades indoor como plan B",
    en: "Dress in layers (weather changes quickly)|Hot springs are MAGICAL in the rain|Check road conditions before heading out|Book indoor activities as backup plan",
  },
  "home.transport.title": { es: "🚗 Transporte", en: "🚗 Transportation" },
  "home.transport.items": {
    es: "Auto es lo más práctico para termas y parques|El centro de Pucón es 100% caminable|Buses locales a Villarrica cada 15 min|Preguntar por transfers en turismo",
    en: "A car is most practical for hot springs & parks|Downtown Pucón is 100% walkable|Local buses to Villarrica every 15 min|Ask about transfers at tourism agencies",
  },
  "home.emergency.title": { es: "Números de emergencia", en: "Emergency numbers" },
  "home.emergency.ambulance": { es: "SAMU (Ambulancia)", en: "SAMU (Ambulance)" },
  "home.emergency.fire": { es: "Bomberos", en: "Fire Department" },
  "home.emergency.police": { es: "Carabineros", en: "Police" },

  // ─── Restaurantes Page ───
  "page.restaurantes.title": { es: "🍽️ Restaurantes", en: "🍽️ Restaurants" },
  "page.restaurantes.desc": { es: "Lo mejor de la gastronomía de Pucón: desde cocina mapuche ancestral hasta pizzas al horno de leña y smoked house. Acá no se pasa hambre.", en: "The best of Pucón gastronomy: from ancestral Mapuche cuisine to wood-fired pizzas and smoked house. You won't go hungry here." },
  "page.restaurantes.guide.title": { es: "Guía rápida de precios", en: "Quick price guide" },
  "page.restaurantes.guide.low": { es: "Económico — Hasta $10.000/persona", en: "Budget — Up to $10,000/person" },
  "page.restaurantes.guide.mid": { es: "Medio — $10.000 a $18.000/persona", en: "Mid-range — $10,000 to $18,000/person" },
  "page.restaurantes.guide.high": { es: "Premium — Sobre $18.000/persona", en: "Premium — Over $18,000/person" },

  // ─── Termas Page ───
  "page.termas.title": { es: "♨️ Termas", en: "♨️ Hot Springs" },
  "page.termas.desc": { es: "La zona de Pucón tiene las mejores termas del sur de Chile. Desde pozones rústicos en el bosque hasta spa premium con todo incluido.", en: "The Pucón area has the best hot springs in southern Chile. From rustic forest pools to premium all-inclusive spas." },
  "page.termas.guide.title": { es: "Guía rápida de termas", en: "Quick hot springs guide" },
  "page.termas.guide.rustic": { es: "Rústico", en: "Rustic" },
  "page.termas.guide.rustic.desc": { es: "Pozones naturales, sin lujo", en: "Natural pools, no frills" },
  "page.termas.guide.balance": { es: "Balance", en: "Balanced" },
  "page.termas.guide.balance.desc": { es: "Buen mix naturaleza-comodidad", en: "Good nature-comfort mix" },
  "page.termas.guide.premium": { es: "Premium", en: "Premium" },
  "page.termas.guide.premium.desc": { es: "Spa completo y privacidad", en: "Full spa & privacy" },
  "page.termas.guide.towel": { es: "Llevar toalla propia siempre", en: "Always bring your own towel" },
  "page.termas.guide.time": { es: "Ir temprano o al atardecer para evitar multitudes", en: "Go early or at sunset to avoid crowds" },
  "page.termas.guide.rain": { es: "Días de lluvia = experiencia mágica en las termas", en: "Rainy days = magical hot spring experience" },

  // ─── Aventura Page ───
  "page.aventura.title": { es: "🏔️ Aventura", en: "🏔️ Adventure" },
  "page.aventura.desc": { es: "Volcanes, ríos, bosques y lagos. Pucón es la capital de la aventura en Chile. Actividades para todos los niveles de adrenalina.", en: "Volcanoes, rivers, forests and lakes. Pucón is the adventure capital of Chile. Activities for all adrenaline levels." },
  "page.aventura.intensity": { es: "⚡ Nivel de intensidad", en: "⚡ Intensity level" },
  "page.aventura.mild": { es: "Suave", en: "Mild" },
  "page.aventura.mild.desc": { es: "Kayak, canopy, rocódromo", en: "Kayak, canopy, climbing wall" },
  "page.aventura.medium": { es: "Medio", en: "Medium" },
  "page.aventura.medium.desc": { es: "Rafting, bike, escalada", en: "Rafting, bike, climbing" },
  "page.aventura.extreme": { es: "Extremo", en: "Extreme" },
  "page.aventura.extreme.desc": { es: "Volcán, enduro", en: "Volcano, enduro" },

  // ─── Naturaleza Page ───
  "page.naturaleza.title": { es: "🌲 Naturaleza", en: "🌲 Nature" },
  "page.naturaleza.desc": { es: "Bosques milenarios de araucarias, lagos cristalinos, playas volcánicas y senderos que quitan el aliento. Lo mejor de la naturaleza del sur.", en: "Ancient araucaria forests, crystal-clear lakes, volcanic beaches and breathtaking trails. The best of southern nature." },
  "page.naturaleza.highlight.title": { es: "El imperdible: Parque Huerquehue", en: "Must-see: Huerquehue Park" },
  "page.naturaleza.highlight.desc": { es: "Si solo tienen tiempo para un trekking, que sea el sendero Los Lagos en Huerquehue. Araucarias milenarias, tres lagunas cristalinas y vistas al volcán. ~4-6 horas ida y vuelta.", en: "If you only have time for one trek, make it the Los Lagos trail in Huerquehue. Ancient araucarias, three crystal-clear lagoons, and volcano views. ~4-6 hours round trip." },

  // ─── Cultura Page ───
  "page.cultura.title": { es: "🎨 Cultura", en: "🎨 Culture" },
  "page.cultura.desc": { es: "Pucón está en territorio mapuche. Descubrí su historia, su cocina ancestral, artesanía y el cielo austral más impresionante que vas a ver.", en: "Pucón is in Mapuche territory. Discover their history, ancestral cuisine, crafts, and the most impressive southern sky you'll ever see." },
  "page.cultura.note.title": { es: "Cultura Mapuche", en: "Mapuche Culture" },
  "page.cultura.note.desc": { es: "La zona de Pucón es parte del Wallmapu (territorio mapuche). Aprovechen de conocer su rica cultura, cocina y cosmovisión. Siempre con respeto y curiosidad genuina.", en: "The Pucón area is part of Wallmapu (Mapuche territory). Take the opportunity to learn about their rich culture, cuisine, and worldview. Always with respect and genuine curiosity." },

  // ─── Info Page ───
  "page.info.title": { es: "📋 Info Útil", en: "📋 Useful Info" },
  "page.info.desc": { es: "Todo lo que necesitas saber para disfrutar Pucón sin preocupaciones. Emergencias, transporte, clima y datos prácticos.", en: "Everything you need to know to enjoy Pucón worry-free. Emergencies, transport, weather and practical info." },
  "page.info.emergency.title": { es: "Números de emergencia", en: "Emergency Numbers" },
  "page.info.emergency.samu": { es: "SAMU (Ambulancia)", en: "SAMU (Ambulance)" },
  "page.info.emergency.fire": { es: "Bomberos", en: "Fire Department" },
  "page.info.emergency.police": { es: "Carabineros", en: "Police" },
  "page.info.emergency.pdi": { es: "PDI (Investigaciones)", en: "PDI (Investigations)" },
  "page.info.emergency.conaf": { es: "CONAF (Incendios forestales)", en: "CONAF (Forest fires)" },
  "page.info.emergency.maritime": { es: "Rescate marítimo", en: "Maritime rescue" },
  "page.info.hospital": { es: "Hospital Pucón:", en: "Pucón Hospital:" },
  "page.info.howToGet.title": { es: "Cómo llegar", en: "How to get there" },
  "page.info.howToGet.plane": { es: "Desde Santiago en avión:", en: "From Santiago by plane:" },
  "page.info.howToGet.planeDesc": { es: "Vuelo a Temuco (ZCO) ~1.5 hrs. Luego transfer o auto a Pucón (~1.5 hrs). También hay vuelos a Villarrica más cerca pero menos frecuentes.", en: "Flight to Temuco (ZCO) ~1.5 hrs. Then transfer or car to Pucón (~1.5 hrs). There are also flights to Villarrica, closer but less frequent." },
  "page.info.howToGet.car": { es: "En auto desde Santiago:", en: "By car from Santiago:" },
  "page.info.howToGet.carDesc": { es: "~8 hrs por Ruta 5 Sur hasta Freire, luego desvío a Villarrica/Pucón. Ruta en excelente estado.", en: "~8 hrs on Ruta 5 South to Freire, then detour to Villarrica/Pucón. Road in excellent condition." },
  "page.info.howToGet.bus": { es: "En bus:", en: "By bus:" },
  "page.info.howToGet.busDesc": { es: "Pullman Bus, Tur Bus y JAC tienen servicios directos Santiago-Pucón (~10 hrs). Salón cama recomendado para viaje nocturno.", en: "Pullman Bus, Tur Bus and JAC have direct Santiago-Pucón services (~10 hrs). Sleeper seat recommended for overnight travel." },
  "page.info.transport.title": { es: "Transporte local", en: "Local transport" },
  "page.info.transport.car": { es: "Arriendo de auto", en: "Car rental" },
  "page.info.transport.carDesc": { es: "Lo más práctico para llegar a termas, parques y lagos. Varias empresas en el centro y aeropuerto de Temuco.", en: "Most practical for reaching hot springs, parks and lakes. Several companies in the center and Temuco airport." },
  "page.info.transport.transfer": { es: "Transfers", en: "Transfers" },
  "page.info.transport.transferDesc": { es: "Todas las agencias de turismo ofrecen transfers a termas, Huerquehue, Caburgua, etc. Preguntar en la oficina de turismo.", en: "All tourism agencies offer transfers to hot springs, Huerquehue, Caburgua, etc. Ask at the tourist office." },
  "page.info.transport.walk": { es: "A pie", en: "On foot" },
  "page.info.transport.walkDesc": { es: "El centro de Pucón es completamente caminable. Restaurantes, playa y feria a pocos minutos.", en: "Downtown Pucón is entirely walkable. Restaurants, beach, and market are minutes away." },
  "page.info.transport.bus": { es: "Buses locales", en: "Local buses" },
  "page.info.transport.busDesc": { es: "Línea Pucón-Villarrica cada 15 min (~$1.000). También hay micros a Caburgua.", en: "Pucón-Villarrica line every 15 min (~$1,000). There are also buses to Caburgua." },
  "page.info.transport.taxi": { es: "Taxis", en: "Taxis" },
  "page.info.transport.taxiDesc": { es: "Apps locales y taxis en la calle. Negociar precio antes de subir para destinos fuera del pueblo.", en: "Local apps and street taxis. Negotiate price before getting in for destinations outside town." },
  "page.info.climate.title": { es: "Clima & qué llevar", en: "Climate & what to pack" },
  "page.info.climate.summer.title": { es: "☀️ Verano (Dic - Mar)", en: "☀️ Summer (Dec - Mar)" },
  "page.info.climate.summer.items": {
    es: "20-30°C durante el día|Protector solar SPF50+ y lentes|Sombrero y ropa ligera|Zapatillas de trekking|Traje de baño|Polera manga larga para la noche (baja a 12°C)",
    en: "20-30°C during the day|SPF50+ sunscreen and sunglasses|Hat and light clothing|Trekking shoes|Swimsuit|Long sleeve shirt for nighttime (drops to 12°C)",
  },
  "page.info.climate.winter.title": { es: "❄️ Invierno (Jun - Sep)", en: "❄️ Winter (Jun - Sep)" },
  "page.info.climate.winter.items": {
    es: "2-10°C, puede bajar a -2°C|Chaqueta impermeable|Capas térmicas|Botas impermeables|Gorro, guantes, bufanda|Lluvia frecuente — paraguas siempre",
    en: "2-10°C, can drop to -2°C|Waterproof jacket|Thermal layers|Waterproof boots|Hat, gloves, scarf|Frequent rain — always carry an umbrella",
  },
  "page.info.volcano.title": { es: "Estado del Volcán Villarrica", en: "Villarrica Volcano Status" },
  "page.info.volcano.desc": { es: "El Villarrica es uno de los volcanes más activos de Chile. SERNAGEOMIN (Servicio Nacional de Geología y Minería) publica alertas regulares. Los niveles son:", en: "Villarrica is one of Chile's most active volcanoes. SERNAGEOMIN (National Geology and Mining Service) publishes regular alerts. The levels are:" },
  "page.info.volcano.green": { es: "Sin actividad. Acceso normal.", en: "No activity. Normal access." },
  "page.info.volcano.yellow": { es: "Actividad menor. Restricciones parciales.", en: "Minor activity. Partial restrictions." },
  "page.info.volcano.orange": { es: "Actividad importante. Zona de exclusión.", en: "Significant activity. Exclusion zone." },
  "page.info.volcano.red": { es: "Erupción. Evacuación si corresponde.", en: "Eruption. Evacuate if required." },
  "page.info.volcano.link": { es: "Ver estado actual en SERNAGEOMIN →", en: "See current status on SERNAGEOMIN →" },
  "page.info.services.title": { es: "Servicios cercanos", en: "Nearby Services" },
  "page.info.services.supermarkets": { es: "Supermercados", en: "Supermarkets" },
  "page.info.services.pharmacies": { es: "Farmacias", en: "Pharmacies" },
  "page.info.wifi.title": { es: "WiFi & Conectividad", en: "WiFi & Connectivity" },
  "page.info.wifi.items": {
    es: "📶 WiFi disponible en el alojamiento (contraseña en el check-in)|📱 Señal celular buena en Pucón centro (Entel, Movistar, WOM, Claro)|⛰️ Sin señal en zonas de montaña (Huerquehue, termas, Cañi)|💡 Descargar mapas offline de Google Maps antes de salir",
    en: "📶 WiFi available at the accommodation (password at check-in)|📱 Good cell signal in downtown Pucón (Entel, Movistar, WOM, Claro)|⛰️ No signal in mountain areas (Huerquehue, hot springs, Cañi)|💡 Download offline Google Maps before heading out",
  },

  // ─── Itinerarios Page ───
  "page.itinerarios.title": { es: "📅 Itinerarios", en: "📅 Itineraries" },
  "page.itinerarios.desc": { es: "Planes sugeridos por tu anfitrión según cuántos días te quedes. Adaptables al clima y tus intereses.", en: "Suggested plans by your host based on how many days you're staying. Adaptable to weather and your interests." },
  "page.itinerarios.howMany": { es: "¿Cuántos días te quedas?", en: "How many days are you staying?" },
  "page.itinerarios.selectAbove": { es: "Selecciona arriba para ver un itinerario sugerido día a día", en: "Select above to see a day-by-day suggested itinerary" },
  "page.itinerarios.note": { es: "💡 Estos itinerarios son sugerencias — siéntanse libres de adaptar según el clima, las ganas y el ritmo de cada día. ¡Aprovechenlo al máximo!", en: "💡 These itineraries are suggestions — feel free to adapt based on the weather, your mood, and the pace of each day. Make the most of it!" },
  "page.itinerarios.loading": { es: "Cargando itinerarios...", en: "Loading itineraries..." },
  "page.itinerarios.1day": { es: "1 día", en: "1 day" },
  "page.itinerarios.23days": { es: "2-3 días", en: "2-3 days" },
  "page.itinerarios.45days": { es: "4-5 días", en: "4-5 days" },
  "page.itinerarios.67days": { es: "6-7 días", en: "6-7 days" },

  // ─── Not Found ───
  "notFound.title": { es: "Página no encontrada", en: "Page not found" },
  "notFound.desc": { es: "Parece que esta ruta no existe. ¿Quizás te perdiste en el bosque?", en: "This route doesn't seem to exist. Maybe you got lost in the forest?" },
  "notFound.back": { es: "Volver al inicio", en: "Back to home" },

  // ─── Error ───
  "error.title": { es: "Algo salió mal", en: "Something went wrong" },
  "error.desc": { es: "Hubo un error cargando esta página. Intenta de nuevo.", en: "There was an error loading this page. Try again." },
  "error.retry": { es: "Reintentar", en: "Retry" },
};

export function useT(lang: Lang) {
  return (key: string): string => {
    const entry = t[key];
    if (!entry) return key;
    return entry[lang] || entry.es;
  };
}

export default t;
