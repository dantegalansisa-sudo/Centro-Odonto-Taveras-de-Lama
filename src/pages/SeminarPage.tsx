import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { seminarContent, seminarFacts } from '../data/seminar';

/** Página con toda la información del seminario internacional. */
export default function SeminarPage() {
  const { lang } = useLang();
  const s = seminarContent[lang];
  const L = s.labels;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const facts = [
    { label: L.course, value: seminarFacts.course },
    { label: L.fee, value: seminarFacts.fee },
    { label: L.time, value: seminarFacts.time },
    { label: L.credits, value: seminarFacts.credits },
    { label: L.recommended, value: seminarFacts.recommendedFor },
    { label: L.moderator, value: seminarFacts.moderator },
  ];

  return (
    <div className="bp seminar-page">
      <section className="bp__hero">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <Link to="/" className="bp__back-link">{L.back}</Link>
            <div className="bp__hero-meta">
              <span className="bp__category">{s.badge}</span>
              <span className="bp__read-time">{s.date}</span>
            </div>
            <h1 className="bp__title">{s.title}</h1>
            <p className="seminar-page__topic">{s.topic}</p>
            <p className="bp__excerpt">{s.intro}</p>
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
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {/* Ficha del programa */}
              <div className="seminar-page__facts">
                {facts.map((f) => (
                  <div key={f.label} className="seminar-page__fact">
                    <span className="seminar-page__fact-label">{f.label}</span>
                    <span className="seminar-page__fact-value">{f.value}</span>
                  </div>
                ))}
              </div>

              {/* Conferencistas */}
              <h3 className="bp__tips-title seminar-page__h3">{L.speakers}</h3>
              <ul className="seminar-page__speakers">
                {seminarFacts.speakers.map((name) => {
                  const isDoctora = name === seminarFacts.highlight;
                  return (
                    <li
                      key={name}
                      className={`seminar-page__speaker${isDoctora ? ' seminar-page__speaker--highlight' : ''}`}
                    >
                      {name}
                      {isDoctora && <span className="seminar-page__speaker-tag">{L.highlightNote}</span>}
                    </li>
                  );
                })}
              </ul>

              {/* Descripción oficial */}
              <h3 className="bp__tips-title seminar-page__h3">{L.about}: {s.topic}</h3>
              <p className="bp__paragraph">{s.description}</p>

              <p className="seminar-page__sponsor">
                {L.sponsor} <strong>{seminarFacts.sponsor}</strong>
              </p>
            </motion.div>

            <motion.aside
              className="bp__sidebar"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              <div className="bp__cta-card seminar-page__doctor-card">
                <img
                  src="/imagenes/taveras-de-lama/dra-lilian.png"
                  alt="Dra. Lilian Taveras de Lama"
                  className="seminar-page__doctor-img"
                />
                <h3 className="bp__cta-title">Dra. Lilian Taveras de Lama</h3>
                <p className="bp__cta-desc">{L.highlightNote} · {s.title}</p>
              </div>

              <div className="bp__cta-card">
                <h3 className="bp__cta-title">{L.ctaTitle}</h3>
                <p className="bp__cta-desc">{L.ctaDesc}</p>
                <Link to="/#reservar" className="bp__cta-btn">{L.ctaBtn}</Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
}
