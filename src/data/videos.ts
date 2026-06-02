import type { Lang } from '../i18n/translations';

/* ───────────────────────────────────────────────────────────
   VIDEOS — Espacio promocional del Dr. Ismael Lama Taveras
   Videos subidos al sitio (.mp4). Coloca los archivos en
   /public/videos/ y la imagen de portada (poster) en
   /public/imagenes/. Para añadir un video, duplica un bloque
   de `videoData`, asigna un `slug` único y traduce los textos.
   ─────────────────────────────────────────────────────────── */

export interface PromoVideo {
  slug: string;
  src: string;      // ruta al .mp4 en /public/videos/
  poster: string;   // imagen de portada
  guest: string;    // persona destacada / invitado
  title: string;
  description: string;
  date: string;
}

interface VideoContent {
  guest: string;
  title: string;
  description: string;
  date: string;
}

interface VideoBase {
  slug: string;
  src: string;
  poster: string;
  i18n: Record<Lang, VideoContent>;
}

// Aún no hay videos subidos. Cuando el o la doctora suba un video, añade aquí
// un bloque con el archivo .mp4 (en /public/videos/), su imagen de portada y
// los textos. No es obligatorio poner título: el video puede ser de cualquier
// tema. Mientras el array esté vacío, la sección muestra un estado elegante de
// "espacio próximamente" con el logo de la clínica.
const videoData: VideoBase[] = [];

export function getVideos(lang: Lang): PromoVideo[] {
  return videoData.map(({ i18n, ...base }) => ({ ...base, ...i18n[lang] }));
}
