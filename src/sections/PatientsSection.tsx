import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const content: Record<Lang, {
  eyebrow: string;
  title: string;
  subtitle: string;
  patientImages: { src: string; alt: string; label: string }[];
}> = {
  es: {
    eyebrow: 'Nuestros pacientes',
    title: 'PACIENTES FELICES',
    subtitle: 'La satisfacción de nuestros pacientes es nuestra mayor recompensa.',
    patientImages: [
      { src: '/imagenes/taveras-de-lama/paciente-1.png', alt: 'Paciente feliz', label: 'Sonrisas Reales' },
      { src: '/imagenes/taveras-de-lama/paciente-2.png', alt: 'Paciente satisfecho', label: 'Resultados' },
      { src: '/imagenes/taveras-de-lama/paciente-3.png', alt: 'Paciente contento', label: 'Confianza' },
      { src: '/imagenes/taveras-de-lama/paciente-4.png', alt: 'Tratamiento exitoso', label: 'Tratamientos' },
      { src: '/imagenes/taveras-de-lama/paciente-5.png', alt: 'Paciente sonriendo', label: 'Satisfacción' },
      { src: '/imagenes/taveras-de-lama/paciente-6.png', alt: 'Resultado dental', label: 'Excelencia' },
    ],
  },
  en: {
    eyebrow: 'Our patients',
    title: 'HAPPY PATIENTS',
    subtitle: 'The satisfaction of our patients is our greatest reward.',
    patientImages: [
      { src: '/imagenes/taveras-de-lama/paciente-1.png', alt: 'Happy patient', label: 'Real Smiles' },
      { src: '/imagenes/taveras-de-lama/paciente-2.png', alt: 'Satisfied patient', label: 'Results' },
      { src: '/imagenes/taveras-de-lama/paciente-3.png', alt: 'Content patient', label: 'Trust' },
      { src: '/imagenes/taveras-de-lama/paciente-4.png', alt: 'Successful treatment', label: 'Treatments' },
      { src: '/imagenes/taveras-de-lama/paciente-5.png', alt: 'Smiling patient', label: 'Satisfaction' },
      { src: '/imagenes/taveras-de-lama/paciente-6.png', alt: 'Dental result', label: 'Excellence' },
    ],
  },
  fr: {
    eyebrow: 'Nos patients',
    title: 'PATIENTS HEUREUX',
    subtitle: 'La satisfaction de nos patients est notre plus grande récompense.',
    patientImages: [
      { src: '/imagenes/taveras-de-lama/paciente-1.png', alt: 'Patient heureux', label: 'Sourires Réels' },
      { src: '/imagenes/taveras-de-lama/paciente-2.png', alt: 'Patient satisfait', label: 'Résultats' },
      { src: '/imagenes/taveras-de-lama/paciente-3.png', alt: 'Patient content', label: 'Confiance' },
      { src: '/imagenes/taveras-de-lama/paciente-4.png', alt: 'Traitement réussi', label: 'Traitements' },
      { src: '/imagenes/taveras-de-lama/paciente-5.png', alt: 'Patient souriant', label: 'Satisfaction' },
      { src: '/imagenes/taveras-de-lama/paciente-6.png', alt: 'Résultat dentaire', label: 'Excellence' },
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

export default function PatientsSection() {
  const { lang } = useLang();
  const c = content[lang];
  const patientImages = c.patientImages;
  return (
    <section className="gallery section" style={{ background: 'var(--bg-navy)' }}>
      <div className="section-container">
        <motion.span
          className="label-mono"
          style={{ color: 'rgba(255,255,255,0.4)' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {c.eyebrow}
        </motion.span>
        <RevealText tag="h2" className="section-title" style={{ color: '#FFFFFF' }}>
          {c.title}
        </RevealText>
        <motion.p
          className="gallery__subtitle"
          style={{ color: 'rgba(255,255,255,0.6)' }}
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
          {patientImages.map((img) => (
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
