import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const content: Record<Lang, {
  eyebrow: string;
  title: string;
  subtitle: string;
  paymentMethods: { icon: string; title: string; description: string }[];
}> = {
  es: {
    eyebrow: 'Formas de pago',
    title: 'MÉTODOS DE PAGO',
    subtitle: 'Aceptamos efectivo y todas las tarjetas de crédito para tu comodidad.',
    paymentMethods: [
      { icon: '💵', title: 'Efectivo', description: 'Pago en efectivo en nuestras instalaciones.' },
      { icon: '💳', title: 'VISA', description: 'Tarjeta de crédito y débito VISA.' },
      { icon: '💳', title: 'Mastercard', description: 'Tarjeta de crédito y débito Mastercard.' },
      { icon: '💳', title: 'American Express', description: 'Tarjeta de crédito American Express.' },
    ],
  },
  en: {
    eyebrow: 'Payment options',
    title: 'PAYMENT METHODS',
    subtitle: 'We accept cash and all credit cards for your convenience.',
    paymentMethods: [
      { icon: '💵', title: 'Cash', description: 'Cash payment at our facilities.' },
      { icon: '💳', title: 'VISA', description: 'VISA credit and debit card.' },
      { icon: '💳', title: 'Mastercard', description: 'Mastercard credit and debit card.' },
      { icon: '💳', title: 'American Express', description: 'American Express credit card.' },
    ],
  },
  fr: {
    eyebrow: 'Moyens de paiement',
    title: 'MOYENS DE PAIEMENT',
    subtitle: 'Nous acceptons les espèces et toutes les cartes de crédit pour votre confort.',
    paymentMethods: [
      { icon: '💵', title: 'Espèces', description: 'Paiement en espèces dans nos locaux.' },
      { icon: '💳', title: 'VISA', description: 'Carte de crédit et de débit VISA.' },
      { icon: '💳', title: 'Mastercard', description: 'Carte de crédit et de débit Mastercard.' },
      { icon: '💳', title: 'American Express', description: 'Carte de crédit American Express.' },
    ],
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function FinancingSection() {
  const { lang } = useLang();
  const c = content[lang];
  const paymentMethods = c.paymentMethods;
  return (
    <section className="financing section" style={{ background: 'var(--bg)' }}>
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
          className="financing__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {c.subtitle}
        </motion.p>

        <motion.div
          className="financing__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {paymentMethods.map((method) => (
            <motion.div
              key={method.title}
              className="financing__card"
              variants={itemVariants}
            >
              <span className="financing__icon">{method.icon}</span>
              <h3 className="financing__card-title">{method.title}</h3>
              <p className="financing__card-desc">{method.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
