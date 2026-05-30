import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';

export default function FooterSection() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="section-container">
        <motion.div
          className="footer__top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="footer__brand">
            <img src="/imagenes/logo-taveras.png" alt="" aria-hidden="true" className="footer__brand-img" />
            <div>
              <div className="footer__logo">TAVERAS DE LAMA</div>
              <div className="footer__tagline">{t('footer.tagline')}</div>
            </div>
          </div>

          <ul className="footer__links">
            <li><a href="#servicios" className="footer__link">{t('nav.services')}</a></li>
            <li><a href="#transformaciones" className="footer__link">{t('nav.transformations')}</a></li>
            <li><a href="#equipo" className="footer__link">{t('nav.team')}</a></li>
            <li><a href="#tecnologia" className="footer__link">{t('nav.technology')}</a></li>
            <li><a href="#reservar" className="footer__link">{t('nav.book')}</a></li>
          </ul>

          <div className="footer__social">
            <a href="https://www.instagram.com/odontotavedlama" target="_blank" rel="noopener noreferrer" className="footer__social-link interactive" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="footer__social-link interactive" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="footer__social-link interactive" aria-label="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
              </svg>
            </a>
            <a href="#" className="footer__social-link interactive" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
              </svg>
            </a>
          </div>
        </motion.div>

        <div className="footer__bottom">
          <span className="footer__copy">
            {t('footer.rights')}
          </span>
          <span className="footer__credit">
            {t('footer.credit')} <a href="#">NEXIX Tech Studio</a>
          </span>
        </div>

        <div className="footer__legal">
          <a href="#" className="footer__legal-link">{t('footer.privacy')}</a>
          <a href="#" className="footer__legal-link">{t('footer.legal')}</a>
          <a href="#" className="footer__legal-link">{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  );
}
