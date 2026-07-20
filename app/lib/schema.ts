import {
  absoluteUrl,
  BRAND_IMAGE,
  BUSINESS_ADDRESS,
  BUSINESS_NAME,
  BUSINESS_PHONE_E164,
  PRIMARY_AREAS,
  services,
  SITE_NAME,
  SITE_URL,
} from "./seo";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type FaqItem = {
  q: string;
  a: string;
};

const businessId = `${SITE_URL}/#localbusiness`;
const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;

function areaServed() {
  return PRIMARY_AREAS.map((name) => ({
    "@type": "City",
    name,
  }));
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: absoluteUrl(BRAND_IMAGE.url),
    telephone: BUSINESS_PHONE_E164,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS_ADDRESS,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@id": organizationId,
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": businessId,
    name: BUSINESS_NAME,
    url: SITE_URL,
    image: absoluteUrl(BRAND_IMAGE.url),
    logo: absoluteUrl(BRAND_IMAGE.url),
    telephone: BUSINESS_PHONE_E164,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      ...BUSINESS_ADDRESS,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "New York City",
      },
      ...areaServed(),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mold remediation services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: absoluteUrl(service.path),
          provider: {
            "@id": businessId,
          },
        },
      })),
    },
  };
}

export function serviceSchema({
  name,
  description,
  path,
  area,
}: {
  name: string;
  description: string;
  path: string;
  area?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    provider: {
      "@id": businessId,
    },
    areaServed: area
      ? {
          "@type": "Place",
          name: area,
        }
      : [
          {
            "@type": "AdministrativeArea",
            name: "New York City",
          },
          ...areaServed(),
        ],
    serviceType: name,
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
