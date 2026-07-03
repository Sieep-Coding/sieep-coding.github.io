export type ProductType = "print" | "album" | "ep" | "single";

export interface ShopProduct {
  id: string;
  type: ProductType;
  title: string;
  description: string;
  price: number; // in cents
  stripePriceId: string; // e.g. "price_1ABC123..."
  img: string; // path or URL
  tags?: string[];
  // prints only
  sizes?: { label: string; stripePriceId: string; price: number }[];
  dimensions?: string;
  medium?: string;
  // music only
  tracklist?: string[];
  releaseYear?: number;
  streamUrl?: string; // optional spotify/bandcamp link
}

export const prints: ShopProduct[] = [
  {
    id: "print-001",
    type: "print",
    title: "Golden Hour, Grand Rapids",
    description: "A warm dusk shot over the Grand River, framed in natural oak. Limited run of 25.",
    price: 8500,
    stripePriceId: "price_REPLACE_ME",
    img: "/shop/prints/golden-hour.jpg",
    tags: ["landscape", "michigan", "limited"],
    dimensions: "12x16 in",
    medium: "Archival pigment print, oak frame",
    sizes: [
      { label: '8x10"', price: 5500, stripePriceId: "price_REPLACE_ME_8x10" },
      { label: '12x16"', price: 8500, stripePriceId: "price_REPLACE_ME_12x16" },
      { label: '18x24"', price: 13500, stripePriceId: "price_REPLACE_ME_18x24" },
    ],
  },
  {
    id: "print-002",
    type: "print",
    title: "Winter Study",
    description: "Minimalist frost on glass, shot on 35mm. Each print hand-signed.",
    price: 7500,
    stripePriceId: "price_REPLACE_ME",
    img: "/shop/prints/winter-study.jpg",
    tags: ["abstract", "winter", "35mm"],
    dimensions: "11x14 in",
    medium: "Archival pigment print, black frame",
    sizes: [
      { label: '8x10"', price: 4500, stripePriceId: "price_REPLACE_ME_8x10" },
      { label: '11x14"', price: 7500, stripePriceId: "price_REPLACE_ME_11x14" },
    ],
  },
];

export const music: ShopProduct[] = [
  {
    id: "music-001",
    type: "album",
    title: "Meridian",
    description: "A full-length ambient record. 10 tracks, digital download + optional physical CD.",
    price: 1000,
    stripePriceId: "price_REPLACE_ME",
    img: "/shop/music/meridian.jpg",
    tags: ["ambient", "electronic"],
    tracklist: [
      "Threshold",
      "Low Fog",
      "Meridian",
      "Pale Signal",
      "Return Arc",
      "Glass Choir",
      "Drift Protocol",
      "Hollow Noon",
      "Afterburn",
      "Still Life",
    ],
    releaseYear: 2025,
    streamUrl: "https://open.spotify.com/album/REPLACE_ME",
  },
  {
    id: "music-002",
    type: "ep",
    title: "B-Sides Vol. 1",
    description: "Four tracks that didn't fit anywhere else. Raw, unmastered cuts.",
    price: 500,
    stripePriceId: "price_REPLACE_ME",
    img: "/shop/music/bsides-vol1.jpg",
    tags: ["lo-fi", "experimental"],
    tracklist: ["Cut A", "Interlude", "Signal Drift", "End Loop"],
    releaseYear: 2024,
  },
  {
    id: "music-003",
    type: "single",
    title: "Hollow Noon (Remix)",
    description: "Extended remix of the Meridian standout track. Pay what you want.",
    price: 0,
    stripePriceId: "price_REPLACE_ME",
    img: "/shop/music/hollow-noon-remix.jpg",
    tags: ["remix", "free"],
    tracklist: ["Hollow Noon (Remix)"],
    releaseYear: 2025,
  },
];

export const allProducts: ShopProduct[] = [...prints, ...music];