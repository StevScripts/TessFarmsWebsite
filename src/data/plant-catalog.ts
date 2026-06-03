export type PlantVariety = {
  id: string;
  name: string;
  description: string;
  season?: string;
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
      "We carry over a dozen mango varieties suited to Central Florida, from beloved Indian cultivars to Florida favorites. Trees are available in multiple sizes.",
    icon: "\u{1F96D}",
    varieties: [
      {
        id: "alphonso",
        name: "Alphonso",
        season: "Mid Season",
        description:
          "Widely regarded as the king of mangoes. Rich, creamy flesh with an intensely sweet, aromatic flavor prized across India and now thriving in Florida yards.",
      },
      {
        id: "super-alphonso",
        name: "Super Alphonso",
        season: "Mid Season",
        description:
          "A vigorous Florida selection of the classic Alphonso with improved hardiness and larger fruit. Same beloved flavor, better suited to our climate.",
      },
      {
        id: "kesar",
        name: "Kesar",
        season: "Mid Season",
        description:
          "Saffron-colored flesh with a distinctively sweet, slightly tart flavor. One of Gujarat's most prized varieties, thriving in Central Florida heat.",
      },
      {
        id: "kent",
        name: "Kent",
        season: "Late Season",
        description:
          "Excellent flavor with large fruit and very little fiber. Considered by many to be one of the best tasting Florida mangoes. Best eaten before the fruit gets overly ripe.",
      },
      {
        id: "neelum",
        name: "Neelum",
        season: "Late Season",
        description:
          "A late-season South Indian variety with firm, fiberless flesh. Sweet and fragrant, producing fruit when most other varieties have finished for the year.",
      },
      {
        id: "valencia-pride",
        name: "Valencia Pride",
        season: "Mid Season",
        description:
          "Vigorous, large-growing tree that doubles as an excellent shade tree. Produces attractive, elongated fruit with smooth, fiberless flesh. Relatively cold hardy.",
      },
      {
        id: "nam-doc-mai",
        name: "Nam Doc Mai",
        season: "Early/Mid Season",
        description:
          "A Thai favorite with semi-dwarf growth, great for pot culture. Green to yellow skin with no fiber. Can produce multiple crops and is excellent eaten green or ripe.",
      },
      {
        id: "glenn",
        name: "Glenn",
        season: "Mid Season",
        description:
          "Very attractive appearance with a mild, sweet flavor. Virtually fiberless with excellent eating quality and consistent production. Turns yellow at the base when ripe.",
      },
      {
        id: "pickering",
        name: "Pickering",
        season: "Mid Season",
        description:
          "A condo mango perfect for limited space. Can be maintained at just six feet in a container, making it ideal for pot culture. Rich, sweet flavor.",
      },
      {
        id: "cogshall",
        name: "Cogshall",
        season: "Mid Season",
        description:
          "One of the best varieties for indoor potting culture. Ultra-compact grower with a slow growth habit, perfect for small yards or as a patio mango.",
      },
      {
        id: "carrie",
        name: "Carrie",
        season: "Mid Season",
        description:
          "Flavor is the most outstanding feature. Absolutely no fiber with extremely rich, sweet, aromatic flesh. A compact grower that produces heavily.",
      },
      {
        id: "coconut-cream",
        name: "Coconut Cream",
        season: "Mid Season",
        description:
          "A delicious creamy coconut-mango flavor in a very large, juicy fruit. One of the most colorful mangoes with bright red-orange-yellow skin and bright orange pulp. Fiberless.",
      },
      {
        id: "haden",
        name: "Haden",
        season: "Mid Season",
        description:
          "Originated in Florida and has been grown since 1910. Good flavor with eye-catching fruit featuring a deep yellow base overlaid with a crimson blush.",
      },
      {
        id: "dot",
        name: "Dot",
        season: "Mid Season",
        description:
          "One of the best mangoes available. Almost fiberless fruits with an oblong, uniform shape. Average fruit size around 20 ounces.",
      },
      {
        id: "lemon-zest",
        name: "Lemon Zest",
        season: "Early Season",
        description:
          "A unique variety with an excellent sweet citrus flavor that sets it apart from other mangoes. One of the earliest to fruit each season.",
      },
      {
        id: "tommy-atkins",
        name: "Tommy Atkins",
        season: "Early Season",
        description:
          "The most extensively planted export mango in the Western Hemisphere. Known for its outstanding color, disease resistance, and storage qualities.",
      },
      {
        id: "multi-graft",
        name: "Multi Graft",
        season: "Various",
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
        season: "Jul\u2013Aug",
        description:
          "Cold hardy tree producing purple-skinned fruit with juicy, buttery-flavored yellow flesh. Large fruit can reach 14 to 24 ounces.",
      },
      {
        id: "choquette",
        name: "Choquette",
        season: "Dec\u2013Mar",
        description:
          "Produces incredibly large fruit weighing 20 to 40 ounces. Glossy dark green skin with an oval shape and smooth, creamy flesh.",
      },
      {
        id: "monroe",
        name: "Monroe",
        season: "Nov\u2013Jan",
        description:
          "Superb cold hardy variety and a commercial favorite in Florida. Large, abundant fruit with excellent eating quality.",
      },
      {
        id: "day",
        name: "Day",
        season: "Sep\u2013Oct",
        description:
          "One of the easiest avocados to fruit in a pot. Plants can produce at about three feet in height. Medium-sized fruit with a tapered neck and buttery sweet taste.",
      },
      {
        id: "lula",
        name: "Lula",
        season: "Dec\u2013Mar",
        description:
          "A classic Florida avocado with good cold tolerance. Large, pear-shaped fruit with mild flavor. Excellent for guacamole.",
      },
      {
        id: "winter-mexican",
        name: "Winter Mexican",
        season: "Nov\u2013Jan",
        description:
          "Small, dark-skinned fruit with rich, nutty flavor similar to Hass. Among the most cold-tolerant avocados available. Fruits in winter when others don't.",
      },
      {
        id: "mexicola",
        name: "Mexicola",
        season: "Jul",
        description:
          "Excellent quality, frost-hardy variety. Mexican-type fruit weighing 6 to 12 ounces with thin black skin. Compact tree suited to full sun or light shade.",
      },
      {
        id: "hall",
        name: "Hall",
        season: "Oct\u2013Nov",
        description:
          "Related to Choquette with a similar shape and size but nuttier, drier, thicker flesh while still being juicy and fruity. A reliable producer.",
      },
      {
        id: "simmonds",
        name: "Simmonds",
        season: "Jul\u2013Sep",
        description:
          "South Florida's most popular early-season avocado. Good production with exceptional quality and superb eating character.",
      },
      {
        id: "oro-negro",
        name: "Oro Negro",
        season: "Dec\u2013Jan",
        description:
          "\"Black gold\" in Spanish. Rich and buttery flesh with a creamy texture. Dark skin that deepens as the fruit matures.",
      },
      {
        id: "super-hass",
        name: "Super Hass",
        season: "Sep\u2013Oct",
        description:
          "Nubby, black-skinned fruit prized for its taste. Rich nutty flavor and high oil content. A single fruit can weigh over a pound.",
      },
      {
        id: "nishikawa",
        name: "Nishikawa",
        season: "Nov\u2013Dec",
        description:
          "Originated in Hawaii. Oval fruit resembling Hass but larger with very high oil content. Creamy, rich flavor.",
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
      {
        id: "banana",
        name: "Banana",
        description:
          "Multiple varieties suited to Florida's climate. Fast-growing plants that add a tropical look to any yard while producing delicious fruit.",
      },
      {
        id: "passion-fruit",
        name: "Passion Fruit",
        description:
          "Intensely aromatic, tangy-sweet pulp perfect for juices, desserts, and eating fresh. A vigorous vine that fruits prolifically on a trellis.",
      },
      {
        id: "soursop",
        name: "Soursop",
        description:
          "Large, spiny green fruit with creamy white flesh. Flavor combines strawberry and pineapple with a citrus tang. Popular for juices and smoothies.",
      },
      {
        id: "sugar-apple",
        name: "Sugar Apple",
        description:
          "Custard-like flesh with a sweet, pleasant flavor. Each segment contains a seed surrounded by creamy pulp. A tropical classic.",
      },
      {
        id: "atemoya",
        name: "Atemoya",
        description:
          "A hybrid of sugar apple and cherimoya with smooth, custard-like flesh. Sweet, vanilla-scented flavor with fewer seeds than sugar apple.",
      },
      {
        id: "mamey-sapote",
        name: "Mamey Sapote",
        description:
          "Salmon-colored flesh with a flavor reminiscent of sweet potato, pumpkin, and almond. A prized fruit across Latin America and the Caribbean.",
      },
      {
        id: "black-sapote",
        name: "Black Sapote",
        description:
          "Known as the chocolate pudding fruit for its dark, creamy flesh. Mild, sweet flavor that works beautifully in smoothies and desserts.",
      },
      {
        id: "canistel",
        name: "Canistel (Egg Fruit)",
        description:
          "Dense, creamy flesh with a flavor like sweet potato custard or pumpkin pie. Bright yellow-orange color with a smooth texture.",
      },
      {
        id: "persimmon",
        name: "Persimmon",
        description:
          "Sweet, honey-flavored fruit that thrives in Florida. Both astringent and non-astringent varieties available. Beautiful fall color.",
      },
      {
        id: "loquat",
        name: "Loquat",
        description:
          "One of the first fruits to ripen each spring. Sweet-tart clusters of small yellow-orange fruit from a handsome evergreen tree.",
      },
      {
        id: "grapes",
        name: "Grapes",
        description:
          "Muscadine and bunch grape varieties suited to Florida's heat and humidity. Sweet fruit for fresh eating, jams, and homemade wine.",
      },
      {
        id: "pineapple",
        name: "Pineapple",
        description:
          "Grow your own tropical pineapples right in your Florida yard. Plants are easy to maintain and produce sweet, fragrant fruit.",
      },
      {
        id: "jujube",
        name: "Jujube",
        description:
          "Also known as Chinese date. Crisp, apple-like when fresh, date-like when dried. Drought-tolerant and virtually pest-free.",
      },
      {
        id: "wax-jambu",
        name: "Wax Jambu",
        description:
          "Bell-shaped, waxy fruit with a crisp, refreshing crunch. Light, mildly sweet flavor that's perfect for hot Florida days.",
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
        id: "barbados-cherry",
        name: "Barbados Cherry (Acerola)",
        description:
          "Tiny, tangy cherries loaded with vitamin C. A compact bush that produces prolifically in Florida's heat and humidity.",
      },
      {
        id: "mulberry",
        name: "Mulberry",
        description:
          "Sweet, blackberry-like fruit from a fast-growing shade tree. Birds love them too, so plant enough to share.",
      },
      {
        id: "blackberry",
        name: "Blackberry",
        description:
          "Thornless varieties adapted to Florida's low-chill climate. Sweet, juicy berries for fresh eating, baking, and preserves.",
      },
      {
        id: "jaboticaba",
        name: "Jaboticaba",
        description:
          "Grape-like fruit that grows directly on the trunk and branches of the tree. Sweet, juicy flesh with a unique appearance. Slow-growing but worth the wait.",
      },
      {
        id: "miracle-fruit",
        name: "Miracle Fruit",
        description:
          "Small red berries that make sour foods taste sweet for up to an hour after eating. A fascinating conversation piece and fun for parties.",
      },
      {
        id: "gooseberry",
        name: "Gooseberry",
        description:
          "Tart, translucent berries perfect for pies, jams, and fresh eating. Compact bushes that produce well in Florida conditions.",
      },
      {
        id: "macadamia",
        name: "Macadamia",
        description:
          "Rich, buttery nuts from an attractive evergreen tree. Takes a few years to bear, but a mature tree produces for decades.",
      },
      {
        id: "cashew",
        name: "Cashew",
        description:
          "Tropical tree producing the familiar curved nut along with a juicy cashew apple. Grows well in frost-free areas of Central Florida.",
      },
      {
        id: "coconut",
        name: "Coconut",
        description:
          "The iconic tropical palm. Cold-hardy varieties available for Central Florida. Provides coconut water, meat, and oil from your own yard.",
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
      {
        id: "allspice",
        name: "Allspice",
        description:
          "Aromatic berries with flavors of cinnamon, nutmeg, and clove combined. An attractive evergreen tree with fragrant leaves.",
      },
      {
        id: "cacao",
        name: "Cacao",
        description:
          "Grow your own chocolate. The source of cocoa beans, cacao trees produce colorful pods directly from the trunk. Needs a sheltered, humid spot.",
      },
      {
        id: "coffee",
        name: "Coffee",
        description:
          "Shade-loving shrub producing fragrant white flowers followed by red coffee cherries. Roast your own beans from your backyard.",
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
