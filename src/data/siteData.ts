import { ProductCategory, ClientLogo } from "../types.ts";

export const COMPANY_INFO = {
  name: "Gayatri Fabrication Works",
  tagline: "COMMERCIAL KITCHEN EQUIPMENTS FOR HOTELS, RESTAURANTS, BAR & INDUSTRIAL CANTEENS",
  established: "1996",
  rating: "10/10",
  starCount: 10,
  address: {
    gala: "Gala No 10, Tarun Plastic Industrial Estate",
    street: "Mogra Road, Andheri East",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400069",
    country: "India",
    full: "Gala No 10, Tarun Plastic Industrial Estate, Mogra Road, Andheri East, Mumbai, Maharashtra 400069, India"
  },
  phones: [
    { label: "Telephone", number: "022 266996268", tel: "+9122266996268" },
    { label: "Telephone", number: "022 28360120", tel: "+912228360120" }
  ],
  contacts: [
    { name: "Mr Pankaj Panchal", phone: "+919323801367", tel: "+919323801367" },
    { name: "Mr Vipul Panchal", phone: "+919870353537", tel: "+919870353537" }
  ],
  emails: [
    "info@gayatrifabricationworks.com",
    "gayatfw.panchal@yahoo.co.in"
  ],
  workingHours: {
    weekdays: "Monday – Saturday: 9:00 AM to 6:00 PM",
    sunday: "Sunday: Closed (By Prior Appointment)",
    note: "Open Monday through Saturday, Closed on Sunday (Appointments available on request)",
    schedule: [
      { day: "Monday", hours: "9:00 AM – 6:00 PM", isClosed: false },
      { day: "Tuesday", hours: "9:00 AM – 6:00 PM", isClosed: false },
      { day: "Wednesday", hours: "9:00 AM – 6:00 PM", isClosed: false },
      { day: "Thursday", hours: "9:00 AM – 6:00 PM", isClosed: false },
      { day: "Friday", hours: "9:00 AM – 6:00 PM", isClosed: false },
      { day: "Saturday", hours: "9:00 AM – 6:00 PM", isClosed: false },
      { day: "Sunday", hours: "Closed (By Prior Appointment)", isClosed: true }
    ]
  },
  website: "www.gayatrifabricationworks.com",
  copyright: "Copyright © 2026 Gayatri Fabrication Works"
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    "id": "bakery-confectionery",
    "slug": "bakery-confectionery",
    "title": "Bakery & Confectionery",
    "items": [
      {
        "slug": "dough-kneader",
        "title": "Dough Kneader",
        "image": "./images/DOUGH-KNEADER.jpg",
        "description": "Dough Kneaders are best suited for kneading dough of chapatti, puri & roti, kneading bowl is made of stainless steel available in various sizes from 5 kg to 100 kg."
      },
      {
        "slug": "marble-table-with-drawer",
        "title": "Marble Table with Drawer",
        "image": "./images/MARBLE-TABLE-WITH-DRAW.jpg",
        "description": "Heavy duty stainless steel table structure with premium smooth polished marble top and convenient storage drawers."
      },
      {
        "slug": "work-table",
        "title": "Work Table",
        "image": "./images/WORK-TABLE.jpg",
        "description": "High utility product ensures hygienic cutting, chopping, sorting & general purpose usage. Heavy gauge perfectly sound deadened stainless steel top for low noise level. Optional splash guard, under shelves, drawers & sinks. STD SIZE : 48\", 60\", 72\" X 24\" X 34\" + 6 custom built sizes."
      }
    ]
  },
  {
    "id": "bar-equipments",
    "slug": "bar-equipments",
    "title": "Bar Equipments",
    "items": [
      {
        "slug": "bar-counter",
        "title": "Bar Counter",
        "image": "./images/BAR-COUNTER-2.jpg",
        "description": "Custom engineered commercial stainless steel bar counter with integrated sink, speed rails, ice chest and storage compartments."
      },
      {
        "slug": "bar-counter-1",
        "title": "Bar Counter 1",
        "image": "./images/BAR-COUNTER-1-1.jpg",
        "description": "Heavy duty bar workstation counter with insulated ice bin, bottle display rack and stainless steel prep surface."
      }
    ]
  },
  {
    "id": "cooking-equipments",
    "slug": "cooking-equipments",
    "title": "Cooking Equipments",
    "items": [
      {
        "slug": "3-burner-chinese-range",
        "title": "3 Burner Chinese Range",
        "image": "./images/3-BURNER-CHINESE-RANGE-1.jpg",
        "description": "Suitable designed for Chinese dishes, Top made out of s.s. with heavy cast iron grating fittings with good quality burner and individual control NCV, side covered with s.s. and 12\" back splash and drain."
      },
      {
        "slug": "3-burner-cooking-range",
        "title": "3 Burner Cooking Range",
        "image": "./images/3-BURNER-COOKING-RANGE.jpg",
        "description": "3 burner cooking range is manufactured and designed as per the latest trends and features required for easy and fast cooking. Our burners are made from superior quality raw material and are safe to use."
      },
      {
        "slug": "3-burner-range",
        "title": "3 Burner Range",
        "image": "./images/3-BURNER-RANGE.jpg",
        "description": "Low height range. Ideal not only for bulk cooking but also for frying / panning & sauteing. Stainless steel made, heavy duty vessel rests, individual spillage tray front panel. Extra heavy duty frame & quality gas burners assembly. One / two / three / four & six burners & custom built sizes."
      },
      {
        "slug": "bulk-fryer",
        "title": "Bulk Fryer",
        "image": "./images/BULK-FRYER.jpg",
        "description": "Heavy-duty industrial bulk fryer built for high-volume deep frying in hotels, institutional canteens, and catering services."
      },
      {
        "slug": "barbaeque-griller",
        "title": "Barbaeque Griller",
        "image": "./images/BARBAEQUE-GRILL.jpg",
        "description": "Commercial charcoal / gas barbeque griller with heavy gauge stainless steel frame and cast iron grilling grates."
      },
      {
        "slug": "bbq",
        "title": "BBQ",
        "image": "./images/BBQ.jpg",
        "description": "Premium stainless steel outdoor & commercial kitchen BBQ unit designed for intense searing and uniform heating."
      },
      {
        "slug": "chinese-range",
        "title": "Chinese Range",
        "image": "./images/CHINESE-RANGE.jpg",
        "description": "High-power jet burner Chinese cooking range with heavy duty cast iron wok rings, water swirl faucet, and continuous drainage trough."
      },
      {
        "slug": "deep-fat-fryer",
        "title": "Deep Fat Fryer",
        "image": "./images/DEEP-FAT-FRYER.jpg",
        "description": "High efficiency temperature-controlled deep fat fryer featuring stainless steel heating coils and removable oil tank."
      },
      {
        "slug": "griller-cum-hot-plate-under-oven",
        "title": "Griller Cum Hot Plate Under Oven",
        "image": "./images/GRILLER-CUM-HOT-PLATE-UNDER-OVEN.jpg",
        "description": "Multifunctional cooking range combining a grooved contact griller, flat hot plate surface, and a baking / roasting oven underneath."
      },
      {
        "slug": "griller-range",
        "title": "Griller Range",
        "image": "./images/GRILLER-RANGE.jpg",
        "description": "Professional heavy duty griller range designed for restaurants, steakhouses and burger bars."
      },
      {
        "slug": "hot-plate-table-top",
        "title": "Hot Plate Table Top",
        "image": "./images/HOT-PLATE-TABLE-TOP-1.jpg",
        "description": "Compact countertop polished stainless steel hot plate with precise thermostatic control for dosas, rotis, and pancakes."
      },
      {
        "slug": "hot-plate",
        "title": "Hot Plate",
        "image": "./images/HOT-PLATE-1.jpg",
        "description": "Floor mounted heavy gauge commercial hot plate with heavy duty burner elements and removable drip tray."
      },
      {
        "slug": "rice-boiler",
        "title": "Rice Boiler",
        "image": "./images/RICE-BOILER.jpg",
        "description": "High capacity commercial rice boiler ensuring perfectly steamed rice for banquet halls and large canteens."
      },
      {
        "slug": "robata-griller",
        "title": "Robata Griller",
        "image": "./images/ROBATA-GRILLER.jpg",
        "description": "Authentic Japanese Robatayaki charcoal griller with multi-tier skewer racks and heat-retention insulation."
      },
      {
        "slug": "sizzler-plate-range",
        "title": "Sizzler Plate Range",
        "image": "./images/SIZZLER-PLATE-RANGE.jpg",
        "description": "High power heating range specifically engineered for pre-heating cast iron sizzler plates quickly and safely."
      },
      {
        "slug": "table-mounted-barbaeque-500x500",
        "title": "Table Mounted Barbaeque 500x500",
        "image": "./images/TABLE-MOUNTED-BARBAEQUE-500X500.jpg",
        "description": "Compact 500x500 mm table-mounted BBQ unit suited for live counters, buffet setups, and outdoor catering."
      },
      {
        "slug": "table-top-griller",
        "title": "Table Top Griller",
        "image": "./images/TABLE-TOP-GRILLER.jpg",
        "description": "Versatile countertop electric / gas griller with ribbed and flat plates for rapid panini and sandwich grilling."
      },
      {
        "slug": "tilting-boiling-pan",
        "title": "Tilting Boiling Pan",
        "image": "./images/TILTING-BOILING-PAN.jpg",
        "description": "Heavy-duty tilting boiling pan with manual / motorized tilt mechanism for bulk gravies, soups, and boiling operations."
      },
      {
        "slug": "tilting-brat-pan",
        "title": "Tilting Brat Pan",
        "image": "./images/TILTING-BRAT-PAN.jpg",
        "description": "Multi-functional tilting braising pan suitable for boiling, braising, shallow frying, and stewing in bulk quantities."
      }
    ]
  },
  {
    "id": "dish-potwash",
    "slug": "dish-potwash",
    "title": "Dish & Potwash",
    "items": [
      {
        "slug": "gabbage-cum-2-sink-unit",
        "title": "Gabbage Cum 2 Sink Unit",
        "image": "./images/Gabbage-Cum-2-Sink-Unit.jpg",
        "description": "Integrated double sink unit with built-in garbage disposal chute, scrape shelf, and high-quality stainless steel fabrication."
      },
      {
        "slug": "gabbage-drum",
        "title": "Gabbage Drum",
        "image": "./images/Gabbage-Bin-1.jpg",
        "description": "Heavy duty stainless steel mobile garbage bin / waste drum on heavy-duty swivel castors with tight-fitting lid."
      }
    ]
  },
  {
    "id": "hospitality-trolley-shelvings",
    "slug": "hospitality-trolley-shelvings",
    "title": "Hospitality Trolley & Shelvings",
    "items": [
      {
        "slug": "linen-trolley",
        "title": "Linen Trolley",
        "image": "./images/Linen-Trolley.jpg",
        "description": "Sturdy hotel linen collection and distribution trolley with heavy fabric bag and smooth-rolling castors."
      },
      {
        "slug": "masala-trolley",
        "title": "Masala Trolley",
        "image": "./images/Masala-Trolley.jpg",
        "description": "Mobile stainless steel spice trolley fitted with multiple stainless steel containers for chef accessibility during live cooking."
      },
      {
        "slug": "trolley",
        "title": "Trolley",
        "image": "./images/Trolley.jpg",
        "description": "Multi-tier stainless steel utility service trolley designed for hotel dining rooms, banquet service, and clearance."
      },
      {
        "slug": "wall-shelf",
        "title": "Wall Shelf",
        "image": "./images/Wall-Shelf.jpg",
        "description": "Wall mounted heavy-duty stainless steel shelving with reinforced brackets for pot and utensil storage."
      }
    ]
  },
  {
    "id": "pantry-area",
    "slug": "pantry-area",
    "title": "Pantry Area",
    "items": [
      {
        "slug": "table-top-hot-bain-marie",
        "title": "Table Top Hot Bain Marie",
        "image": "./images/TABLE-TOP-HOT-BAIN-MARIE.jpg",
        "description": "Countertop electric bain-marie with temperature control to keep curries, gravies, and sauces warm and fresh for service."
      },
      {
        "slug": "deep-fat-fryer-double-table-model",
        "title": "Deep Fat Fryer Double (Table Model)",
        "image": "./images/DEEP-FAT-FRYER-DOUBLE-TABLE-MOUNT.jpg",
        "description": "Dual tank countertop electric deep fryer with independent temperature thermostats and twin frying baskets."
      },
      {
        "slug": "heavy-duty-juice-machine",
        "title": "Heavy Duty Juice Machine",
        "image": "./images/HEAVY-DUTY-JUICER.jpg",
        "description": "High-yield commercial juicer designed for continuous extracting from carrots, apples, oranges, and vegetables."
      },
      {
        "slug": "idle-steamer",
        "title": "Idle Steamer",
        "image": "./images/IDLE-STEAMER.jpg",
        "description": "Boiler type commercial idli steamer capable of steaming dozens of idlis per batch with consistent fluffy texture."
      },
      {
        "slug": "juice-machine",
        "title": "Juice Machine",
        "image": "./images/JUICE-MACHINE.jpg",
        "description": "Commercial citrus and fruit juicing machine built for high traffic cafes, snack counters, and juice bars."
      },
      {
        "slug": "pizza-oven",
        "title": "Pizza Oven",
        "image": "./images/PIZZA-OVEN.jpg",
        "description": "High-temperature refractory stone base pizza baking oven with top and bottom temperature regulation."
      },
      {
        "slug": "salamadar",
        "title": "Salamadar",
        "image": "./images/SALAMADAR.jpg",
        "description": "Commercial overhead salamander broiler with adjustable height grid for melting cheese, gratinating, and toasting."
      },
      {
        "slug": "sandwich-griller",
        "title": "Sandwich Griller",
        "image": "./images/SANDWICH-GRILLER.jpg",
        "description": "Heavy-duty grooved cast iron contact panini griller with rapid heating element and thermostatic regulator."
      },
      {
        "slug": "wet-masala-grinder",
        "title": "Wet Masala Grinder",
        "image": "./images/WET-MASALA-GRINDER.jpg",
        "description": "Tilting stone wet masala and batter grinder designed for authentic dosa, vada, and masala paste preparation."
      },
      {
        "slug": "tea-coffee-dispenser",
        "title": "Tea Coffee Dispenser",
        "image": "./images/TEA-COFFEE-DISPENSER.jpg",
        "description": "Insulated stainless steel automatic beverage dispenser maintaining ideal serving temperature for tea and coffee."
      }
    ]
  },
  {
    "id": "pre-preparation-area",
    "slug": "pre-preparation-area",
    "title": "Pre Preparation Area",
    "items": [
      {
        "slug": "onion-potato-bin",
        "title": "Onion Potato Bin",
        "image": "./images/ONION-POTATO-BIN.jpg",
        "description": "Ventilated stainless steel storage bin unit for raw potatoes and onions with perforated tiers for air circulation."
      },
      {
        "slug": "potato-peeler",
        "title": "Potato Peeler",
        "image": "./images/POTATO-PEELER.jpg",
        "description": "High capacity commercial potato peeling machine with abrasive carborundum disc and continuous water flushing."
      },
      {
        "slug": "pulverizer",
        "title": "Pulverizer",
        "image": "./images/PULVERSIZER.jpg",
        "description": "Heavy-duty commercial food pulverizer and spice impact mill for dry spices, grains, and wet pulses."
      }
    ]
  },
  {
    "id": "refrigeration-equipments",
    "slug": "refrigeration-equipments",
    "title": "Refrigeration Equipments",
    "items": [
      {
        "slug": "4-door-vertical-refrigerator",
        "title": "4 Door Vertical Refrigerator",
        "image": "./images/4-DOOR-VERTICAL-REFRIGERATOR-1.jpg",
        "description": "Four-door vertical commercial chiller / freezer with eco-friendly compressor, digital display and heavy-duty magnetic door gaskets."
      },
      {
        "slug": "bottle-chiller",
        "title": "Bottle Chiller",
        "image": "./images/BOTTLE-CHILLER-1.jpg",
        "description": "Under-counter refrigerated bottle cooler with top sliding lids and rapid pull-down cooling for beverages and beers."
      },
      {
        "slug": "bottle-chiller-1",
        "title": "Bottle Chiller 1",
        "image": "./images/BOTTLE-COOLER-1.jpg",
        "description": "Heavy duty bar bottle cooler box with high-density polyurethane insulation and stainless steel interior."
      }
    ]
  },
  {
    "id": "service-dinning-area",
    "slug": "service-dinning-area",
    "title": "Service & Dinning Area",
    "items": [
      {
        "slug": "display-counter",
        "title": "Display Counter",
        "image": "./images/DISPLAY-COUNTER.jpg",
        "description": "Heated or refrigerated curved glass display counter showcasing bakery items, snacks, or ready-to-serve dishes."
      },
      {
        "slug": "table-top-bain-marie",
        "title": "Table Top Bain Marie",
        "image": "./images/TABLE-TOP-BAIN-MARIE.jpg",
        "description": "Compact wet well bain marie counter with stainless steel gastronorm pans and lid covers for buffet service."
      }
    ]
  },
  {
    "id": "ventilation-system",
    "slug": "ventilation-system",
    "title": "Ventilation System",
    "items": [
      {
        "slug": "ventilation-system",
        "title": "Exhaust & Fresh Air System",
        "image": "./images/EXHAUST.jpg",
        "description": "Complete commercial kitchen exhaust hoods with stainless steel baffle grease filters, ducting, centrifugal exhaust blowers, and fresh air supply ducting."
      }
    ]
  }
];

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    "id": 1,
    "filename": "1.jpg",
    "src": "./images/1.jpg",
    "alt": "Gayatri Fabrication Works Client 1"
  },
  {
    "id": 2,
    "filename": "2.jpg",
    "src": "./images/2.jpg",
    "alt": "Gayatri Fabrication Works Client 2"
  },
  {
    "id": 3,
    "filename": "3.jpg",
    "src": "./images/3.jpg",
    "alt": "Gayatri Fabrication Works Client 3"
  },
  {
    "id": 9,
    "filename": "9.jpg",
    "src": "./images/9.jpg",
    "alt": "Gayatri Fabrication Works Client 9"
  },
  {
    "id": 10,
    "filename": "10.jpg",
    "src": "./images/10.jpg",
    "alt": "Gayatri Fabrication Works Client 10"
  },
  {
    "id": 11,
    "filename": "11.jpg",
    "src": "./images/11.jpg",
    "alt": "Gayatri Fabrication Works Client 11"
  },
  {
    "id": 14,
    "filename": "14.jpg",
    "src": "./images/14.jpg",
    "alt": "Gayatri Fabrication Works Client 14"
  },
  {
    "id": 15,
    "filename": "15.jpg",
    "src": "./images/15.jpg",
    "alt": "Gayatri Fabrication Works Client 15"
  },
  {
    "id": 16,
    "filename": "16.jpg",
    "src": "./images/16.jpg",
    "alt": "Gayatri Fabrication Works Client 16"
  },
  {
    "id": 17,
    "filename": "17.jpg",
    "src": "./images/17.jpg",
    "alt": "Gayatri Fabrication Works Client 17"
  },
  {
    "id": 18,
    "filename": "18.jpg",
    "src": "./images/18.jpg",
    "alt": "Gayatri Fabrication Works Client 18"
  },
  {
    "id": 19,
    "filename": "19.jpg",
    "src": "./images/19.jpg",
    "alt": "Gayatri Fabrication Works Client 19"
  },
  {
    "id": 20,
    "filename": "20.jpg",
    "src": "./images/20.jpg",
    "alt": "Gayatri Fabrication Works Client 20"
  },
  {
    "id": 22,
    "filename": "22.jpg",
    "src": "./images/22.jpg",
    "alt": "Gayatri Fabrication Works Client 22"
  },
  {
    "id": 23,
    "filename": "23.jpg",
    "src": "./images/23.jpg",
    "alt": "Gayatri Fabrication Works Client 23"
  },
  {
    "id": 24,
    "filename": "24.jpg",
    "src": "./images/24.jpg",
    "alt": "Gayatri Fabrication Works Client 24"
  },
  {
    "id": 25,
    "filename": "25.jpg",
    "src": "./images/25.jpg",
    "alt": "Gayatri Fabrication Works Client 25"
  },
  {
    "id": 26,
    "filename": "26.jpg",
    "src": "./images/26.jpg",
    "alt": "Gayatri Fabrication Works Client 26"
  },
  {
    "id": 27,
    "filename": "27.jpg",
    "src": "./images/27.jpg",
    "alt": "Gayatri Fabrication Works Client 27"
  },
  {
    "id": 29,
    "filename": "29.jpg",
    "src": "./images/29.jpg",
    "alt": "Gayatri Fabrication Works Client 29"
  },
  {
    "id": 30,
    "filename": "30.jpg",
    "src": "./images/30.jpg",
    "alt": "Gayatri Fabrication Works Client 30"
  },
  {
    "id": 31,
    "filename": "31.jpg",
    "src": "./images/31.jpg",
    "alt": "Gayatri Fabrication Works Client 31"
  },
  {
    "id": 33,
    "filename": "33.jpg",
    "src": "./images/33.jpg",
    "alt": "Gayatri Fabrication Works Client 33"
  },
  {
    "id": 34,
    "filename": "34.jpg",
    "src": "./images/34.jpg",
    "alt": "Gayatri Fabrication Works Client 34"
  },
  {
    "id": 35,
    "filename": "35.jpg",
    "src": "./images/35.jpg",
    "alt": "Gayatri Fabrication Works Client 35"
  },
  {
    "id": 36,
    "filename": "36.jpg",
    "src": "./images/36.jpg",
    "alt": "Gayatri Fabrication Works Client 36"
  },
  {
    "id": 37,
    "filename": "37.jpg",
    "src": "./images/37.jpg",
    "alt": "Gayatri Fabrication Works Client 37"
  },
  {
    "id": 38,
    "filename": "38.jpg",
    "src": "./images/38.jpg",
    "alt": "Gayatri Fabrication Works Client 38"
  },
  {
    "id": 39,
    "filename": "39.jpg",
    "src": "./images/39.jpg",
    "alt": "Gayatri Fabrication Works Client 39"
  },
  {
    "id": 40,
    "filename": "40.jpg",
    "src": "./images/40.jpg",
    "alt": "Gayatri Fabrication Works Client 40"
  },
  {
    "id": 41,
    "filename": "41.jpg",
    "src": "./images/41.jpg",
    "alt": "Gayatri Fabrication Works Client 41"
  },
  {
    "id": 42,
    "filename": "42.jpg",
    "src": "./images/42.jpg",
    "alt": "Gayatri Fabrication Works Client 42"
  },
  {
    "id": 43,
    "filename": "43.jpg",
    "src": "./images/43.jpg",
    "alt": "Gayatri Fabrication Works Client 43"
  },
  {
    "id": 44,
    "filename": "44.jpg",
    "src": "./images/44.jpg",
    "alt": "Gayatri Fabrication Works Client 44"
  }
];

export const SERVICES_GALLERY = [
  { name: "Commercial Refrigeration Unit", image: "./images/door-1.jpg" },
  { name: "Dough Kneader & Preparation", image: "./images/dough-1.jpg" },
  { name: "Waste Management Sink Units", image: "./images/gabbage-1.jpg" },
  { name: "Stainless Steel Bar Counter", image: "./images/BAR-COUNTER-1.jpg" },
  { name: "Integrated Bar Stations", image: "./images/BAR-COUNTER.jpg" },
  { name: "Refrigerated Bottle Chillers", image: "./images/BOTTLE-CHILLER.jpg" }
];
