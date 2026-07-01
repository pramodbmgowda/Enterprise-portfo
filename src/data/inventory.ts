export const SITE_CONFIG = {
  name: "GreenRider",
  phone: "+91 9844107053",
  email: "info@greenriderskb.com",
  address: "Bettahalli, Senthepete, Hutridurga, Kunigal, Karnataka",
};

export const BRANDS = [
  "Honda India", "Stihl Germany", "VST Shakti", "KisanKraft", "Husqvarna", "Falcon", "Briggs & Stratton"
];

export const CATEGORIES = [
  {
    id: "weeders",
    title: "Power Weeders & Tillers",
    desc: "Heavy-Duty Petrol & Diesel Models",
    image: "/weeder.jpeg",
    colSpan: "md:col-span-2",
  },
  {
    id: "sprayers",
    title: "Power & Battery Sprayers",
    desc: "High-Pressure Knapsack & Portable Models",
    image: "/sprayers.jpeg",
    colSpan: "md:col-span-1",
  },
  {
    id: "cutters",
    title: "Brush Cutters & Chainsaws",
    desc: "Petrol & Electric Cutting Equipment",
    image: "/cutter.jpeg",
    colSpan: "md:col-span-1",
  },
  {
    id: "pumps",
    title: "Water Pumps & Motors",
    desc: "Diesel, Petrol & Submersible Pumps",
    image: "/pump.jpeg",
    colSpan: "md:col-span-2",
  },
  {
    id: "dairy",
    title: "Milking & Dairy Equipment",
    desc: "Milkers, Chillers & Processing Units",
    image: "/dairy.jpeg",
    colSpan: "md:col-span-2",
  },
];

export type Product = {
  id: string;
  categoryId: string;
  name: string;
  brand: string;
  isOwnBrand: boolean;
  badge: string;
  image: string;
  price: string;
  specs: string[];
  description: string;
};

export const PRODUCTS: Product[] = [
  // ─── WEEDERS ───────────────────────────────────────────
  {
    id: "greenrider-gr500",
    categoryId: "weeders",
    name: "GreenRider GR-500 Power Weeder",
    brand: "GreenRider",
    isOwnBrand: true,
    badge: "Our Brand",
    image: "/products/gr-weeder.jpeg",
    price: "₹38,000",
    specs: [
      "4-stroke engine",
      "5 HP",
      "1-year service warranty",
      "Tilling width: 480mm",
      "Direct workshop support",
    ],
    description:
      "Designed for Indian soil and backed directly by us. If anything goes wrong, you call us — not a distant manufacturer.",
  },
  {
    id: "honda-fj500",
    categoryId: "weeders",
    name: "Honda FJ500 Power Weeder",
    brand: "Honda India",
    isOwnBrand: false,
    badge: "Authorized Dealer",
    image: "/products/fj500.jpeg",
    price: "₹45,000",
    specs: [
      "4-stroke engine",
      "5.5 HP",
      "2-year manufacturer warranty",
      "Tilling width: 500mm",
      "OEM spare parts available",
    ],
    description:
      "Genuine Honda machinery sold by an authorized dealer. Full manufacturer warranty, original spare parts, no grey-market risk.",
  },

  // ─── CUTTERS ───────────────────────────────────────────
  {
    id: "greenrider-grbc40",
    categoryId: "cutters",
    name: "GreenRider GR-BC40 Brush Cutter",
    brand: "GreenRider",
    isOwnBrand: true,
    badge: "Our Brand",
    image: "/products/gr-brushcutter.jpeg",
    price: "₹14,500",
    specs: [
      "2-stroke engine",
      "40cc",
      "Anti-vibration handle",
      "Includes blade + nylon head",
      "Fully serviceable at our workshop",
    ],
    description:
      "Built for everyday Indian farm use. Cost-effective, durable, and fully serviced right here at our showroom.",
  },
  {
    id: "stihl-fs-220",
    categoryId: "cutters",
    name: "Stihl FS 220 Brush Cutter",
    brand: "Stihl Germany",
    isOwnBrand: false,
    badge: "Authorized Dealer",
    image: "/products/fs220.jpeg",
    price: "₹22,500",
    specs: [
      "2-stroke engine",
      "German engineering",
      "Lightweight build",
      "Harness included",
      "Manufacturer warranty",
    ],
    description:
      "German-engineered precision for demanding brush and grass cutting. Sold with full Stihl manufacturer warranty.",
  },

  // ─── DAIRY ─────────────────────────────────────────────
  {
    id: "single-bucket-milker",
    categoryId: "dairy",
    name: "Single Bucket Milking Machine",
    brand: "GreenRider",
    isOwnBrand: true,
    badge: "Our Brand",
    image: "/products/milking-machine.jpeg",
    price: "₹38,000",
    specs: [
      "Vacuum pump motor",
      "Stainless steel claw",
      "25L bucket capacity",
      "Direct-from-dealer pricing",
      "Local service support",
    ],
    description:
      "Direct-from-dealer pricing with full local service support. No middleman, no inflated costs.",
  },
  {
    id: "milk-chiller-200l",
    categoryId: "dairy",
    name: "200L Bulk Milk Chiller",
    brand: "GreenRider",
    isOwnBrand: true,
    badge: "Our Brand",
    image: "/products/milk-chiller.jpeg",
    price: "₹1,85,000",
    specs: [
      "Direct expansion cooling",
      "Auto agitator",
      "Cools to 4°C within 3hrs",
      "Ideal for small cooperatives",
      "AMC service available",
    ],
    description:
      "Ideal for individual farmers and small dairy cooperatives scaling up milk production.",
  },
];

export const SERVICES = [
  {
    title: "Genuine Sales",
    desc: "Whether you buy a GreenRider or an authorized brand, every machine ships with a valid manufacturer warranty — no grey-market risk.",
    icon: "tag",
  },
  {
    title: "Expert Repairs",
    desc: "When the rain hits, you can't wait days for a mechanic. Our factory-trained engineers prioritize emergency field repairs to save your season.",
    icon: "wrench",
  },
  {
    title: "Spare Parts Hub",
    desc: "Deep on-shelf stock of genuine spares — belts, blades, pistons, filters. No multi-week wait for a part.",
    icon: "settings",
  },
  {
    title: "Govt. Subsidy",
    desc: "Don't let complex paperwork stop you from claiming your rightful subsidy money. We prepare, submit, and fight for your file.",
    icon: "file",
  },
];

export const STATS = [
  { label: "Authorized Brands", value: "25+" },
  { label: "Machines Sold", value: "15000+" },

];

export const OWNER = {
  name: "Mr. Purushotham",
  role: "Founder, Son of a Farmer",
  image: "/owner.png",
  message:
    "Namaskara. Farming is not just a business for us; it is our heritage. I have seen farmers lose entire yields because a cheap machine broke down right when the rains started. I built GreenRider to end that tension. When you take a machine from my showroom, you don't just get metal and an engine — you get my personal guarantee. You do the hard work in the field; leave the machine's tension to me.",
  experience: "Standing by Farmers Since 2017",
  signature: "My Word. Your Yield.",
};