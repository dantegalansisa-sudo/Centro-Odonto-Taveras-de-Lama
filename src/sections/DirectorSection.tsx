import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const content: Record<Lang, {
  label: string;
  credentials: string[];
  quote: string;
  stats: { value: string; label: string }[];
  role: string;
}> = {
  es: {
    label: 'Directora',
    credentials: ['Odontología General', '+30 Años de Experiencia', 'Tradición Familiar'],
    quote: '"Con más de 30 años dedicados a la odontología, mi compromiso es brindar a cada paciente una atención de calidad, cercana y profesional. Junto a mi hijo, continuamos construyendo sonrisas saludables generación tras generación."',
    stats: [
      { value: '+30', label: 'Años de trayectoria' },
      { value: '+10,000', label: 'Pacientes atendidos' },
      { value: '2', label: 'Generaciones de odontólogos' },
    ],
    role: 'Directora — Centro Odontológico Taveras de Lama',
  },
  en: {
    label: 'Director',
    credentials: ['General Dentistry', '+30 Years of Experience', 'Family Tradition'],
    quote: '"With over 30 years dedicated to dentistry, my commitment is to give every patient quality, warm and professional care. Together with my son, we keep building healthy smiles generation after generation."',
    stats: [
      { value: '+30', label: 'Years of practice' },
      { value: '+10,000', label: 'Patients treated' },
      { value: '2', label: 'Generations of dentists' },
    ],
    role: 'Director — Centro Odontológico Taveras de Lama',
  },
  fr: {
    label: 'Directrice',
    credentials: ['Dentisterie Générale', "+30 Ans d'Expérience", 'Tradition Familiale'],
    quote: "« Avec plus de 30 ans consacrés à la dentisterie, mon engagement est d'offrir à chaque patient des soins de qualité, chaleureux et professionnels. Avec mon fils, nous continuons à construire des sourires sains, génération après génération. »",
    stats: [
      { value: '+30', label: 'Années de pratique' },
      { value: '+10 000', label: 'Patients soignés' },
      { value: '2', label: 'Générations de dentistes' },
    ],
    role: 'Directrice — Centro Odontológico Taveras de Lama',
  },
};

export default function DirectorSection() {
  const { lang } = useLang();
  const c = content[lang];
  return (
    <section className="director section">
      <div className="section-container">
        <div className="director__grid">
          {/* Photo side */}
          <motion.div
            className="director__photo-wrapper"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
          >
            <img
              src="/imagenes/taveras-de-lama/ceo.png"
              alt="Dra. Lilian Taveras de Lama — Directora"
              className="director__photo"
            />
            {/* Accent frame */}
            <div className="director__frame" />
          </motion.div>

          {/* Content side */}
          <div className="director__content">
            <motion.span
              className="label-mono"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {c.label}
            </motion.span>

            <RevealText tag="h2" className="director__name">
              Dra. Lilian Taveras de Lama
            </RevealText>

            <motion.div
              className="director__credentials"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="director__credential">{c.credentials[0]}</span>
              <span className="director__credential-dot" />
              <span className="director__credential">{c.credentials[1]}</span>
              <span className="director__credential-dot" />
              <span className="director__credential">{c.credentials[2]}</span>
            </motion.div>

            <motion.blockquote
              className="director__quote"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              {c.quote}
            </motion.blockquote>

            <motion.div
              className="director__stats"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
              }}
            >
              {c.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="director__stat"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
                    },
                  }}
                >
                  <span className="director__stat-value">{stat.value}</span>
                  <span className="director__stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="director__signature"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="director__signature-line" />
              <span className="director__signature-name">Dra. Lilian Taveras de Lama</span>
              <span className="director__signature-role">{c.role}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
