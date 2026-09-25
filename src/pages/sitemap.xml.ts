import type { APIRoute } from 'astro';
import { siteConfig, suratAreas, serviceCategories, packages, getAllBlogPosts } from '@/lib/ffc-config';
import { getAllExpandedKeywordSlugs } from '@/lib/expanded-keywords';

export const prerender = true;

function getAllRoutes(): string[] {
  const fixedRoutes = [
    '/',
    '/about',
    '/contact',
    '/menu',
    '/book-now',
    '/virtual-tour',
    '/surat',
    '/services',
    '/packages',
    '/blog',
    '/privacy-policy',
    '/terms-conditions',
  ];

  const areaRoutes = suratAreas.map((area) => `/${area.slug}`);
  const serviceRoutes = serviceCategories.map((svc) => `/services/${svc.slug}`);
  const serviceKeywordRoutes = serviceCategories.flatMap((svc) =>
    svc.keywords.map((kw) => `/${kw.slug}`),
  );
  const expandedKeywordRoutes = getAllExpandedKeywordSlugs().map((slug) => `/${slug}`);
  const packageRoutes = packages.map((pkg) => `/packages/${pkg.slug}`);
  const blogRoutes = getAllBlogPosts().map((post) => `/blog/${post.slug}`);

  return [...new Set([
    ...fixedRoutes,
    ...areaRoutes,
    ...serviceRoutes,
    ...serviceKeywordRoutes,
    ...expandedKeywordRoutes,
    ...packageRoutes,
    ...blogRoutes,
  ])].sort();
}

function escapeXml(value: string): string {
  return value.replace(/&/g, '&amp;');
}

export const GET: APIRoute = () => {
  const baseUrl = siteConfig.website;
  const allRoutes = getAllRoutes();
  const lastModified = new Date().toISOString();

  const highPriorityPaths = new Set(['/']);
  const mediumPriorityKeywords = ['about', 'contact', 'services', 'service'];

  const urls = allRoutes.map((route) => {
    let priority = 0.7;
    let changefreq: 'daily' | 'weekly' | 'monthly' = 'weekly';

    if (highPriorityPaths.has(route)) {
      priority = 1.0;
      changefreq = 'daily';
    } else if (mediumPriorityKeywords.some((kw) => route.toLowerCase().includes(kw))) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (route.split('/').length <= 2) {
      priority = 0.8;
      changefreq = 'weekly';
    }

    return `  <url>
    <loc>${escapeXml(`${baseUrl}${route}`)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
