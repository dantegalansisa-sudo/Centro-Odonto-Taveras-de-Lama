import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const content: Record<Lang, {
  eyebrow: string;
  title: string;
  subtitle: string;
  highlights: { icon: string; title: string; desc: string }[];
}> = {
  es: {
    eyebrow: 'Conoce nuestra clínica',
    title: 'NUESTRO TRABAJO',
    subtitle: 'Mira de cerca cómo transformamos sonrisas en Taveras de Lama.',
    highlights: [
      { icon: '🏥', title: 'Instalaciones Modernas', desc: 'Espacios diseñados para tu comodidad' },
      { icon: '⚡', title: 'Tecnología de Punta', desc: 'Equipos de última generación' },
      { icon: '😁', title: 'Diseño de Sonrisa', desc: 'Transformaciones que cambian vidas' },
    ],
  },
  en: {
    eyebrow: 'Discover our clinic',
    title: 'OUR WORK',
    subtitle: 'Take a close look at how we transform smiles at Taveras de Lama.',
    highlights: [
      { icon: '🏥', title: 'Modern Facilities', desc: 'Spaces designed for your comfort' },
      { icon: '⚡', title: 'Cutting-Edge Technology', desc: 'State-of-the-art equipment' },
      { icon: '😁', title: 'Smile Design', desc: 'Transformations that change lives' },
    ],
  },
  fr: {
    eyebrow: 'Découvrez notre clinique',
    title: 'NOTRE TRAVAIL',
    subtitle: 'Découvrez de près comment nous transformons les sourires chez Taveras de Lama.',
    highlights: [
      { icon: '🏥', title: 'Installations Modernes', desc: 'Des espaces conçus pour votre confort' },
      { icon: '⚡', title: 'Technologie de Pointe', desc: 'Des équipements de dernière génération' },
      { icon: '😁', title: 'Conception du Sourire', desc: 'Des transformations qui changent des vies' },
    ],
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  }),
};

export default function VideoSection() {
  const { lang } = useLang();
  const c = content[lang];
  const highlights = c.highlights;
  return (
    <section className="vtour__section section" style={{ background: 'var(--bg-surface)' }}>
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {c.eyebrow}
        </motion.span>

        <RevealText tag="h2" className="section-title">
          {c.title}
        </RevealText>

        <motion.p
          className="vtour__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {c.subtitle}
        </motion.p>

        {/* Real clinic video — reel format (9:16) */}
        <motion.div
          className="vtour__video"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          style={{
            maxWidth: '400px',
            margin: '0 auto',
            aspectRatio: '9 / 16',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          >
            <source src="/imagenes/lalane/video-clinica.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Highlight cards */}
        <div className="vtour__highlights">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              className="vtour__card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="vtour__card-icon">{h.icon}</span>
              <h3 className="vtour__card-title">{h.title}</h3>
              <p className="vtour__card-desc">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
