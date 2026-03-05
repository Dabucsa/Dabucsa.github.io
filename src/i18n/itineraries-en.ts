/** English translations for itinerary labels, descriptions, day titles, and activity notes.
 *  Keyed by itinerary.id */

export const itinerariesEn: Record<
  string,
  {
    label: string;
    description: string;
    plan: { title: string; notes: (string | undefined)[] }[];
  }
> = {
  "1-dia-familia": {
    label: "1 Family Day",
    description: "The best of Pucón in a single day with kids",
    plan: [
      {
        title: "A full day in Pucón",
        notes: [
          "Empanadas and sopaipillas to start the day",
          "Peaceful 1.5-hr route, guide included",
          "Lunch with lake views, kids' menu available",
          "Volcanic sand beach, playground, free entry",
          "Thermal pools — kids under 6 free",
          "Wood-fired pizzas, family-friendly",
        ],
      },
    ],
  },
  "1-dia-aventura": {
    label: "1 Adventure Day",
    description: "High intensity from sunrise to sunset",
    plan: [
      {
        title: "Adventure mode activated",
        notes: [
          "Certified guide, crampons and ice axe included",
          "Post-ascent lunch — well deserved",
          "Hot springs for muscle recovery — you earned it",
          "Craft beers and sharing boards, perfect ending",
        ],
      },
    ],
  },
  "1-dia-pareja": {
    label: "1 Romantic Day",
    description: "Perfect getaway for two",
    plan: [
      {
        title: "A day for two",
        notes: [
          "Late brunch with specialty coffee",
          "Canoe for two with volcano views",
          "Crystal cascades and unmissable photos",
          "Private cabin with thermal jacuzzi",
          "Contemporary Mapuche gastronomy",
        ],
      },
    ],
  },
  "2-3-dias-general": {
    label: "2-3 Full Days",
    description: "The essentials of Pucón, no rush",
    plan: [
      {
        title: "Nature & Lake",
        notes: [
          "Breakfast to fuel up",
          "Los Lagos trail — the must-do",
          "Late lunch with local food",
          "Relax on the beach at sunset",
          "Dinner with lake views",
        ],
      },
      {
        title: "Adventure & Hot Springs",
        notes: [
          "Morning adrenaline on the river",
          "Traditional lunch and crafts",
          "Turquoise waters and natural springs",
          "Hot springs for a perfect day close",
          "Craft beers",
        ],
      },
      {
        title: "Culture & Volcano",
        notes: [
          "If weather allows, THE experience",
          "Well-deserved post-volcano lunch",
          "Souvenirs and local crafts",
          "Mapuche culture and history",
          "Farewell dinner with Mapuche cuisine",
        ],
      },
    ],
  },
  "4-5-dias-general": {
    label: "4-5 In-Depth Days",
    description: "Explore Pucón thoroughly, no rush",
    plan: [
      {
        title: "Arrival & Exploration",
        notes: [
          "Late breakfast, acclimatize",
          "First views of the volcano and lake",
          "Introduction to local food",
          "Walk the center and the craft market",
          "First dinner in Pucón",
        ],
      },
      {
        title: "Huerquehue — The Must-See",
        notes: [
          "Hearty breakfast for the trek",
          "Full Los Lagos trail",
          "Hot springs to rest the legs",
          "Well-deserved pizzas",
        ],
      },
      {
        title: "Adrenaline Day",
        notes: [
          "Upper section for the brave ones",
          "Lunch and craft beer",
          "Ziplines over the forest",
          "Climbing with instructor",
          "Contemporary Mapuche cuisine",
        ],
      },
      {
        title: "Caburgua & Culture",
        notes: [
          "Relaxed brunch",
          "Turquoise beaches and relaxation",
          "Impressive cascades",
          "Learn ancestral cooking",
          "Hot springs at sunset",
          "Special dinner",
        ],
      },
      {
        title: "Volcano or Nature",
        notes: [
          "The big ascent (weather permitting)",
          "Comforting post-volcano food",
          "An artisan souvenir to take home",
          "Wine and cheese tasting",
        ],
      },
    ],
  },
  "6-7-dias-general": {
    label: "6-7 Days — The Complete Experience",
    description: "A full week to live Pucón like a local",
    plan: [
      {
        title: "Arrival & First Contact",
        notes: [
          "Welcome with great coffee",
          "First views",
          "Local lunch",
          "Explore the crafts",
          "Dinner with volcano views",
        ],
      },
      {
        title: "Huerquehue — The Classic",
        notes: [
          "Energy-packed breakfast",
          "Los Lagos trail",
          "Natural hot springs",
          "Wood-fired pizza",
        ],
      },
      {
        title: "Lake Caburgua",
        notes: [
          "Relaxed brunch",
          "Magical cascades",
          "Turquoise beach day",
          "Afternoon hot springs",
          "Traditional dinner",
        ],
      },
      {
        title: "Water Adventure",
        notes: [
          "Morning rapids",
          "Well-deserved lunch",
          "Sunset kayaking",
          "Premium spa",
          "Romantic dinner",
        ],
      },
      {
        title: "Villarrica Volcano",
        notes: [
          "Ascent to the active crater",
          "Comforting lunch",
          "Hot springs for the muscles",
          "Celebratory Mapuche dinner",
        ],
      },
      {
        title: "Culture & Forests",
        notes: [
          "Local history and culture",
          "Ancestral cooking, book ahead",
          "Create your own keepsake",
          "Local wines and cheeses",
          "Southern sky with telescope (only if clear)",
        ],
      },
      {
        title: "Last Day — What Was Missing",
        notes: [
          "Final brunch",
          "Ziplines over the forest",
          "Artisan souvenir",
          "Farewell walk through the forest",
          "Last sunset on the beach",
          "Farewell dinner",
        ],
      },
    ],
  },
};
