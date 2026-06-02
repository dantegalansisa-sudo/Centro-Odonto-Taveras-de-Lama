import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from '../components/RevealText';
import { useLang } from '../i18n/LanguageContext';

const serviceOptions = [
  'Ortodoncia',
  'Estética Dental',
  'Implantes',
  'Endodoncia',
  'Odontopediatría',
  'Periodoncia',
  'Cirugía Oral',
  'Diagnóstico 3D',
];

const infoItems = [
  { icon: '📍', label: 'Dirección', value: 'Av. Abraham Lincoln 901, Santo Domingo' },
  { icon: '📞', label: 'Teléfono', value: '(809) 547-3387' },
  { icon: '⏰', label: 'Horario', value: 'Lun - Vie: 8:00 AM - 7:00 PM | Sáb: 9:00 AM - 12:00 PM' },
  { icon: '💬', label: 'WhatsApp', value: '(809) 943-9216' },
  { icon: '✉️', label: 'Email', value: 'dra.taverasdlama@gmail.com' },
];

// Email de destino del formulario. TODO: reemplazar / conectar a un servicio
// de correo transaccional (EmailJS, Resend, Formspree) cuando esté configurado.
const CLINIC_EMAIL = 'dra.taverasdlama@gmail.com';
const WHATSAPP_NUMBER = '18099439216';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

type BookingTab = 'form' | 'calendar';

const MONTH_NAMES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];
const DAY_LABELS = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];
const TIME_SLOTS = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

function buildCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  const startOffset = firstDay === 0 ? 6 : firstDay - 1; // Mon-based
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array(startOffset).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function CalendarWidget() {
  // TODO: Replace with real Calendly/Cal.com embed: <iframe src="https://cal.com/dental-luxury/consulta" />
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const todayDate = today.getDate();
  const cells = buildCalendarDays(year, month);

  const highlightedDates = new Set([todayDate, todayDate + 2, todayDate + 4, todayDate + 7]);

  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <div className="booking-cal__root">
      <h3 className="booking-cal__header">Selecciona fecha y hora</h3>

      <div className="booking-cal__month-label">
        {MONTH_NAMES[month]} {year}
      </div>

      <div className="booking-cal__grid">
        {DAY_LABELS.map((d) => (
          <span key={d} className="booking-cal__day-label">{d}</span>
        ))}
        {cells.map((day, i) => {
          if (day === null) return <span key={`e${i}`} className="booking-cal__cell booking-cal__cell--empty" />;
          const isPast = day < todayDate;
          const isHighlighted = highlightedDates.has(day);
          const isSelected = day === selectedDay;
          return (
            <button
              key={day}
              type="button"
              disabled={isPast}
              className={[
                'booking-cal__cell',
                isHighlighted && 'booking-cal__cell--highlight',
                isSelected && 'booking-cal__cell--selected',
                isPast && 'booking-cal__cell--past',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {selectedDay && (
          <motion.div
            key={selectedDay}
            className="booking-cal__times"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <p className="booking-cal__times-label">
              Horarios disponibles &mdash; {selectedDay} {MONTH_NAMES[month]}
            </p>
            <div className="booking-cal__time-pills">
              {TIME_SLOTS.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`booking-cal__pill${selectedTime === t ? ' booking-cal__pill--active' : ''}`}
                  onClick={() => setSelectedTime(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {selectedDay && selectedTime && (
        <motion.button
          className="booking-cta interactive booking-cal__confirm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          type="button"
          onClick={() =>
            window.open(
              `https://wa.me/18099439216?text=Hola, quiero agendar una cita el ${selectedDay} de ${MONTH_NAMES[month]} a las ${selectedTime}.`,
              '_blank',
            )
          }
        >
          Confirmar cita &rarr;
        </motion.button>
      )}

      <span className="booking-cal__powered">Powered by Cal.com</span>
    </div>
  );
}

export default function BookingSection() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [activeTab, setActiveTab] = useState<BookingTab>('form');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get('name') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const phone = (data.get('phone') as string)?.trim();
    const service = data.get('service') as string;
    const date = data.get('date') as string;
    const message = (data.get('message') as string)?.trim();

    // Envío por email: abre el cliente de correo con la solicitud prellenada.
    // Cuando se configure el correo de la clínica, se conecta aquí el servicio
    // transaccional (EmailJS / Resend / Formspree) en lugar del mailto.
    const subject = `Nueva solicitud de cita — ${name}`;
    const bodyLines = [
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Teléfono / WhatsApp: ${phone}`,
      `Servicio de interés: ${service}`,
      `Fecha preferida: ${date}`,
      message ? `Mensaje: ${message}` : '',
      '',
      'Enviado desde el formulario de la web — Centro Odontológico Taveras de Lama.',
    ].filter(Boolean);

    const mailto = `mailto:${CLINIC_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = mailto;

    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 5000);
  };

  const whatsAppHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero reservar una cita en Taveras de Lama.')}`;

  return (
    <section id="reservar" className="booking section">
      <div className="section-container">
        <motion.span
          className="label-mono"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('booking.label')}
        </motion.span>
        <RevealText tag="h2" className="section-title">
          {t('booking.title')}
        </RevealText>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t('booking.subtitle')}
        </motion.p>

        <motion.div
          className="booking__grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Info izquierda */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {infoItems.map((item) => (
              <motion.div key={item.label} className="booking__info-item" variants={itemVariants}>
                <div className="booking__info-icon">{item.icon}</div>
                <div>
                  <span className="booking__info-label">{item.label}</span>
                  <span className="booking__info-value">{item.value}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Booking right column */}
          <div className="booking-cal__column">
            {/* Tab toggle */}
            <div className="booking-cal__tabs">
              <button
                type="button"
                className={`booking-cal__tab${activeTab === 'form' ? ' booking-cal__tab--active' : ''}`}
                onClick={() => setActiveTab('form')}
              >
                {t('booking.form')}
              </button>
              <button
                type="button"
                className={`booking-cal__tab${activeTab === 'calendar' ? ' booking-cal__tab--active' : ''}`}
                onClick={() => setActiveTab('calendar')}
              >
                {t('booking.online')}
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'form' ? (
                <motion.form
                  key="form"
                  className="booking-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <input type="text" name="name" placeholder={t('booking.name')} required autoComplete="name" />
                  <input type="email" name="email" placeholder={t('booking.email')} required autoComplete="email" />
                  <input type="tel" name="phone" placeholder={t('booking.phone')} required autoComplete="tel" />
                  <select name="service" required defaultValue="">
                    <option value="" disabled>
                      {t('booking.service')}
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <input type="date" name="date" required />
                  <textarea name="message" placeholder={t('booking.message')} rows={3} />
                  <button type="submit" className="booking-cta interactive">
                    {sent ? t('booking.sent') : t('booking.submit')}
                  </button>
                  <div className="booking-form__divider"><span>{t('booking.or')}</span></div>
                  <a
                    href={whatsAppHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="booking-form__whatsapp interactive"
                  >
                    <svg className="booking-form__whatsapp-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.748-.957zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    {t('booking.whatsapp')}
                  </a>
                  <p className="booking-form__note">{t('booking.privacy')}</p>
                </motion.form>
              ) : (
                <motion.div
                  key="calendar"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CalendarWidget />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
