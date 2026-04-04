export type Lang = 'es' | 'en';

export const translations: Record<Lang, Record<string, string>> = {
  es: {
    // Navbar
    'nav.services': 'Servicios',
    'nav.transformations': 'Transformaciones',
    'nav.team': 'Equipo',
    'nav.technology': 'Tecnología',
    'nav.book': 'Reservar Cita',

    // Hero
    'hero.tagline': 'Centro Odontológico Familiar',
    'hero.title1': 'TU',
    'hero.title2': 'SONRISA',
    'hero.title3': 'PERFECTA',
    'hero.subtitle': 'Más de 30 años cuidando sonrisas en familia.',
    'hero.cta': 'Reservar Cita →',
    'hero.explore': 'Explorar Servicios',
    'hero.smiles': 'Sonrisas Transformadas',
    'hero.years': 'Años de Experiencia',
    'hero.satisfaction': 'Satisfacción',
    'hero.scroll': 'SCROLL',

    // Emergency
    'emergency.title': 'URGENCIAS DENTALES',
    'emergency.desc': 'Atención profesional inmediata cuando más lo necesitas',
    'emergency.subtitle': 'Atención inmediata para emergencias',
    'emergency.cta': 'Llamar Ahora',
    'emergency.whatsapp': 'O escríbenos por WhatsApp →',
    'emergency.pain': 'Dolor dental severo',
    'emergency.fracture': 'Diente fracturado o roto',
    'emergency.abscess': 'Absceso o infección',
    'emergency.trauma': 'Traumatismo dental',

    // Promo
    'promo.badge': 'OFERTA ESPECIAL',
    'promo.title': 'PRIMERA CONSULTA GRATIS',
    'promo.subtitle': 'Incluye evaluación completa, radiografía panorámica y plan de tratamiento personalizado',
    'promo.value': 'Valorada en',
    'promo.urgency': 'Cupos limitados este mes',
    'promo.cta': 'Reservar Mi Consulta Gratis →',
    'promo.disclaimer': 'Oferta válida para nuevos pacientes. Sujeto a disponibilidad.',

    // Manifesto
    'manifesto.label': '— Nuestra filosofía —',
    'manifesto.quote': 'Tu sonrisa no es solo estética. Es tu primera impresión, tu confianza, tu poder.',
    'manifesto.body': 'Dos generaciones de profesionales dedicados a tu salud bucal. Combinamos experiencia, calidez y tecnología para brindarte la mejor atención odontológica.',
    'manifesto.p1.title': 'Precisión',
    'manifesto.p1.desc': 'Diagnóstico y planificación cuidadosa para cada caso',
    'manifesto.p2.title': 'Confianza',
    'manifesto.p2.desc': 'Más de 10,000 pacientes atendidos con éxito',
    'manifesto.p3.title': 'Elegancia',
    'manifesto.p3.desc': 'Resultados naturales, armoniosos y duraderos',
    'manifesto.p4.title': 'Calidez',
    'manifesto.p4.desc': 'Atención humana y personalizada en cada visita',

    // Services
    'services.label': 'Lo que hacemos',
    'services.title': 'SERVICIOS',
    'services.more': 'Ver más →',
    'services.book': 'Agendar cita →',
    'services.search': 'Buscar servicio...',
    'services.all': 'Todos',
    'services.aesthetic': 'Estética',
    'services.surgery': 'Cirugía',
    'services.prevention': 'Prevención',
    'services.diagnostic': 'Diagnóstico',
    'services.empty': 'No se encontraron servicios',

    // Testimonials
    'testimonials.label': 'Testimonios',
    'testimonials.title': 'LO QUE DICEN NUESTROS PACIENTES',
    'testimonials.avgRating': 'Calificación Promedio',
    'testimonials.verified': 'Reseñas Verificadas',
    'testimonials.recommend': 'Recomendarían',

    // Booking
    'booking.label': 'Agenda tu visita',
    'booking.title': 'RESERVA TU CITA',
    'booking.subtitle': 'El primer paso hacia tu nueva sonrisa.',
    'booking.form': 'Formulario',
    'booking.online': 'Agendar Online',
    'booking.name': 'Nombre completo',
    'booking.phone': 'Teléfono / WhatsApp',
    'booking.service': 'Servicio de interés',
    'booking.message': 'Mensaje opcional (cuéntanos sobre tu caso)',
    'booking.submit': 'Reservar por WhatsApp →',
    'booking.sent': '¡Enviado! Revisa WhatsApp',

    // Footer
    'footer.tagline': 'Centro Odontológico Familiar',
    'footer.rights': '© 2026 Centro Odontológico Taveras de Lama. Todos los derechos reservados.',
    'footer.credit': 'Diseñado por',
    'footer.privacy': 'Política de Privacidad',
    'footer.legal': 'Aviso Legal',
    'footer.terms': 'Términos y Condiciones',

    // Accessibility
    'a11y.skip': 'Saltar al contenido',

    // General
    'lang.toggle': 'EN',
  },

  en: {
    // Navbar
    'nav.services': 'Services',
    'nav.transformations': 'Transformations',
    'nav.team': 'Team',
    'nav.technology': 'Technology',
    'nav.book': 'Book Appointment',

    // Hero
    'hero.tagline': 'Family Dental Center',
    'hero.title1': 'YOUR',
    'hero.title2': 'SMILE',
    'hero.title3': 'PERFECTED',
    'hero.subtitle': 'Over 30 years caring for family smiles.',
    'hero.cta': 'Book Appointment →',
    'hero.explore': 'Explore Services',
    'hero.smiles': 'Smiles Transformed',
    'hero.years': 'Years of Experience',
    'hero.satisfaction': 'Satisfaction',
    'hero.scroll': 'SCROLL',

    // Emergency
    'emergency.title': 'DENTAL EMERGENCIES',
    'emergency.desc': 'Immediate professional care when you need it most',
    'emergency.subtitle': 'Immediate emergency care',
    'emergency.cta': 'Call Now',
    'emergency.whatsapp': 'Or message us on WhatsApp →',
    'emergency.pain': 'Severe dental pain',
    'emergency.fracture': 'Fractured or broken tooth',
    'emergency.abscess': 'Abscess or infection',
    'emergency.trauma': 'Dental trauma',

    // Promo
    'promo.badge': 'SPECIAL OFFER',
    'promo.title': 'FREE FIRST CONSULTATION',
    'promo.subtitle': 'Includes complete evaluation, panoramic X-ray and personalized treatment plan',
    'promo.value': 'Valued at',
    'promo.urgency': 'Limited spots this month',
    'promo.cta': 'Book My Free Consultation →',
    'promo.disclaimer': 'Valid for new patients. Subject to availability.',

    // Manifesto
    'manifesto.label': '— Our Philosophy —',
    'manifesto.quote': 'Your smile is not just aesthetics. It\'s your first impression, your confidence, your power.',
    'manifesto.body': 'Two generations of professionals dedicated to your oral health. We combine experience, warmth and technology to provide the best dental care.',
    'manifesto.p1.title': 'Precision',
    'manifesto.p1.desc': 'Careful diagnosis and planning for every case',
    'manifesto.p2.title': 'Trust',
    'manifesto.p2.desc': 'Over 10,000 patients successfully treated',
    'manifesto.p3.title': 'Elegance',
    'manifesto.p3.desc': 'Natural, harmonious and lasting results',
    'manifesto.p4.title': 'Warmth',
    'manifesto.p4.desc': 'Personalized human care at every visit',

    // Services
    'services.label': 'What we do',
    'services.title': 'SERVICES',
    'services.more': 'Learn more →',
    'services.book': 'Book appointment →',
    'services.search': 'Search service...',
    'services.all': 'All',
    'services.aesthetic': 'Aesthetic',
    'services.surgery': 'Surgery',
    'services.prevention': 'Prevention',
    'services.diagnostic': 'Diagnostic',
    'services.empty': 'No services found',

    // Testimonials
    'testimonials.label': 'Testimonials',
    'testimonials.title': 'WHAT OUR PATIENTS SAY',
    'testimonials.avgRating': 'Average Rating',
    'testimonials.verified': 'Verified Reviews',
    'testimonials.recommend': 'Would Recommend',

    // Booking
    'booking.label': 'Schedule your visit',
    'booking.title': 'BOOK YOUR APPOINTMENT',
    'booking.subtitle': 'The first step towards your new smile.',
    'booking.form': 'Form',
    'booking.online': 'Book Online',
    'booking.name': 'Full name',
    'booking.phone': 'Phone / WhatsApp',
    'booking.service': 'Service of interest',
    'booking.message': 'Optional message (tell us about your case)',
    'booking.submit': 'Book via WhatsApp →',
    'booking.sent': 'Sent! Check WhatsApp',

    // Footer
    'footer.tagline': 'Family Dental Center',
    'footer.rights': '© 2026 Centro Odontológico Taveras de Lama. All rights reserved.',
    'footer.credit': 'Designed by',
    'footer.privacy': 'Privacy Policy',
    'footer.legal': 'Legal Notice',
    'footer.terms': 'Terms & Conditions',

    // Accessibility
    'a11y.skip': 'Skip to content',

    // General
    'lang.toggle': 'ES',
  },
};
