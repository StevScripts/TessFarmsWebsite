export type PlantVariety = {
  id: string;
  name: string;
  description: string;
  photo?: string;
  photoAlt?: string;
};

export type PlantCategory = {
  slug: string;
  name: string;
  intro: string;
  icon: string;
  varieties: PlantVariety[];
};

export const plantCategories: PlantCategory[] = [
  {
    slug: "mangoes",
    name: "Mangoes",
    intro:
      "We carry over a dozen mango varieties suited to Central Florida, from beloved Indian cultivars to Florida favorites. Trees are available in multiple sizes. Call or WhatsApp George for current availability.",
    icon: "\u{1F96D}",
    varieties: [
      {
        id: "alphonso",
        name: "Alphonso",
        description:
          "The king of mangoes. Rich, creamy flesh with an intensely sweet, aromatic flavor. A must-have for any Indian household in Florida.",
      },
      {
        id: "super-alphonso",
        name: "Super Alphonso",
        description:
          "A vigorous Florida selection of the classic Alphonso with improved hardiness and larger fruit. Same beloved flavor, better suited to our climate.",
      },
      {
        id: "kesar",
        name: "Kesar",
        description:
          "Saffron-colored flesh with a distinctively sweet, slightly tart flavor. One of Gujarat's most prized varieties, thriving in Central Florida heat.",
      },
      {
        id: "kent",
        name: "Kent",
        description:
          "A dependable Florida mango with sweet, rich flavor and minimal fiber. Excellent producer that fruits reliably year after year.",
      },
      {
        id: "neelum",
        name: "Neelum",
        description:
          "A late-season South Indian variety with firm, fiberless flesh. Sweet and fragrant, producing fruit when most other varieties have finished.",
      },
      {
        id: "valencia-pride",
        name: "Valencia Pride",
        description:
          "Large, elongated fruit with smooth, fiberless flesh. One of the most popular dooryard mangoes in South Florida for its consistent quality.",
      },
      {
        id: "nam-doc-mai",
        name: "Nam Doc Mai",
        description:
          "A Thai dessert mango with silky, sweet flesh and a slender shape. Excellent eaten green with chili salt or ripe as a fresh fruit.",
      },
      {
        id: "glenn",
        name: "Glenn",
        description:
          "Compact, condo-friendly mango tree producing peach-flavored fruit. Ideal for smaller yards or container growing.",
      },
      {
        id: "pickering",
        name: "Pickering",
        description:
          "Dwarf variety perfect for container growing. Coconut-flavored flesh with a rich, sweet taste from a tree that stays small and manageable.",
      },
      {
        id: "cogshall",
        name: "Cogshall",
        description:
          "Another excellent dwarf mango for patios and small spaces. Sweet, fiberless fruit from a compact tree that handles pruning well.",
      },
      {
        id: "carrie",
        name: "Carrie",
        description:
          "Intensely sweet with a resinous, spicy undertone. A compact grower that produces heavily even in a small yard.",
      },
      {
        id: "multi-graft",
        name: "Multi Graft",
        description:
          "Multiple mango varieties grafted onto a single tree. Get three to five different mangoes from one spot in your yard.",
      },
    ],
  },
  {
    slug: "avocados",
    name: "Avocados",
    intro:
      "Florida avocados thrive in our warm climate and produce fruit that's hard to find in grocery stores. These varieties are selected for Central Florida growing conditions.",
    icon: "\u{1F951}",
    varieties: [
      {
        id: "brogdon",
        name: "Brogdon",
        description:
          "One of the most cold-hardy avocados available. Dark purple skin with rich, creamy flesh. Fruits reliably in Central Florida winters.",
      },
      {
        id: "choquette",
        name: "Choquette",
        description:
          "A large Florida avocado with smooth, glossy green skin. Produces enormous fruit with mild, buttery flavor.",
      },
      {
        id: "monroe",
        name: "Monroe",
        description:
          "Heavy producer of large, green-skinned fruit with excellent flavor. One of the most reliable avocados for Florida backyards.",
      },
      {
        id: "day",
        name: "Day",
        description:
          "Cold-hardy variety producing medium-sized fruit with smooth, creamy texture. Good choice for areas that occasionally see light frost.",
      },
      {
        id: "lula",
        name: "Lula",
        description:
          "A classic Florida avocado with good cold tolerance. Large, pear-shaped fruit with mild flavor, excellent for guacamole.",
      },
      {
        id: "winter-mexican",
        name: "Winter Mexican",
        description:
          "Among the most cold-tolerant avocados. Smaller fruit with rich, nutty flavor similar to Hass. Fruits in winter when others don't.",
      },
    ],
  },
  {
    slug: "fruit-trees",
    name: "Fruit Trees",
    intro:
      "Beyond mangoes and avocados, we carry a wide selection of tropical and subtropical fruit trees. Many of these produce fruit you can't find in any American grocery store.",
    icon: "\u{1F333}",
    varieties: [
      {
        id: "dragon-fruit",
        name: "Dragon Fruit",
        description:
          "A climbing cactus producing striking pink or white-fleshed fruit. Easy to grow on a trellis or fence in full Florida sun.",
      },
      {
        id: "lychee",
        name: "Lychee",
        description:
          "Sweet, floral, translucent flesh inside a rough red shell. A beloved fruit across South and Southeast Asia, fruiting well in Central Florida.",
      },
      {
        id: "longan",
        name: "Longan",
        description:
          "Related to lychee with honey-sweet flesh and a smoky undertone. More cold-tolerant than lychee, producing reliably in our area.",
      },
      {
        id: "guava",
        name: "Guava",
        description:
          "Fragrant tropical fruit used in juices, jams, and eaten fresh. Fast-growing trees that produce fruit within a year or two of planting.",
      },
      {
        id: "papaya",
        name: "Papaya",
        description:
          "Fast-growing tropical producing sweet, orange-fleshed fruit. Can bear fruit within a year of planting in warm, sheltered spots.",
      },
      {
        id: "pomegranate",
        name: "Pomegranate",
        description:
          "Jewel-toned seeds packed with flavor. Drought-tolerant and heat-loving, pomegranates are well-suited to Florida's sandy soils.",
      },
      {
        id: "jackfruit",
        name: "Jackfruit",
        description:
          "The world's largest tree-borne fruit, with sweet, pineapple-flavored segments. A striking specimen tree for larger yards.",
      },
      {
        id: "sapodilla",
        name: "Sapodilla (Chikoo)",
        description:
          "Brown-sugar sweetness in a small, unassuming fruit. Known as chikoo across India, this is a low-maintenance favorite.",
      },
      {
        id: "fig",
        name: "Fig",
        description:
          "Sweet, jammy fruit from a tree that thrives in Florida heat. Multiple crops per year with varieties selected for our humid climate.",
      },
      {
        id: "starfruit",
        name: "Starfruit (Carambola)",
        description:
          "Crisp, juicy fruit with a star-shaped cross-section. Tangy-sweet flavor, beautiful on the tree and on the plate.",
      },
    ],
  },
  {
    slug: "berries-nuts-spices",
    name: "Berries, Nuts & Spices",
    intro:
      "From kitchen essentials like turmeric and black pepper to snacking fruits like mulberry, these plants bring flavor and function to your Florida garden.",
    icon: "\u{1F33F}",
    varieties: [
      {
        id: "mulberry",
        name: "Mulberry",
        description:
          "Sweet, blackberry-like fruit from a fast-growing shade tree. Birds love them too, so plant enough to share.",
      },
      {
        id: "barbados-cherry",
        name: "Barbados Cherry (Acerola)",
        description:
          "Tiny, tangy cherries loaded with vitamin C. A compact bush that produces prolifically in Florida's heat and humidity.",
      },
      {
        id: "macadamia",
        name: "Macadamia",
        description:
          "Rich, buttery nuts from an attractive evergreen tree. Takes a few years to bear, but a mature tree produces for decades.",
      },
      {
        id: "turmeric",
        name: "Turmeric",
        description:
          "Grow your own fresh haldi for cooking. Plant rhizomes in spring, harvest the golden roots in fall. Essential for every Indian kitchen garden.",
      },
      {
        id: "ginger",
        name: "Ginger",
        description:
          "Fresh adrak from your own yard. Grows well in partial shade, making it perfect for planting under fruit trees.",
      },
      {
        id: "black-pepper",
        name: "Black Pepper",
        description:
          "A tropical vine producing the world's most-used spice. Grows on a trellis in humid, shaded conditions.",
      },
      {
        id: "moringa",
        name: "Moringa (Drumstick)",
        description:
          "Leaves, pods, and flowers are all edible. Grows incredibly fast in Florida, producing drumsticks for sambar within the first year.",
      },
      {
        id: "tamarind",
        name: "Tamarind",
        description:
          "Sweet-sour pods essential for South Indian cooking. A beautiful shade tree that eventually produces abundantly.",
      },
    ],
  },
  {
    slug: "citrus-trees",
    name: "Citrus Trees",
    intro:
      "Florida and citrus go hand in hand. Our citrus trees are selected for disease resistance and flavor, suited to Central Florida backyards.",
    icon: "\u{1F34A}",
    varieties: [
      {
        id: "orange",
        name: "Orange (Navel / Valencia)",
        description:
          "Classic Florida oranges for fresh eating and juicing. Navel for eating out of hand, Valencia for fresh-squeezed juice.",
      },
      {
        id: "grapefruit",
        name: "Grapefruit",
        description:
          "Large, tangy-sweet citrus that Florida is famous for. Ruby Red and Marsh varieties thrive in our warm climate.",
      },
      {
        id: "tangerine",
        name: "Tangerine",
        description:
          "Easy-peel citrus with intense sweet flavor. Several cold-hardy varieties available for Central Florida yards.",
      },
      {
        id: "lemon",
        name: "Lemon (Meyer)",
        description:
          "Sweeter and more fragrant than store-bought lemons. Meyer lemons fruit year-round in Florida and grow well in containers.",
      },
      {
        id: "lime",
        name: "Lime (Key / Persian)",
        description:
          "Key limes for pies and cocktails, Persian limes for everyday cooking. Both produce heavily in Central Florida.",
      },
      {
        id: "kumquat",
        name: "Kumquat",
        description:
          "Tiny citrus eaten whole, skin and all. Sweet skin with tart flesh, very cold-hardy, and beautiful as an ornamental.",
      },
    ],
  },
  {
    slug: "exotic-indian-plants",
    name: "Exotic Indian Plants",
    intro:
      "The plants you grew up with, now growing in your Florida yard. These are the trees, flowers, and herbs that make a house feel like home for Indian families.",
    icon: "\u{1F3E1}",
    varieties: [
      {
        id: "curry-leaf",
        name: "Curry Leaf",
        description:
          "Fresh kadi patta whenever you need it. No more stale grocery store leaves. Essential for tadka, rasam, chutney, and countless South Indian dishes.",
      },
      {
        id: "jasmine-mysore",
        name: "Jasmine (Mysore Mallige)",
        description:
          "The fragrance of South Indian evenings. Small, intensely perfumed white flowers for the puja room, hair garlands, or simply filling your yard with scent.",
      },
      {
        id: "jasmine-grand-duke",
        name: "Jasmine (Grand Duke)",
        description:
          "Double-petaled jasmine with full, rose-like blooms. Heavier fragrance than single varieties, stunning in containers or garden beds.",
      },
      {
        id: "parijat",
        name: "Parijat (Night Jasmine)",
        description:
          "Tiny orange-stemmed white flowers that fall like snow each morning. Sacred in Hindu tradition, with a fragrance that fills the entire yard at night.",
      },
      {
        id: "neem",
        name: "Neem",
        description:
          "A cornerstone of Indian home remedies and organic gardening. Fast-growing shade tree with leaves used for skin care, pest control, and traditional medicine.",
      },
      {
        id: "tulsi",
        name: "Tulsi (Holy Basil)",
        description:
          "Sacred plant found in Indian households for centuries. Used in teas, cooking, and daily worship. Several varieties including Rama and Krishna tulsi.",
      },
      {
        id: "amla",
        name: "Amla (Indian Gooseberry)",
        description:
          "Tart, vitamin C-rich fruit used in pickles, chutneys, and Ayurvedic preparations. A beautiful ornamental tree that produces reliably in Florida.",
      },
      {
        id: "betel-leaf",
        name: "Betel Leaf (Paan)",
        description:
          "Heart-shaped leaves used for paan and in traditional celebrations. A climbing vine that thrives in humid, shaded spots in Florida gardens.",
      },
    ],
  },
];

/** Helper to find a category by slug */
export function getCategoryBySlug(slug: string): PlantCategory | undefined {
  return plantCategories.find((c) => c.slug === slug);
}

/** All valid category slugs for static generation */
export function getAllCategorySlugs(): string[] {
  return plantCategories.map((c) => c.slug);
}
