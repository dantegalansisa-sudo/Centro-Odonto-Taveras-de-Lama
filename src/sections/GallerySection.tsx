import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const content: Record<Lang, {
  eyebrow: string;
  title: string;
  subtitle: string;
  galleryImages: { src: string; alt: string; label: string }[];
}> = {
  es: {
    eyebrow: 'Nuestro espacio',
    title: 'INSTALACIONES',
    subtitle: 'Instalaciones modernas diseñadas para tu comodidad y seguridad.',
    galleryImages: [
      { src: '/imagenes/taveras-de-lama/instalacion.png', alt: 'Instalaciones', label: 'Instalaciones' },
      { src: '/imagenes/taveras-de-lama/educacion-1.png', alt: 'Educación dental', label: 'Educación' },
      { src: '/imagenes/taveras-de-lama/educacion-2.png', alt: 'Capacitación', label: 'Capacitación' },
      { src: '/imagenes/taveras-de-lama/educacion-3.png', alt: 'Formación continua', label: 'Formación' },
      { src: '/imagenes/taveras-de-lama/instalacion.png', alt: 'Consultorio', label: 'Consultorio' },
      { src: '/imagenes/taveras-de-lama/educacion-1.png', alt: 'Equipo profesional', label: 'Profesionalismo' },
    ],
  },
  en: {
    eyebrow: 'Our space',
    title: 'FACILITIES',
    subtitle: 'Modern facilities designed for your comfort and safety.',
    galleryImages: [
      { src: '/imagenes/taveras-de-lama/instalacion.png', alt: 'Facilities', label: 'Facilities' },
      { src: '/imagenes/taveras-de-lama/educacion-1.png', alt: 'Dental education', label: 'Education' },
      { src: '/imagenes/taveras-de-lama/educacion-2.png', alt: 'Training', label: 'Training' },
      { src: '/imagenes/taveras-de-lama/educacion-3.png', alt: 'Continuous training', label: 'Learning' },
      { src: '/imagenes/taveras-de-lama/instalacion.png', alt: 'Office', label: 'Office' },
      { src: '/imagenes/taveras-de-lama/educacion-1.png', alt: 'Professional team', label: 'Professionalism' },
    ],
  },
  fr: {
    eyebrow: 'Notre espace',
    title: 'INSTALLATIONS',
    subtitle: 'Des installations modernes conçues pour votre confort et votre sécurité.',
    galleryImages: [
      { src: '/imagenes/taveras-de-lama/instalacion.png', alt: 'Installations', label: 'Installations' },
      { src: '/imagenes/taveras-de-lama/educacion-1.png', alt: 'Éducation dentaire', label: 'Éducation' },
      { src: '/imagenes/taveras-de-lama/educacion-2.png', alt: 'Formation', label: 'Formation' },
      { src: '/imagenes/taveras-de-lama/educacion-3.png', alt: 'Formation continue', label: 'Apprentissage' },
      { src: '/imagenes/taveras-de-lama/instalacion.png', alt: 'Cabinet', label: 'Cabinet' },
      { src: '/imagenes/taveras-de-lama/educacion-1.png', alt: 'Équipe professionnelle', label: 'Professionnalisme' },
    ],
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function GallerySection() {
  const { lang } = useLang();
  const c = content[lang];
  const galleryImages = c.galleryImages;
  return (
    <section id="galeria" className="gallery section" style={{ background: 'var(--bg)' }}>
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
          className="gallery__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {c.subtitle}
        </motion.p>

        <motion.div
          className="gallery__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {galleryImages.map((img) => (
            <motion.div
              key={img.label}
              className="gallery__item"
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <img src={img.src} alt={img.alt} className="gallery__img" loading="lazy" />
              <div className="gallery__overlay">
                <span className="gallery__label">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
