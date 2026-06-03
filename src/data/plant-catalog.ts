export type PlantCategory = {
  id: string;
  name: string;
  description: string;
  sizes: string;
  image: string; // TODO: Replace stock images with real photography
  imageAlt: string;
  varieties: string[];
};

export const plantCatalog: PlantCategory[] = [
  {
    id: "mango",
    name: "Mango",
    description:
      "Our mangos are field-grown for strong root development. We carry early, mid, and late-season varieties so you can harvest from May through September.",
    sizes: "Available in 3-gallon through 25-gallon containers",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Ripe mangos hanging from a mature tree branch in warm sunlight",
    varieties: ["Kent", "Nam Doc Mai", "Pickering", "Cogshall", "Ice Cream"],
  },
  {
    id: "avocado",
    name: "Avocado",
    description:
      "Cold-hardy and heat-tolerant varieties selected for South Florida yards. Our avocado trees are grafted onto strong rootstock for faster fruiting.",
    sizes: "Available in 3-gallon through 25-gallon containers",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Fresh avocados growing on a tree with broad green leaves",
    varieties: ["Hass", "Monroe", "Brogdon", "Lula", "Winter Mexican"],
  },
  {
    id: "citrus",
    name: "Citrus",
    description:
      "From sweet navel oranges to tangy key limes, our citrus trees are budded onto disease-resistant rootstock. Perfect for hedges, containers, or backyard groves.",
    sizes: "Available in 1-gallon through 15-gallon containers",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Bright oranges on a citrus tree with dark green foliage",
    varieties: ["Valencia Orange", "Navel Orange", "Meyer Lemon", "Key Lime", "Ruby Red Grapefruit"],
  },
  {
    id: "lychee",
    name: "Lychee",
    description:
      "A South Florida favorite. Our lychee trees are air-layered from proven mother trees for reliable fruiting. Give them space and they'll reward you for decades.",
    sizes: "Available in 7-gallon through 25-gallon containers",
    image: "https://images.unsplash.com/photo-1577735780842-db45f2d1f135?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Clusters of ripe red lychee fruit hanging among long green leaves",
    varieties: ["Mauritius", "Brewster", "Sweetheart"],
  },
  {
    id: "jackfruit",
    name: "Jackfruit",
    description:
      "The world's largest tree-borne fruit, right at home in South Florida. Our jackfruit trees are selected for flavor and manageable size.",
    sizes: "Available in 3-gallon through 15-gallon containers",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5e31faf?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Large jackfruit growing directly from the trunk of a tropical tree",
    varieties: ["Black Gold", "Dang Rasimi", "NS1"],
  },
  {
    id: "tropical",
    name: "Tropical Ornamentals",
    description:
      "Beyond fruit trees, we grow select tropical ornamentals that thrive in our climate: palms, heliconias, plumerias, and more. Ask about current availability.",
    sizes: "Available in 1-gallon through 45-gallon containers",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Lush tropical plants with broad leaves in a nursery setting",
    varieties: ["Plumeria", "Heliconia", "Bird of Paradise", "Royal Palm"],
  },
];
