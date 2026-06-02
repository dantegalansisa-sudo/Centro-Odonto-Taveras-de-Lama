import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RevealText from '../components/RevealText';
import { getResearch } from '../data/research';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const ui: Record<Lang, {
  eyebrow: string;
  title: string;
  subtitle: string;
  read: string;
  by: string;
  soon: string;
  placeholder: string;
}> = {
  es: {
    eyebrow: 'Investigación odontológica',
    title: 'ESPACIO CIENTÍFICO',
    subtitle: 'Un espacio dedicado a los informes y publicaciones científicas de nuestros especialistas en el área de la odontología.',
    read: 'Leer informe →',
    by: 'Por',
    soon: 'Próximamente',
    placeholder: 'Informe científico',
  },
  en: {
    eyebrow: 'Dental research',
    title: 'SCIENTIFIC SPACE',
    subtitle: 'A space dedicated to the scientific reports and publications of our specialists in the field of dentistry.',
    read: 'Read report →',
    by: 'By',
    soon: 'Coming soon',
    placeholder: 'Scientific report',
  },
  fr: {
    eyebrow: 'Recherche dentaire',
    title: 'ESPACE SCIENTIFIQUE',
    subtitle: 'Un espace dédié aux rapports et publications scientifiques de nos spécialistes dans le domaine de la dentisterie.',
    read: 'Lire le rapport →',
    by: 'Par',
    soon: 'Prochainement',
    placeholder: 'Rapport scientifique',
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function ResearchSection() {
  const { lang } = useLang();
  const t = ui[lang];
  const papers = getResearch(lang);
  const hasPapers = papers.length > 0;

  return (
    <section id="investigaciones" className="research section" style={{ background: 'var(--bg-surface)' }}>
      <div className="section-container">
        <motion.span
          className="label-mono"
          style={{ color: 'var(--accent)' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.eyebrow}
        </motion.span>
        <RevealText tag="h2" className="section-title" style={{ color: 'var(--primary)' }}>
          {t.title}
        </RevealText>
        <motion.p
          className="research__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t.subtitle}
        </motion.p>

        {hasPapers ? (
          <motion.div
            className="research__grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {papers.map((p) => (
              <Link key={p.slug} to={`/investigaciones/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <motion.article
                  className="research__card"
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <div className="research__card-img-wrap">
                    <img src={p.img} alt={p.title} className="research__card-img" loading="lazy" />
                    <span className="research__card-area">{p.area}</span>
                  </div>
                  <div className="research__card-body">
                    <div className="research__card-meta">
                      <span>{p.date}</span>
                      <span className="research__card-dot" />
                      <span>{p.readTime}</span>
                    </div>
                    <h3 className="research__card-title">{p.title}</h3>
                    <p className="research__card-abstract">{p.abstract}</p>
                    <div className="research__card-footer">
                      <span className="research__card-authors">{t.by} {p.authors.join(' · ')}</span>
                      <span className="research__card-link">{t.read}</span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="research__grid placeholder-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div key={i} className="placeholder-card" variants={cardVariants}>
                <span className="placeholder-card__soon">{t.soon}</span>
                <img src="/imagenes/logo-taveras.png" alt="" aria-hidden="true" className="placeholder-card__logo" />
                <span className="placeholder-card__label">{t.placeholder}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
