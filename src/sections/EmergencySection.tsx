import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

const emergencyKeys = ['emergency.pain', 'emergency.fracture', 'emergency.abscess', 'emergency.trauma'];

export default function EmergencySection() {
  const { t } = useLang();
  return (
    <section className="emergency__section">
      <div className="emergency__glow" />
      <div className="section-container">
        <motion.div
          className="emergency__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left column — Info */}
          <div className="emergency__info">
            <motion.div className="emergency__header" variants={itemVariants}>
              <span className="emergency__icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="16" y="4" width="8" height="32" rx="2" fill="currentColor" />
                  <rect x="4" y="16" width="32" height="8" rx="2" fill="currentColor" />
                </svg>
              </span>
              <h2 className="emergency__title">{t('emergency.title')}</h2>
            </motion.div>

            <motion.p className="emergency__desc" variants={itemVariants}>
              {t('emergency.desc')}
            </motion.p>

            <motion.ul className="emergency__list" variants={itemVariants}>
              {emergencyKeys.map((key) => (
                <li key={key} className="emergency__list-item">
                  <span className="emergency__list-bullet">⚡</span>
                  {t(key)}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right column — CTA */}
          <motion.div className="emergency__cta-block" variants={itemVariants}>
            <p className="emergency__subtitle">
              {t('emergency.subtitle')}
            </p>

            <a href="tel:8095473387" className="emergency__phone">
              <span className="emergency__phone-icon">📞</span>
              (809) 547-3387
            </a>

            <motion.a
              href="tel:8095473387"
              className="emergency__cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {t('emergency.cta')}
            </motion.a>

            <a
              href="https://wa.me/18099439216"
              target="_blank"
              rel="noopener noreferrer"
              className="emergency__whatsapp"
            >
              {t('emergency.whatsapp')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
