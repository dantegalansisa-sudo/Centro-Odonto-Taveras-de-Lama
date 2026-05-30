import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const content: Record<Lang, {
  eyebrow: string;
  title: string;
  faqs: { question: string; answer: string }[];
}> = {
  es: {
    eyebrow: 'Resolvemos tus dudas',
    title: 'PREGUNTAS FRECUENTES',
    faqs: [
      { question: '¿Cuánto cuesta un diseño de sonrisa?', answer: 'El costo varía según el caso. Ofrecemos una evaluación inicial gratuita donde analizamos tu situación y te presentamos un plan de tratamiento con precio exacto. Contamos con opciones de financiamiento.' },
      { question: '¿Los implantes dentales duelen?', answer: 'El procedimiento se realiza con anestesia local, por lo que no sentirás dolor durante la intervención. Después, puede haber molestias leves que se manejan con medicación básica. La mayoría de pacientes retoman sus actividades al día siguiente.' },
      { question: '¿Cuánto dura un tratamiento de ortodoncia invisible?', answer: 'Dependiendo de la complejidad del caso, el tratamiento puede durar entre 6 y 18 meses. En tu primera consulta realizamos un escaneo 3D y te mostramos una simulación del resultado final.' },
      { question: '¿Aceptan seguros dentales?', answer: 'Trabajamos con las principales aseguradoras del país. Contáctanos con los datos de tu póliza y te indicamos la cobertura disponible para tu tratamiento.' },
      { question: '¿Tienen opciones de financiamiento?', answer: 'Sí, ofrecemos planes de pago flexibles sin intereses a 3, 6 y 12 meses. También aceptamos todas las tarjetas de crédito y débito.' },
      { question: '¿Cuánto duran las carillas de porcelana?', answer: 'Con el cuidado adecuado, las carillas de porcelana pueden durar entre 10 y 15 años. Te proporcionamos una guía completa de mantenimiento y revisiones periódicas incluidas.' },
      { question: '¿Es seguro el blanqueamiento dental?', answer: 'Nuestro blanqueamiento LED profesional es completamente seguro. Utilizamos productos certificados y supervisamos todo el proceso. Los resultados son inmediatos y pueden durar hasta 2 años.' },
      { question: '¿Atienden emergencias dentales?', answer: 'Sí, ofrecemos atención de urgencias dentales de lunes a viernes. Puedes contactarnos por WhatsApp para una respuesta inmediata y coordinar tu visita de emergencia.' },
    ],
  },
  en: {
    eyebrow: 'We answer your questions',
    title: 'FREQUENTLY ASKED QUESTIONS',
    faqs: [
      { question: 'How much does a smile design cost?', answer: 'The cost varies by case. We offer a free initial evaluation where we analyze your situation and present a treatment plan with an exact price. We have financing options.' },
      { question: 'Do dental implants hurt?', answer: 'The procedure is done under local anesthesia, so you will not feel pain during it. Afterwards, there may be mild discomfort managed with basic medication. Most patients resume their activities the next day.' },
      { question: 'How long does invisible orthodontic treatment take?', answer: 'Depending on the complexity of the case, treatment can last between 6 and 18 months. At your first appointment we do a 3D scan and show you a simulation of the final result.' },
      { question: 'Do you accept dental insurance?', answer: 'We work with the leading insurers in the country. Contact us with your policy details and we will let you know the coverage available for your treatment.' },
      { question: 'Do you have financing options?', answer: 'Yes, we offer flexible interest-free payment plans at 3, 6 and 12 months. We also accept all credit and debit cards.' },
      { question: 'How long do porcelain veneers last?', answer: 'With proper care, porcelain veneers can last between 10 and 15 years. We provide a complete maintenance guide and periodic check-ups included.' },
      { question: 'Is teeth whitening safe?', answer: 'Our professional LED whitening is completely safe. We use certified products and supervise the entire process. Results are immediate and can last up to 2 years.' },
      { question: 'Do you handle dental emergencies?', answer: 'Yes, we provide dental emergency care Monday to Friday. You can reach us on WhatsApp for an immediate response and to arrange your emergency visit.' },
    ],
  },
  fr: {
    eyebrow: 'Nous répondons à vos questions',
    title: 'QUESTIONS FRÉQUENTES',
    faqs: [
      { question: 'Combien coûte une conception du sourire ?', answer: "Le coût varie selon le cas. Nous offrons une évaluation initiale gratuite au cours de laquelle nous analysons votre situation et vous présentons un plan de traitement avec un prix exact. Nous proposons des options de financement." },
      { question: 'Les implants dentaires sont-ils douloureux ?', answer: "L'intervention se déroule sous anesthésie locale, vous ne ressentirez donc aucune douleur pendant celle-ci. Ensuite, de légères gênes peuvent survenir et sont gérées avec des médicaments de base. La plupart des patients reprennent leurs activités dès le lendemain." },
      { question: "Combien de temps dure un traitement d'orthodontie invisible ?", answer: "Selon la complexité du cas, le traitement peut durer entre 6 et 18 mois. Lors de votre première consultation, nous réalisons un scan 3D et vous montrons une simulation du résultat final." },
      { question: 'Acceptez-vous les assurances dentaires ?', answer: 'Nous travaillons avec les principaux assureurs du pays. Contactez-nous avec les informations de votre police et nous vous indiquerons la couverture disponible pour votre traitement.' },
      { question: 'Avez-vous des options de financement ?', answer: 'Oui, nous proposons des plans de paiement flexibles sans intérêts à 3, 6 et 12 mois. Nous acceptons également toutes les cartes de crédit et de débit.' },
      { question: 'Combien de temps durent les facettes en porcelaine ?', answer: "Avec des soins appropriés, les facettes en porcelaine peuvent durer entre 10 et 15 ans. Nous fournissons un guide d'entretien complet et des contrôles périodiques inclus." },
      { question: 'Le blanchiment dentaire est-il sûr ?', answer: 'Notre blanchiment LED professionnel est totalement sûr. Nous utilisons des produits certifiés et supervisons tout le processus. Les résultats sont immédiats et peuvent durer jusqu’à 2 ans.' },
      { question: 'Traitez-vous les urgences dentaires ?', answer: 'Oui, nous assurons les soins d’urgence dentaire du lundi au vendredi. Vous pouvez nous contacter sur WhatsApp pour une réponse immédiate et organiser votre visite d’urgence.' },
    ],
  },
};

function FAQItem({ faq, isOpen, onToggle }: { faq: { question: string; answer: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      className="faq__item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button className={`faq__question${isOpen ? ' active' : ''}`} onClick={onToggle}>
        <span>{faq.question}</span>
        <span className="faq__icon">{isOpen ? '−' : '+'}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq__answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
          >
            <p>{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const { lang } = useLang();
  const c = content[lang];
  const faqs = c.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="faq section">
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

        <div className="faq__grid">
          <div className="faq__column">
            {faqs.slice(0, 4).map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          <div className="faq__column">
            {faqs.slice(4).map((faq, i) => (
              <FAQItem
                key={i + 4}
                faq={faq}
                isOpen={openIndex === i + 4}
                onToggle={() => setOpenIndex(openIndex === i + 4 ? null : i + 4)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
