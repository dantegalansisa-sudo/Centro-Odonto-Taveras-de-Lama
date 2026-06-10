import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { supabase } from './client';

/* ───────────────────────────────────────────────────────────
   Contenido editable desde el panel /admin (Supabase). Fase 1:
   galería, videos, reseñas, precio de consulta y foto de doctores.
   Si una tabla está vacía o falla, esa sección usa su contenido
   por defecto (la web nunca se rompe).
   ─────────────────────────────────────────────────────────── */

export interface SiteReview {
  name: string;
  text: string;
  rating: number;
  country: string;
  countryName: string;
}
export interface SiteVideo {
  src: string;
  poster?: string;
}

interface SiteContent {
  loaded: boolean;
  gallery: string[] | null;
  videos: SiteVideo[] | null;
  reviews: SiteReview[] | null;
  consultationPrice: string | null;
  directorPhoto: string | null;
}

const DEFAULT: SiteContent = {
  loaded: false,
  gallery: null,
  videos: null,
  reviews: null,
  consultationPrice: null,
  directorPhoto: null,
};

const COUNTRY_NAMES: Record<string, string> = {
  do: 'República Dominicana',
  us: 'Estados Unidos',
  es: 'España',
  fr: 'Francia',
  cu: 'Cuba',
  pr: 'Puerto Rico',
};

const ContentCtx = createContext<SiteContent>(DEFAULT);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(DEFAULT);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const [settingsRes, galleryRes, videosRes, reviewsRes] = await Promise.all([
          supabase.from('settings').select('consultation_price, director_photo').limit(1).maybeSingle(),
          supabase.from('gallery_images').select('url').order('sort', { ascending: true }),
          supabase.from('videos').select('src, poster').order('sort', { ascending: true }),
          supabase.from('reviews').select('name, text, rating, country').order('sort', { ascending: true }),
        ]);
        if (!active) return;

        const gallery = galleryRes.data && galleryRes.data.length
          ? galleryRes.data.map((g: { url: string }) => g.url).filter(Boolean)
          : null;

        const videos = videosRes.data && videosRes.data.length
          ? videosRes.data
              .filter((v: { src?: string }) => v.src)
              .map((v: { src: string; poster?: string }) => ({ src: v.src, poster: v.poster || undefined }))
          : null;

        const reviews = reviewsRes.data && reviewsRes.data.length
          ? reviewsRes.data.map((r: { name: string; text: string; rating: number; country: string }) => ({
              name: r.name,
              text: r.text,
              rating: r.rating ?? 5,
              country: r.country || 'do',
              countryName: COUNTRY_NAMES[r.country] || '',
            }))
          : null;

        const consultationPrice = settingsRes.data?.consultation_price || null;
        const directorPhoto = settingsRes.data?.director_photo || null;

        setContent({ loaded: true, gallery, videos, reviews, consultationPrice, directorPhoto });
      } catch {
        if (active) setContent((c) => ({ ...c, loaded: true }));
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  return <ContentCtx.Provider value={content}>{children}</ContentCtx.Provider>;
}

export function useContent() {
  return useContext(ContentCtx);
}
