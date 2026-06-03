export type PlantCategory = {
  id: string;
  name: string;
  tagline: string;
  varieties: string[];
  photo: string;
  photoAlt: string;
};

export const plantCatalog: PlantCategory[] = [
  {
    id: "mango",
    name: "Mango",
    tagline:
      "12+ varieties including Alphonso, Kesar, and Neelum. Whether you want a single backyard tree or a multi-graft trunk, George will match the right one to your space.",
    varieties: [
      "Alphonso",
      "Super Alphonso",
      "Kesar",
      "Kent",
      "Neelum",
      "Valencia Pride",
      "Multi Graft",
    ],
    photo: "https://images.unsplash.com/photo-1622955658214-d05c1c6fcf84?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Ripe mangoes hanging from a tree branch in warm sunlight",
  },
  {
    id: "jasmine",
    name: "Jasmine",
    tagline:
      "Mysore, Grand Duke, Chamely, and more. For the puja room, the backyard trellis, or just filling your evenings with that unmistakable fragrance.",
    varieties: ["Mysore", "Grand Duke", "Chamely (Pichi)", "Wax Jasmine"],
    photo: "https://images.unsplash.com/photo-1623171404570-1d196759fe20?auto=format&fit=crop&w=800&q=80",
    photoAlt: "White jasmine flowers in full bloom, delicate petals catching the light",
  },
  {
    id: "curry-leaf",
    name: "Curry Leaf",
    tagline:
      "Stop buying stale leaves from the grocery store. A curry leaf plant in your yard means fresh, fragrant leaves for tadka, rasam, and chutney whenever you need them.",
    varieties: ["Curry Leaf"],
    photo: "https://images.unsplash.com/photo-1498612753354-772a30629934?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Fresh green curry leaves on a stem, vibrant and aromatic",
  },
];
