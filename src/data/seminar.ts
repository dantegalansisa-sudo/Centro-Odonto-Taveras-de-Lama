import type { Lang } from '../i18n/translations';

/* ───────────────────────────────────────────────────────────
   SEMINARIO INTERNACIONAL — próximo evento de la Dra. Lilian
   Se muestra como tarjeta flotante en el hero y tiene su propia
   página en /seminario con toda la información del programa.
   Para actualizarlo (o desactivarlo): edita este archivo.
   ─────────────────────────────────────────────────────────── */

export const SEMINAR_ACTIVE = true;
export const SEMINAR_PATH = '/seminario';

/** Datos fijos del programa (no cambian por idioma). */
export const seminarFacts = {
  course: '4560',
  fee: '$25.00',
  time: '2:30 – 4:30',
  credits: '2',
  recommendedFor: 'D, H, A, R, L, S, G, E, M, N',
  moderator: 'Rosa Agramonte, DMD',
  speakers: [
    'Licda. Mia Agramonte',
    'Lucia Arguello, DDS, MSc',
    'Fernando T. Coelho Domingos, DDS',
    'Vanda Domingos, DDS',
    'Veronica Escalante',
    'Laura Fornasiero, DMD',
    'Carla Gimenez',
    'Brine Mercedes',
    'Dra. Lilian Taveras de Lama',
    'Carlos Sanchez',
    'Eduardo Villavicencio',
    'Karina Viteri',
  ],
  /** Nombre que se resalta en la lista de conferencistas. */
  highlight: 'Dra. Lilian Taveras de Lama',
  sponsor: 'SALA Aladome, Academia Latinoamericana de Odontólogos y Médicos Internacional',
};

export interface SeminarContent {
  badge: string;        // etiqueta corta de la tarjeta del hero
  date: string;         // fecha legible
  dateShort: string;    // fecha compacta para la tarjeta
  title: string;        // "Seminario de Medio Día"
  topic: string;        // "Ortodoncia"
  cardLine: string;     // mención de la doctora en la tarjeta
  cardBtn: string;
  intro: string;        // texto introductorio de la página
  description: string;  // descripción oficial del curso
  labels: {
    course: string;
    fee: string;
    time: string;
    credits: string;
    recommended: string;
    moderator: string;
    speakers: string;
    sponsor: string;
    about: string;
    back: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
    highlightNote: string;
  };
}

export const seminarContent: Record<Lang, SeminarContent> = {
  es: {
    badge: 'Próximo evento internacional',
    date: 'Lunes, 30 de noviembre de 2026',
    dateShort: '30 Nov · 2:30 – 4:30',
    title: 'Seminario de Medio Día',
    topic: 'Ortodoncia',
    cardLine: 'Con la participación de la Dra. Lilian Taveras de Lama como conferencista invitada.',
    cardBtn: 'Ver información',
    intro: 'La Dra. Lilian Taveras de Lama ha sido invitada como conferencista a este seminario internacional de ortodoncia, junto a especialistas de toda Latinoamérica.',
    description: '', // pendiente: texto oficial del curso de ortodoncia
    labels: {
      course: 'Curso',
      fee: 'Matrícula',
      time: 'Horario',
      credits: 'Créditos CE',
      recommended: 'Recomendado para',
      moderator: 'Moderadora',
      speakers: 'Conferencistas',
      sponsor: 'El apoyo para este programa es proporcionado por',
      about: 'Sobre el curso',
      back: '← Volver al inicio',
      ctaTitle: '¿Quieres una consulta con la doctora?',
      ctaDesc: 'Agenda tu cita y recibe atención de una especialista con más de 30 años de experiencia.',
      ctaBtn: 'Reservar cita',
      highlightNote: 'Conferencista invitada',
    },
  },
  en: {
    badge: 'Upcoming international event',
    date: 'Monday, November 30, 2026',
    dateShort: 'Nov 30 · 2:30 – 4:30',
    title: 'Half-Day Seminar',
    topic: 'Orthodontics',
    cardLine: 'Featuring Dr. Lilian Taveras de Lama as a guest speaker.',
    cardBtn: 'View details',
    intro: 'Dr. Lilian Taveras de Lama has been invited as a speaker to this international orthodontics seminar, alongside specialists from across Latin America.',
    description: '', // pendiente: texto oficial del curso de ortodoncia
    labels: {
      course: 'Course',
      fee: 'Tuition',
      time: 'Time',
      credits: 'CE Credits',
      recommended: 'Recommended for',
      moderator: 'Moderator',
      speakers: 'Speakers',
      sponsor: 'Support for this program is provided by',
      about: 'About the course',
      back: '← Back to home',
      ctaTitle: 'Want a consultation with the doctor?',
      ctaDesc: 'Book your appointment and receive care from a specialist with over 30 years of experience.',
      ctaBtn: 'Book appointment',
      highlightNote: 'Guest speaker',
    },
  },
  fr: {
    badge: 'Prochain événement international',
    date: 'Lundi 30 novembre 2026',
    dateShort: '30 nov. · 14h30 – 16h30',
    title: 'Séminaire d\'une demi-journée',
    topic: 'Orthodontie',
    cardLine: 'Avec la participation de la Dre Lilian Taveras de Lama en tant que conférencière invitée.',
    cardBtn: 'Voir les détails',
    intro: 'La Dre Lilian Taveras de Lama a été invitée comme conférencière à ce séminaire international d\'orthodontie, aux côtés de spécialistes de toute l\'Amérique latine.',
    description: '', // pendiente: texto oficial del curso de ortodoncia
    labels: {
      course: 'Cours',
      fee: 'Inscription',
      time: 'Horaire',
      credits: 'Crédits CE',
      recommended: 'Recommandé pour',
      moderator: 'Modératrice',
      speakers: 'Conférenciers',
      sponsor: 'Ce programme est soutenu par',
      about: 'À propos du cours',
      back: '← Retour à l\'accueil',
      ctaTitle: 'Une consultation avec la doctoresse ?',
      ctaDesc: 'Prenez rendez-vous et bénéficiez des soins d\'une spécialiste avec plus de 30 ans d\'expérience.',
      ctaBtn: 'Prendre rendez-vous',
      highlightNote: 'Conférencière invitée',
    },
  },
};
