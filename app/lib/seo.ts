import type { Metadata } from "next";

export const SITE_URL = "https://www.bpimoldsolutions.com";
export const SITE_NAME = "BPI Mold Solutions";

export const BUSINESS_NAME = "BPI Mold Solutions";
export const BUSINESS_PHONE_DISPLAY = "(917) 945-6451";
export const BUSINESS_PHONE_E164 = "+19179456451";
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
    title: "Mold Removal & Remediation NYC",
    description:
      "BPI Mold Solutions provides mold inspection, removal, remediation, air quality testing, emergency mold services, and moisture prevention across NYC and Long Island.",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/services",
    title: "Mold Inspection, Removal & Remediation Services NYC",
    description:
      "Explore mold inspection, mold removal, remediation, air quality testing, emergency response, commercial mold services, and water-damage prevention for NYC and Long Island properties.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/mold-inspection",
    title: "Professional Mold Inspection NYC",
    description:
      "Schedule professional mold inspection for homes, apartments, commercial properties, and moisture concerns across Brooklyn, Queens, Manhattan, Bronx, Staten Island, and Long Island.",
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    path: "/mold-removal",
    title: "Professional Mold Removal NYC",
    description:
      "Professional mold removal and remediation for visible mold, hidden moisture, and indoor air concerns across New York City and Long Island.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/air-quality-testing",
    title: "Indoor Air Quality Testing NYC",
    description:
      "Professional indoor air quality testing for mold spores, musty odors, moisture concerns, and remediation planning across NYC and Long Island.",
    changeFrequency: "monthly",
    priority: 0.86,
  },
  {
    path: "/emergency-mold-services",
    title: "24/7 Emergency Mold Removal NYC",
    description:
      "Fast emergency mold services for urgent mold growth, leaks, flooding, and moisture events in Brooklyn, Queens, Manhattan, Bronx, Staten Island, and Long Island.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/commercial-mold-services",
    title: "Commercial Mold Remediation NYC",
    description:
      "Commercial mold remediation, mold testing, moisture investigation, and indoor air quality support for offices, buildings, landlords, and property managers in NYC and Long Island.",
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    path: "/water-damage-prevention",
    title: "Water Damage Prevention & Moisture Control NYC",
    description:
      "Moisture control and water-damage prevention services that help reduce mold risk for homes, apartments, and commercial properties across NYC and Long Island.",
    changeFrequency: "monthly",
    priority: 0.84,
  },
  {
    path: "/about",
    title: "About BPI Mold Solutions",
    description:
      "Learn about BPI Mold Solutions, a Staten Island mold remediation company serving residential and commercial clients across New York City and Long Island.",
    changeFrequency: "yearly",
    priority: 0.68,
  },
  {
    path: "/guarantee",
    title: "Mold Remediation Guarantee",
    description:
      "Read about the BPI Mold Solutions remediation guarantee, coverage conditions, and customer support for treated mold remediation areas.",
    changeFrequency: "yearly",
    priority: 0.64,
  },
  {
    path: "/contact",
    title: "Free Mold Inspection Estimate NYC",
    description:
      "Contact BPI Mold Solutions for a free mold inspection estimate, mold remediation quote, emergency mold help, or indoor air quality testing across NYC and Long Island.",
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

export const locationPages = [
  {
    slug: "brooklyn",
    name: "Brooklyn",
    title: "Mold Removal & Remediation Brooklyn",
    description:
      "Mold inspection, removal, remediation, air quality testing, and moisture support for Brooklyn homes, apartments, brownstones, rental buildings, and commercial spaces.",
    intro:
      "Brooklyn properties range from older brownstones and basement apartments to newer multi-family buildings and commercial storefronts. BPI Mold Solutions helps Brooklyn property owners investigate moisture concerns, visible mold, musty odors, and indoor air quality issues with a clear remediation plan.",
    problems: [
      "Basement and cellar moisture after heavy rain",
      "Bathroom ventilation issues in apartments and multi-family homes",
      "Roof, window, or facade leaks in older buildings",
      "Mold concerns in rental units, offices, and retail spaces",
    ],
  },
  {
    slug: "queens",
    name: "Queens",
    title: "Mold Inspection & Remediation Queens",
    description:
      "Professional mold inspection, mold removal, air quality testing, emergency mold help, and moisture prevention for Queens residential and commercial properties.",
    intro:
      "Queens buildings often combine finished basements, attached homes, apartments, and busy commercial spaces. Our team supports Queens property owners with mold inspection, moisture source review, remediation recommendations, and air quality testing when conditions are unclear.",
    problems: [
      "Finished basement moisture and hidden wall dampness",
      "Leaks around kitchens, bathrooms, and plumbing lines",
      "Musty odors after water intrusion or humidity spikes",
      "Commercial tenant and property management mold concerns",
    ],
  },
  {
    slug: "manhattan",
    name: "Manhattan",
    title: "Mold Remediation Manhattan",
    description:
      "Mold remediation, inspection, indoor air quality testing, and emergency mold services for Manhattan apartments, offices, retail properties, and managed buildings.",
    intro:
      "Manhattan mold concerns often involve apartments, high-rise buildings, offices, retail spaces, and older building systems where moisture can travel behind walls or through shared infrastructure. BPI Mold Solutions provides clear inspection and remediation support for owners, tenants, and property managers.",
    problems: [
      "HVAC and ventilation-related indoor air concerns",
      "Pipe leaks and hidden moisture behind walls or ceilings",
      "Mold concerns in apartments, offices, and retail spaces",
      "Moisture problems that require coordination with building management",
    ],
  },
  {
    slug: "bronx",
    name: "Bronx",
    title: "Mold Removal & Inspection Bronx",
    description:
      "Mold removal, professional inspection, air quality testing, emergency mold response, and water-damage prevention for Bronx homes and commercial properties.",
    intro:
      "Bronx homes, apartment buildings, basements, and commercial spaces can develop mold concerns after leaks, humidity, drainage issues, or roof and window water intrusion. We help identify the moisture source and plan practical mold remediation steps.",
    problems: [
      "Basement moisture, damp walls, and recurring musty odors",
      "Roof, window, and plumbing leaks in residential buildings",
      "Mold concerns in apartments, rental units, and common areas",
      "Water damage that may affect drywall, flooring, or ceilings",
    ],
  },
  {
    slug: "staten-island",
    name: "Staten Island",
    title: "Mold Remediation Staten Island",
    description:
      "Staten Island mold inspection, removal, remediation, indoor air quality testing, and emergency mold support from BPI Mold Solutions.",
    intro:
      "BPI Mold Solutions is based in Staten Island and serves local homes, basements, apartments, offices, and commercial properties. We help identify moisture sources, evaluate mold concerns, and recommend remediation steps for conditions common to Staten Island properties.",
    problems: [
      "Basement and crawl space moisture",
      "Storm, roof, or window water intrusion",
      "Humidity and ventilation problems in homes and apartments",
      "Mold concerns after leaks or previous water damage",
    ],
  },
  {
    slug: "long-island",
    name: "Long Island",
    title: "Mold Inspection & Remediation Long Island",
    description:
      "Mold inspection, removal, remediation, air quality testing, emergency response, and moisture prevention for Long Island homes and commercial properties.",
    intro:
      "Long Island properties can face mold concerns from coastal humidity, basement moisture, roof leaks, plumbing failures, and storm-related water intrusion. BPI Mold Solutions helps homeowners and commercial property owners assess conditions and plan remediation.",
    problems: [
      "Basement moisture and damp finished spaces",
      "Storm-related water intrusion and roof leaks",
      "Humidity concerns in homes, offices, and storage areas",
      "Mold concerns in rental, residential, and commercial properties",
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
