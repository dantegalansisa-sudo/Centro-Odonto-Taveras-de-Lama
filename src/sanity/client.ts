import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

/**
 * Cliente de Sanity — panel de administración de la clínica.
 * Project ID del Centro Odontológico Taveras de Lama.
 * El dataset 'production' debe ser PÚBLICO para lectura desde el navegador.
 */
export const sanityClient = createClient({
  projectId: 'cv4uufvl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // CDN: respuestas rápidas y cacheadas (lectura pública)
});

const builder = imageUrlBuilder(sanityClient);

/** Genera la URL de una imagen subida en Sanity. */
export function urlFor(source: unknown) {
  return builder.image(source as Parameters<typeof builder.image>[0]);
}
