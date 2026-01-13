import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
}

const SEO = ({
  title = 'All Done Services - Professional Property Care in Vancouver',
  description = 'One call, all done! Professional pressure washing, handyman, and painting services for commercial, residential, and strata properties in Greater Vancouver Area.',
  canonical = 'https://alldone-services.ca',
  type = 'website',
  image = '/og-image.jpg',
}: SEOProps) => {
  const fullTitle = title.includes('All Done') ? title : `${title} | All Done Services`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'All Done Services',
    description: description,
    telephone: '+1-604-900-7172',
    email: 'info@alldone-services.ca',
    url: 'https://alldone-services.ca',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 49.2827,
        longitude: -123.1207,
      },
      geoRadius: '50000',
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'BC',
      addressCountry: 'CA',
      addressLocality: 'Vancouver',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '19:00',
    },
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Property Care Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pressure & Soft Washing',
            description: 'Professional cleaning for driveways, siding, decks, roofs, and more.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Handyman Services',
            description: 'From minor repairs to major renovations, we handle all maintenance needs.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Painting Services',
            description: 'Interior and exterior painting with premium materials.',
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <html lang="en-CA" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:site_name" content="All Done Services" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="geo.region" content="CA-BC" />
      <meta name="geo.placename" content="Vancouver" />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;