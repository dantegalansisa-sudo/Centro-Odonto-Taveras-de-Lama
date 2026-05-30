import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

const content: Record<Lang, {
  eyebrow: string;
  title: string;
  addressLabel: string;
  hoursLabel: string;
  weekdays: string;
  saturday: string;
  sunday: string;
  contactLabel: string;
}> = {
  es: {
    eyebrow: 'Encuéntranos',
    title: 'UBICACIÓN',
    addressLabel: 'Dirección',
    hoursLabel: 'Horario',
    weekdays: 'Lunes - Viernes: 8:00 AM - 7:00 PM',
    saturday: 'Sábados: 9:00 AM - 12:00 PM',
    sunday: 'Domingos: Cerrado',
    contactLabel: 'Contacto',
  },
  en: {
    eyebrow: 'Find us',
    title: 'LOCATION',
    addressLabel: 'Address',
    hoursLabel: 'Hours',
    weekdays: 'Monday - Friday: 8:00 AM - 7:00 PM',
    saturday: 'Saturdays: 9:00 AM - 12:00 PM',
    sunday: 'Sundays: Closed',
    contactLabel: 'Contact',
  },
  fr: {
    eyebrow: 'Nous trouver',
    title: 'EMPLACEMENT',
    addressLabel: 'Adresse',
    hoursLabel: 'Horaires',
    weekdays: 'Lundi - Vendredi : 8h00 - 19h00',
    saturday: 'Samedi : 9h00 - 12h00',
    sunday: 'Dimanche : Fermé',
    contactLabel: 'Contact',
  },
};

export default function MapSection() {
  const { lang } = useLang();
  const c = content[lang];
  return (
    <section className="map-section section" style={{ background: 'var(--bg-navy)' }}>
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          {c.eyebrow}
        </motion.span>
        <RevealText tag="h2" className="section-title" style={{ color: '#FFFFFF' }}>
          {c.title}
        </RevealText>

        <motion.div
          className="map-section__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="map-section__info">
            <div className="map-section__detail">
              <span className="map-section__detail-label">{c.addressLabel}</span>
              <span className="map-section__detail-value">Av. Lincoln 901</span>
              <span className="map-section__detail-value" style={{ color: 'rgba(255,255,255,0.4)' }}>Santo Domingo, República Dominicana</span>
            </div>
            <div className="map-section__detail">
              <span className="map-section__detail-label">{c.hoursLabel}</span>
              <span className="map-section__detail-value">{c.weekdays}</span>
              <span className="map-section__detail-value">{c.saturday}</span>
              <span className="map-section__detail-value" style={{ color: 'rgba(255,255,255,0.4)' }}>{c.sunday}</span>
            </div>
            <div className="map-section__detail">
              <span className="map-section__detail-label">{c.contactLabel}</span>
              <a href="tel:+18095473387" className="map-section__detail-value map-section__link">(809) 547-3387</a>
              <a href="tel:+18099439216" className="map-section__detail-value map-section__link">(809) 943-9216</a>
              <a href="mailto:dra.taverasdlama@gmail.com" className="map-section__detail-value map-section__link">dra.taverasdlama@gmail.com</a>
            </div>
          </div>

          <div className="map-section__embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5!2d-69.95!3d18.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI4JzEyLjAiTiA2OcKwNTcnMDAuMCJX!5e0!3m2!1ses!2sdo!4v1709000000000!5m2!1ses!2sdo"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Centro Odontológico Taveras de Lama"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
