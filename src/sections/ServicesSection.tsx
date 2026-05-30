import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import RevealText from '../components/RevealText';
import { getServices } from '../data/services';
import { useLang } from '../i18n/LanguageContext';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};

const categoryKeys = [
  { key: 'services.all', value: 'all' },
  { key: 'services.aesthetic', value: 'estetica' },
  { key: 'services.surgery', value: 'cirugia' },
  { key: 'services.prevention', value: 'prevencion' },
  { key: 'services.diagnostic', value: 'diagnostico' },
] as const;

export default function ServicesSection() {
  const { t, lang } = useLang();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const services = useMemo(() => getServices(lang), [lang]);

  const filteredServices = useMemo(() => {
    return services.filter((s) => {
      // Category filter (language-independent)
      if (activeCategory !== 'all' && s.category !== activeCategory) return false;

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = s.title.toLowerCase().includes(q);
        const matchesSubtitle = s.subtitle.toLowerCase().includes(q);
        const matchesDesc = s.desc.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSubtitle && !matchesDesc) return false;
      }

      return true;
    });
  }, [services, searchQuery, activeCategory]);

  return (
    <section id="servicios" className="section" style={{ background: 'var(--bg)' }}>
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('services.label')}
        </motion.span>
        <RevealText tag="h2" className="section-title">
          {t('services.title')}
        </RevealText>

        <motion.div
          className="services-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="services-filter__search">
            <svg
              className="services-filter__search-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="services-filter__input"
              placeholder={t('services.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="services-filter__pills">
            {categoryKeys.map((cat) => (
              <button
                key={cat.value}
                className={`services-filter__pill${activeCategory === cat.value ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat.value)}
              >
                {t(cat.key)}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.length > 0 ? (
              filteredServices.map((s) => (
                <motion.div
                  key={s.number}
                  className="service-card"
                  variants={cardVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <span className="service-card__number">{s.number}</span>
                  <span className="service-card__icon">{s.icon}</span>
                  <h3 className="service-card__title">{s.title}</h3>
                  <span className="service-card__subtitle">{s.subtitle}</span>
                  <p className="service-card__desc">{s.desc}</p>
                  <div className="service-card__details">
                    <ul>
                      {s.details.map((d) => <li key={d}>{d}</li>)}
                    </ul>
                  </div>
                  <div className="service-card__actions">
                    <Link to={`/servicios/${s.slug}`} className="service-card__more">{t('services.more')}</Link>
                    <a href="#reservar" className="service-card__cta">{t('services.book')}</a>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="services-filter__empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p>{t('services.empty')}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
