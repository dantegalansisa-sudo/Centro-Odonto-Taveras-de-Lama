/* ───────────────────────────────────────────────────────────
   VIDEOS — Reels verticales de la clínica
   Archivos .mp4 (formato vertical 9:16) en /public/videos/ con su
   portada .jpg. No llevan título: el video habla por sí solo.
   Para añadir uno nuevo: coloca el .mp4 (y opcionalmente una
   portada .jpg) en /public/videos/ y agrega una línea al array.
   ─────────────────────────────────────────────────────────── */

export interface PromoVideo {
  src: string;
  poster?: string;
}

export const videos: PromoVideo[] = [
  { src: '/videos/v1.mp4', poster: '/videos/v1.jpg' },
  { src: '/videos/v2.mp4', poster: '/videos/v2.jpg' },
  { src: '/videos/v3.mp4', poster: '/videos/v3.jpg' },
];
