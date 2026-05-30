import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getServices } from '../data/services';
import { useLang } from '../i18n/LanguageContext';

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLang();
  const services = getServices(lang);
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="sp" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-brutal)', fontSize: '48px', color: 'var(--primary)' }}>{t('sp.notFound')}</h1>
          <Link to="/" className="sp__back-link" style={{ marginTop: '24px', display: 'inline-block' }}>{t('sp.back')}</Link>
        </div>
      </div>
    );
  }

  const waText: Record<string, string> = {
    es: `Hola, me interesa el servicio de ${service.title.toLowerCase()}. ¿Podrían darme más información?`,
    en: `Hello, I'm interested in the ${service.title.toLowerCase()} service. Could you give me more information?`,
    fr: `Bonjour, je suis intéressé(e) par le service ${service.title.toLowerCase()}. Pourriez-vous me donner plus d'informations ?`,
  };
  const whatsappMsg = encodeURIComponent(waText[lang] ?? waText.es);

  return (
    <div className="sp">
      {/* Hero */}
      <section className="sp__hero">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <Link to="/" className="sp__back-link">{t('sp.back')}</Link>
            <div className="sp__hero-meta">
              <span className="sp__number">{service.number}</span>
              <span className="sp__icon">{service.icon}</span>
            </div>
            <h1 className="sp__title">{service.title}</h1>
            <p className="sp__subtitle">{service.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="sp__content section">
        <div className="section-container">
          <div className="sp__grid">
            {/* Main content */}
            <motion.div
              className="sp__main"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="sp__section-title">{t('sp.about')}</h2>
              <p className="sp__desc">{service.longDesc}</p>

              <h2 className="sp__section-title">{t('sp.treatments')}</h2>
              <ul className="sp__treatments">
                {service.details.map((d) => (
                  <li key={d} className="sp__treatment">
                    <span className="sp__treatment-check">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <h2 className="sp__section-title">{t('sp.benefits')}</h2>
              <div className="sp__benefits">
                {service.benefits.map((b, i) => (
                  <div key={b} className="sp__benefit">
                    <span className="sp__benefit-num">0{i + 1}</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <h2 className="sp__section-title">{t('sp.faqs')}</h2>
              <div className="sp__faqs">
                {service.faqs.map((faq) => (
                  <div key={faq.q} className="sp__faq">
                    <h3 className="sp__faq-q">{faq.q}</h3>
                    <p className="sp__faq-a">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              className="sp__sidebar"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="sp__cta-card">
                <h3 className="sp__cta-title">{t('sp.ctaTitle')}</h3>
                <p className="sp__cta-desc">{t('sp.ctaDesc')}</p>
                <a
                  href={`https://wa.me/18099439216?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sp__cta-btn"
                >
                  {t('sp.ctaBtn')}
                </a>
                <a href="tel:+18095473387" className="sp__cta-phone">
                  {t('sp.ctaPhone')}
                </a>
              </div>

              {/* Other services */}
              <div className="sp__other">
                <h4 className="sp__other-title">{t('sp.other')}</h4>
                {services.filter((s) => s.slug !== slug).slice(0, 4).map((s) => (
                  <Link key={s.slug} to={`/servicios/${s.slug}`} className="sp__other-link">
                    <span className="sp__other-icon">{s.icon}</span>
                    <span>{s.title}</span>
                  </Link>
                ))}
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
}
