/**
 * Sri Venkateswara Electrical & Rewinding Works
 * Business Configuration File
 *
 * Centralized configuration for all business details, contact information,
 * verified service offerings, workshop photo gallery, and branding assets.
 * 
 * Update this file to modify any business details without touching HTML or CSS.
 */

const BUSINESS_CONFIG = {
  // --- CORE BUSINESS IDENTITY ---
  name: "Sri Venkateswara Electrical & Rewinding Works",
  shortName: "Sri Venkateswara Electrical",
  teluguName: "శ్రీ వెంకటేశ్వర రీ-వైండింగ్ వర్క్స్",
  owner: "Kamesh",
  ownerFull: "V. Kamesh (వి. కామేష్)",
  category: "Electrical Appliance Services",
  categorySubtitle: "Electrical Appliance Servicing & Motor Rewinding Works",
  
  // --- VERIFIED CONTACT DETAILS ---
  phone: "+919866394687",
  phoneDisplay: "+91 9866394687",
  telLink: "tel:+919866394687",

  // Secondary phone number listed on the official shop visiting card
  secondaryPhone: "+918499909666",
  secondaryPhoneDisplay: "+91 8499909666",
  secondaryTelLink: "tel:+918499909666",

  // WhatsApp configuration
  whatsappNumber: "919866394687",
  whatsappDefaultMessage: "Hello Kamesh garu, I found your website for Sri Venkateswara Electrical and would like to inquire about your service.",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappDefaultMessage)}`;
  },

  // Verified Google Maps URL (preserved exactly as provided)
  mapsUrl: "https://maps.app.goo.gl/VTHYkzrRNHAbTTAW9",

  // Verified Workshop Address (from official visiting card)
  address: {
    doorNo: "D.No. 36-7-12",
    street: "Innespeta (ఇన్నాపేట)",
    landmark: "Opposite State Bank (స్టేట్ బ్యాంక్ ఎదురుగా)",
    city: "Rajahmundry (రాజమండ్రి)",
    state: "Andhra Pradesh",
    country: "India",
    formatted: "D.No. 36-7-12, Innespeta, Opposite State Bank, Rajahmundry, Andhra Pradesh",
    teluguFormatted: "డోర్ నెం. 36-7-12, ఇన్నాపేట, స్టేట్ బ్యాంక్ ఎదురుగా, రాజమండ్రి"
  },

  // --- BRAND MEDIA & ASSETS ---
  assets: {
    logoSvg: "public/images/logo.svg",
    logoPng: "public/images/logo.png",
    faviconSvg: "favicon.svg",
    ownerPhotoWebp: "public/images/owner.webp",
    ownerPhotoPng: "public/images/owner.png",
    ownerPhotoJpg: "public/images/owner.jpg",
    visitingCardWebp: "public/images/visiting-card-front.webp",
    visitingCardPng: "public/images/visiting-card-front.png",
    visitingCardJpg: "public/images/visiting-card-front.jpg"
  },

  // --- VERIFIED SERVICES ---
  // Extracted directly from visiting card and business details.
  // Edit or add new service entries here.
  services: [
    {
      id: "motor-rewinding",
      title: "Motor Rewinding Works",
      teluguTitle: "మోటార్లు రీ-వైండింగ్",
      description: "Complete copper rewinding and coil replacement for domestic water pump motors, ceiling fans, and workshop induction motors.",
      icon: "bolt",
      badge: "Workshop Specialty",
      tags: ["Motors", "Pumps", "Coil Winding", "Ceiling Fans"]
    },
    {
      id: "washing-machines",
      title: "Washing Machine Repair",
      teluguTitle: "వాషింగ్ మిషన్లు రిపేర్",
      description: "Diagnosis and repair of semi-automatic and fully automatic washing machines: motor replacement, spin issues, drainage, and drum repairs.",
      icon: "washing-machine",
      badge: "Major Appliance",
      tags: ["Semi-Automatic", "Top Load", "Front Load", "Motor Check"]
    },
    {
      id: "refrigerators",
      title: "Refrigerator / Fridge Repair",
      teluguTitle: "ఫ్రిజ్ లు సర్వీస్ & రిపేర్",
      description: "Cooling troubleshooting, compressor wiring inspection, defrost issues, thermostat replacement, and general electrical servicing.",
      icon: "fridge",
      badge: "Major Appliance",
      tags: ["Single Door", "Double Door", "Compressor", "Thermostat"]
    },
    {
      id: "air-conditioners",
      title: "Air Conditioner (AC) Service",
      teluguTitle: "ఎ.సి.లు సర్వీస్ & రిపేర్",
      description: "Electrical diagnostics, capacitor replacement, blower motor repairs, electrical circuit checks, and routine unit maintenance.",
      icon: "snowflake",
      badge: "Seasonal Service",
      tags: ["Split AC", "Window AC", "Blower Motor", "Electrical"]
    },
    {
      id: "water-heaters",
      title: "Water Heaters & Geysers",
      teluguTitle: "వాటర్ హీటర్లు రిపేర్",
      description: "Heating element replacements, thermostat checks, wiring inspections, power fault diagnostics, and tank leakage electrical checks.",
      icon: "geyser",
      badge: "Home Appliance",
      tags: ["Instant Geysers", "Storage Geysers", "Coil Replace"]
    },
    {
      id: "air-coolers-fans",
      title: "Air Coolers & Fans",
      teluguTitle: "ఎయిర్ కూలర్స్ & ఫ్యాన్లు",
      description: "Submersible pump repairs, motor servicing, speed regulator fixing, bearing replacement, and seasonal servicing for coolers.",
      icon: "fan",
      badge: "Home Appliance",
      tags: ["Air Coolers", "Table Fans", "Exhaust Fans", "Bearings"]
    },
    {
      id: "microwave-ovens",
      title: "Microwave Oven Repair",
      teluguTitle: "మైక్రోఓవెన్స్ రిపేర్",
      description: "Electrical fault finding, heating magnetron circuits, fuse replacements, door switch repairs, and turntable motor servicing.",
      icon: "microwave",
      badge: "Kitchen Appliance",
      tags: ["Solo", "Grill", "Convection", "Power Issues"]
    },
    {
      id: "wet-grinders",
      title: "Wet Grinders & Mixers",
      teluguTitle: "గ్రైండర్లు & ఇతర ఎలక్ట్రికల్",
      description: "Heavy-duty wet grinder motor repairs, belt replacements, capacitor changes, armature work, and small kitchen appliance servicing.",
      icon: "grinder",
      badge: "Kitchen Appliance",
      tags: ["Wet Grinders", "Mixer Grinders", "Capacitors"]
    },
    {
      id: "buy-sell-trade",
      title: "Appliance Buy, Sell & Repair",
      teluguTitle: "అమ్ముతాము, కొంటాము, రిపేర్ చేస్తాము",
      description: "We buy, sell, and refurbish used washing machines, refrigerators, and air conditioners in reliable working condition.",
      icon: "repeat",
      badge: "Trade & Exchange",
      tags: ["Washing Machines", "Fridges", "ACs", "Buy / Sell"]
    }
  ],

  // --- WORKSHOP PHOTO GALLERY ---
  // To update photos: place real images into `public/images/` and update `src` here.
  gallery: [
    {
      id: "work-01",
      src: "public/images/work-01.webp",
      fallback: "public/images/work-01.webp",
      title: "Motor Rewinding Station",
      teluguTitle: "మోటార్లు రీ-వైండింగ్ వర్క్",
      description: "Coil winding, insulating, and bench-testing electric motors.",
      badge: "Motor Rewinding",
      alt: "Sri Venkateswara Electrical motor rewinding workshop station in Rajahmundry"
    },
    {
      id: "work-02",
      src: "public/images/work-02.webp",
      fallback: "public/images/work-02.webp",
      title: "Major Appliance Repair Bench",
      teluguTitle: "వాషింగ్ మిషన్లు & ఫ్రిజ్ రిపేర్",
      description: "Diagnostic bench for washing machines, refrigerators, and compressors.",
      badge: "Appliance Repair",
      alt: "Major electrical appliance repair and diagnostics workbench"
    },
    {
      id: "work-03",
      src: "public/images/work-03.webp",
      fallback: "public/images/work-03.webp",
      title: "Electrical Inspection & Diagnostics",
      teluguTitle: "ఎలక్ట్రికల్ టెస్టింగ్ & ఇన్స్పెక్షన్",
      description: "Testing microwave ovens, geyser elements, and precision appliance circuits.",
      badge: "Testing & Safety",
      alt: "Appliance testing, multi-meter electrical check, and quality inspection"
    }
  ],

  // --- vCARD CONFIGURATION ---
  // Used to generate the downloadable .vcf contact file for customers.
  vcard: {
    filename: "Sri-Venkateswara-Electrical-Kamesh.vcf",
    formattedName: "Kamesh - Sri Venkateswara Electrical",
    organization: "Sri Venkateswara Electrical & Rewinding Works",
    title: "Proprietor & Master Technician",
    note: "Electrical Appliance Services & Motor Rewinding Works, Innespeta, Rajahmundry. Maps: https://maps.app.goo.gl/VTHYkzrRNHAbTTAW9"
  },

  // --- SEO & SOCIAL META ---
  meta: {
    title: "Sri Venkateswara Electrical & Rewinding Works | Kamesh | Rajahmundry",
    description: "Reliable electrical appliance servicing and motor rewinding works by Kamesh in Innespeta, Rajahmundry. Expert repair for motors, washing machines, fridges, ACs, geysers, and ovens. Call +91 9866394687.",
    canonicalUrl: "https://venkatesh-0007.github.io/SVER_works/",
    themeColor: "#14243A"
  }
};

// Expose globally for vanilla browser scripts and module bundlers
if (typeof window !== "undefined") {
  window.BUSINESS_CONFIG = BUSINESS_CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = BUSINESS_CONFIG;
}
