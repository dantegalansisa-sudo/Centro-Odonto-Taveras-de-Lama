import type { Lang } from '../i18n/translations';

/* ───────────────────────────────────────────────────────────
   INVESTIGACIONES CIENTÍFICAS — Dres. Taveras de Lama
   Espacio para publicar investigación odontológica propia.
   Para añadir una nueva publicación: duplica un bloque del array
   `researchData`, asigna un `slug` único, la imagen, el PDF
   (opcional, colócalo en /public/investigaciones/) y traduce el
   contenido en es / en / fr.
   ─────────────────────────────────────────────────────────── */

export interface ResearchPaper {
  slug: string;
  area: string;
  title: string;
  abstract: string;
  authors: string[];
  date: string;        // ej. "Marzo 2025"
  readTime: string;    // ej. "8 min"
  img: string;
  pdf?: string;        // ruta opcional al PDF
  content: string[];
  keywords?: string[];
}

interface ResearchContent {
  area: string;
  title: string;
  abstract: string;
  date: string;
  readTime: string;
  content: string[];
  keywords?: string[];
}

interface ResearchBase {
  slug: string;
  img: string;
  pdf?: string;
  authors: string[];
  i18n: Record<Lang, ResearchContent>;
}

// Aún no hay informes publicados. Cuando los doctores entreguen sus
// investigaciones, añade aquí cada una (slug único, imagen, PDF opcional y
// el contenido traducido en es / en / fr). Mientras el array esté vacío, la
// sección muestra un estado elegante de "espacio próximamente".
const researchData: ResearchBase[] = [];

export function getResearch(lang: Lang): ResearchPaper[] {
  return researchData.map(({ i18n, ...base }) => ({ ...base, ...i18n[lang] }));
}
