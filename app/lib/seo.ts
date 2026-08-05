import type { Metadata } from "next";

export const SITE_URL = "https://www.bpimoldsolutions.com";
export const SITE_NAME = "BPI Mold Solutions";

export const BUSINESS_NAME = "BPI Mold Solutions";
export const BUSINESS_PHONE_DISPLAY = "(917) 945-6451";
export const BUSINESS_PHONE_E164 = "+19179456451";
export const BUSINESS_EMAIL = "contact@bpimoldsolutions.com";
export const BUSINESS_OPENING_HOURS = [
  {
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
];
export const BUSINESS_ADDRESS = {
  streetAddress: "1166 Bay Street",
  addressLocality: "Staten Island",
  addressRegion: "NY",
  postalCode: "10305",
  addressCountry: "US",
};

export const PRIMARY_AREAS = [
  "Brooklyn",
  "Queens",
  "Manhattan",
  "Bronx",
  "Staten Island",
  "Long Island",
];

export const SERVICE_AREAS = ["New York City", ...PRIMARY_AREAS];

export const BRAND_IMAGE = {
  url: "/images/logo.png",
  width: 1280,
  height: 1163,
  alt: "BPI Mold Solutions logo",
};

export type PublicRoute = {
  path: string;
  title: string;
  description: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

export const coreRoutes: PublicRoute[] = [
  {
    path: "/",
    title: "Mold Remediation NYC | BPI Mold Solutions",
    description:
      "BPI Mold Solutions provides mold remediation, mold removal, mold inspection, air quality testing, and emergency mold services in NYC and Long Island NY.",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/services",
    title: "Mold Remediation Services NYC",
    description:
      "Explore mold inspection, mold removal, remediation, air quality testing, emergency mold services, and moisture prevention across NYC and Long Island NY.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/mold-inspection",
    title: "Mold Inspection NYC | HPD Mold Concerns",
    description:
      "Schedule mold inspection in NYC for homes, apartments, commercial properties, HPD concerns, musty odors, water damage, hidden moisture, and mold risks.",
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    path: "/mold-removal",
    title: "Mold Removal NYC | Black Mold Remediation",
    description:
      "Professional mold removal in NYC for visible mold, black mold concerns, hidden moisture, water damage, apartments, homes, and commercial spaces today.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/air-quality-testing",
    title: "Air Quality Testing NYC | Mold Air Testing",
    description:
      "Indoor air quality testing in NYC for mold spores, musty odors, flood damage, moisture concerns, and remediation planning by BPI Mold Solutions experts.",
    changeFrequency: "monthly",
    priority: 0.86,
  },
  {
    path: "/emergency-mold-services",
    title: "24/7 Emergency Mold Removal NYC",
    description:
      "Fast emergency mold removal in NYC for active mold growth, leaks, flooding, water damage, musty odors, and urgent indoor air concerns anytime for homes.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/commercial-mold-services",
    title: "Commercial Mold Remediation NYC",
    description:
      "Commercial mold remediation in NYC for offices, buildings, landlords, property managers, retail spaces, moisture issues, and indoor air quality concerns.",
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    path: "/water-damage-prevention",
    title: "Water Damage Mold Prevention NYC",
    description:
      "Water damage mold prevention in NYC for leaks, humidity, basement moisture, flood cleanup planning, and long-term mold risk reduction services in homes.",
    changeFrequency: "monthly",
    priority: 0.84,
  },
  {
    path: "/about",
    title: "Licensed Mold Remediation Company NYC",
    description:
      "Learn about BPI Mold Solutions, a licensed mold remediation company serving homes and commercial properties across New York City and Long Island NY.",
    changeFrequency: "yearly",
    priority: 0.68,
  },
  {
    path: "/guarantee",
    title: "Mold Remediation Guarantee NYC",
    description:
      "Review the BPI Mold Solutions mold remediation guarantee, coverage conditions, support process, and service expectations for treated areas in New York.",
    changeFrequency: "yearly",
    priority: 0.64,
  },
  {
    path: "/contact",
    title: "Free Mold Inspection Estimate NYC",
    description:
      "Request a free mold inspection estimate in NYC from BPI Mold Solutions for mold remediation, removal, emergency service, and air quality testing help.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
];

export const services = [
  {
    name: "Mold Inspection",
    path: "/mold-inspection",
    description:
      "Professional mold inspection for visible growth, musty odors, water damage, and suspected hidden moisture.",
  },
  {
    name: "Mold Removal",
    path: "/mold-removal",
    description:
      "Mold removal and remediation services for homes, apartments, and commercial spaces.",
  },
  {
    name: "Air Quality Testing",
    path: "/air-quality-testing",
    description:
      "Indoor air quality testing for mold spores and moisture-related concerns.",
  },
  {
    name: "Emergency Mold Services",
    path: "/emergency-mold-services",
    description:
      "Fast response for urgent mold growth, leaks, flooding, and active moisture concerns.",
  },
  {
    name: "Commercial Mold Services",
    path: "/commercial-mold-services",
    description:
      "Commercial mold remediation support for offices, buildings, property managers, and business properties.",
  },
  {
    name: "Water Damage Prevention",
    path: "/water-damage-prevention",
    description:
      "Moisture control and water-damage prevention recommendations to reduce mold risk.",
  },
];

export type ServiceLandingPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  serviceName: string;
  area: string;
  intro: string;
  sections: {
    h2: string;
    body: string;
    points?: string[];
  }[];
  process: string[];
  faqs: {
    q: string;
    a: string;
  }[];
  related: {
    label: string;
    path: string;
  }[];
  image: typeof BRAND_IMAGE;
  keywords: string[];
};

export const serviceLandingPages: ServiceLandingPage[] = [
  {
    slug: "mold-inspection-staten-island",
    title: "Mold Inspection Staten Island",
    description:
      "Schedule mold inspection in Staten Island for homes, apartments, basements, musty odors, leaks, visible mold, and moisture concerns.",
    h1: "Mold Inspection in Staten Island",
    eyebrow: "Staten Island Mold Inspection",
    serviceName: "Mold Inspection",
    area: "Staten Island",
    intro:
      "BPI Mold Solutions is based in Staten Island and helps local homeowners, landlords, property managers, and businesses evaluate mold and moisture concerns before they become larger remediation problems.",
    sections: [
      {
        h2: "Inspection for Staten Island Homes and Buildings",
        body:
          "A mold inspection can help connect visible staining, musty odors, basement dampness, roof leaks, plumbing problems, or prior water damage to the next practical step. We focus on what can be observed at the property and explain whether removal, testing, prevention, or additional trade repair may be needed.",
        points: [
          "Basements, crawl spaces, attics, bathrooms, and utility areas",
          "Apartments, rentals, offices, retail spaces, and managed properties",
          "Moisture patterns that may allow mold to return",
        ],
      },
      {
        h2: "When to Request a Local Mold Inspection",
        body:
          "Schedule an inspection when you notice musty air, recurring dampness, visible growth, peeling paint, staining near windows or ceilings, or mold concerns after a leak. Early review helps you avoid guessing and gives you a clearer plan.",
      },
    ],
    process: [
      "Review the visible mold, odor, or moisture concern",
      "Check likely moisture sources and affected building materials",
      "Discuss findings and practical next steps",
      "Provide a clear quote if remediation or follow-up service is needed",
    ],
    faqs: [
      {
        q: "Do you inspect basements in Staten Island homes?",
        a: "Yes. Basements, crawl spaces, and lower-level rooms are common inspection areas because moisture and poor ventilation can create mold conditions.",
      },
      {
        q: "Can mold inspection include testing?",
        a: "Testing may be recommended when air quality concerns, hidden growth, or documentation needs make sampling useful for the situation.",
      },
    ],
    related: [
      { label: "Staten Island mold services", path: "/locations/staten-island" },
      { label: "Mold testing in Staten Island", path: "/services/mold-testing-staten-island" },
      { label: "Mold removal in Staten Island", path: "/services/mold-removal-staten-island" },
    ],
    image: {
      url: "/images/hero-2.png",
      width: 1536,
      height: 1024,
      alt: "Mold inspection and moisture assessment in a Staten Island property",
    },
    keywords: [
      "mold inspection Staten Island",
      "mold inspectors Staten Island",
      "mold experts Staten Island",
      "Staten Island mold inspection",
    ],
  },
  {
    slug: "mold-testing-staten-island",
    title: "Mold Testing Staten Island",
    description:
      "Mold testing in Staten Island for musty odors, indoor air quality concerns, suspected hidden mold, leaks, and remediation planning.",
    h1: "Mold Testing in Staten Island",
    eyebrow: "Staten Island Mold Testing",
    serviceName: "Mold Testing",
    area: "Staten Island",
    intro:
      "Mold testing can help answer specific questions about indoor air quality, suspected hidden mold, or post-remediation concerns when inspection alone does not provide enough clarity.",
    sections: [
      {
        h2: "Testing for Air Quality and Hidden Mold Questions",
        body:
          "BPI Mold Solutions pairs testing recommendations with property inspection context. That helps sampling support a real decision instead of becoming an isolated report with no practical next step.",
        points: [
          "Musty odors without obvious visible growth",
          "Concerns after leaks, flooding, or prior remediation",
          "Homes, apartments, offices, and commercial properties",
        ],
      },
      {
        h2: "Testing Should Support a Clear Plan",
        body:
          "A useful mold testing conversation explains what the test is meant to answer, what its limits are, and how the result may affect inspection, removal, remediation, or prevention recommendations.",
      },
    ],
    process: [
      "Review the reason for testing and property history",
      "Inspect likely moisture and mold source areas",
      "Recommend sampling only when it supports the decision",
      "Explain next steps for remediation, prevention, or monitoring",
    ],
    faqs: [
      {
        q: "Is mold testing always required?",
        a: "No. Visible mold and moisture problems may need remediation planning without testing. Testing is most useful when it answers a specific air quality or hidden mold question.",
      },
      {
        q: "Can testing help after mold remediation?",
        a: "In some situations, testing may help evaluate indoor air concerns after remediation, especially when odor, water damage history, or documentation needs remain.",
      },
    ],
    related: [
      { label: "Indoor air quality testing", path: "/air-quality-testing" },
      { label: "Mold inspection in Staten Island", path: "/services/mold-inspection-staten-island" },
      { label: "Staten Island mold remediation", path: "/locations/staten-island" },
    ],
    image: {
      url: "/images/airquality.png",
      width: 1408,
      height: 768,
      alt: "Mold testing and indoor air quality equipment in Staten Island",
    },
    keywords: [
      "mold testing Staten Island",
      "mold air testing Staten Island",
      "air quality testing Staten Island",
    ],
  },
  {
    slug: "mold-removal-staten-island",
    title: "Mold Removal Staten Island",
    description:
      "Professional mold removal in Staten Island for visible mold, basements, apartments, offices, water damage, and moisture-related growth.",
    h1: "Mold Removal in Staten Island",
    eyebrow: "Staten Island Mold Removal",
    serviceName: "Mold Removal",
    area: "Staten Island",
    intro:
      "BPI Mold Solutions provides professional mold removal and remediation support for Staten Island homes, apartments, basements, offices, retail spaces, and managed buildings.",
    sections: [
      {
        h2: "Removal That Addresses the Mold and the Moisture",
        body:
          "Mold removal is most effective when the source conditions are understood. We review affected materials, moisture patterns, and containment needs so the work is matched to the property.",
        points: [
          "Visible growth on walls, ceilings, flooring, and stored materials",
          "Basement, bathroom, attic, and utility room mold concerns",
          "Residential and commercial remediation planning",
        ],
      },
      {
        h2: "Local Conditions That Can Drive Mold Growth",
        body:
          "Staten Island properties can face basement moisture, storm water intrusion, roof leaks, plumbing failures, humidity, and poor ventilation. We use the inspection findings to recommend a practical removal plan.",
      },
    ],
    process: [
      "Inspect the affected area and moisture source",
      "Plan containment and removal needs",
      "Remove or remediate affected materials as appropriate",
      "Review prevention steps to reduce the chance of return",
    ],
    faqs: [
      {
        q: "Do you provide mold removal for Staten Island basements?",
        a: "Yes. Basement moisture and lower-level mold concerns are common reasons Staten Island property owners contact BPI Mold Solutions.",
      },
      {
        q: "Can you help commercial spaces on Staten Island?",
        a: "Yes. We support offices, retail spaces, rental properties, and managed buildings with mold inspection, removal, remediation, and prevention planning.",
      },
    ],
    related: [
      { label: "Mold removal service overview", path: "/mold-removal" },
      { label: "Emergency mold services", path: "/emergency-mold-services" },
      { label: "Commercial mold services", path: "/commercial-mold-services" },
    ],
    image: {
      url: "/images/mold-removal-service.png",
      width: 1408,
      height: 768,
      alt: "Professional mold removal and remediation equipment in Staten Island",
    },
    keywords: [
      "mold removal Staten Island",
      "mold removal companies Staten Island",
      "Staten Island mold remediation",
    ],
  },
  {
    slug: "emergency-mold-removal-nyc",
    title: "Emergency Mold Removal NYC",
    description:
      "Emergency mold removal in NYC for urgent mold growth, water damage, leaks, flooding, musty odors, and fast remediation planning.",
    h1: "Emergency Mold Removal in NYC",
    eyebrow: "Urgent NYC Mold Help",
    serviceName: "Emergency Mold Removal",
    area: "New York City",
    intro:
      "When mold appears after a leak, flood, humidity spike, or active moisture event, BPI Mold Solutions helps NYC property owners move quickly from concern to a practical response plan.",
    sections: [
      {
        h2: "Fast Response for Mold and Moisture Problems",
        body:
          "Emergency mold removal starts with understanding the water source, affected materials, and whether containment or immediate remediation planning is needed. We help homes, apartments, offices, and managed properties respond without relying on guesswork.",
        points: [
          "Leaks, flooding, wet drywall, damp ceilings, and musty odors",
          "Urgent concerns in apartments, rentals, offices, and stores",
          "Coordination around inspection, containment, and remediation scope",
        ],
      },
      {
        h2: "NYC Properties Need Clear Next Steps",
        body:
          "In dense buildings, moisture can travel behind shared walls, ceilings, and building systems. A clear assessment helps determine whether mold removal, air quality testing, prevention, or another repair trade should be part of the response.",
      },
    ],
    process: [
      "Review the urgent moisture or mold concern",
      "Assess visible growth, water damage, and affected materials",
      "Recommend containment, removal, testing, or prevention steps",
      "Provide a clear quote before remediation begins",
    ],
    faqs: [
      {
        q: "When is mold removal an emergency?",
        a: "It may be urgent when mold appears after water damage, moisture remains active, indoor air is affected by musty odors, or the concern involves occupied living or work areas.",
      },
      {
        q: "Do active leaks need another contractor too?",
        a: "Yes. BPI Mold Solutions can assess mold and moisture conditions, but active plumbing, roofing, or structural leaks should be repaired by the appropriate trade.",
      },
    ],
    related: [
      { label: "Emergency mold services", path: "/emergency-mold-services" },
      { label: "NYC mold services", path: "/locations/nyc" },
      { label: "Indoor air quality testing", path: "/air-quality-testing" },
    ],
    image: {
      url: "/images/emergencymold.png",
      width: 1408,
      height: 768,
      alt: "Emergency mold removal response equipment for NYC properties",
    },
    keywords: [
      "emergency mold removal NYC",
      "24/7 emergency mold removal NYC",
      "urgent mold remediation NYC",
    ],
  },
  {
    slug: "commercial-mold-remediation-nyc",
    title: "Commercial Mold Remediation NYC",
    description:
      "Commercial mold remediation in NYC for offices, apartments, retail spaces, landlords, property managers, leaks, and air quality concerns.",
    h1: "Commercial Mold Remediation in NYC",
    eyebrow: "NYC Commercial Mold Remediation",
    serviceName: "Commercial Mold Remediation",
    area: "New York City",
    intro:
      "BPI Mold Solutions supports NYC commercial properties with mold inspection, remediation planning, moisture review, and air quality testing for building owners, landlords, and property managers.",
    sections: [
      {
        h2: "Mold Help for Offices, Rentals, and Managed Buildings",
        body:
          "Commercial mold concerns often involve access, scheduling, tenant communication, containment, and documentation. We focus on the practical property conditions so the remediation scope is understandable before work begins.",
        points: [
          "Office buildings, apartment buildings, retail stores, and warehouses",
          "Roof leaks, HVAC moisture, plumbing failures, and humidity",
          "Indoor air quality and tenant or employee concerns",
        ],
      },
      {
        h2: "Commercial Mold Remediation Without Misleading Claims",
        body:
          "Every commercial property is different. We avoid one-size-fits-all promises and base recommendations on inspection findings, affected materials, moisture sources, and the operational needs of the space.",
      },
    ],
    process: [
      "Review the commercial mold concern and property access needs",
      "Inspect visible growth, moisture sources, and affected materials",
      "Outline containment, removal, testing, or prevention recommendations",
      "Provide a clear quote and remediation scope before work begins",
    ],
    faqs: [
      {
        q: "Do you work with NYC property managers?",
        a: "Yes. BPI Mold Solutions helps property managers, landlords, owners, and commercial tenants assess mold and moisture concerns.",
      },
      {
        q: "Can you help with emergency commercial mold concerns?",
        a: "Yes. We provide urgent mold and moisture response support for commercial properties across New York City and Long Island.",
      },
    ],
    related: [
      { label: "Commercial mold services", path: "/commercial-mold-services" },
      { label: "Emergency mold removal in NYC", path: "/services/emergency-mold-removal-nyc" },
      { label: "NYC service area", path: "/locations/nyc" },
    ],
    image: {
      url: "/images/commercialmold.png",
      width: 1408,
      height: 768,
      alt: "Commercial mold remediation for NYC offices and managed buildings",
    },
    keywords: [
      "commercial mold remediation NYC",
      "commercial mold remediation",
      "office mold remediation NYC",
    ],
  },
  {
    slug: "commercial-mold-remediation-long-island",
    title: "Commercial Mold Remediation Long Island",
    description:
      "Commercial mold remediation on Long Island for offices, retail spaces, managed buildings, leaks, humidity, and indoor air quality concerns.",
    h1: "Commercial Mold Remediation on Long Island",
    eyebrow: "Long Island Commercial Mold Remediation",
    serviceName: "Commercial Mold Remediation",
    area: "Long Island",
    intro:
      "BPI Mold Solutions helps Long Island commercial property owners, managers, landlords, and businesses assess mold concerns tied to leaks, humidity, storm intrusion, and indoor air quality issues.",
    sections: [
      {
        h2: "Commercial Mold Support for Long Island Properties",
        body:
          "Long Island buildings may face coastal humidity, basement moisture, roof leaks, plumbing issues, and storm-related water intrusion. We help identify the conditions behind the mold concern and recommend a clear remediation path.",
        points: [
          "Offices, retail properties, rental buildings, and commercial spaces",
          "Moisture source review and remediation planning",
          "Air quality testing when sampling supports the decision",
        ],
      },
      {
        h2: "Planning Around Business Operations",
        body:
          "Commercial remediation needs a practical scope. We consider access, affected materials, containment needs, scheduling, and prevention recommendations before work begins.",
      },
    ],
    process: [
      "Assess the commercial property concern",
      "Review moisture sources and affected areas",
      "Recommend remediation, testing, or prevention steps",
      "Provide a clear quote for the approved scope",
    ],
    faqs: [
      {
        q: "Do you serve commercial properties on Long Island?",
        a: "Yes. BPI Mold Solutions serves Long Island commercial properties, including offices, retail spaces, rental buildings, and managed properties.",
      },
      {
        q: "Can humidity cause mold in commercial buildings?",
        a: "Yes. High humidity, poor ventilation, leaks, and damp materials can create conditions that allow mold growth.",
      },
    ],
    related: [
      { label: "Long Island mold services", path: "/locations/long-island" },
      { label: "Commercial mold services", path: "/commercial-mold-services" },
      { label: "Water damage prevention", path: "/water-damage-prevention" },
    ],
    image: {
      url: "/images/commercialmold.png",
      width: 1408,
      height: 768,
      alt: "Commercial mold remediation equipment for Long Island properties",
    },
    keywords: [
      "commercial mold remediation Long Island",
      "Long Island commercial mold remediation",
      "commercial mold services Long Island",
    ],
  },
  {
    slug: "home-mold-prevention",
    title: "Home Mold Prevention",
    description:
      "Home mold prevention guidance for leaks, humidity, basement moisture, ventilation issues, water damage, and long-term mold risk reduction.",
    h1: "Home Mold Prevention Services",
    eyebrow: "Mold Prevention",
    serviceName: "Home Mold Prevention",
    area: "New York City and Long Island",
    intro:
      "Home mold prevention starts with moisture control. BPI Mold Solutions helps homeowners identify leaks, humidity problems, ventilation issues, and water-damage risks that can allow mold to grow or return.",
    sections: [
      {
        h2: "Prevent Mold by Controlling Moisture",
        body:
          "Mold prevention is not about fear or broad promises. It is about finding damp materials, recurring leaks, condensation, poor ventilation, and humidity patterns early enough to reduce risk.",
        points: [
          "Basements, bathrooms, kitchens, attics, and crawl spaces",
          "Water damage after leaks, storms, or flooding",
          "Prevention recommendations after mold remediation",
        ],
      },
      {
        h2: "Staten Island, NYC, and Long Island Homes",
        body:
          "Local homes can face basement dampness, coastal humidity, older building materials, roof leaks, and plumbing failures. Prevention work should be matched to the actual property conditions.",
      },
    ],
    process: [
      "Review past leaks, odors, humidity, and visible warning signs",
      "Inspect moisture-prone rooms and materials",
      "Recommend ventilation, drying, repair, or monitoring steps",
      "Connect prevention with remediation or air testing when needed",
    ],
    faqs: [
      {
        q: "What is the best way to prevent mold at home?",
        a: "The most important step is controlling moisture by repairing leaks, reducing humidity, improving ventilation, and drying wet materials quickly.",
      },
      {
        q: "Can an air purifier prevent mold?",
        a: "An air purifier may help with airborne particles, but it does not fix the moisture source that allows mold to grow. Moisture control and inspection are still important.",
      },
    ],
    related: [
      { label: "Water damage prevention", path: "/water-damage-prevention" },
      { label: "Staten Island mold services", path: "/locations/staten-island" },
      { label: "Indoor air quality testing", path: "/services/indoor-air-quality-testing" },
    ],
    image: {
      url: "/images/watertesting.png",
      width: 1408,
      height: 768,
      alt: "Home mold prevention and moisture testing for water damage risks",
    },
    keywords: [
      "home mold prevention",
      "home mold prevention Staten Island",
      "air purifier for mold Staten Island",
      "water damage mold prevention",
    ],
  },
  {
    slug: "indoor-air-quality-testing",
    title: "Indoor Air Quality Testing",
    description:
      "Indoor air quality testing for mold spores, musty odors, leaks, water damage, hidden mold concerns, and remediation planning in NYC and Long Island.",
    h1: "Indoor Air Quality Testing for Mold",
    eyebrow: "Air Quality Testing",
    serviceName: "Indoor Air Quality Testing",
    area: "New York City and Long Island",
    intro:
      "BPI Mold Solutions provides indoor air quality testing for mold-related concerns when property owners need help understanding musty odors, suspected hidden growth, or conditions after water damage.",
    sections: [
      {
        h2: "Testing for Mold-Related Air Concerns",
        body:
          "Air quality testing can support mold inspection and remediation planning when the concern is not fully visible. We connect testing to the property context so the result can guide a useful next step.",
        points: [
          "Musty odors, prior leaks, and suspected hidden mold",
          "Homes, apartments, offices, rentals, and commercial spaces",
          "Testing as part of inspection or post-remediation review",
        ],
      },
      {
        h2: "Air Testing Is One Part of the Picture",
        body:
          "Mold spores exist naturally indoors and outdoors. The key question is whether the property conditions suggest an indoor source or moisture-related problem that should be addressed.",
      },
    ],
    process: [
      "Clarify the air quality concern and property history",
      "Inspect moisture-prone areas and visible warning signs",
      "Recommend testing when it can answer a practical question",
      "Discuss remediation, prevention, or monitoring options",
    ],
    faqs: [
      {
        q: "When should I consider indoor air quality testing?",
        a: "Testing may be useful when musty odors, water damage, hidden mold concerns, or post-remediation questions remain after an inspection.",
      },
      {
        q: "Does air quality testing replace mold inspection?",
        a: "No. Testing is most useful when paired with inspection context, because moisture sources and affected materials still need to be understood.",
      },
    ],
    related: [
      { label: "Air quality testing service overview", path: "/air-quality-testing" },
      { label: "Mold inspection", path: "/mold-inspection" },
      { label: "Home mold prevention", path: "/services/home-mold-prevention" },
    ],
    image: {
      url: "/images/airquality.png",
      width: 1408,
      height: 768,
      alt: "Indoor air quality testing for mold spores in a New York property",
    },
    keywords: [
      "indoor air quality testing",
      "mold air quality testing",
      "air quality testing NYC",
      "air quality testing Long Island",
    ],
  },
];

export const locationPages = [
  {
    slug: "nyc",
    name: "NYC",
    title: "Mold Remediation NYC",
    description:
      "Mold remediation in NYC for apartments, homes, offices, retail spaces, rental buildings, water damage, emergency mold, and air quality concerns.",
    intro:
      "BPI Mold Solutions serves New York City properties with mold inspection, mold removal, remediation planning, emergency mold services, commercial remediation, indoor air quality testing, and moisture prevention. We help owners, tenants, landlords, and property managers understand the mold concern and choose a practical next step.",
    problems: [
      "Apartment leaks, bathroom moisture, and hidden wall dampness",
      "Office, retail, and managed building mold concerns",
      "Musty odors after water damage or humidity spikes",
      "Moisture issues that require coordination with building management",
    ],
    faqs: [
      {
        q: "Does BPI Mold Solutions serve all five NYC boroughs?",
        a: "Yes. BPI Mold Solutions serves Staten Island, Brooklyn, Queens, Manhattan, and the Bronx, along with Long Island.",
      },
      {
        q: "Can you help with emergency mold removal in NYC?",
        a: "Yes. We help NYC property owners respond to urgent mold and moisture concerns after leaks, flooding, water damage, or sudden visible growth.",
      },
    ],
  },
  {
    slug: "brooklyn",
    name: "Brooklyn",
    title: "Mold Remediation Brooklyn NY",
    description:
      "Mold remediation in Brooklyn NY for brownstones, apartments, rentals, basements, water damage, black mold concerns, and commercial properties.",
    intro:
      "Brooklyn properties range from older brownstones and basement apartments to newer multi-family buildings and commercial storefronts. BPI Mold Solutions helps Brooklyn property owners investigate moisture concerns, visible mold, musty odors, and indoor air quality issues with a clear remediation plan.",
    problems: [
      "Basement and cellar moisture after heavy rain",
      "Bathroom ventilation issues in apartments and multi-family homes",
      "Roof, window, or facade leaks in older buildings",
      "Mold concerns in rental units, offices, and retail spaces",
    ],
    faqs: [
      {
        q: "How much does mold remediation cost in Brooklyn?",
        a: "Cost depends on the affected area, moisture source, access, containment needs, and whether materials must be removed. BPI Mold Solutions provides an on-site inspection and a clear quote before work begins.",
      },
      {
        q: "Can you help with mold in a Brooklyn apartment or brownstone?",
        a: "Yes. We inspect visible mold, musty odors, moisture problems, and suspected hidden growth in apartments, brownstones, basements, rental units, and commercial spaces.",
      },
    ],
  },
  {
    slug: "queens",
    name: "Queens",
    title: "Mold Inspection & Removal Queens NY",
    description:
      "Mold inspection and removal in Queens NY for homes, finished basements, apartments, commercial spaces, water damage, and air quality concerns.",
    h1: "Mold Inspection and Removal in Queens, NY",
    intro:
      "Queens has a wide mix of attached homes, multi-family buildings, finished basements, apartments, and street-level commercial spaces. BPI Mold Solutions helps property owners trace mold concerns back to plumbing leaks, basement dampness, roof or window intrusion, condensation, and ventilation problems before recommending inspection, removal, testing, or prevention work.",
    areasServed: [
      "Astoria and Long Island City",
      "Flushing and Bayside",
      "Jamaica and Richmond Hill",
      "Forest Hills and Rego Park",
      "Jackson Heights and Elmhurst",
      "Howard Beach and the Rockaways",
    ],
    serviceHighlights: [
      {
        title: "Queens Mold Inspection",
        body: "Inspection is useful for musty odors, recurring stains, finished-basement dampness, tenant concerns, and suspected mold behind walls, ceilings, cabinets, or flooring.",
        path: "/mold-inspection",
      },
      {
        title: "Mold Removal in Queens",
        body: "Remediation planning considers the affected material, access, containment needs, and the moisture source so the scope fits the actual property conditions.",
        path: "/mold-removal",
      },
      {
        title: "Air Quality and Moisture Concerns",
        body: "Testing may help when odors persist without visible growth, while moisture review helps connect indoor conditions to leaks, humidity, or ventilation.",
        path: "/air-quality-testing",
      },
    ],
    problems: [
      "Finished basement moisture and hidden wall dampness",
      "Leaks around kitchens, bathrooms, and plumbing lines",
      "Musty odors after water intrusion or humidity spikes",
      "Commercial tenant and property management mold concerns",
    ],
    faqs: [
      {
        q: "When should I schedule mold inspection in Queens?",
        a: "Schedule an inspection when you notice musty odors, staining, prior leaks, damp finished basements, tenant complaints, or possible hidden moisture behind walls, ceilings, or flooring.",
      },
      {
        q: "Do Queens mold inspections include remediation recommendations?",
        a: "Yes. Inspection findings can help identify moisture sources, affected materials, and the next practical steps for mold remediation, removal, air testing, or prevention.",
      },
    ],
  },
  {
    slug: "manhattan",
    name: "Manhattan",
    title: "Mold Remediation Manhattan NY",
    description:
      "Mold remediation in Manhattan NY for apartments, offices, retail spaces, managed buildings, water leaks, HVAC moisture, and air quality concerns.",
    intro:
      "Manhattan mold concerns often involve apartments, high-rise buildings, offices, retail spaces, and older building systems where moisture can travel behind walls or through shared infrastructure. BPI Mold Solutions provides clear inspection and remediation support for owners, tenants, and property managers.",
    problems: [
      "HVAC and ventilation-related indoor air concerns",
      "Pipe leaks and hidden moisture behind walls or ceilings",
      "Mold concerns in apartments, offices, and retail spaces",
      "Moisture problems that require coordination with building management",
    ],
    faqs: [
      {
        q: "Can you handle mold remediation in Manhattan buildings?",
        a: "Yes. We help apartments, offices, retail properties, and managed buildings assess mold and moisture concerns and plan remediation around the property conditions.",
      },
      {
        q: "What causes mold in Manhattan apartments and offices?",
        a: "Common causes include plumbing leaks, roof or facade water intrusion, HVAC condensation, poor ventilation, and moisture moving behind shared walls or ceilings.",
      },
    ],
  },
  {
    slug: "bronx",
    name: "Bronx",
    title: "Mold Removal Bronx NY",
    description:
      "Mold removal in Bronx NY for homes, apartments, basements, rental buildings, commercial properties, water damage, moisture, and black mold concerns.",
    intro:
      "Bronx homes, apartment buildings, basements, and commercial spaces can develop mold concerns after leaks, humidity, drainage issues, or roof and window water intrusion. We help identify the moisture source and plan practical mold remediation steps.",
    problems: [
      "Basement moisture, damp walls, and recurring musty odors",
      "Roof, window, and plumbing leaks in residential buildings",
      "Mold concerns in apartments, rental units, and common areas",
      "Water damage that may affect drywall, flooring, or ceilings",
    ],
    faqs: [
      {
        q: "How long does mold removal take in Bronx properties?",
        a: "Timing depends on the size of the affected area, moisture source, materials involved, and containment needs. Smaller projects may move faster, while larger or hidden mold concerns need more planning.",
      },
      {
        q: "Do you help with black mold removal in the Bronx?",
        a: "Yes. We can inspect visible dark mold growth, review moisture conditions, and recommend professional mold removal or remediation steps based on what is found on site.",
      },
    ],
  },
  {
    slug: "staten-island",
    name: "Staten Island",
    title: "Mold Remediation Staten Island NY",
    description:
      "Mold remediation in Staten Island NY from BPI Mold Solutions for homes, basements, apartments, offices, water damage, and moisture concerns.",
    intro:
      "BPI Mold Solutions is based in Staten Island and serves local homes, basements, apartments, offices, and commercial properties. We help identify moisture sources, evaluate mold concerns, and recommend remediation steps for conditions common to Staten Island properties.",
    problems: [
      "Basement and crawl space moisture",
      "Storm, roof, or window water intrusion",
      "Humidity and ventilation problems in homes and apartments",
      "Mold concerns after leaks or previous water damage",
    ],
    faqs: [
      {
        q: "Is BPI Mold Solutions based in Staten Island?",
        a: "Yes. BPI Mold Solutions is based in Staten Island and serves local homes, apartments, basements, offices, and commercial properties.",
      },
      {
        q: "Can water damage lead to mold in Staten Island homes?",
        a: "Yes. Storm water, roof leaks, plumbing leaks, basement moisture, and humidity can create conditions where mold may grow if the source is not addressed.",
      },
    ],
  },
  {
    slug: "long-island",
    name: "Long Island",
    title: "Mold Remediation Long Island NY",
    description:
      "Mold remediation in Long Island NY for homes and commercial properties affected by basement moisture, coastal humidity, leaks, storms, and water damage.",
    h1: "Mold Remediation in Long Island, NY",
    intro:
      "Long Island homes and commercial properties can experience moisture from high water tables, coastal weather, humid summers, basement seepage, roof leaks, plumbing failures, and storm-related intrusion. BPI Mold Solutions helps owners distinguish an isolated surface concern from damp materials or hidden growth that may require inspection and a defined remediation scope.",
    areasServed: [
      "Nassau County communities",
      "Western Suffolk County communities",
      "North Shore properties",
      "South Shore properties",
      "Long Island homes and rental properties",
      "Offices, retail, and commercial buildings",
    ],
    serviceHighlights: [
      {
        title: "Mold Remediation in Long Island",
        body: "Remediation can include containment, removal or cleaning of affected materials, and recommendations for the leak, humidity, or water-intrusion source.",
        path: "/mold-removal",
      },
      {
        title: "Basement and Storm-Water Inspection",
        body: "Inspection helps evaluate damp lower levels, finished basements, roof or foundation intrusion, and materials affected after storms or plumbing failures.",
        path: "/mold-inspection",
      },
      {
        title: "Commercial Mold Services",
        body: "Commercial assessment considers occupied areas, storage spaces, scheduling, access, moisture history, and the need for coordinated remediation planning.",
        path: "/services/commercial-mold-remediation-long-island",
      },
    ],
    problems: [
      "Basement moisture and damp finished spaces",
      "Storm-related water intrusion and roof leaks",
      "Humidity concerns in homes, offices, and storage areas",
      "Mold concerns in rental, residential, and commercial properties",
    ],
    faqs: [
      {
        q: "What moisture problems commonly lead to mold on Long Island?",
        a: "Basement seepage, humid conditions, roof and plumbing leaks, storm water, and materials that remained damp after a water event can all create conditions for mold growth.",
      },
      {
        q: "Does insurance cover mold remediation on Long Island?",
        a: "Coverage depends on your insurance policy and the cause of the moisture event. Ask your carrier directly, and use the inspection findings and quote to support the conversation.",
      },
      {
        q: "Do you provide air quality testing after flood damage?",
        a: "Yes. Air quality testing can help evaluate indoor air concerns after flood damage, leaks, or remediation when mold spores or musty odors are a concern.",
      },
    ],
  },
] as const;

export type LocationSlug = (typeof locationPages)[number]["slug"];

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function createMetadata({
  title,
  description,
  path,
  keywords = [],
  image = BRAND_IMAGE,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: typeof BRAND_IMAGE;
  absoluteTitle?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image.url);
  const socialTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageUrl],
    },
  };
}
