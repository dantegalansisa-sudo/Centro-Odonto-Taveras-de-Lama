import { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import IntroSequence from './components/IntroSequence';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import WhatsAppButton from './components/WhatsAppButton';
import CallButton from './components/CallButton';
import HeroSection from './sections/HeroSection';
import ManifestoSection from './sections/ManifestoSection';
import ServicesSection from './sections/ServicesSection';
import TransformationSection from './sections/TransformationSection';
import DirectorSection from './sections/DirectorSection';
import TeamSection from './sections/TeamSection';
import TechnologySection from './sections/TechnologySection';
import StatsSection from './sections/StatsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import BookingSection from './sections/BookingSection';
import GallerySection from './sections/GallerySection';
import InsuranceSection from './sections/InsuranceSection';
import BlogSection from './sections/BlogSection';
import FAQSection from './sections/FAQSection';
import MapSection from './sections/MapSection';
import FooterSection from './sections/FooterSection';
import PatientsSection from './sections/PatientsSection';
import MagneticButton from './components/MagneticButton';
import LanguageToggle from './components/LanguageToggle';
import ServicePage from './pages/ServicePage';
import BlogPage from './pages/BlogPage';
import EmergencySection from './sections/EmergencySection';
import FinancingSection from './sections/FinancingSection';
import CertificationsSection from './sections/CertificationsSection';
// VideoSection removed — no video
import { useLang } from './i18n/LanguageContext';

/* ═══════ NAVBAR ═══════ */
const NAV_LINK_KEYS = [
  { href: '#servicios', key: 'nav.services' },
  { href: '#transformaciones', key: 'nav.transformations' },
  { href: '#equipo', key: 'nav.team' },
  { href: '#tecnologia', key: 'nav.technology' },
];

const SECTION_IDS = ['servicios', 'transformaciones', 'equipo', 'tecnologia', 'reservar'];

function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      let current = '';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="/" className="navbar__logo">
          <img src="/imagenes/logo-taveras.png" alt="" aria-hidden="true" className="navbar__logo-img" />
          <span className="navbar__logo-text">TAVERAS<span className="navbar__logo-accent">DE LAMA</span></span>
        </a>

        <ul className="navbar__links">
          {NAV_LINK_KEYS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link${activeSection === link.href.slice(1) ? ' active' : ''}`}
              >
                <span className="navbar__link-number">0{i + 1}</span>
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__right">
          <LanguageToggle />
          <MagneticButton href="#reservar" className="navbar__cta navbar__cta--desktop">
            {t('nav.book')}
          </MagneticButton>
        </div>

        <button
          className={`navbar__hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mobile-menu__content">
              {NAV_LINK_KEYS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="mobile-menu__link"
                  onClick={handleNavClick}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                >
                  {t(link.key)}
                </motion.a>
              ))}
              <motion.a
                href="#reservar"
                className="mobile-menu__cta"
                onClick={handleNavClick}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              >
                {t('nav.book')} →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════ HOME PAGE ═══════ */
function HomePage() {
  const { t } = useLang();
  return (
    <>
      <a href="#main-content" className="skip-link">{t('a11y.skip')}</a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ManifestoSection />
        <ServicesSection />
        <DirectorSection />
        <TeamSection />
        <TransformationSection />
        <PatientsSection />
        <TestimonialsSection />
        <GallerySection />
        <TechnologySection />
        <StatsSection />
        <CertificationsSection />
        <InsuranceSection />
        <FinancingSection />
        <BlogSection />
        <FAQSection />
        <EmergencySection />
        <BookingSection />
        <MapSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
      <CallButton />
    </>
  );
}

/* ═══════ APP ═══════ */
function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  useEffect(() => {
    if (!isHome) setIntroComplete(true);
  }, [isHome]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {!introComplete && isHome && <IntroSequence onComplete={handleIntroComplete} />}

      {(introComplete || !isHome) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ScrollProgress />
          <CustomCursor />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios/:slug" element={
              <>
                <Navbar />
                <ServicePage />
                <FooterSection />
                <WhatsAppButton />
                <CallButton />
              </>
            } />
            <Route path="/blog/:slug" element={
              <>
                <Navbar />
                <BlogPage />
                <FooterSection />
                <WhatsAppButton />
                <CallButton />
              </>
            } />
          </Routes>
        </motion.div>
      )}
    </>
  );
}

export default App;
