import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const content: Record<Lang, {
  label: string;
  name: string;
  credentials: string[];
  quote: string;
  stats: { value: string; label: string }[];
  role: string;
  signatureName: string;
}> = {
  es: {
    label: 'Dirección de la clínica',
    name: 'Dra. Lilian & Dr. Ismael',
    credentials: ['+30 Años de Experiencia', '2 Generaciones', 'Tradición Familiar'],
    quote: '"Esta clínica la dirigimos juntos, madre e hijo. La Dra. Lilian aporta más de 30 años de trayectoria y el Dr. Ismael la visión de la nueva generación de la odontología. Cada paciente es atendido personalmente por nosotros, con la cercanía y el compromiso de una verdadera tradición familiar."',
    stats: [
      { value: '+30', label: 'Años de trayectoria' },
      { value: '+10,000', label: 'Pacientes atendidos' },
      { value: '2', label: 'Generaciones al frente' },
    ],
    role: 'Dirección — Centro Odontológico Taveras de Lama',
    signatureName: 'Dra. Lilian Taveras de Lama · Dr. Ismael Lama Taveras',
  },
  en: {
    label: 'Clinic direction',
    name: 'Dr. Lilian & Dr. Ismael',
    credentials: ['+30 Years of Experience', '2 Generations', 'Family Tradition'],
    quote: '"We run this clinic together, mother and son. Dr. Lilian brings over 30 years of experience and Dr. Ismael the vision of a new generation of dentistry. Every patient is cared for personally by us, with the closeness and commitment of a true family tradition."',
    stats: [
      { value: '+30', label: 'Years of practice' },
      { value: '+10,000', label: 'Patients treated' },
      { value: '2', label: 'Generations leading' },
    ],
    role: 'Direction — Centro Odontológico Taveras de Lama',
    signatureName: 'Dr. Lilian Taveras de Lama · Dr. Ismael Lama Taveras',
  },
  fr: {
    label: 'Direction de la clinique',
    name: 'Dre Lilian & Dr Ismael',
    credentials: ["+30 Ans d'Expérience", '2 Générations', 'Tradition Familiale'],
    quote: "« Nous dirigeons cette clinique ensemble, mère et fils. La Dre Lilian apporte plus de 30 ans d'expérience et le Dr Ismael la vision d'une nouvelle génération de la dentisterie. Chaque patient est suivi personnellement par nous, avec la proximité et l'engagement d'une véritable tradition familiale. »",
    stats: [
      { value: '+30', label: 'Années de pratique' },
      { value: '+10 000', label: 'Patients soignés' },
      { value: '2', label: 'Générations à la tête' },
    ],
    role: 'Direction — Centro Odontológico Taveras de Lama',
    signatureName: 'Dre Lilian Taveras de Lama · Dr Ismael Lama Taveras',
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
              src="/imagenes/taveras-de-lama/directores.png"
              alt="Dra. Lilian Taveras de Lama y Dr. Ismael Lama Taveras — Dirección"
              className="director__photo director__photo--float"
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
              {c.name}
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
              <span className="director__signature-name">{c.signatureName}</span>
              <span className="director__signature-role">{c.role}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
