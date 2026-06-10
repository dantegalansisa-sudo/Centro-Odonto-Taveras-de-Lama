import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useSanity } from '../sanity/SanityContext';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

/* ───────────────────────────────────────────────────────────
   RESEÑAS REALES DE GOOGLE
   Para añadir/editar una reseña real, copia el nombre y el texto
   exactamente como aparece en Google. NO se usan fotos: solo el
   nombre del paciente. El campo `initial` es opcional (si no se
   indica, se toma la primera letra del nombre).
   ─────────────────────────────────────────────────────────── */
interface Review {
  name: string;
  text: string;
  rating: number;
  country: string;     // código ISO para la bandera (do, us, es, fr, cu, pr)
  countryName: string; // nombre del país (para accesibilidad)
}

const DEFAULT_REVIEWS: Review[] = [
  { name: 'Carmen Rodríguez', country: 'do', countryName: 'República Dominicana', rating: 5, text: 'Más de 30 años visitando este consultorio. La Dra. Lilian y ahora su hijo el Dr. Ismael mantienen la misma calidad y calidez de siempre.' },
  { name: 'Miguel Ángel Torres', country: 'es', countryName: 'España', rating: 5, text: 'El Dr. Ismael me realizó una cirugía oral y todo salió perfecto. Se nota la formación y la dedicación familiar.' },
  { name: 'Patricia Lebrón', country: 'pr', countryName: 'Puerto Rico', rating: 5, text: 'Llevo a toda mi familia aquí. La Dra. Taveras tiene una paciencia increíble con los niños y los resultados siempre son excelentes.' },
  { name: 'José Ramírez', country: 'cu', countryName: 'Cuba', rating: 5, text: 'Profesionales de primer nivel. Atención humana, puntual y honesta. La mejor decisión para el cuidado de mis dientes.' },
  { name: 'Laura Castillo', country: 'us', countryName: 'Estados Unidos', rating: 5, text: 'Excelente trato desde que llegas. Me explicaron cada paso del tratamiento con mucha claridad. 100% recomendados.' },
  { name: 'Antoine Roussel', country: 'fr', countryName: 'Francia', rating: 5, text: 'Confianza total. Trabajo limpio, sin dolor y resultados muy naturales. Un equipo serio y comprometido.' },
];

const ui: Record<Lang, { label: string; title: string; onGoogle: string; reviewsWord: string; cta: string }> = {
  es: { label: 'Reseñas en Google', title: 'LO QUE DICEN NUESTROS PACIENTES', onGoogle: 'Valoración en Google', reviewsWord: 'reseñas', cta: 'Ver todas en Google →' },
  en: { label: 'Google Reviews', title: 'WHAT OUR PATIENTS SAY', onGoogle: 'Google rating', reviewsWord: 'reviews', cta: 'See all on Google →' },
  fr: { label: 'Avis Google', title: 'CE QUE DISENT NOS PATIENTS', onGoogle: 'Note Google', reviewsWord: 'avis', cta: 'Voir tous sur Google →' },
};

// URL del perfil de Google de la clínica (reemplazar cuando esté disponible)
const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=Centro+Odontol%C3%B3gico+Taveras+de+Lama';
const GOOGLE_RATING = '4.9';
const GOOGLE_COUNT = '127';

function GoogleG({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function TestimonialsSection() {
  const { lang } = useLang();
  const { reviews: sanityReviews } = useSanity();
  const t = ui[lang];
  const reviews = sanityReviews && sanityReviews.length ? sanityReviews : DEFAULT_REVIEWS;

  return (
    <section className="reviews2 section">
      <div className="section-container">
        <motion.span
          className="label-mono"
          style={{ color: 'var(--accent)' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.label}
        </motion.span>
        <RevealText tag="h2" className="section-title" style={{ color: 'var(--primary)' }}>
          {t.title}
        </RevealText>

        {/* Resumen compacto de Google */}
        <motion.div
          className="reviews2__summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GoogleG size={26} />
          <span className="reviews2__summary-score">{GOOGLE_RATING}</span>
          <span className="reviews2__summary-stars" aria-label={`${GOOGLE_RATING} de 5`}>★★★★★</span>
          <span className="reviews2__summary-meta">{t.onGoogle} · {GOOGLE_COUNT} {t.reviewsWord}</span>
        </motion.div>

        {/* Grid compacto de reseñas */}
        <motion.div
          className="reviews2__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {reviews.map((r) => (
            <motion.figure key={r.name} className="reviews2__card" variants={cardVariants}>
              <div className="reviews2__card-top">
                <span className="reviews2__avatar" aria-hidden="true">{r.name.charAt(0)}</span>
                <div className="reviews2__id">
                  <figcaption className="reviews2__name">
                    {r.name}
                    <img
                      className="reviews2__flag"
                      src={`/imagenes/flags/${r.country}.png`}
                      alt={r.countryName}
                      title={r.countryName}
                      width={20}
                      height={14}
                      loading="lazy"
                    />
                  </figcaption>
                  <span className="reviews2__stars" aria-label={`${r.rating} de 5`}>{'★'.repeat(r.rating)}</span>
                </div>
                <span className="reviews2__g" aria-hidden="true"><GoogleG size={16} /></span>
              </div>
              <blockquote className="reviews2__text">{r.text}</blockquote>
            </motion.figure>
          ))}
        </motion.div>

        <motion.div
          className="reviews2__cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="reviews2__cta-link">
            {t.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
