import { MetadataRoute } from 'next';

type SitemapRoute = MetadataRoute.Sitemap[number];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const isDev = process.env.SITE_TYPE === "dev";

  if (isDev) {
    return [];
  }

  const baseUrl = "https://hustlerstech.com";

  const staticRoutes: SitemapRoute[] = [
    '',
    '/about',
    '/web-development',
    '/search-engine-optimization',
    '/social-media',
    '/paid-ads',
    '/graphic-design',
    '/content-marketing',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return staticRoutes;
}