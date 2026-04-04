import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const patientImages = [
  { src: '/imagenes/taveras-de-lama/paciente-1.png', alt: 'Paciente feliz', label: 'Sonrisas Reales' },
  { src: '/imagenes/taveras-de-lama/paciente-2.png', alt: 'Paciente satisfecho', label: 'Resultados' },
  { src: '/imagenes/taveras-de-lama/paciente-3.png', alt: 'Paciente contento', label: 'Confianza' },
  { src: '/imagenes/taveras-de-lama/paciente-4.png', alt: 'Tratamiento exitoso', label: 'Tratamientos' },
  { src: '/imagenes/taveras-de-lama/paciente-5.png', alt: 'Paciente sonriendo', label: 'Satisfacción' },
  { src: '/imagenes/taveras-de-lama/paciente-6.png', alt: 'Resultado dental', label: 'Excelencia' },
];

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
          Nuestros pacientes
        </motion.span>
        <RevealText tag="h2" className="section-title" style={{ color: '#FFFFFF' }}>
          PACIENTES FELICES
        </RevealText>
        <motion.p
          className="gallery__subtitle"
          style={{ color: 'rgba(255,255,255,0.6)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          La satisfacción de nuestros pacientes es nuestra mayor recompensa.
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
