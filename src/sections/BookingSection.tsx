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
  { icon: '📍', label: 'Dirección', value: 'Av. Lincoln 901, Santo Domingo' },
  { icon: '📞', label: 'Teléfono', value: '(809) 547-3387' },
  { icon: '⏰', label: 'Horario', value: 'Lun - Vie: 8:00 AM - 7:00 PM | Sáb: 9:00 AM - 12:00 PM' },
  { icon: '💬', label: 'WhatsApp', value: '(809) 943-9216' },
  { icon: '✉️', label: 'Email', value: 'dra.taverasdlama@gmail.com' },
];

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
    const name = data.get('name') as string;
    const phone = data.get('phone') as string;
    const service = data.get('service') as string;
    const date = data.get('date') as string;
    const message = data.get('message') as string;

    const text = `Hola, quiero reservar una cita.%0A%0A*Nombre:* ${name}%0A*Teléfono:* ${phone}%0A*Servicio:* ${service}%0A*Fecha preferida:* ${date}${message ? `%0A*Mensaje:* ${message}` : ''}`;

    window.open(`https://wa.me/18099439216?text=${text}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

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
                  <input type="text" name="name" placeholder={t('booking.name')} required />
                  <input type="tel" name="phone" placeholder={t('booking.phone')} required />
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
