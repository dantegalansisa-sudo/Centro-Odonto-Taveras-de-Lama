import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { sanityClient, urlFor } from './client';

/* ───────────────────────────────────────────────────────────
   Contenido editable desde el panel (Sanity). Fase 1:
   galería, videos, reseñas, precio de consulta y foto de doctores.
   Si el panel está vacío o falla, cada sección usa su contenido
   por defecto (la web nunca se rompe).
   ─────────────────────────────────────────────────────────── */

export interface SanityReview {
  name: string;
  text: string;
  rating: number;
  country: string;
  countryName: string;
}
export interface SanityVideo {
  src: string;
  poster?: string;
}

interface SanityContent {
  loaded: boolean;
  gallery: string[] | null;           // URLs de imágenes
  videos: SanityVideo[] | null;
  reviews: SanityReview[] | null;
  consultationPrice: string | null;
  directorPhoto: string | null;       // URL
}

const DEFAULT: SanityContent = {
  loaded: false,
  gallery: null,
  videos: null,
  reviews: null,
  consultationPrice: null,
  directorPhoto: null,
};

const SanityCtx = createContext<SanityContent>(DEFAULT);

const COUNTRY_NAMES: Record<string, string> = {
  do: 'República Dominicana',
  us: 'Estados Unidos',
  es: 'España',
  fr: 'Francia',
  cu: 'Cuba',
  pr: 'Puerto Rico',
};

const QUERY = `{
  "settings": *[_type == "siteSettings"][0]{ consultationPrice, directorPhoto },
  "gallery": *[_type == "galleryImage"] | order(order asc){ _id, image },
  "videos": *[_type == "promoVideo"] | order(order asc){ _id, videoUrl, "fileUrl": videoFile.asset->url, poster },
  "reviews": *[_type == "review"] | order(order asc){ _id, name, text, rating, country }
}`;

export function SanityProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SanityContent>(DEFAULT);

  useEffect(() => {
    let active = true;
    sanityClient
      .fetch(QUERY)
      .then((data) => {
        if (!active || !data) return;
        const gallery = Array.isArray(data.gallery) && data.gallery.length
          ? data.gallery
              .filter((g: { image?: unknown }) => g.image)
              .map((g: { image: unknown }) => urlFor(g.image as never).width(720).quality(80).url())
          : null;

        const videos = Array.isArray(data.videos) && data.videos.length
          ? data.videos
              .map((v: { videoUrl?: string; fileUrl?: string; poster?: unknown }) => {
                const src = v.videoUrl || v.fileUrl;
                if (!src) return null;
                return {
                  src,
                  poster: v.poster ? urlFor(v.poster as never).width(600).quality(80).url() : undefined,
                };
              })
              .filter(Boolean)
          : null;

        const reviews = Array.isArray(data.reviews) && data.reviews.length
          ? data.reviews.map((r: Omit<SanityReview, 'countryName'>) => ({
              name: r.name,
              text: r.text,
              rating: r.rating ?? 5,
              country: r.country || 'do',
              countryName: COUNTRY_NAMES[r.country] || '',
            }))
          : null;

        const consultationPrice = data.settings?.consultationPrice || null;
        const directorPhoto = data.settings?.directorPhoto
          ? urlFor(data.settings.directorPhoto).width(640).quality(85).url()
          : null;

        setContent({ loaded: true, gallery, videos, reviews, consultationPrice, directorPhoto });
      })
      .catch(() => {
        // Silencioso: la web sigue con su contenido por defecto.
        if (active) setContent((c) => ({ ...c, loaded: true }));
      });
    return () => {
      active = false;
    };
  }, []);

  return <SanityCtx.Provider value={content}>{children}</SanityCtx.Provider>;
}

export function useSanity() {
  return useContext(SanityCtx);
}
