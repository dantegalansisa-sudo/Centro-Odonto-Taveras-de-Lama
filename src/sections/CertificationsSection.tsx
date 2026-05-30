import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const content: Record<Lang, {
  eyebrow: string;
  title: string;
  footer: string;
  certifications: { abbr: string; name: string; subtitle: string }[];
}> = {
  es: {
    eyebrow: 'Respaldo profesional',
    title: 'CERTIFICACIONES',
    footer: 'Profesionales certificados con formación internacional continua',
    certifications: [
      { abbr: 'CDO', name: 'Colegio Dominicano de Odontología', subtitle: 'Miembro Activo' },
      { abbr: 'ADA', name: 'American Dental Association', subtitle: 'Miembro Internacional' },
      { abbr: 'INV', name: 'Invisalign Certified Provider', subtitle: 'Nivel Diamante' },
      { abbr: 'ISO', name: 'ISO 9001:2015', subtitle: 'Gestión de Calidad' },
      { abbr: 'STR', name: 'Straumann Partner', subtitle: 'Implantes Premium' },
      { abbr: 'DSD', name: 'Digital Smile Design', subtitle: 'Clínica Certificada DSD' },
    ],
  },
  en: {
    eyebrow: 'Professional backing',
    title: 'CERTIFICATIONS',
    footer: 'Certified professionals with continuous international training',
    certifications: [
      { abbr: 'CDO', name: 'Dominican College of Dentistry', subtitle: 'Active Member' },
      { abbr: 'ADA', name: 'American Dental Association', subtitle: 'International Member' },
      { abbr: 'INV', name: 'Invisalign Certified Provider', subtitle: 'Diamond Level' },
      { abbr: 'ISO', name: 'ISO 9001:2015', subtitle: 'Quality Management' },
      { abbr: 'STR', name: 'Straumann Partner', subtitle: 'Premium Implants' },
      { abbr: 'DSD', name: 'Digital Smile Design', subtitle: 'DSD Certified Clinic' },
    ],
  },
  fr: {
    eyebrow: 'Soutien professionnel',
    title: 'CERTIFICATIONS',
    footer: 'Des professionnels certifiés avec une formation internationale continue',
    certifications: [
      { abbr: 'CDO', name: 'Collège Dominicain de Dentisterie', subtitle: 'Membre Actif' },
      { abbr: 'ADA', name: 'American Dental Association', subtitle: 'Membre International' },
      { abbr: 'INV', name: 'Invisalign Certified Provider', subtitle: 'Niveau Diamant' },
      { abbr: 'ISO', name: 'ISO 9001:2015', subtitle: 'Gestion de la Qualité' },
      { abbr: 'STR', name: 'Straumann Partner', subtitle: 'Implants Premium' },
      { abbr: 'DSD', name: 'Digital Smile Design', subtitle: 'Clinique Certifiée DSD' },
    ],
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function CertificationsSection() {
  const { lang } = useLang();
  const c = content[lang];
  return (
    <section className="certs" style={{ background: 'var(--bg-navy)', padding: 'var(--section-padding)' }}>
      <div className="container">
        <span className="label-mono" style={{ color: 'rgba(255,255,255,0.6)' }}>
          {c.eyebrow}
        </span>

        <RevealText tag="h2" className="section-title" style={{ color: '#FFFFFF' }}>
          {c.title}
        </RevealText>

        <div className="certs__grid">
          {c.certifications.map((cert, i) => (
            <motion.div
              key={cert.abbr}
              className="certs__card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              <span className="certs__abbr">{cert.abbr}</span>
              <span className="certs__name">{cert.name}</span>
              <span className="certs__subtitle">{cert.subtitle}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="certs__footer-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {c.footer}
        </motion.p>
      </div>
    </section>
  );
}
