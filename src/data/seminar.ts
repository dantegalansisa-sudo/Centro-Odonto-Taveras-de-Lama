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
  topic: string;        // "Armonización y Estética Dental"
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
    topic: 'Armonización y Estética Dental',
    cardLine: 'Con la participación de la Dra. Lilian Taveras de Lama como conferencista invitada.',
    cardBtn: 'Ver información',
    intro: 'La Dra. Lilian Taveras de Lama ha sido invitada como conferencista a este seminario internacional sobre armonización y estética dental, junto a especialistas de toda Latinoamérica.',
    description: 'Este curso tiene como objetivo analizar la evidencia científica actual en armonización orofacial y comprender su impacto en la salud integral del paciente. A lo largo del programa, se estudiará la anatomía aplicada de la cara y el cuello con el fin de garantizar procedimientos estéticos seguros y predecibles. Asimismo, se evaluará el rol de la odontología en la estética facial desde una perspectiva interdisciplinaria en colaboración con la medicina. Se fomentará el desarrollo del pensamiento crítico para la adecuada selección de materiales, técnicas y tecnologías según las características de cada caso clínico. Finalmente, se promoverá la investigación y la publicación de casos clínicos como estrategia para elevar el estándar de la práctica en Latinoamérica.',
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
    topic: 'Dental Harmonization & Aesthetics',
    cardLine: 'Featuring Dr. Lilian Taveras de Lama as a guest speaker.',
    cardBtn: 'View details',
    intro: 'Dr. Lilian Taveras de Lama has been invited as a speaker to this international seminar on orofacial harmonization and dental aesthetics, alongside specialists from across Latin America.',
    description: 'This course aims to analyze the current scientific evidence on orofacial harmonization and understand its impact on the patient\'s overall health. Throughout the program, the applied anatomy of the face and neck will be studied to ensure safe and predictable aesthetic procedures. The role of dentistry in facial aesthetics will also be evaluated from an interdisciplinary perspective in collaboration with medicine. Critical thinking will be encouraged for the proper selection of materials, techniques and technologies according to each clinical case. Finally, research and the publication of clinical cases will be promoted as a strategy to raise the standard of practice in Latin America.',
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
    topic: 'Harmonisation et esthétique dentaire',
    cardLine: 'Avec la participation de la Dre Lilian Taveras de Lama en tant que conférencière invitée.',
    cardBtn: 'Voir les détails',
    intro: 'La Dre Lilian Taveras de Lama a été invitée comme conférencière à ce séminaire international sur l\'harmonisation orofaciale et l\'esthétique dentaire, aux côtés de spécialistes de toute l\'Amérique latine.',
    description: 'Ce cours vise à analyser les données scientifiques actuelles en harmonisation orofaciale et à comprendre leur impact sur la santé globale du patient. Tout au long du programme, l\'anatomie appliquée du visage et du cou sera étudiée afin de garantir des procédures esthétiques sûres et prévisibles. Le rôle de la dentisterie dans l\'esthétique faciale sera également évalué dans une perspective interdisciplinaire, en collaboration avec la médecine. Le développement de l\'esprit critique sera encouragé pour une sélection adéquate des matériaux, techniques et technologies selon chaque cas clinique. Enfin, la recherche et la publication de cas cliniques seront encouragées afin d\'élever le niveau de la pratique en Amérique latine.',
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
