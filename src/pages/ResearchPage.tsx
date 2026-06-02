import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getResearch } from '../data/research';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const ui: Record<Lang, {
  notFound: string;
  back: string;
  authorsTitle: string;
  keywordsTitle: string;
  pdfBtn: string;
  moreTitle: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
}> = {
  es: {
    notFound: 'Investigación no encontrada',
    back: '← Volver al inicio',
    authorsTitle: 'Autores',
    keywordsTitle: 'Palabras clave',
    pdfBtn: 'Descargar PDF',
    moreTitle: 'Más publicaciones',
    ctaTitle: '¿Interesado en nuestra práctica clínica?',
    ctaDesc: 'Agenda una consulta con nuestros especialistas.',
    ctaBtn: 'Agendar consulta →',
  },
  en: {
    notFound: 'Research not found',
    back: '← Back to home',
    authorsTitle: 'Authors',
    keywordsTitle: 'Keywords',
    pdfBtn: 'Download PDF',
    moreTitle: 'More publications',
    ctaTitle: 'Interested in our clinical practice?',
    ctaDesc: 'Book a consultation with our specialists.',
    ctaBtn: 'Book consultation →',
  },
  fr: {
    notFound: 'Recherche introuvable',
    back: "← Retour à l'accueil",
    authorsTitle: 'Auteurs',
    keywordsTitle: 'Mots-clés',
    pdfBtn: 'Télécharger le PDF',
    moreTitle: 'Plus de publications',
    ctaTitle: 'Intéressé par notre pratique clinique ?',
    ctaDesc: 'Prenez rendez-vous avec nos spécialistes.',
    ctaBtn: 'Prendre rendez-vous →',
  },
};

export default function ResearchPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const t = ui[lang];
  const papers = getResearch(lang);
  const paper = papers.find((p) => p.slug === slug);

  if (!paper) {
    return (
      <div className="bp" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-brutal)', fontSize: '48px', color: 'var(--primary)' }}>{t.notFound}</h1>
          <Link to="/" className="bp__back-link" style={{ marginTop: '24px', display: 'inline-block' }}>{t.back}</Link>
        </div>
      </div>
    );
  }

  const others = papers.filter((p) => p.slug !== slug);

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
              <span className="bp__category">{paper.area}</span>
              <span className="bp__read-time">{paper.date} · {paper.readTime}</span>
            </div>
            <h1 className="bp__title">{paper.title}</h1>
            <p className="bp__excerpt">{paper.abstract}</p>
          </motion.div>
        </div>
      </section>

      <section className="bp__image-section">
        <div className="section-container">
          <motion.div
            className="bp__image-wrap"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <img src={paper.img} alt={paper.title} className="bp__image" />
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
              {paper.content.map((paragraph, i) => (
                <p key={i} className="bp__paragraph">{paragraph}</p>
              ))}

              {paper.keywords && (
                <div className="bp__tips">
                  <h3 className="bp__tips-title">{t.keywordsTitle}</h3>
                  <div className="research-page__keywords">
                    {paper.keywords.map((k) => (
                      <span key={k} className="research-page__keyword">{k}</span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            <motion.aside
              className="bp__sidebar"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="bp__cta-card">
                <h3 className="bp__cta-title">{t.authorsTitle}</h3>
                <ul className="research-page__authors">
                  {paper.authors.map((a) => (
                    <li key={a} className="research-page__author">{a}</li>
                  ))}
                </ul>
                {paper.pdf && (
                  <a href={paper.pdf} target="_blank" rel="noopener noreferrer" className="bp__cta-btn">
                    {t.pdfBtn}
                  </a>
                )}
              </div>

              <div className="bp__cta-card">
                <h3 className="bp__cta-title">{t.ctaTitle}</h3>
                <p className="bp__cta-desc">{t.ctaDesc}</p>
                <Link to="/#reservar" className="bp__cta-btn">{t.ctaBtn}</Link>
              </div>

              {others.length > 0 && (
                <div className="bp__other">
                  <h4 className="bp__other-title">{t.moreTitle}</h4>
                  {others.map((p) => (
                    <Link key={p.slug} to={`/investigaciones/${p.slug}`} className="bp__other-link">
                      <span className="bp__other-category">{p.area}</span>
                      <span>{p.title}</span>
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
