import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getVideos } from '../data/videos';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const ui: Record<Lang, {
  notFound: string;
  back: string;
  guestLabel: string;
  moreTitle: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
}> = {
  es: {
    notFound: 'Video no encontrado',
    back: '← Volver al inicio',
    guestLabel: 'Invitado',
    moreTitle: 'Más videos',
    ctaTitle: '¿Quieres tu transformación?',
    ctaDesc: 'Agenda tu consulta con el Dr. Ismael y nuestro equipo.',
    ctaBtn: 'Agendar consulta →',
  },
  en: {
    notFound: 'Video not found',
    back: '← Back to home',
    guestLabel: 'Guest',
    moreTitle: 'More videos',
    ctaTitle: 'Want your transformation?',
    ctaDesc: 'Book your consultation with Dr. Ismael and our team.',
    ctaBtn: 'Book consultation →',
  },
  fr: {
    notFound: 'Vidéo introuvable',
    back: "← Retour à l'accueil",
    guestLabel: 'Invité',
    moreTitle: 'Plus de vidéos',
    ctaTitle: 'Vous voulez votre transformation ?',
    ctaDesc: 'Prenez rendez-vous avec le Dr Ismael et notre équipe.',
    ctaBtn: 'Prendre rendez-vous →',
  },
};

export default function VideoPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const t = ui[lang];
  const videos = getVideos(lang);
  const video = videos.find((v) => v.slug === slug);

  if (!video) {
    return (
      <div className="bp" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-brutal)', fontSize: '48px', color: 'var(--primary)' }}>{t.notFound}</h1>
          <Link to="/" className="bp__back-link" style={{ marginTop: '24px', display: 'inline-block' }}>{t.back}</Link>
        </div>
      </div>
    );
  }

  const others = videos.filter((v) => v.slug !== slug);

  return (
    <div className="bp">
      <section className="bp__hero">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <Link to="/" className="bp__back-link">{t.back}</Link>
            <div className="bp__hero-meta">
              <span className="bp__category">{video.guest}</span>
              <span className="bp__read-time">{video.date}</span>
            </div>
            <h1 className="bp__title">{video.title}</h1>
            <p className="bp__excerpt">{video.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="bp__image-section">
        <div className="section-container">
          <motion.div
            className="videopage__player"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <video
              src={video.src}
              poster={video.poster}
              controls
              playsInline
              className="videopage__video"
            />
          </motion.div>
        </div>
      </section>

      <section className="bp__content section">
        <div className="section-container">
          <div className="bp__grid">
            <motion.div
              className="bp__main"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="bp__paragraph"><strong>{t.guestLabel}:</strong> {video.guest}</p>
              <p className="bp__paragraph">{video.description}</p>
            </motion.div>

            <motion.aside
              className="bp__sidebar"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="bp__cta-card">
                <h3 className="bp__cta-title">{t.ctaTitle}</h3>
                <p className="bp__cta-desc">{t.ctaDesc}</p>
                <Link to="/#reservar" className="bp__cta-btn">{t.ctaBtn}</Link>
              </div>

              {others.length > 0 && (
                <div className="bp__other">
                  <h4 className="bp__other-title">{t.moreTitle}</h4>
                  {others.map((v) => (
                    <Link key={v.slug} to={`/videos/${v.slug}`} className="bp__other-link">
                      <span className="bp__other-category">{v.guest}</span>
                      <span>{v.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
}
