import {
  absoluteUrl,
  BRAND_IMAGE,
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_NAME,
  BUSINESS_OPENING_HOURS,
  BUSINESS_PHONE_E164,
  PRIMARY_AREAS,
  SERVICE_AREAS,
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

type ArticleSchemaInput = {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  author: string;
  image?: string;
};

const businessId = `${SITE_URL}/#localbusiness`;
const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
const businessDescription =
  "BPI Mold Solutions provides mold inspection, mold removal, mold remediation, air quality testing, emergency mold services, commercial mold services, and water-damage prevention across New York City and Long Island.";

function areaServed() {
  return PRIMARY_AREAS.map((name) => ({
    "@type": "City",
    name,
  }));
}

function contactPoint() {
  return {
    "@type": "ContactPoint",
    telephone: BUSINESS_PHONE_E164,
    email: BUSINESS_EMAIL,
    contactType: "customer service",
    areaServed: SERVICE_AREAS,
    availableLanguage: "en",
  };
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
    email: BUSINESS_EMAIL,
    contactPoint: contactPoint(),
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
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": businessId,
    name: BUSINESS_NAME,
    url: SITE_URL,
    image: absoluteUrl(BRAND_IMAGE.url),
    logo: absoluteUrl(BRAND_IMAGE.url),
    description: businessDescription,
    telephone: BUSINESS_PHONE_E164,
    email: BUSINESS_EMAIL,
    contactPoint: contactPoint(),
    priceRange: "$$",
    openingHoursSpecification: BUSINESS_OPENING_HOURS.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      ...hours,
    })),
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

export function contactPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@id": websiteId,
    },
    about: {
      "@id": businessId,
    },
    mainEntity: {
      "@id": businessId,
    },
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  author,
  image = BRAND_IMAGE.url,
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(path)}#article`,
    headline: title,
    description,
    image: absoluteUrl(image),
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: author,
      url: SITE_URL,
    },
    publisher: {
      "@id": organizationId,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(path),
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

export function webPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@id": websiteId,
    },
    about: {
      "@id": businessId,
    },
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

export function faqSchema(items: readonly FaqItem[]) {
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
