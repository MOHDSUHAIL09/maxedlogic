
// components/Seo.jimport React from 'react';
import { Helmet } from 'react-helmet-async';

const Seo = ({
  title,
  description,
  path,
  type = "website",
  image = null,
  structuredData = null,
  canonicalUrl = null,
  publishedTime = null,
  modifiedTime = null,
  author = "Maxedlogic Technologies"
}) => {
  const siteName = "Maxedlogic Technologies";
  const siteUrl = "https://www.maxedlogic.com"; // 🔁 Change to your actual domain
  const defaultImage = `${siteUrl}/default-og-image.jpg`; // Add default OG image in public folder
  
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullUrl = canonicalUrl || `${siteUrl}${path || ''}`;
  const ogImage = image || defaultImage;

  // Default Organization Structured Data (for home page)
  const defaultOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "We provide innovative IT solutions including web development, app development, blockchain, and software development.",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61584969285044",
      "https://www.instagram.com/maxedlogic__official/",
      "https://www.linkedin.com/in/maxed-logic-682b3b3b6/"
    ]
  };

  // Home page ke liye default rating schema (optional)
  const defaultRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": siteName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "799",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // User provided structuredData override, ya default
  let finalStructuredData = structuredData;
  if (!finalStructuredData) {
    if (path === '/' || path === '') {
      finalStructuredData = [defaultOrganizationSchema, defaultRatingSchema];
    } else {
      finalStructuredData = defaultOrganizationSchema;
    }
  }

  // Ensure structuredData is an array
  const schemas = Array.isArray(finalStructuredData) ? finalStructuredData : [finalStructuredData];

  return (
    <Helmet prioritizeSeoTags>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Social Media */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article specific (for blog posts) */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Structured Data (JSON-LD) */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;