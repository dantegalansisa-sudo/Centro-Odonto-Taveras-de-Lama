import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const content: Record<Lang, {
  eyebrow: string;
  title: string;
  technologies: { icon: string; name: string; desc: string }[];
}> = {
  es: {
    eyebrow: 'Innovación',
    title: 'TECNOLOGÍA',
    technologies: [
      { icon: '⬡', name: 'Escáner Intraoral 3D', desc: 'Impresiones digitales. Precisión de 0.01mm.' },
      { icon: '◈', name: 'Radiografía Cone Beam', desc: 'Visión 3D de estructura ósea.' },
      { icon: '◇', name: 'Láser Dental', desc: 'Sin bisturí, mínimo tiempo de recuperación.' },
      { icon: '◉', name: 'CAD/CAM', desc: 'Coronas diseñadas y fabricadas digitalmente.' },
      { icon: '✦', name: 'Blanqueamiento LED', desc: 'Resultados inmediatos y duraderos.' },
    ],
  },
  en: {
    eyebrow: 'Innovation',
    title: 'TECHNOLOGY',
    technologies: [
      { icon: '⬡', name: '3D Intraoral Scanner', desc: 'Digital impressions. 0.01mm precision.' },
      { icon: '◈', name: 'Cone Beam X-ray', desc: '3D view of bone structure.' },
      { icon: '◇', name: 'Dental Laser', desc: 'No scalpel, minimal recovery time.' },
      { icon: '◉', name: 'CAD/CAM', desc: 'Crowns designed and made digitally.' },
      { icon: '✦', name: 'LED Whitening', desc: 'Immediate, long-lasting results.' },
    ],
  },
  fr: {
    eyebrow: 'Innovation',
    title: 'TECHNOLOGIE',
    technologies: [
      { icon: '⬡', name: 'Scanner Intra-oral 3D', desc: 'Empreintes numériques. Précision de 0,01 mm.' },
      { icon: '◈', name: 'Radiographie Cone Beam', desc: 'Vision 3D de la structure osseuse.' },
      { icon: '◇', name: 'Laser Dentaire', desc: 'Sans bistouri, temps de récupération minimal.' },
      { icon: '◉', name: 'CAO/FAO', desc: 'Couronnes conçues et fabriquées numériquement.' },
      { icon: '✦', name: 'Blanchiment LED', desc: 'Des résultats immédiats et durables.' },
    ],
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function TechnologySection() {
  const { lang } = useLang();
  const c = content[lang];
  const technologies = c.technologies;
  return (
    <section id="tecnologia" className="section" style={{ background: 'var(--bg)' }}>
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

        <motion.div
          className="tech-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="tech-card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <span className="tech-card__number">0{i + 1}</span>
              <span className="tech-card__icon">{tech.icon}</span>
              <h3 className="tech-card__name">{tech.name}</h3>
              <p className="tech-card__desc">{tech.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
