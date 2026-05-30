import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const content: Record<Lang, {
  eyebrow: string;
  title: string;
  subtitle: string;
  howTitle: string;
  howDesc: string;
  cta: string;
  insurances: { name: string; type: string }[];
  benefits: string[];
}> = {
  es: {
    eyebrow: 'Cobertura médica',
    title: 'SEGUROS Y CONVENIOS',
    subtitle: 'Trabajamos con las principales aseguradoras para que tu tratamiento sea accesible.',
    howTitle: '¿Cómo funciona?',
    howDesc: 'Traé los datos de tu póliza y nosotros nos encargamos de todo. Verificamos tu cobertura, gestionamos las autorizaciones y te presentamos un presupuesto claro antes de iniciar.',
    cta: 'Consultar cobertura →',
    insurances: [
      { name: 'ARS Humano', type: 'Seguro Médico' },
      { name: 'Senasa', type: 'Seguro Nacional' },
      { name: 'ARS Palic', type: 'Seguro Médico' },
      { name: 'Mapfre Salud', type: 'Seguro Internacional' },
      { name: 'Universal', type: 'Seguro Médico' },
      { name: 'ARS Reservas', type: 'Seguro Médico' },
      { name: 'Meta Salud', type: 'Seguro Médico' },
      { name: 'Futuro', type: 'Seguro Médico' },
    ],
    benefits: [
      'Gestión directa con tu aseguradora',
      'Cobertura parcial o total según tu plan',
      'Presupuesto detallado antes del tratamiento',
      'Planes de pago para diferencia no cubierta',
    ],
  },
  en: {
    eyebrow: 'Medical coverage',
    title: 'INSURANCE & PLANS',
    subtitle: 'We work with the leading insurers so your treatment is affordable.',
    howTitle: 'How does it work?',
    howDesc: 'Bring your policy details and we take care of everything. We verify your coverage, handle the authorizations and present a clear estimate before starting.',
    cta: 'Check coverage →',
    insurances: [
      { name: 'ARS Humano', type: 'Health Insurance' },
      { name: 'Senasa', type: 'National Insurance' },
      { name: 'ARS Palic', type: 'Health Insurance' },
      { name: 'Mapfre Salud', type: 'International Insurance' },
      { name: 'Universal', type: 'Health Insurance' },
      { name: 'ARS Reservas', type: 'Health Insurance' },
      { name: 'Meta Salud', type: 'Health Insurance' },
      { name: 'Futuro', type: 'Health Insurance' },
    ],
    benefits: [
      'Direct handling with your insurer',
      'Partial or full coverage depending on your plan',
      'Detailed estimate before treatment',
      'Payment plans for the uncovered difference',
    ],
  },
  fr: {
    eyebrow: 'Couverture médicale',
    title: 'ASSURANCES & CONVENTIONS',
    subtitle: 'Nous travaillons avec les principaux assureurs pour rendre votre traitement accessible.',
    howTitle: 'Comment ça marche ?',
    howDesc: "Apportez les informations de votre police et nous nous occupons de tout. Nous vérifions votre couverture, gérons les autorisations et vous présentons un devis clair avant de commencer.",
    cta: 'Vérifier la couverture →',
    insurances: [
      { name: 'ARS Humano', type: 'Assurance Santé' },
      { name: 'Senasa', type: 'Assurance Nationale' },
      { name: 'ARS Palic', type: 'Assurance Santé' },
      { name: 'Mapfre Salud', type: 'Assurance Internationale' },
      { name: 'Universal', type: 'Assurance Santé' },
      { name: 'ARS Reservas', type: 'Assurance Santé' },
      { name: 'Meta Salud', type: 'Assurance Santé' },
      { name: 'Futuro', type: 'Assurance Santé' },
    ],
    benefits: [
      'Gestion directe avec votre assureur',
      'Couverture partielle ou totale selon votre plan',
      'Devis détaillé avant le traitement',
      'Plans de paiement pour la différence non couverte',
    ],
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function InsuranceSection() {
  const { lang } = useLang();
  const c = content[lang];
  const insurances = c.insurances;
  const benefits = c.benefits;
  return (
    <section className="insurance section" style={{ background: 'var(--bg-navy)' }}>
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          {c.eyebrow}
        </motion.span>
        <RevealText tag="h2" className="section-title" style={{ color: '#FFFFFF' }}>
          {c.title}
        </RevealText>
        <motion.p
          className="insurance__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {c.subtitle}
        </motion.p>

        <div className="insurance__content">
          {/* Insurance logos grid */}
          <motion.div
            className="insurance__grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {insurances.map((ins) => (
              <motion.div key={ins.name} className="insurance__card" variants={itemVariants}>
                <span className="insurance__card-name">{ins.name}</span>
                <span className="insurance__card-type">{ins.type}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits */}
          <motion.div
            className="insurance__benefits"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h3 className="insurance__benefits-title">{c.howTitle}</h3>
            <p className="insurance__benefits-desc">
              {c.howDesc}
            </p>
            <ul className="insurance__benefits-list">
              {benefits.map((text) => (
                <li key={text} className="insurance__benefit">
                  <span className="insurance__benefit-icon">✓</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <a href="#reservar" className="insurance__cta">
              {c.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
