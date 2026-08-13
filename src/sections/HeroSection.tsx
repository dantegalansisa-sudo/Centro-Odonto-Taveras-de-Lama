import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import { useLang } from '../i18n/LanguageContext';

/** Segundos de fundido entre el final del video y su reinicio (el clip dura ~5s). */
const CROSSFADE = 1;

export default function HeroSection() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);

  /* Bucle sin corte: dos copias del video se funden entre sí. Cuando la copia
     activa se acerca al final, la otra arranca desde cero y se hace el
     crossfade, así el final nunca choca con el inicio. */
  useEffect(() => {
    const a = videoA.current;
    const b = videoB.current;
    if (!a || !b) return;

    let active = a;
    let idle = b;
    let swapping = false;

    a.play().catch(() => {});

    const tick = () => {
      const dur = active.duration;
      if (!dur || Number.isNaN(dur)) return;

      if (!swapping && dur - active.currentTime <= CROSSFADE) {
        swapping = true;
        const outgoing = active;
        const incoming = idle;

        incoming.currentTime = 0;
        incoming.play().catch(() => {});
        incoming.style.opacity = '1';
        outgoing.style.opacity = '0';

        active = incoming;
        idle = outgoing;

        window.setTimeout(() => {
          outgoing.pause();
          swapping = false;
        }, CROSSFADE * 1000);
      }
    };

    const id = window.setInterval(tick, 120);
    return () => window.clearInterval(id);
  }, []);

  // Scroll storytelling: el video hace zoom y el contenido se desvanece al bajar.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section className="hero" ref={ref}>
      {/* Fondo de video en bucle continuo (dos capas que se funden) */}
      <motion.div className="hero__video-container" style={{ scale: videoScale, y: videoY }}>
        <video
          ref={videoA}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="hero__video hero__video--layer"
          style={{ opacity: 1 }}
          src="/videos/hero.mp4"
        />
        <video
          ref={videoB}
          muted
          playsInline
          preload="auto"
          className="hero__video hero__video--layer"
          style={{ opacity: 0 }}
          src="/videos/hero.mp4"
        />
        <div className="hero__video-overlay" />
      </motion.div>

      {/* Grain texture */}
      <div className="hero__grain" />

      <motion.div className="hero__content" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.span
          className="hero__tagline"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
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
      </motion.div>

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
