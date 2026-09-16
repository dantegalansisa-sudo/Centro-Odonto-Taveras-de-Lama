import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { SEMINAR_ACTIVE, SEMINAR_PATH, seminarContent } from '../data/seminar';

/**
 * Tarjeta flotante del próximo seminario (hero).
 * `variant="float"` → flota a la derecha en escritorio.
 * `variant="inline"` → versión compacta dentro del contenido (tablet/móvil).
 */
export default function SeminarCard({ variant }: { variant: 'float' | 'inline' }) {
  const { lang } = useLang();
  const s = seminarContent[lang];

  if (!SEMINAR_ACTIVE) return null;

  return (
    <motion.div
      className={`hero__seminar hero__seminar--${variant}`}
      initial={{ opacity: 0, y: 30, x: variant === 'float' ? 30 : 0 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: variant === 'float' ? 2.8 : 2.9, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="hero__seminar-glow" aria-hidden="true" />

      <div className="hero__seminar-top">
        <span className="hero__seminar-badge">
          <span className="hero__seminar-dot" />
          {s.badge}
        </span>
        <span className="hero__seminar-date">{s.dateShort}</span>
      </div>

      <h3 className="hero__seminar-title">{s.title}</h3>
      <p className="hero__seminar-topic">{s.topic}</p>
      <p className="hero__seminar-line">{s.cardLine}</p>

      <Link to={SEMINAR_PATH} className="hero__seminar-btn">
        {s.cardBtn}
        <span className="hero__seminar-arrow" aria-hidden="true">→</span>
      </Link>
    </motion.div>
  );
}
