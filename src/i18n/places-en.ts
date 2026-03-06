/** English translations for place descriptions, longDescriptions and tips.
 *  Keyed by place.id — only translatable string fields are included. */

export const placesEn: Record<
  string,
  { name?: string; description?: string; longDescription?: string; tip?: string }
> = {
  // ─── RESTAURANTES ───
  "la-maga": {
    description: "Family menu with lake views",
    longDescription:
      "Family restaurant facing Lake Villarrica with a varied menu of meats, fish and pasta. Terrace with volcano views on clear days. Great for a relaxed lunch or dinner.",
    tip: "Order the shared appetizer platter and book the terrace in advance during peak season.",
  },
  "pizza-cala": {
    description: "Artisan Neapolitan pizza, sourdough & wood-fired oven",
    longDescription:
      "Artisan pizzeria with 48-hour fermented sourdough and wood-fired oven. Fresh, local ingredients. Casual, cozy atmosphere — ideal for a quick quality meal.",
    tip: "The burrata pizza with cherry tomatoes is unmatched. Arrive early as it fills up fast.",
  },
  "by-roots": {
    description: "Smoked house: artisan smoked meats, ribs & pulled pork",
    longDescription:
      "Artisan smokehouse in Pucón. Specializing in ribs, pulled pork, brisket and other cuts smoked for hours over native wood. Bold flavors and a laid-back vibe.",
    tip: "The smoked ribs are the star dish. Come hungry — portions are generous.",
  },
  "ecole-chocolate": {
    description: "Artisan chocolate shop & café, iconic in Pucón",
    longDescription:
      "Iconic artisan chocolate shop and café of Pucón. Handmade chocolates, ice cream, truffles, cakes and great coffee. A must-stop for anyone with a sweet tooth.",
    tip: "The merkén truffles and artisan ice cream are unmissable. Grab some chocolates as gifts.",
  },
  banus: {
    description: "Mediterranean & Middle Eastern cuisine, hip terrace",
    longDescription:
      "Restaurant with Mediterranean and Middle Eastern influences. Falafel, hummus, shawarma and signature dishes. Bohemian vibe with great music and summer terrace.",
    tip: "The sharing mezze platter is spectacular. Great cocktails at sunset.",
  },
  cassis: {
    description: "Franco-Chilean author cuisine, premium wines",
    longDescription:
      "Gourmet restaurant with author cuisine fusing French technique with southern Chile ingredients. Curated wine list, artisan desserts. Elegant, intimate setting.",
    tip: "Make reservations, especially in peak season. The tasting menu with wine pairing is an experience.",
  },
  "cafe-de-la-p": {
    description: "Cozy café, brunch & author pastries",
    longDescription:
      "Character-filled café in downtown Pucón. Specialty coffee, artisan pastries, brunch with eggs benedict and sourdough toast. Warm ambiance with vintage décor.",
    tip: "The weekend brunch is a must. Great coffee and amazing raspberry kuchen.",
  },
  "cafe-amankay": {
    name: "Cafe Amankay",
    description: "Garden café on the road to Caburgua, ideal for brunch or a calmer stop",
    longDescription:
      "Garden café in the Metreñehue area on the international road. Works especially well as a late breakfast or brunch before heading toward Caburgua, hot springs, or longer outings east of Pucón.",
    tip: "It makes a lot of sense if you're going toward Caburgua that day or want to leave downtown early without rushing breakfast.",
  },
  "da-alessandro": {
    description: "Classic pizzeria with wood-fired oven & homemade pasta",
    longDescription:
      "Classic Pucón pizzeria with wood-fired oven. Generous pizzas and homemade pasta. Warm, cozy atmosphere great for families with kids.",
    tip: "Arrive early (before 8 PM) in summer — it fills up fast and they don't take reservations.",
  },
  trawen: {
    description: "Contemporary Mapuche gastronomy, unique experience",
    longDescription:
      "Unique gastronomic experience with modern Mapuche cuisine. Local ingredients: pine nuts, merkén, nalca, wild mushrooms. Intimate setting with native wood décor.",
    tip: "The tasting menu is worth every penny. Book at least a day in advance.",
  },
  "trattoria-di-pietro": {
    description: "Homestyle Italian cooking, fresh pasta & family atmosphere",
    longDescription:
      "Classic trattoria in Pucón with homestyle Italian recipes. Handmade pastas, traditional sauces, good wines and cozy atmosphere. Attentive service and generous portions.",
    tip: "Homemade pastas are the highlight. Book in peak season — it's small and fills up.",
  },
  "la-fabbrica": {
    description: "Fresh pasta, risottos & authentic Italian cuisine",
    longDescription:
      "Real Italian cooking: handmade pasta every day, creamy risottos, homemade tiramisu. Good wine, relaxed atmosphere. Generous portions.",
    tip: "The wild mushroom risotto is a star dish. Good wines by the glass.",
  },
  "sushi-pucon": {
    description: "Sushi rolls, pokes & ceviches with a local twist",
    longDescription:
      "Sushi bar with creative rolls, fresh poke bowls and ceviches with local ingredients. Modern atmosphere with delivery available.",
    tip: "The special rolls have unique combos featuring southern salmon. Good delivery option.",
  },
  "mercado-municipal": {
    description: "Empanadas, sopaipillas & homestyle southern food",
    longDescription:
      "Food stalls by the craft market. Fried empanadas, cazuela stew, curanto and sopaipillas. Affordable prices and authentic local flavor.",
    tip: "The fried pino empanadas are a must. Perfect for a quick, budget-friendly lunch.",
  },
  "cerveceria-artesanal": {
    description: "Local craft beers & sharing platters",
    longDescription:
      "Craft beer pub with wide variety of local artisan beers. Cheese boards, cold cuts, and burgers. Great post-adventure atmosphere.",
    tip: "Order the beer flight to try several. After a day of trekking, nothing beats it.",
  },
  "la-cosecha": {
    description: "Grill & charcoal meats, premium cuts",
    longDescription:
      "Grilled meat restaurant with premium cuts, fresh salads and ember-roasted potatoes. Open fire and rustic yet refined atmosphere.",
    tip: "A great sirloin with a glass of carménère. Simple and perfect.",
  },
  "feria-artesanal-cocina": {
    description: "Cazuela stew, curanto & traditional southern cooking",
    longDescription:
      "Next to the craft market, find small kitchens with traditional southern food: cazuela, pastel de choclo, milcao, curanto. Perfect for authentic flavors.",
    tip: "The curanto is spectacular. Ask what the daily special is.",
  },

  // ─── TERMAS ───
  "los-pozones": {
    description: "Natural hot springs in the forest, the most rustic",
    longDescription:
      "The most authentic hot spring experience in Pucón. Natural stone pools surrounded by native forest. No fancy amenities — pure nature. Water ~38°C.",
    tip: "Go early or at sunset to avoid crowds. Bring your own towel. In the rain it's MAGICAL.",
  },
  "termas-huife": {
    description: "Premium spa, private cabins & thermal jacuzzi",
    longDescription:
      "Premium thermal complex with hot spring pools, full spa, private cabins with jacuzzi and restaurant. The most elegant option for total relaxation.",
    tip: "The private couple's cabin is worth it. Book in advance during peak season.",
  },
  "termas-menetue": {
    description: "Balance between rustic and comfortable, good value",
    longDescription:
      "Hot springs with a good balance of nature and comfort. Pools at different temperatures, changing rooms, café. More accessible than Huife and more comfortable than Los Pozones.",
    tip: "Great option for families. They have a children's area and group discounts.",
  },
  "termas-geometricas": {
    description: "Unique architectural design in a volcanic gorge",
    longDescription:
      "17 hot pools connected by red wooden walkways in a native forest gorge. Designed by architect Germán del Sol. Unmatched visual and thermal experience.",
    tip: "1.5 hrs from Pucón (road to Coñaripe). Totally worth the trip. Book online.",
  },
  "termas-quimey-co": {
    description: "Exclusive private pools in the middle of the forest",
    longDescription:
      "Boutique hot springs with private pools surrounded by native vegetation. More exclusive and intimate experience. Ideal for completely disconnecting.",
    tip: "Book in advance. Limited capacity ensures peace and relaxation.",
  },
  "termas-san-luis": {
    description: "Rustic hot springs with terraced riverside pools",
    longDescription:
      "Rustic, accessible hot springs on the road to Huife. Terraced pools by the river at varying temperatures. Good balance between nature and basic comfort.",
    tip: "Less known than Los Pozones but equally beautiful. Good middle ground between Huife and Los Pozones.",
  },

  // ─── AVENTURA ───
  "ascenso-volcan": {
    description: "Guided tour to the active crater with full gear",
    longDescription:
      "THE iconic Pucón experience. Guided ~6-hour ascent to the active Villarrica crater (2,847m). Includes crampons, ice axe, and certified guide. Observe fumaroles and crater gases.",
    tip: "Good fitness required. Book 2-3 days ahead. 100% weather dependent — CONAF closes if bad weather.",
  },
  "kayak-lago": {
    description: "Peaceful lake route with volcano views",
    longDescription:
      "Kayaking on Lake Villarrica with panoramic volcano views. Options from 1.5 to 3 hours. Guide included, no prior experience needed.",
    tip: "The early morning trip (9-10 AM) has the calmest water. Bring sunscreen and sunglasses.",
  },
  "rafting-trancura": {
    description: "Class III-IV rapids, pure adrenaline",
    longDescription:
      "Raft through the Trancura River rapids. Lower section (families, class II-III) and upper section (class III-IV, adrenaline). Gear and guide included.",
    tip: "Upper section is spectacular after rain (higher water). Lower section is perfect for kids over 8.",
  },
  "bike-huerquenes": {
    description: "18 km technical forest trail",
    longDescription:
      "Mountain bike trail through the Huerquenes area. 18 km with technical descents, stream crossings, and volcano views. Bike rental available.",
    tip: "Recommended for riders with some experience. After rain the trail is pure mud (fun but technical).",
  },
  "escalada-caburga": {
    description: "Walls up to 15m with instructor",
    longDescription:
      "Sport climbing area with routes of varying levels. Volcanic rock walls from 8 to 15 meters. Instructor and gear available for beginners.",
    tip: "No experience needed with an instructor. Bring comfortable shoes.",
  },
  "enduro-curarrehue": {
    description: "3-hour off-road trails through forests & rivers",
    longDescription:
      "Enduro motorcycle ride through Curarrehue trails. 3 hours of forest tracks, river crossings, and mountain views. Motorcycle and gear included.",
    tip: "Incredible experience for bikers. No special license needed — it's private off-road.",
  },
  rocodromo: {
    description: "Indoor climbing for rainy days",
    longDescription:
      "Indoor climbing center with bouldering and roped routes. Perfect for rainy days. Suitable for beginners with a monitor.",
    tip: "The perfect plan when it rains. They have climbing shoes for rent.",
  },
  "canopy-pucon": {
    description: "Zipline circuit over native forest canopy",
    longDescription:
      "6-zipline circuit suspended over native forest canopy. Longest one is 200m. Panoramic volcano and lake views. Suitable from age 8.",
    tip: "Fun for the whole family. Kids have an absolute blast.",
  },
  "sup-lago": {
    description: "Paddle boarding on the lake at sunset",
    longDescription:
      "SUP board rental at Pucón beach. Paddle across Lake Villarrica with the volcano as backdrop. Sunset trips are spectacular.",
    tip: "Golden hour before sunset is magical on the lake. Bring clothes that can get wet.",
  },
  cabalgata: {
    description: "Horseback ride through araucaria forest trails",
    longDescription:
      "Horseback ride through native forest trails with volcano views. No experience needed. 2 to 4-hour rides with a huaso (cowboy) guide.",
    tip: "Perfect for those seeking a calmer adventure. Horses are gentle and well cared for.",
  },

  // ─── NATURALEZA ───
  huerquehue: {
    description: "Ancient araucaria forest & Andean lagoons",
    longDescription:
      "Pucón's must-visit. Los Lagos trail (6 km one way) passes through ancient araucaria forest and three crystal-clear lagoons. Medium difficulty, incredibly beautiful.",
    tip: "Bring water, snacks and sunscreen. Los Lagos trail is THE highlight. Go early (before 10 AM) to avoid crowds.",
  },
  "playa-pucon": {
    description: "Black volcanic sand beach with Villarrica views",
    longDescription:
      "Pucón's main beach. Dark volcanic sand, direct volcano views, lake water (cool but pleasant in summer). Playground, kayak and SUP rentals.",
    tip: "In summer it gets crowded — go early or at sunset. The sunsets with the volcano are spectacular.",
  },
  "santuario-cani": {
    description: "Protected native forest with ancestral araucarias",
    longDescription:
      "Private community reserve with ancient forest. ~4-hour trail through araucarias, lengas and coigües. High-altitude lagoons with volcano views. Less touristy than Huerquehue.",
    tip: "Quieter and wilder than Huerquehue. Ideal for nature without the crowds.",
  },
  "lago-caburgua": {
    description: "Turquoise water lake, beaches & natural springs",
    longDescription:
      "Incredibly turquoise-water lake 20 km from Pucón. White sand beaches (Playa Blanca and Playa Negra), crystal-clear natural springs. Much quieter than Lake Villarrica.",
    tip: "The Ojos de Caburgua (cascades springing from rock) are a must-see. Bring a picnic.",
  },
  "cavernas-volcanicas": {
    description: "Lava caves under the volcano, unique experience",
    longDescription:
      "Lava tunnels formed by ancient Villarrica eruptions. Guided tour with helmet and flashlight through underground caverns. Unique and educational.",
    tip: "Bring warm clothes — it's cold inside. Kids love it.",
  },
  "salto-del-claro": {
    description: "Spectacular waterfall on the way to Caburgua",
    longDescription:
      "Impressive ~25-meter free-fall waterfall surrounded by native forest. Short trail access. One of the most beautiful waterfalls in the area.",
    tip: "Combine with a visit to Lake Caburgua or Ojos de Caburgua — they're on the same route.",
  },
  "ojos-caburgua": {
    description: "Crystal cascades springing from volcanic rock",
    longDescription:
      "Stunning underground cascades emerging from volcanic rock and falling into turquoise pools. Short, easy trail. One of the most photogenic spots in the area.",
    tip: "Don't miss the upper viewpoint. For photos, best light is mid-morning.",
  },
  "bosque-siempreverde": {
    description: "Easy walk through Valdivian temperate rainforest",
    longDescription:
      "Easy trail through Valdivian forest: giant ferns, moss, nalca and century-old trees. Especially magical in rain or fog. Suitable for all ages.",
    tip: "Best day to go is in the RAIN. The forest transforms completely. Bring a waterproof jacket.",
  },
  "salto-la-china": {
    description: "Hidden waterfall in the forest near Pucón",
    longDescription:
      "~20-meter waterfall hidden in the forest. Short access trail, pool for refreshing dips in summer. Little known, ideal for escaping the noise.",
    tip: "A local secret. Ask neighbors for the entrance. Bring shoes with good grip.",
  },
  "parque-villarrica": {
    description: "Volcanic trails, lava caves & crater views",
    longDescription:
      "Park surrounding the volcano with short and long trails. Volcanic caves, lava fields, lake and crater views. Rucapillán sector has family-friendly trails.",
    tip: "The Challupen trail is lesser-known and very beautiful. Bring layers — it gets cold up top.",
  },

  // ─── CULTURA ───
  "museo-mapuche": {
    description: "History, crafts & worldview of the Mapuche people",
    longDescription:
      "Museum dedicated to Mapuche culture with a rich collection of silverwork, textiles, ceramics and tools. Very educational for kids and adults. In downtown Villarrica.",
    tip: "A must to understand local culture. Guides explain each piece with great passion.",
  },
  "clase-cocina-mapuche": {
    description: "Hands-on ancestral cooking workshop",
    longDescription:
      "Learn to prepare ancestral Mapuche recipes: mudai, catutos, sopaipillas, charquicán. Workshop with a local Mapuche cook. Take the recipe and experience home forever.",
    tip: "Book at least a day ahead. Small groups = more personal experience.",
  },
  "taller-ceramica": {
    description: "Create your own ceramic piece & take it home",
    longDescription:
      "Hands-on ceramics workshop using traditional Mapuche techniques. Shape your own piece and take it as a souvenir. Perfect for couples or families with kids.",
    tip: "Ideal rainy-day plan. The experience of creating something together is unforgettable.",
  },
  astroturismo: {
    description: "Southern sky observation with professional telescope",
    longDescription:
      "Guided stargazing session outside town, away from light pollution. Professional telescopes to see the Milky Way, Magellanic Clouds and planets.",
    tip: "Only on clear nights (confirm same day). Bundle up — nights are cold even in summer.",
  },
  "feria-artesanal": {
    description: "Wood crafts, Mapuche silver & woven textiles",
    longDescription:
      "Permanent craft market in downtown Pucón with local artisans. Mapuche silverwork, native wood carvings, loom textiles, honey, merkén and local products.",
    tip: "Great gifts to bring home. Bargain respectfully. The artisan merkén is top-quality.",
  },
  "cata-vinos": {
    description: "Chilean wine tasting with local cheese board",
    longDescription:
      "Tasting experience with selected Chilean wines, paired with an artisan local cheese board. Intimate setting.",
    tip: "Perfect plan for a rainy sunset. Book in advance.",
  },
  "cerveceria-tour": {
    description: "Local brewery visit with tasting included",
    longDescription:
      "Tour of a local craft brewery. Learn about the brewing process and taste 4-5 varieties straight from the tanks. Includes pairing board.",
    tip: "Book at least a day ahead. Don't drive afterwards.",
  },
};
