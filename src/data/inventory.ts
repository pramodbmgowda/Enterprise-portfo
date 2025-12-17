export const SITE_CONFIG = {
  name: "Sri Kaalabhyraveshwara Enterprises",
  phone: "+91 99000 00000",
  email: "sales@agricorp-retail.com",
  address: "Bettahalli, Hutridurga, Kunigal, Karnataka",
};

export const BRANDS = [
  "Honda India", "Stihl Germany", "VST Shakti", "KisanKraft", "Husqvarna", "Falcon", "Briggs & Stratton"
];

export const CATEGORIES = [
  {
    id: "weeders",
    title: "Soil Preparation",
    desc: "Power Weeders & Tillers",
    image: "/weeder.jpeg", // Ensure this file exists in public/
    colSpan: "md:col-span-2",
  },
  {
    id: "sprayers",
    title: "Plant Protection",
    desc: "Powered Sprayers",
    image: "/sprayers.jpeg", // Ensure this file exists in public/
    colSpan: "md:col-span-1",
  },
  {
    id: "cutters",
    title: "Harvesting",
    desc: "Brush Cutters & Chainsaws",
    image: "/cutter.jpeg", // Ensure this file exists in public/
    colSpan: "md:col-span-1",
  },
  {
    id: "pumps",
    title: "Water Solutions",
    desc: "Submersible & Diesel Pumps",
    image: "/pump.jpeg", // Ensure this file exists in public/
    colSpan: "md:col-span-2",
  },
];

export const SERVICES = [
  {
    title: "Genuine Sales",
    desc: "Authorized retailer for 25+ global brands. We sell only original machinery with valid manufacturer warranty.",
    icon: "tag"
  },
  {
    title: "Expert Repairs",
    desc: "Our workshop is equipped with special tools for Honda & Stihl engines. Factory-trained mechanics on duty.",
    icon: "wrench"
  },
  {
    title: "Spare Parts Hub",
    desc: "Massive stock of genuine spares. Belts, blades, pistons, and filters available off-the-shelf.",
    icon: "settings"
  },
  {
    title: "Subsidy Assistance",
    desc: "Full guidance for SMAM & Agriculture Dept subsidies. We handle the paperwork for eligible farmers.",
    icon: "file"
  }
];

export const STATS = [
  { label: "Authorized Brands", value: "25+" },
  { label: "Machines Sold", value: "15,000+" },
  { label: "Service Engineers", value: "18" },
];
export const OWNER = {
  name: "Mr. Purushotham", 
  role: "Proprietor",
  image: "/owner.png", 
  message: "We don't just sell machines; we build relationships. My personal guarantee to every farmer is genuine quality at honest prices. When you buy from us, you buy with confidence.",
  experience: "Serving Farmers Since 2017",
  signature: "Your Trust, Our Legacy."
};
