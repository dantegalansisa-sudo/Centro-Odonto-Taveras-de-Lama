import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { videos as defaultVideos } from '../data/videos';
import { useSanity } from '../sanity/SanityContext';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const ui: Record<Lang, { eyebrow: string; title: string; subtitle: string; soon: string }> = {
  es: {
    eyebrow: 'Espacio de videos',
    title: 'VIDEOS',
    subtitle: 'Un vistazo a nuestro día a día: el equipo, los pacientes y el trabajo en Taveras de Lama.',
    soon: 'Próximamente',
  },
  en: {
    eyebrow: 'Video space',
    title: 'VIDEOS',
    subtitle: 'A glimpse of our day-to-day: the team, the patients and the work at Taveras de Lama.',
    soon: 'Coming soon',
  },
  fr: {
    eyebrow: 'Espace vidéos',
    title: 'VIDÉOS',
    subtitle: 'Un aperçu de notre quotidien : l’équipe, les patients et le travail chez Taveras de Lama.',
    soon: 'Prochainement',
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

function PlayIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
  );
}

function VideoReel({ src, poster, index }: { src: string; poster?: string; index: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const v = ref.current;
    if (!v) return;
    v.play();
  };

  return (
    <motion.div className="vreel" variants={cardVariants}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        className="vreel__video"
        playsInline
        preload="metadata"
        controls={playing}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {!playing && (
        <button className="vreel__overlay" onClick={handlePlay} aria-label={`Reproducir video ${index + 1}`}>
          <span className="vreel__play"><PlayIcon /></span>
        </button>
      )}
    </motion.div>
  );
}

export default function VideoPromoSection() {
  const { lang } = useLang();
  const { videos: sanityVideos } = useSanity();
  const t = ui[lang];
  const videos = sanityVideos && sanityVideos.length ? sanityVideos : defaultVideos;
  const hasVideos = videos.length > 0;

  return (
    <section id="videos" className="vpromo section" style={{ background: 'var(--bg-dark)' }}>
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
        <RevealText tag="h2" className="section-title section-title--light">
          {t.title}
        </RevealText>
        <motion.p
          className="vpromo__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t.subtitle}
        </motion.p>

        {hasVideos ? (
          <motion.div
            className="vreel__row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
          >
            {videos.map((v, i) => (
              <VideoReel key={v.src} src={v.src} poster={v.poster} index={i} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="vpromo__grid placeholder-grid placeholder-grid--dark"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div key={i} className="placeholder-card placeholder-card--video" variants={cardVariants}>
                <span className="placeholder-card__soon">{t.soon}</span>
                <span className="placeholder-card__play" aria-hidden="true"><PlayIcon /></span>
                <img src="/imagenes/logo-taveras.png" alt="" aria-hidden="true" className="placeholder-card__logo placeholder-card__logo--video" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
