# Restaurant Location Audit

Last updated: 2026-03-05

## Goal

Move restaurant map links away from weak text searches and toward verified addresses or exact map targets.

## Verification rule

- `verified`: address or location repeated in a current tourism/business source
- `search-only`: generic search still used; not reliable enough to present as exact
- `removed`: place removed because it could not be confirmed or appears not to exist

## Verified

| Place | Status | Address used in app | Notes |
| --- | --- | --- | --- |
| La Maga | verified | Geronimo de Alderete 276, Pucón | Updated in dataset |
| Pizza Cala | verified | Lincoyán 361, Pucón | Updated in dataset |
| By Roots | verified | General Urrutia 71, Pucón | Updated in dataset |
| Banús | verified | General Urrutia 61, Pucón | Updated in dataset |
| Cassis | verified | Fresia 223, Pucón | Updated in dataset |
| Café de la P | verified | Lincoyán 395, Pucón | Updated in dataset |
| Cafe Amankay | verified | Camino a Caburgua Km 15, Pucón | Added to dataset and itineraries |
| Trawen | verified | Av. Bernardo O'Higgins 311, Local 5, Pucón | Updated in dataset |
| Trattoria di Pietro | verified | Av. Bernardo O'Higgins 717, Local 4, Pucón | Updated in dataset |

## Still Search-Only

These still open a generic Google Maps search and should not be treated as exact.

| Place | Status | Why it stays here |
| --- | --- | --- |
| École Chocolate | search-only | No solid address confirmed yet from the sources reviewed |
| Da Alessandro | search-only | Could not confirm a current reliable address |
| La Fabbrica | search-only | Could not confirm a current reliable address |
| Fusión Sushi Pucón | search-only | Name appears too generic; current map target is weak |
| Feria Gastronómica de Pucón | search-only | Category/area more than a precise business |
| Cervecería Pucón (Pub) | search-only | Exact current venue unclear |
| La Cosecha | search-only | Could not confirm a current reliable address |
| Cocinerías de la Feria | search-only | Category/area more than a precise business |

## Removed

| Place | Status | Reason |
| --- | --- | --- |
| Nepal | removed | Could not confirm existence with enough confidence |

## Next actions

1. Audit the remaining `search-only` places against current business listings, social profiles, or official tourism listings.
2. Where exact location is still unclear, decide whether the place should remain in the guide.
3. Add a content validation step so itinerary-highlighted places cannot ship without `mapConfidence: "verified"` unless explicitly accepted.

## Sources used in this round

- https://puconchile.travel/gastronomia-de-pucon/
- https://puconchile.travel/servicios-turisticos-pucon/listing/cafe-de-la-p/
- https://puconchile.travel/servicios-turisticos-pucon/listing/amankay-cafe/
- https://puconchile.travel/servicios-turisticos-pucon/listing/trawen/
- https://puconchile.travel/servicios-turisticos-pucon/listing/la-trattoria-da-pietro/
- https://puconchile.travel/servicios-turisticos-pucon/listing/cassis-2/
- https://puconchile.travel/servicios-turisticos-pucon/listing/banus-lounge-restaurante/
- https://www.byrootspucon.cl/
- https://www.lamaga.cl/
- https://zeus.sii.cl/cta_cgi/Vta/VS02Puc?RUT=773295592
