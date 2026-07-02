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
  specs?: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "gr-500",
    categoryId: "weeders",
    name: "GREENRIDER GR-500 POWER WEEDER",
    image: "/products/gr-weeder.jpeg",
    price: "₹38,000",
    description: "Designed for Indian soil and backed directly by us. If anything goes wrong, you call us — not a distant manufacturer.",
    specs: [
      "4-Stroke Petrol Engine",
      "5.5 HP Output",
      "Tilling Width: 600mm",
      "Air-Cooled Engine",
      "Manual Recoil Start",
      "Weight: 68 kg",
    ],
  },
  {
    id: "fj500",
    categoryId: "weeders",
    name: "HONDA FJ500 POWER WEEDER",
    image: "/products/fj500.jpeg",
    price: "₹45,000",
    description: "Genuine Honda machinery sold by an authorized dealer. Full manufacturer warranty, original spare parts.",
    specs: [
      "Honda GX160 Petrol Engine",
      "5.5 HP Output",
      "Tilling Width: 500mm",
      "Air-Cooled 4-Stroke Engine",
      "Manual Recoil Start",
      "1-Year Manufacturer Warranty",
    ],
  },
  {
    id: "gr-bc40",
    categoryId: "cutters",
    name: "GREENRIDER GR-BC40 BRUSH CUTTER",
    image: "/products/gr-brushcutter.jpeg",
    price: "₹14,500",
    description: "Built for everyday Indian farm use. Cost-effective, durable, and fully serviced at our workshop.",
    specs: [
      "2-Stroke Petrol Engine",
      "40.2 cc Displacement",
      "Dual-Handle Design",
      "3-Tooth Metal Blade Included",
      "Weight: 7.8 kg",
    ],
  },
  {
    id: "stihl-fs220",
    categoryId: "cutters",
    name: "STIHL FS 220 BRUSH CUTTER",
    image: "/products/fs220.jpeg",
    price: "₹22,500",
    description: "German-engineered precision for demanding brush and grass cutting. Full manufacturer warranty.",
    specs: [
      "2-Stroke Petrol Engine",
      "27.2 cc Displacement",
      "Anti-Vibration System",
      "Nylon Line & Metal Blade Compatible",
      "Weight: 7.2 kg",
      "1-Year Manufacturer Warranty",
    ],
  },
  {
    id: "milker-01",
    categoryId: "dairy",
    name: "SINGLE BUCKET MILKING MACHINE",
    image: "/products/milking-machine.jpeg",
    price: "₹38,000",
    description: "Direct-from-dealer pricing with full local service support. No middleman, no inflated costs.",
    specs: [
      "Single Bucket, 25L Capacity",
      "Vacuum Pump: 180 L/min",
      "Stainless Steel Bucket",
      "Single-Phase Motor",
      "Suitable for 4-8 Cows/Day",
    ],
  },
  {
    id: "chiller-200l",
    categoryId: "dairy",
    name: "200L BULK MILK CHILLER",
    image: "/products/milk-chiller.jpeg",
    price: "₹1,85,000",
    description: "Ideal for individual farmers and small dairy cooperatives scaling up milk production.",
    specs: [
      "Storage Capacity: 200 Litres",
      "Rapid Cooling: 35°C to 4°C in <3 hrs",
      "Stainless Steel Tank (SS 304)",
      "Automatic Agitator",
      "Digital Temperature Display",
    ],
  },
];