import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const content: Record<Lang, { eyebrow: string; title: string }> = {
  es: { eyebrow: 'Familia Taveras de Lama', title: 'NUESTRO EQUIPO' },
  en: { eyebrow: 'Taveras de Lama Family', title: 'OUR TEAM' },
  fr: { eyebrow: 'Famille Taveras de Lama', title: 'NOTRE ÉQUIPE' },
};

export default function TeamPhotoSection() {
  const { lang } = useLang();
  const c = content[lang];
  return (
    <section className="section" style={{ background: 'var(--bg)', paddingTop: '40px', paddingBottom: '40px' }}>
      <div className="section-container">
        <motion.div
          className="team-photo-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
          style={{
            borderRadius: '20px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src="/imagenes/lalane/team-group.png"
            alt={c.eyebrow}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '40px 32px 24px',
              background: 'linear-gradient(transparent, rgba(2,2,4,0.8))',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}
            >
              {c.eyebrow}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-brutal)',
                fontSize: 'clamp(24px, 3vw, 36px)',
                color: '#FFFFFF',
                marginTop: '4px',
              }}
            >
              {c.title}
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
