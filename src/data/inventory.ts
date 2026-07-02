export const SITE_CONFIG = {
  name: "GreenRider",
  phone: "9844107053",
  email: "info@greenriderskb.com",
  address: "Bettahalli, Senthepete, Hutridurga, Kunigal, Karnataka",
};

export const BRANDS = [
  "HONDA", "STIHL", "BRIGGS & STRATTON", "VST SHAKTI", "KISANKRAFT"
];

export const CATEGORIES = [
  {
    id: "weeders",
    title: "Power Weeders & Tillers",
    desc: "Heavy-Duty Petrol & Diesel Models",
  },
  {
    id: "sprayers",
    title: "Power & Battery Sprayers",
    desc: "High-Pressure Knapsack Models",
  },
  {
    id: "cutters",
    title: "Brush Cutters & Chainsaws",
    desc: "Petrol & Electric Cutting Equipment",
  },
  {
    id: "pumps",
    title: "Water Pumps & Motors",
    desc: "Diesel, Petrol & Submersible Pumps",
  },
  {
    id: "dairy",
    title: "Milking & Dairy Equipment",
    desc: "Milkers, Chillers & Processing Units",
  },
];

export type Product = {
  id: string;
  categoryId: string;
  name: string;
  image: string;
  price: string;
  description: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "gr-500",
    categoryId: "weeders",
    name: "GREENRIDER GR-500 POWER WEEDER",
    image: "/products/gr-weeder.jpeg",
    price: "₹38,000",
    description: "Designed for Indian soil and backed directly by us. If anything goes wrong, you call us — not a distant manufacturer.",
  },
  {
    id: "fj500",
    categoryId: "weeders",
    name: "HONDA FJ500 POWER WEEDER",
    image: "/products/fj500.jpeg",
    price: "₹45,000",
    description: "Genuine Honda machinery sold by an authorized dealer. Full manufacturer warranty, original spare parts.",
  },
  {
    id: "gr-bc40",
    categoryId: "cutters",
    name: "GREENRIDER GR-BC40 BRUSH CUTTER",
    image: "/products/gr-brushcutter.jpeg",
    price: "₹14,500",
    description: "Built for everyday Indian farm use. Cost-effective, durable, and fully serviced at our workshop.",
  },
  {
    id: "stihl-fs220",
    categoryId: "cutters",
    name: "STIHL FS 220 BRUSH CUTTER",
    image: "/products/fs220.jpeg",
    price: "₹22,500",
    description: "German-engineered precision for demanding brush and grass cutting. Full manufacturer warranty.",
  },
  {
    id: "milker-01",
    categoryId: "dairy",
    name: "SINGLE BUCKET MILKING MACHINE",
    image: "/products/milking-machine.jpeg",
    price: "₹38,000",
    description: "Direct-from-dealer pricing with full local service support. No middleman, no inflated costs.",
  },
  {
    id: "chiller-200l",
    categoryId: "dairy",
    name: "200L BULK MILK CHILLER",
    image: "/products/milk-chiller.jpeg",
    price: "₹1,85,000",
    description: "Ideal for individual farmers and small dairy cooperatives scaling up milk production.",
  },
];