export const SITE_CONFIG = {
  name: "GreenRider Enterprises",
  phone: "+91 9844107053",
  email: "sales@greenrider.in",
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

export const PRODUCTS = [
  {
    id: "honda-fj500",
    categoryId: "weeders",
    name: "Honda FJ500 Power Weeder",
    image: "/products/fj500.jpeg",
    specs: ["4-stroke engine", "5.5 HP", "2-year warranty", "Tilling width: 500mm"],
  },
  {
    id: "stihl-fs-220",
    categoryId: "cutters",
    name: "Stihl FS 220 Brush Cutter",
    image: "/products/fs220.jpeg",
    specs: ["2-stroke engine", "Lightweight build", "Harness included"],
  },
  {
    id: "single-bucket-milker",
    categoryId: "dairy",
    name: "Single Bucket Milking Machine",
    image: "/products/milking-machine.jpeg",
    specs: ["Vacuum pump motor", "Stainless steel claw", "25L bucket capacity"],
  },
  {
    id: "milk-chiller-200l",
    categoryId: "dairy",
    name: "200L Bulk Milk Chiller",
    image: "/products/milk-chiller.jpeg",
    specs: ["Direct expansion cooling", "Auto agitator", "Cools to 4°C within 3hrs"],
  }
];

export const SERVICES = [
  {
    title: "Genuine Sales",
    desc: "Whether you buy a GreenRider or .., Every machine ships with a valid manufacturer warranty — no grey-market risk.",
    icon: "tag"
  },
  {
    title: "Expert Repairs",
    desc: "When the rain hits, you can't wait days for a mechanic. Our factory-trained engineers prioritize emergency field repairs to save your season.",
    icon: "wrench"
  },
  {
    title: "Spare Parts Hub",
    desc: "Deep on-shelf stock of genuine spares — belts, blades, pistons, filters. No multi-week wait for a part.",
    icon: "settings"
  },
  {
    title: "Govt. Subsidy",
    desc: "Don't let complex paperwork stop you from claiming your rightful  subsidy money. We prepare, submit, and fight for your file.",
    icon: "file"
  }
];

export const STATS = [
  { label: "Authorized Brands", value: "25+" },
  { label: "Machines Sold", value: "15000+" },
  { label: "Service Engineers", value: "18" },
];

export const OWNER = {
  name: "Mr. Purushotham",
  role: "Founder, Son of a Farmer", 
  image: "/owner.png",
  message: "Namaskara. Farming is not just a business for us; it is our heritage. I have seen farmers lose entire yields because a cheap machine broke down right when the rains started. I built GreenRider to end that tension. When you take a machine from my showroom, you don't just get metal and an engine—you get my personal guarantee. You do the hard work in the field; leave the machine's tension to me.",
  experience: "Standing by Farmers Since 2017",
  signature: "My Word. Your Yield."
};