import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import { useLang } from '../i18n/LanguageContext';

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section className="hero">
      {/* Video background with poster fallback */}
      <div className="hero__video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero__video"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero__video-overlay" />
      </div>

      {/* Grain texture */}
      <div className="hero__grain" />

      <div className="hero__content">
        {/* Brand name — protagonista */}
        <motion.div
          className="hero__brand"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="hero__brand-name">Taveras</span>
          <span className="hero__brand-name hero__brand-name--accent">de Lama</span>
        </motion.div>

        <motion.div
          className="hero__brand-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        />

        <motion.span
          className="hero__tagline"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {t('hero.tagline')}
        </motion.span>

        {/* Headline principal */}
        <div className="hero__title-block">
          <RevealText tag="div" className="hero-title" delay={1.2} animateOnMount>
            {t('hero.title1')}
          </RevealText>
          <RevealText
            tag="div"
            className="hero-title hero-title--outline"
            delay={1.35}
            animateOnMount
          >
            {t('hero.title2')}
          </RevealText>
          <RevealText
            tag="div"
            className="hero-title hero-title--electric"
            delay={1.5}
            animateOnMount
          >
            {t('hero.title3')}
          </RevealText>
        </div>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.8 }}
        >
          <MagneticButton className="cta-primary" href="#reservar">
            <span>{t('hero.cta')}</span>
          </MagneticButton>
          <MagneticButton className="cta-ghost" href="#servicios">
            {t('hero.explore')}
          </MagneticButton>
        </motion.div>

        {/* Data points */}
        <motion.div
          className="hero__data"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 1 }}
        >
          <div className="data-point">
            <span className="data-number">+10,000</span>
            <span className="data-label">{t('hero.smiles')}</span>
          </div>
          <div className="data-divider" />
          <div className="data-point">
            <span className="data-number">30+</span>
            <span className="data-label">{t('hero.years')}</span>
          </div>
          <div className="data-divider" />
          <div className="data-point">
            <span className="data-number">98%</span>
            <span className="data-label">{t('hero.satisfaction')}</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.3, 1] }}
        transition={{ delay: 3, repeat: Infinity, duration: 2.5 }}
      >
        <div className="scroll-line" />
        <span className="hero__scroll-text">{t('hero.scroll')}</span>
      </motion.div>
    </section>
  );
}
