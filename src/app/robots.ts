import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isDev = process.env.SITE_TYPE === "dev";

  if (isDev) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/privacy/', '/terms/'],
    },
    sitemap: 'https://hustlerstech.com/sitemap.xml',
  };
}