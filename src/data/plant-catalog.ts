export type PlantCategory = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  varieties: string[];
  icon: string;
  featured?: boolean;
};

export const plantCatalog: PlantCategory[] = [
  {
    id: "mango",
    name: "Mango",
    tagline: "12+ varieties including Indian favorites",
    description:
      "Our biggest collection. From the king of mangoes \u2014 Alphonso \u2014 to the sweet Kesar and prolific Neelum, we carry varieties you won't find at any garden center. Whether you want a single tree for your backyard or a multi-graft that gives you several varieties from one trunk, George can help you pick the right one for your space and climate.",
    varieties: [
      "Alphonso",
      "Super Alphonso",
      "Kesar",
      "Kent",
      "Alampur Baneshan",
      "Carie",
      "Glen",
      "Neelum",
      "Orange Sherbat",
      "Valencia Pride",
      "Venus",
      "Multi Graft",
    ],
    icon: "\ud83e\udd6d",
    featured: true,
  },
  {
    id: "jasmine",
    name: "Jasmine",
    tagline: "6 varieties \u2014 the fragrance of home",
    description:
      "Nothing says home like the scent of jasmine in the evening. We carry Mysore, Grand Duke, the beloved Chamely (pichi), and more. Perfect for a puja room, a backyard trellis, or just filling your evenings with that unmistakable fragrance.",
    varieties: [
      "Mysore",
      "Grand Duke",
      "Chamely (Pichi / Jasminum Grandiflora)",
      "Multi",
      "Single",
      "Wax Jasmine",
    ],
    icon: "\ud83c\udf3c",
    featured: true,
  },
  {
    id: "curry",
    name: "Curry Leaf",
    tagline: "Fresh curry leaves from your own yard",
    description:
      "Stop buying stale curry leaves from the grocery store. A curry leaf plant in your yard means fresh, fragrant leaves whenever you need them \u2014 for tadka, rasam, chutney, or anything that needs that irreplaceable aroma. George will teach you how to keep it thriving through Florida's winters.",
    varieties: ["Curry Leaves"],
    icon: "\ud83c\udf3f",
    featured: true,
  },
  {
    id: "guava",
    name: "Guava",
    tagline: "Pink and white varieties",
    description:
      "Sweet, fragrant guavas straight from your backyard. We carry Barbie Pink, Big Boy White, and Thai White \u2014 heavy producers that love Florida's climate. Nothing beats a tree-ripened guava with a pinch of chaat masala.",
    varieties: ["Barbie Pink", "Big Boy White", "Thai White"],
    icon: "\ud83c\udf50",
  },
  {
    id: "parijat",
    name: "Parijat (Night Jasmine)",
    tagline: "The sacred flower tree",
    description:
      "Parijat \u2014 Nyctanthes arbor-tristis \u2014 the tree that drops fragrant white-and-orange flowers every morning. Sacred in Hindu tradition, beautiful in any yard. Our plants are flowering size and ready to bloom.",
    varieties: ["Flowering Size"],
    icon: "\ud83c\udf38",
    featured: true,
  },
  {
    id: "fig",
    name: "Fig",
    tagline: "Anjeer for your backyard",
    description:
      "Figs grow beautifully in Central Florida. We carry Brown Turkey and Italian Large \u2014 both reliable producers. Eat them fresh, dry them, or make your own anjeer barfi.",
    varieties: ["Brown Turkey", "Italian Large"],
    icon: "\ud83e\udded",
  },
  {
    id: "sapodilla",
    name: "Sapodilla (Chiku)",
    tagline: "The sweetest tropical fruit",
    description:
      "Known as chiku back home, sapodilla is one of the sweetest fruits you can grow. Our Alana variety is well-suited to Florida and produces generously once established.",
    varieties: ["Alana"],
    icon: "\ud83c\udf30",
  },
  {
    id: "papaya",
    name: "Papaya",
    tagline: "Fast-growing tropical staple",
    description:
      "Papayas grow fast and fruit within a year in Florida. Our Red Lady variety is a heavy producer with sweet, red-orange flesh. A must-have for any tropical garden.",
    varieties: ["Red Lady"],
    icon: "\ud83c\udf53",
  },
  {
    id: "loquat",
    name: "Loquat",
    tagline: "Winter fruit for Florida gardens",
    description:
      "Loquats are one of the few fruits that ripen in late winter and early spring in Florida. Honey Peach is a sweet, aromatic variety that's perfect for eating fresh.",
    varieties: ["Honey Peach"],
    icon: "\ud83c\udf51",
  },
  {
    id: "allspice",
    name: "All Spice",
    tagline: "Grow your own spice",
    description:
      "The all spice tree (Pimenta dioica) produces berries that taste like a blend of clove, cinnamon, and nutmeg. A beautiful and useful addition to any spice garden.",
    varieties: ["Florida"],
    icon: "\ud83c\udf31",
  },
];
