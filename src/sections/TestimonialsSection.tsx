import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const testimonialsByLang: Record<Lang, { text: string; name: string; treatment: string; rating: number }[]> = {
  es: [
    { text: 'Más de 30 años visitando este consultorio. La Dra. Lilian y ahora su hijo Daniel mantienen la misma calidad y calidez de siempre.', name: 'Carmen R.', treatment: 'Odontología General', rating: 5 },
    { text: 'El Dr. Daniel me realizó una cirugía oral y todo salió perfecto. Se nota la formación y la dedicación familiar.', name: 'Miguel A.', treatment: 'Cirugía Oral', rating: 5 },
    { text: 'Llevo a toda mi familia aquí. La Dra. Taveras tiene una paciencia increíble con los niños y los resultados siempre son excelentes.', name: 'Patricia L.', treatment: 'Odontopediatría', rating: 5 },
  ],
  en: [
    { text: 'Over 30 years visiting this practice. Dr. Lilian and now her son Daniel keep the same quality and warmth as always.', name: 'Carmen R.', treatment: 'General Dentistry', rating: 5 },
    { text: 'Dr. Daniel performed oral surgery on me and everything went perfectly. The training and family dedication really show.', name: 'Miguel A.', treatment: 'Oral Surgery', rating: 5 },
    { text: 'I bring my whole family here. Dr. Taveras has incredible patience with children and the results are always excellent.', name: 'Patricia L.', treatment: 'Pediatric Dentistry', rating: 5 },
  ],
  fr: [
    { text: "Plus de 30 ans à fréquenter ce cabinet. La Dre Lilian et maintenant son fils Daniel conservent la même qualité et la même chaleur que toujours.", name: 'Carmen R.', treatment: 'Dentisterie Générale', rating: 5 },
    { text: "Le Dr Daniel m'a réalisé une chirurgie orale et tout s'est parfaitement déroulé. On sent la formation et le dévouement familial.", name: 'Miguel A.', treatment: 'Chirurgie Orale', rating: 5 },
    { text: "J'emmène toute ma famille ici. La Dre Taveras a une patience incroyable avec les enfants et les résultats sont toujours excellents.", name: 'Patricia L.', treatment: 'Dentisterie Pédiatrique', rating: 5 },
  ],
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function TestimonialsSection() {
  const { t, lang } = useLang();
  const testimonials = testimonialsByLang[lang];
  const gridTestimonials = testimonials.slice(1);
  const [featuredIdx, setFeaturedIdx] = useState(0);

  const nextFeatured = useCallback(() => {
    setFeaturedIdx((prev) => (prev + 1) % 3);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextFeatured, 6000);
    return () => clearInterval(timer);
  }, [nextFeatured]);

  const currentFeatured = testimonials[featuredIdx];

  return (
    <section className="testimonials section">
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('testimonials.label')}
        </motion.span>
        <RevealText tag="h2" className="section-title" style={{ textAlign: 'center', justifyContent: 'center' }}>
          {t('testimonials.title')}
        </RevealText>

        {/* Stats bar */}
        <motion.div
          className="testi__stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="testi__stat">
            <span className="testi__stat-number">4.9/5</span>
            <span className="testi__stat-label">{t('testimonials.avgRating')}</span>
          </div>
          <div className="testi__stat-divider" />
          <div className="testi__stat">
            <span className="testi__stat-number">+500</span>
            <span className="testi__stat-label">{t('testimonials.verified')}</span>
          </div>
          <div className="testi__stat-divider" />
          <div className="testi__stat">
            <span className="testi__stat-number">98%</span>
            <span className="testi__stat-label">{t('testimonials.recommend')}</span>
          </div>
        </motion.div>

        {/* Featured testimonial — large rotating quote */}
        <div className="testi__featured">
          <span className="testi__featured-quote">&ldquo;</span>
          <AnimatePresence mode="wait">
            <motion.div
              key={featuredIdx}
              className="testi__featured-content"
              initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(4px)' }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            >
              <p className="testi__featured-text">&ldquo;{currentFeatured.text}&rdquo;</p>
              <div className="testi__featured-author">
                <div className="testi__featured-avatar-placeholder">
                  {currentFeatured.name.charAt(0)}
                </div>
                <div>
                  <span className="testi__featured-name">{currentFeatured.name}</span>
                  <span className="testi__featured-treatment">{currentFeatured.treatment}</span>
                </div>
                <span className="testi__featured-rating">{'★'.repeat(currentFeatured.rating)}</span>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="testi__featured-dots">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                className={`testi__featured-dot${i === featuredIdx ? ' active' : ''}`}
                onClick={() => setFeaturedIdx(i)}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid of testimonial cards */}
        <motion.div
          className="testi__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
        >
          {gridTestimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className={`testi__card${i === 0 ? ' testi__card--accent' : ''}`}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <div className="testi__card-rating">{'★'.repeat(t.rating)}</div>
              <p className="testi__card-text">&ldquo;{t.text}&rdquo;</p>
              <div className="testi__card-author">
                <div className="testi__card-avatar-placeholder">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <span className="testi__card-name">{t.name}</span>
                  <span className="testi__card-treatment">{t.treatment}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
