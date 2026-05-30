import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

interface TransformCase {
  id: number;
  title: string;
  treatment: string;
  duration: string;
  description: string;
  metrics: { label: string; value: string }[];
  beforeImg: string;
  afterImg: string;
}

const content: Record<Lang, {
  eyebrow: string;
  title: string;
  subtitle: string;
  beforeLabel: string;
  afterLabel: string;
  cases: TransformCase[];
}> = {
  es: {
    eyebrow: 'Resultados reales',
    title: 'TRANSFORMACIONES',
    subtitle: 'Cada caso es único. Estos son algunos de los resultados que hemos logrado.',
    beforeLabel: 'Antes',
    afterLabel: 'Después',
    cases: [
      {
        id: 1,
        title: 'Diseño de Sonrisa Completo',
        treatment: 'Carillas de Porcelana',
        duration: '6 meses',
        description: 'Paciente con desgaste dental y desalineación. Se realizó un diseño de sonrisa integral con 10 carillas de porcelana ultrafinas.',
        metrics: [
          { label: 'Carillas', value: '10' },
          { label: 'Sesiones', value: '4' },
          { label: 'Duración', value: '6 meses' },
        ],
        beforeImg: '/imagenes/diseno de sonrisa, antes.jpeg',
        afterImg: '/imagenes/diseno de sonrisa , despues.jpeg',
      },
      {
        id: 2,
        title: 'Ortodoncia Invisible',
        treatment: 'Alineadores Transparentes',
        duration: '14 meses',
        description: 'Corrección de mordida cruzada y apiñamiento severo mediante alineadores invisibles de última generación.',
        metrics: [
          { label: 'Alineadores', value: '28' },
          { label: 'Revisiones', value: '14' },
          { label: 'Duración', value: '14 meses' },
        ],
        beforeImg: '/imagenes/invisible, antes.jpeg',
        afterImg: '/imagenes/invisible despues.jpeg',
      },
      {
        id: 3,
        title: 'Implantes + Estética',
        treatment: 'Implantes de Titanio + Carillas',
        duration: '4 meses',
        description: 'Rehabilitación completa con implantes de titanio en zona anterior y carillas estéticas para un resultado natural.',
        metrics: [
          { label: 'Implantes', value: '3' },
          { label: 'Carillas', value: '6' },
          { label: 'Duración', value: '4 meses' },
        ],
        beforeImg: '/imagenes/antes.jpeg',
        afterImg: '/imagenes/despues.jpeg',
      },
    ],
  },
  en: {
    eyebrow: 'Real results',
    title: 'TRANSFORMATIONS',
    subtitle: 'Every case is unique. These are some of the results we have achieved.',
    beforeLabel: 'Before',
    afterLabel: 'After',
    cases: [
      {
        id: 1,
        title: 'Complete Smile Design',
        treatment: 'Porcelain Veneers',
        duration: '6 months',
        description: 'Patient with tooth wear and misalignment. A comprehensive smile design was done with 10 ultra-thin porcelain veneers.',
        metrics: [
          { label: 'Veneers', value: '10' },
          { label: 'Sessions', value: '4' },
          { label: 'Duration', value: '6 months' },
        ],
        beforeImg: '/imagenes/diseno de sonrisa, antes.jpeg',
        afterImg: '/imagenes/diseno de sonrisa , despues.jpeg',
      },
      {
        id: 2,
        title: 'Invisible Orthodontics',
        treatment: 'Clear Aligners',
        duration: '14 months',
        description: 'Correction of crossbite and severe crowding using state-of-the-art invisible aligners.',
        metrics: [
          { label: 'Aligners', value: '28' },
          { label: 'Check-ups', value: '14' },
          { label: 'Duration', value: '14 months' },
        ],
        beforeImg: '/imagenes/invisible, antes.jpeg',
        afterImg: '/imagenes/invisible despues.jpeg',
      },
      {
        id: 3,
        title: 'Implants + Aesthetics',
        treatment: 'Titanium Implants + Veneers',
        duration: '4 months',
        description: 'Full rehabilitation with titanium implants in the anterior zone and aesthetic veneers for a natural result.',
        metrics: [
          { label: 'Implants', value: '3' },
          { label: 'Veneers', value: '6' },
          { label: 'Duration', value: '4 months' },
        ],
        beforeImg: '/imagenes/antes.jpeg',
        afterImg: '/imagenes/despues.jpeg',
      },
    ],
  },
  fr: {
    eyebrow: 'Résultats réels',
    title: 'TRANSFORMATIONS',
    subtitle: 'Chaque cas est unique. Voici quelques-uns des résultats que nous avons obtenus.',
    beforeLabel: 'Avant',
    afterLabel: 'Après',
    cases: [
      {
        id: 1,
        title: 'Conception Complète du Sourire',
        treatment: 'Facettes en Porcelaine',
        duration: '6 mois',
        description: "Patient présentant une usure dentaire et un désalignement. Une conception complète du sourire a été réalisée avec 10 facettes en porcelaine ultrafines.",
        metrics: [
          { label: 'Facettes', value: '10' },
          { label: 'Séances', value: '4' },
          { label: 'Durée', value: '6 mois' },
        ],
        beforeImg: '/imagenes/diseno de sonrisa, antes.jpeg',
        afterImg: '/imagenes/diseno de sonrisa , despues.jpeg',
      },
      {
        id: 2,
        title: 'Orthodontie Invisible',
        treatment: 'Aligneurs Transparents',
        duration: '14 mois',
        description: "Correction d'une occlusion croisée et d'un encombrement sévère à l'aide d'aligneurs invisibles de dernière génération.",
        metrics: [
          { label: 'Aligneurs', value: '28' },
          { label: 'Contrôles', value: '14' },
          { label: 'Durée', value: '14 mois' },
        ],
        beforeImg: '/imagenes/invisible, antes.jpeg',
        afterImg: '/imagenes/invisible despues.jpeg',
      },
      {
        id: 3,
        title: 'Implants + Esthétique',
        treatment: 'Implants en Titane + Facettes',
        duration: '4 mois',
        description: "Réhabilitation complète avec des implants en titane dans la zone antérieure et des facettes esthétiques pour un résultat naturel.",
        metrics: [
          { label: 'Implants', value: '3' },
          { label: 'Facettes', value: '6' },
          { label: 'Durée', value: '4 mois' },
        ],
        beforeImg: '/imagenes/antes.jpeg',
        afterImg: '/imagenes/despues.jpeg',
      },
    ],
  },
};

export default function TransformationSection() {
  const { lang } = useLang();
  const c = content[lang];
  const cases = c.cases;
  const [activeCase, setActiveCase] = useState(0);
  const current = cases[activeCase];

  return (
    <section id="transformaciones" className="transformations section">
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
          className="transformations__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {c.subtitle}
        </motion.p>

        {/* Case selector tabs */}
        <motion.div
          className="transformations__tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {cases.map((c, i) => (
            <button
              key={c.id}
              className={`transformations__tab${activeCase === i ? ' active' : ''}`}
              onClick={() => setActiveCase(i)}
            >
              <span className="transformations__tab-number">0{i + 1}</span>
              <span className="transformations__tab-title">{c.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active case showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="transformations__showcase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
          >
            {/* Images side by side */}
            <div className="transformations__images">
              <div className="transformations__img-card">
                <span className="transformations__img-label">{c.beforeLabel}</span>
                <img src={current.beforeImg} alt={c.beforeLabel} />
              </div>

              <div className="transformations__arrow">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="23" stroke="url(#arrowGrad)" strokeWidth="2"/>
                  <path d="M18 24h12M26 18l6 6-6 6" stroke="url(#arrowGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="arrowGrad" x1="0" y1="0" x2="48" y2="48">
                      <stop stopColor="#00C6FF"/>
                      <stop offset="1" stopColor="#0072FF"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="transformations__img-card transformations__img-card--after">
                <span className="transformations__img-label transformations__img-label--after">{c.afterLabel}</span>
                <img src={current.afterImg} alt={c.afterLabel} />
              </div>
            </div>

            {/* Case details */}
            <div className="transformations__details">
              <div className="transformations__info">
                <span className="transformations__treatment-label">{current.treatment}</span>
                <h3 className="transformations__case-title">{current.title}</h3>
                <p className="transformations__description">{current.description}</p>
              </div>

              <div className="transformations__metrics">
                {current.metrics.map((m) => (
                  <div key={m.label} className="transformations__metric">
                    <span className="transformations__metric-value">{m.value}</span>
                    <span className="transformations__metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
