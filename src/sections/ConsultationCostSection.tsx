import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useParallax } from '../hooks/useParallax';
import { useContent } from '../supabase/ContentContext';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const content: Record<Lang, {
  eyebrow: string;
  title: string;
  price: string;
  priceNote: string;
  lead: string;
  steps: { num: string; title: string; desc: string }[];
  highlight: string;
  cta: string;
}> = {
  es: {
    eyebrow: 'Sobre la consulta',
    title: 'TU CONSULTA, A TU FAVOR',
    price: 'US$200 / €200',
    priceNote: 'Costo de la consulta de evaluación',
    lead: 'La consulta inicial tiene un costo de US$200 / €200. Lo mejor: ese monto se descuenta del costo total de tu tratamiento. No es un gasto, es el primer abono a tu nueva sonrisa.',
    steps: [
      { num: '01', title: 'Agendas tu consulta', desc: 'Reservas tu evaluación con la Dra. Lilian o el Dr. Ismael.' },
      { num: '02', title: 'Evaluación completa', desc: 'Diagnóstico profesional y plan de tratamiento personalizado.' },
      { num: '03', title: 'Se descuenta del total', desc: 'Los US$200 / €200 se abonan al costo de tu procedimiento.' },
    ],
    highlight: '100% deducible de tu tratamiento',
    cta: 'Agendar mi consulta →',
  },
  en: {
    eyebrow: 'About the consultation',
    title: 'YOUR CONSULTATION, IN YOUR FAVOR',
    price: 'US$200 / €200',
    priceNote: 'Cost of the evaluation consultation',
    lead: 'The initial consultation costs US$200 / €200. The best part: that amount is deducted from the total cost of your treatment. It is not an expense — it is the first payment toward your new smile.',
    steps: [
      { num: '01', title: 'Book your consultation', desc: 'Schedule your evaluation with Dr. Lilian or Dr. Ismael.' },
      { num: '02', title: 'Full evaluation', desc: 'Professional diagnosis and a personalized treatment plan.' },
      { num: '03', title: 'Deducted from the total', desc: 'The US$200 / €200 is applied to the cost of your procedure.' },
    ],
    highlight: '100% deductible from your treatment',
    cta: 'Book my consultation →',
  },
  fr: {
    eyebrow: 'À propos de la consultation',
    title: 'VOTRE CONSULTATION, EN VOTRE FAVEUR',
    price: 'US$200 / €200',
    priceNote: "Coût de la consultation d'évaluation",
    lead: "La consultation initiale coûte 200 US$ / 200 €. Le meilleur : ce montant est déduit du coût total de votre traitement. Ce n'est pas une dépense, c'est le premier versement vers votre nouveau sourire.",
    steps: [
      { num: '01', title: 'Réservez votre consultation', desc: 'Planifiez votre évaluation avec la Dre Lilian ou le Dr Ismael.' },
      { num: '02', title: 'Évaluation complète', desc: 'Diagnostic professionnel et plan de traitement personnalisé.' },
      { num: '03', title: 'Déduit du total', desc: 'Les 200 US$ / 200 € sont appliqués au coût de votre intervention.' },
    ],
    highlight: '100 % déductible de votre traitement',
    cta: 'Réserver ma consultation →',
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function ConsultationCostSection() {
  const { lang } = useLang();
  const { consultationPrice } = useContent();
  const c = content[lang];
  const price = consultationPrice || c.price;
  const { ref: stepsRef, y: stepsY } = useParallax(28);
  return (
    <section className="ccost section">
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
        <RevealText tag="h2" className="section-title section-title--light">
          {c.title}
        </RevealText>

        <div className="ccost__grid">
          {/* Tarjeta de precio */}
          <motion.div
            className="ccost__price-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="ccost__price-label">{c.priceNote}</span>
            <span className="ccost__price">{price}</span>
            <span className="ccost__badge">✓ {c.highlight}</span>
            <p className="ccost__lead">{c.lead}</p>
            <a href="#reservar" className="ccost__cta interactive">{c.cta}</a>
          </motion.div>

          {/* Pasos */}
          <motion.div
            ref={stepsRef}
            className="ccost__steps"
            style={{ y: stepsY }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
          >
            {c.steps.map((s) => (
              <motion.div key={s.num} className="ccost__step" variants={stepVariants}>
                <span className="ccost__step-num">{s.num}</span>
                <div className="ccost__step-body">
                  <h3 className="ccost__step-title">{s.title}</h3>
                  <p className="ccost__step-desc">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
