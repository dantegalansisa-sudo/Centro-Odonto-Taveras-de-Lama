import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RevealText from '../components/RevealText';
import { getVideos } from '../data/videos';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const ui: Record<Lang, { eyebrow: string; title: string; subtitle: string; watch: string; soon: string }> = {
  es: {
    eyebrow: 'Espacio de videos',
    title: 'VIDEOS',
    subtitle: 'Un espacio donde nuestros doctores comparten contenido en video con sus pacientes e invitados.',
    watch: 'Ver video',
    soon: 'Próximamente',
  },
  en: {
    eyebrow: 'Video space',
    title: 'VIDEOS',
    subtitle: 'A space where our doctors share video content with their patients and guests.',
    watch: 'Watch video',
    soon: 'Coming soon',
  },
  fr: {
    eyebrow: 'Espace vidéos',
    title: 'VIDÉOS',
    subtitle: 'Un espace où nos médecins partagent du contenu vidéo avec leurs patients et invités.',
    watch: 'Voir la vidéo',
    soon: 'Prochainement',
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
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
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
  );
}

export default function VideoPromoSection() {
  const { lang } = useLang();
  const t = ui[lang];
  const videos = getVideos(lang);
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
            className="vpromo__grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {videos.map((v) => (
              <Link key={v.slug} to={`/videos/${v.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <motion.article
                  className="vpromo__card"
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <div className="vpromo__thumb">
                    <img src={v.poster} alt={v.title} className="vpromo__thumb-img" loading="lazy" />
                    <span className="vpromo__play" aria-hidden="true"><PlayIcon /></span>
                  </div>
                  <div className="vpromo__body">
                    <span className="vpromo__date">{v.date}</span>
                    <h3 className="vpromo__title">{v.title}</h3>
                    <p className="vpromo__desc">{v.description}</p>
                    <span className="vpromo__link">{t.watch} →</span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="vpromo__grid placeholder-grid placeholder-grid--dark"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
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
