import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const content: Record<Lang, {
  eyebrow: string;
  title: string;
  reviewsCount: string;
  cta: string;
  reviews: { name: string; avatar: string; date: string; rating: number; text: string }[];
}> = {
  es: {
    eyebrow: 'Lo que opinan en Google',
    title: 'RESEÑAS',
    reviewsCount: '127 reseñas',
    cta: 'Ver todas las reseñas en Google →',
    reviews: [
      { name: 'María González', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', date: 'Hace 2 semanas', rating: 5, text: 'Excelente atención desde que llegas. El Dr. Reyes me hizo un diseño de sonrisa increíble. 100% recomendado.' },
      { name: 'Roberto Méndez', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80', date: 'Hace 1 mes', rating: 5, text: 'Los mejores implantes que he visto. Sin dolor y el resultado es muy natural.' },
      { name: 'Laura Castillo', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80', date: 'Hace 3 semanas', rating: 5, text: 'Mi hijo ya no le tiene miedo al dentista gracias a la Dra. Herrera. Súper paciente y cariñosa.' },
      { name: 'Pedro Almánzar', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80', date: 'Hace 2 meses', rating: 4, text: 'Muy buena tecnología. El escáner 3D es impresionante. Solo quité una estrella por el estacionamiento.' },
      { name: 'Carmen Jiménez', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80', date: 'Hace 1 semana', rating: 5, text: 'Me hice blanqueamiento y carillas. Quedé espectacular. Llevo 6 meses y todo perfecto.' },
      { name: 'José Ramírez', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80', date: 'Hace 3 días', rating: 5, text: 'Profesionales de primer nivel. La clínica es hermosa y moderna. Mejor decisión que he tomado.' },
    ],
  },
  en: {
    eyebrow: 'What they say on Google',
    title: 'REVIEWS',
    reviewsCount: '127 reviews',
    cta: 'See all reviews on Google →',
    reviews: [
      { name: 'María González', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', date: '2 weeks ago', rating: 5, text: 'Excellent care from the moment you arrive. Dr. Reyes did an incredible smile design for me. 100% recommended.' },
      { name: 'Roberto Méndez', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80', date: '1 month ago', rating: 5, text: 'The best implants I have ever seen. Painless and the result is very natural.' },
      { name: 'Laura Castillo', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80', date: '3 weeks ago', rating: 5, text: 'My son is no longer afraid of the dentist thanks to Dr. Herrera. Super patient and caring.' },
      { name: 'Pedro Almánzar', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80', date: '2 months ago', rating: 4, text: 'Very good technology. The 3D scanner is impressive. I only took off one star because of the parking.' },
      { name: 'Carmen Jiménez', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80', date: '1 week ago', rating: 5, text: 'I had whitening and veneers done. I look spectacular. It has been 6 months and everything is perfect.' },
      { name: 'José Ramírez', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80', date: '3 days ago', rating: 5, text: 'Top-level professionals. The clinic is beautiful and modern. Best decision I have made.' },
    ],
  },
  fr: {
    eyebrow: 'Ce qu’ils disent sur Google',
    title: 'AVIS',
    reviewsCount: '127 avis',
    cta: 'Voir tous les avis sur Google →',
    reviews: [
      { name: 'María González', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', date: 'Il y a 2 semaines', rating: 5, text: "Excellent accueil dès l'arrivée. Le Dr Reyes m'a réalisé une conception du sourire incroyable. Je recommande à 100 %." },
      { name: 'Roberto Méndez', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80', date: 'Il y a 1 mois', rating: 5, text: "Les meilleurs implants que j'aie vus. Sans douleur et le résultat est très naturel." },
      { name: 'Laura Castillo', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80', date: 'Il y a 3 semaines', rating: 5, text: "Mon fils n'a plus peur du dentiste grâce à la Dre Herrera. Très patiente et bienveillante." },
      { name: 'Pedro Almánzar', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80', date: 'Il y a 2 mois', rating: 4, text: "Très bonne technologie. Le scanner 3D est impressionnant. J'ai seulement retiré une étoile à cause du stationnement." },
      { name: 'Carmen Jiménez', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80', date: 'Il y a 1 semaine', rating: 5, text: "J'ai fait un blanchiment et des facettes. Le résultat est spectaculaire. Cela fait 6 mois et tout est parfait." },
      { name: 'José Ramírez', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80', date: 'Il y a 3 jours', rating: 5, text: 'Des professionnels de haut niveau. La clinique est belle et moderne. La meilleure décision que j’aie prise.' },
    ],
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

function StarRating({ count }: { count: number }) {
  return (
    <span className="greviews__stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? 'greviews__star--filled' : 'greviews__star--empty'}>
          ★
        </span>
      ))}
    </span>
  );
}

function GoogleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function GoogleReviewsSection() {
  const { lang } = useLang();
  const c = content[lang];
  const reviews = c.reviews;
  return (
    <section className="greviews section" style={{ background: 'var(--bg-surface)' }}>
      <div className="section-container">
        <motion.span
          className="label-mono"
          style={{ color: 'var(--accent)' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {c.eyebrow}
        </motion.span>
        <RevealText tag="h2" className="section-title" style={{ color: 'var(--primary)' }}>
          {c.title}
        </RevealText>

        {/* Overall Rating */}
        <motion.div
          className="greviews__summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="greviews__summary-icon">
            <GoogleIcon size={40} />
          </div>
          <div className="greviews__summary-info">
            <div className="greviews__summary-score">4.9</div>
            <div className="greviews__summary-stars">
              <StarRating count={5} />
            </div>
            <div className="greviews__summary-count">{c.reviewsCount}</div>
          </div>
        </motion.div>

        {/* Review Cards Grid */}
        <motion.div
          className="greviews__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {reviews.map((review) => (
            <motion.div key={review.name} className="greviews__card" variants={cardVariants}>
              <div className="greviews__card-header">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="greviews__card-avatar"
                />
                <div className="greviews__card-meta">
                  <span className="greviews__card-name">{review.name}</span>
                  <span className="greviews__card-date">{review.date}</span>
                </div>
                <span className="greviews__card-google">
                  <GoogleIcon size={18} />
                </span>
              </div>
              <div className="greviews__card-rating">
                <StarRating count={review.rating} />
              </div>
              <p className="greviews__card-text">{review.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Link */}
        <motion.div
          className="greviews__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#" className="greviews__cta-link">
            {c.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
