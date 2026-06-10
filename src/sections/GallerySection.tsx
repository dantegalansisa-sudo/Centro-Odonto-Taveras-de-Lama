import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useSanity } from '../sanity/SanityContext';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const DEFAULT_IMAGES = Array.from({ length: 18 }, (_, i) => `/imagenes/galeria/g${i + 1}.png`);

const ui: Record<Lang, { eyebrow: string; title: string; subtitle: string; hint: string; close: string }> = {
  es: {
    eyebrow: 'Nuestro espacio · Nuestros pacientes',
    title: 'GALERÍA',
    subtitle: 'Momentos reales de Taveras de Lama: nuestro equipo, nuestros pacientes y el día a día de la clínica.',
    hint: 'Pasa el cursor para pausar · haz clic en una foto para ampliarla',
    close: 'Cerrar',
  },
  en: {
    eyebrow: 'Our space · Our patients',
    title: 'GALLERY',
    subtitle: 'Real moments at Taveras de Lama: our team, our patients and the day-to-day of the clinic.',
    hint: 'Hover to pause · click a photo to enlarge it',
    close: 'Close',
  },
  fr: {
    eyebrow: 'Notre espace · Nos patients',
    title: 'GALERIE',
    subtitle: 'Des moments réels chez Taveras de Lama : notre équipe, nos patients et le quotidien de la clinique.',
    hint: 'Survolez pour mettre en pause · cliquez sur une photo pour l’agrandir',
    close: 'Fermer',
  },
};

function MarqueeRow({ imgs, reverse, onOpen }: { imgs: string[]; reverse?: boolean; onOpen: (src: string) => void }) {
  const doubled = [...imgs, ...imgs];
  return (
    <div className={`gallery2__row${reverse ? ' gallery2__row--reverse' : ''}`}>
      <div className="gallery2__track">
        {doubled.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            className="gallery2__card"
            onClick={() => onOpen(src)}
            aria-label="Ampliar foto"
          >
            <img src={src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function GallerySection() {
  const { lang } = useLang();
  const { gallery } = useSanity();
  const t = ui[lang];
  const images = gallery && gallery.length ? gallery : DEFAULT_IMAGES;
  const mid = Math.ceil(images.length / 2);
  const rowA = images.slice(0, mid);
  const rowB = images.slice(mid);
  const [active, setActive] = useState<string | null>(null);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close]);

  return (
    <section id="galeria" className="gallery2 section">
      <div className="section-container">
        <motion.span
          className="label-mono"
          style={{ color: 'var(--accent)' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.eyebrow}
        </motion.span>
        <RevealText tag="h2" className="section-title">
          {t.title}
        </RevealText>
        <motion.p
          className="gallery2__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t.subtitle}
        </motion.p>
        <span className="gallery2__hint">{t.hint}</span>
      </div>

      <motion.div
        className="gallery2__rows"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <MarqueeRow imgs={rowA} onOpen={setActive} />
        <MarqueeRow imgs={rowB} reverse onOpen={setActive} />
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="gallery2__lightbox"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button className="gallery2__lightbox-close" onClick={close} aria-label={t.close}>×</button>
            <motion.img
              src={active}
              alt=""
              className="gallery2__lightbox-img"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
