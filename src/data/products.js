/**
 * AKRA — THE COUTURE
 * Central Product Catalog
 *
 * NOTE ON PRICING:
 * The prices below are illustrative demonstration prices assigned for website preview purposes.
 * They are NOT confirmed AKRA boutique selling prices and must be officially verified and updated
 * prior to commercial launch.
 *
 * Central configuration: Edit any numerical price below (e.g. price: 1499).
 * The UI automatically formats all numbers into Indian Rupee format (e.g. ₹1,499) across
 * product cards, category collection views, search, and product detail modals.
 */

export const PRODUCTS = [
  // --- SAREES (from assets/products/sarees/) ---
  {
    id: "saree-01",
    name: "Saree Collection 01",
    category: "Sarees",
    image: "/assets/products/sarees/saree-01.jpeg",
    description: "Deep espresso organza drape accented with delicate hand-embroidered floral motifs.",
    price: 1799, // Illustrative demonstration price
    isDemoPrice: true,
    availableSizes: ["Free Size (6.3m Drape)"],
    availableColours: null,
    availabilityStatus: "Curated Batch",
    featured: true,
  },
  {
    id: "saree-02",
    name: "Saree Collection 02",
    category: "Sarees",
    image: "/assets/products/sarees/saree-02.jpeg",
    description: "Ivory organza drape with refined floral threadwork embroidery along scalloped borders.",
    price: 1499, // Illustrative demonstration price
    isDemoPrice: true,
    availableSizes: ["Free Size (6.3m Drape)"],
    availableColours: null,
    availabilityStatus: "Curated Batch",
    featured: true,
  },
  {
    id: "saree-03",
    name: "Saree Collection 03",
    category: "Sarees",
    image: "/assets/products/sarees/saree-03.jpeg",
    description: "Rose champagne tissue drape paired with a rich ruby embroidered velvet statement blouse piece.",
    price: 2199, // Illustrative demonstration price
    isDemoPrice: true,
    availableSizes: ["Free Size (6.3m Drape)"],
    availableColours: null,
    availabilityStatus: "Curated Batch",
    featured: true,
  },
  {
    id: "saree-04",
    name: "Saree Collection 04",
    category: "Sarees",
    image: "/assets/products/sarees/saree-04.jpeg",
    description: "Heritage weave sarees highlighted with traditional zari borders in timeless jewel shades.",
    price: 1999, // Illustrative demonstration price
    isDemoPrice: true,
    availableSizes: ["Free Size (6.3m Drape)"],
    availableColours: null,
    availabilityStatus: "Curated Batch",
    featured: false,
  },
  {
    id: "saree-05",
    name: "Saree Collection 05",
    category: "Sarees",
    image: "/assets/products/sarees/saree-05.jpeg",
    description: "Subtle olive green textured drape with intricate embroidered floral motifs and fine border finish.",
    price: 1699, // Illustrative demonstration price
    isDemoPrice: true,
    availableSizes: ["Free Size (6.3m Drape)"],
    availableColours: null,
    availabilityStatus: "Curated Batch",
    featured: false,
  },
  {
    id: "saree-06",
    name: "Saree Collection 06",
    category: "Sarees",
    image: "/assets/products/sarees/saree-06.jpeg",
    description: "Crimson celebratory drape detailed with bold floral threadwork and hand-crafted tassel borders.",
    price: 2099, // Illustrative demonstration price
    isDemoPrice: true,
    availableSizes: ["Free Size (6.3m Drape)"],
    availableColours: null,
    availabilityStatus: "Curated Batch",
    featured: true,
  },
  {
    id: "saree-07",
    name: "Saree Collection 07",
    category: "Sarees",
    image: "/assets/products/sarees/saree-07.jpeg",
    description: "Midnight blue woven saree accompanied by an intricately embroidered ivory designer blouse.",
    price: 2499, // Illustrative demonstration price
    isDemoPrice: true,
    availableSizes: ["Free Size (6.3m Drape)"],
    availableColours: null,
    availabilityStatus: "Curated Batch",
    featured: false,
  },

  // --- SALWARS (from assets/products/salwars/) ---
  {
    id: "salwar-01",
    name: "Salwar Collection 01",
    category: "Salwars",
    image: "/assets/products/salwars/salwar-01.jpeg",
    description: "Chartreuse green and vibrant fuchsia salwar set adorned with opulent woven zari borders.",
    price: 1499, // Illustrative demonstration price
    isDemoPrice: true,
    availableSizes: ["S", "M", "L", "XL"],
    availableColours: null,
    availabilityStatus: "Tailored Set",
    featured: true,
  },
  {
    id: "salwar-02",
    name: "Salwar Collection 02",
    category: "Salwars",
    image: "/assets/products/salwars/salwar-02.jpeg",
    description: "Two-tone royal purple and blush pink salwar ensemble featuring understated zari piping.",
    price: 1899, // Illustrative demonstration price
    isDemoPrice: true,
    availableSizes: ["S", "M", "L", "XL"],
    availableColours: null,
    availabilityStatus: "Tailored Set",
    featured: true,
  },
  {
    id: "salwar-03",
    name: "Salwar Collection 03",
    category: "Salwars",
    image: "/assets/products/salwars/salwar-03.jpeg",
    description: "Deep maroon patterned yoke kurta paired with an antique gold mustard dupatta.",
    price: 1299, // Illustrative demonstration price
    isDemoPrice: true,
    availableSizes: ["S", "M", "L", "XL"],
    availableColours: null,
    availabilityStatus: "Tailored Set",
    featured: true,
  },
  {
    id: "salwar-04",
    name: "Salwar Collection 04",
    category: "Salwars",
    image: "/assets/products/salwars/salwar-04.jpeg",
    description: "Teal and indigo patterned neckline suit styled with rich jewel-toned contrast coordinates.",
    price: 999, // Illustrative demonstration price
    isDemoPrice: true,
    availableSizes: ["S", "M", "L", "XL"],
    availableColours: null,
    availabilityStatus: "Tailored Set",
    featured: false,
  },
  {
    id: "salwar-05",
    name: "Salwar Collection 05",
    category: "Salwars",
    image: "/assets/products/salwars/salwar-05.jpeg",
    description: "Royal cobalt blue check kurta set complemented by an artisan-illustrated heritage dupatta.",
    price: 1699, // Illustrative demonstration price
    isDemoPrice: true,
    availableSizes: ["S", "M", "L", "XL"],
    availableColours: null,
    availabilityStatus: "Tailored Set",
    featured: false,
  },
  {
    id: "salwar-06",
    name: "Salwar Collection 06",
    category: "Salwars",
    image: "/assets/products/salwars/salwar-06.jpeg",
    description: "Seafoam green raw silk kurta with architectural neck cut paired with an organic marble print drape.",
    price: 2199, // Illustrative demonstration price
    isDemoPrice: true,
    availableSizes: ["S", "M", "L", "XL"],
    availableColours: null,
    availabilityStatus: "Tailored Set",
    featured: true,
  },
  {
    id: "salwar-07",
    name: "Salwar Collection 07",
    category: "Salwars",
    image: "/assets/products/salwars/salwar-07.jpeg",
    description: "Mustard yellow kurta with delicate scalloped yoke detailing and coordinating marble print dupatta.",
    price: 1599, // Illustrative demonstration price
    isDemoPrice: true,
    availableSizes: ["S", "M", "L", "XL"],
    availableColours: null,
    availabilityStatus: "Tailored Set",
    featured: false,
  },
];
