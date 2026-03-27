import { MetadataRoute } from 'next';
import { locaties } from '@/lib/locaties';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rjmk.nl';

  // Static routes
  const routes = [
    '',
    '/diensten/oud-ijzer-ophalen',
    '/diensten/metalen-inkoop',
    '/diensten/container-plaatsing',
    '/diensten/kabelverwerking',
    '/dagprijzen',
    '/inkoop-producten',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/dagprijzen' ? 'daily' : 'weekly' as any,
    priority: route === '' ? 1.0 : route === '/dagprijzen' ? 0.9 : 0.8,
  }));

  // Dynamic location routes
  const locationRoutes = locaties.map((loc) => ({
    url: `${baseUrl}/locaties/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as any,
    priority: 0.7,
  }));

  return [...routes, ...locationRoutes];
}
