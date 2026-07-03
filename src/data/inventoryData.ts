/* =========================================================================
   GREENRIDER INVENTORY MASTER FILE
   =========================================================================
   INSTRUCTIONS FOR ADDING NEW PRODUCTS:
   
   1. To add a new product, copy an existing {} block and paste it below.
   2. 'id': Must be unique. Do not use spaces (use dashes e.g., "new-item-01").
   3. 'categoryId': MUST exactly match one of these: 
      "weeders", "sprayers", "cutters", "pumps", "dairy"
   4. 'stock': MUST exactly match "In Stock", "Low Stock", or "Sold Out".
   5. 'specs': You can add as many text lines as you want here. 
      **NOTE:** The website is designed to automatically only show the first 
      4 items to ensure the UI card alignment never breaks.
   ========================================================================= */

export interface InventoryItem {
  id: string;         // Unique identifier for the system
  categoryId: string; // Used to group products on Category Pages
  category: string;   // The text shown on the yellow badge above the title
  name: string;       // The main product title
  price: string;      // Always include the ₹ symbol (e.g., "₹38,000")
  image: string;      // Must match the exact filename in the public/products folder
  stock: "In Stock" | "Low Stock" | "Sold Out"; // Controls the color of the stock badge
  specs: string[];    // List of technical features (Only top 4 are shown on cards)
}

export const GREENRIDER_INVENTORY: InventoryItem[] = [


    // --- WEEDERS & TILLERS ---

  {
    id: "gr-500",
    categoryId: "weeders",
    category: "Power Weeders & Tillers",
    name: "GREENRIDER GR-500 POWER WEEDER",
    image: "/images/productsW/tiller2.jpeg",
    price: "₹38,000",
    stock: "In Stock",
    specs: [
      "4-Stroke Petrol Engine",
      "5.5 HP Output",
      "Tilling Width: 600mm",
      "Air-Cooled Engine",
      "Manual Recoil Start",
      "Weight: 68 kg", // UI will safely hide this 5th and 6th item to keep alignment perfect
    ],
  },
  {
    id: "fj500",
    categoryId: "weeders",
    category: "Power Weeders & Tillers",
    name: "HONDA FJ500 POWER WEEDER",
    image: "/images/productsW/tiller2.jpeg",
    price: "₹45,000",
    stock: "Low Stock",
    specs: [
      "Honda GX160 Petrol Engine",
      "5.5 HP Output",
      "Tilling Width: 500mm",
      "Air-Cooled 4-Stroke Engine",
      "Manual Recoil Start",
      "1-Year Manufacturer Warranty",
    ],
  },


  // --- BRUSH CUTTERS & CHAINSAWS ---

  {
    id: "gr-bc40",
    categoryId: "cutters",
    category: "Brush Cutters & Chainsaws",
    name: "GREENRIDER GR-BC40 BRUSH CUTTER",
    image: "/images/productsB/brush1.jpeg",
    price: "₹14,500",
    stock: "In Stock",
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
    category: "Brush Cutters & Chainsaws",
    name: "STIHL FS 220 BRUSH CUTTER",
    image: "/images/productsB/brush1.jpeg",
    price: "₹22,500",
    stock: "In Stock",
    specs: [
      "2-Stroke Petrol Engine",
      "27.2 cc Displacement",
      "Anti-Vibration System",
      "Nylon Line & Metal Blade Compatible",
      "Weight: 7.2 kg",
      "1-Year Manufacturer Warranty",
    ],
  },



  // --- POWER & BATTERY SPRAYERS  ---
  {
    id: "aspee-htp-sprayer",
    categoryId: "sprayers",
    category: "Power & Battery Sprayers",
    name: "ASPEE HTP POWER SPRAYER SET",
    image: "/images/productsS/sprayer1.jpeg", 
    price: "₹18,500",
    stock: "In Stock",
    specs: [
      "Triplex Stainless Steel Pistons",
      "40 kg/cm² Working Pressure",
      "Requires 3-5 HP Motor",
      "Delivers 36 Liters Per Minute",
      "Heavy-Duty Horizontal Mount",
    ],
  },
  {
    id: "stihl-sr420",
    categoryId: "sprayers",
    category: "Power & Battery Sprayers",
    name: "STIHL SR 420 MISTBLOWER",
    image: "/images/productsS/sprayer1.jpeg",
    price: "₹46,000",
    stock: "Low Stock",
    specs: [
      "56.5 cc Engine Displacement",
      "14 Liter Chemical Tank",
      "12 Meter Horizontal Spray Range",
      "Converts to Leaf Blower",
      "Anti-Vibration Backpack Mount",
    ],
  },



  // --- WATER PUMPS & MOTORS ---
  {
    id: "honda-wb30x",
    categoryId: "pumps",
    category: "Water Pumps & Motors",
    name: "HONDA WB30X WATER PUMP",
    image: "/images/productsP/pumps1.jpeg",
    price: "₹24,500",
    stock: "In Stock",
    specs: [
      "3-Inch Suction/Discharge Port",
      "Honda GX160 4-Stroke Engine",
      "1100 Liters/Min Max Discharge",
      "28 Meter Total Head Lift",
      "Cast Iron Volute & Impeller",
    ],
  },
  {
    id: "kirloskar-submersible",
    categoryId: "pumps",
    category: "Water Pumps & Motors",
    name: "KIRLOSKAR 3HP SUBMERSIBLE",
    image: "/images/productsP/pumps1.jpeg",
    price: "₹32,000",
    stock: "In Stock",
    specs: [
      "3.0 HP / 2.2 kW Motor",
      "Water-Filled Rewindable Motor",
      "High Discharge Capacity",
      "Stainless Steel Anti-Rust Body",
      "Designed for Deep Borewells",
    ],
  },


  // --- MILKING & DAIRY EQUIPMENT ---
  
  {
    id: "milker-01",
    categoryId: "dairy",
    category: "Milking & Dairy Equipment",
    name: "SINGLE BUCKET MILKING MACHINE",
    image: "/images/productsD/milk1.jpeg",
    price: "₹38,000",
    stock: "In Stock",
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
    category: "Milking & Dairy Equipment",
    name: "200L BULK MILK CHILLER",
    image: "/images/productsD/milk1.jpeg",
    price: "₹1,85,000",
    stock: "In Stock",
    specs: [
      "Storage Capacity: 200 Litres",
      "Rapid Cooling: 35°C to 4°C in <3 hrs",
      "Stainless Steel Tank (SS 304)",
      "Automatic Agitator",
      "Digital Temperature Display",
    ],
  },

  
];

  