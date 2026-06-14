export type Lang = 'es' | 'en' | 'fr';

export const translations: Record<Lang, Record<string, string>> = {
  es: {
    // Navbar
    'nav.services': 'Servicios',
    'nav.transformations': 'Transformaciones',
    'nav.team': 'Equipo',
    'nav.research': 'Investigaciones',
    'nav.videos': 'Videos',
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
    'booking.email': 'Correo electrónico',
    'booking.phone': 'Teléfono / WhatsApp',
    'booking.service': 'Servicio de interés',
    'booking.message': 'Mensaje opcional (cuéntanos sobre tu caso)',
    'booking.submit': 'Enviar solicitud →',
    'booking.sent': '¡Solicitud enviada! Te contactaremos pronto',
    'booking.or': 'o',
    'booking.whatsapp': 'Escríbenos por WhatsApp',
    'booking.privacy': 'Tus datos solo se usan para gestionar tu cita. No compartimos tu información.',

    // Footer
    'footer.tagline': 'Centro Odontológico Dra. Lilian Taveras de Lama',
    'footer.rights': '© 2026 Centro Odontológico Dra. Lilian Taveras de Lama. Todos los derechos reservados.',
    'footer.credit': 'Diseñado por',
    'footer.privacy': 'Política de Privacidad',
    'footer.legal': 'Aviso Legal',
    'footer.terms': 'Términos y Condiciones',

    // Accessibility
    'a11y.skip': 'Saltar al contenido',

    // Service detail page
    'sp.back': '← Volver al inicio',
    'sp.notFound': 'Servicio no encontrado',
    'sp.about': 'Sobre este servicio',
    'sp.treatments': 'Tratamientos incluidos',
    'sp.benefits': 'Beneficios',
    'sp.faqs': 'Preguntas frecuentes',
    'sp.ctaTitle': '¿Te interesa este tratamiento?',
    'sp.ctaDesc': 'Agenda tu consulta de evaluación y recibe un plan personalizado.',
    'sp.ctaBtn': 'Consultar por WhatsApp →',
    'sp.ctaPhone': 'O llámanos: (809) 547-3387',
    'sp.other': 'Otros servicios',

    // General
    'lang.toggle': 'EN',
  },

  en: {
    // Navbar
    'nav.services': 'Services',
    'nav.transformations': 'Transformations',
    'nav.team': 'Team',
    'nav.research': 'Research',
    'nav.videos': 'Videos',
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
    'booking.email': 'Email address',
    'booking.phone': 'Phone / WhatsApp',
    'booking.service': 'Service of interest',
    'booking.message': 'Optional message (tell us about your case)',
    'booking.submit': 'Send request →',
    'booking.sent': 'Request sent! We will contact you soon',
    'booking.or': 'or',
    'booking.whatsapp': 'Message us on WhatsApp',
    'booking.privacy': 'Your data is only used to manage your appointment. We never share your information.',

    // Footer
    'footer.tagline': 'Centro Odontológico Dra. Lilian Taveras de Lama',
    'footer.rights': '© 2026 Centro Odontológico Dra. Lilian Taveras de Lama. All rights reserved.',
    'footer.credit': 'Designed by',
    'footer.privacy': 'Privacy Policy',
    'footer.legal': 'Legal Notice',
    'footer.terms': 'Terms & Conditions',

    // Accessibility
    'a11y.skip': 'Skip to content',

    // Service detail page
    'sp.back': '← Back to home',
    'sp.notFound': 'Service not found',
    'sp.about': 'About this service',
    'sp.treatments': 'Treatments included',
    'sp.benefits': 'Benefits',
    'sp.faqs': 'Frequently asked questions',
    'sp.ctaTitle': 'Interested in this treatment?',
    'sp.ctaDesc': 'Book your evaluation consultation and receive a personalized plan.',
    'sp.ctaBtn': 'Ask via WhatsApp →',
    'sp.ctaPhone': 'Or call us: (809) 547-3387',
    'sp.other': 'Other services',

    // General
    'lang.toggle': 'ES',
  },

  fr: {
    // Navbar
    'nav.services': 'Services',
    'nav.transformations': 'Transformations',
    'nav.team': 'Équipe',
    'nav.research': 'Recherche',
    'nav.videos': 'Vidéos',
    'nav.technology': 'Technologie',
    'nav.book': 'Prendre Rendez-vous',

    // Hero
    'hero.tagline': 'Centre Dentaire Familial',
    'hero.title1': 'VOTRE',
    'hero.title2': 'SOURIRE',
    'hero.title3': 'PARFAIT',
    'hero.subtitle': 'Plus de 30 ans à prendre soin des sourires en famille.',
    'hero.cta': 'Prendre Rendez-vous →',
    'hero.explore': 'Découvrir les Services',
    'hero.smiles': 'Sourires Transformés',
    'hero.years': 'Années d\'Expérience',
    'hero.satisfaction': 'Satisfaction',
    'hero.scroll': 'DÉFILER',

    // Emergency
    'emergency.title': 'URGENCES DENTAIRES',
    'emergency.desc': 'Soins professionnels immédiats quand vous en avez le plus besoin',
    'emergency.subtitle': 'Soins immédiats pour les urgences',
    'emergency.cta': 'Appeler Maintenant',
    'emergency.whatsapp': 'Ou écrivez-nous sur WhatsApp →',
    'emergency.pain': 'Douleur dentaire sévère',
    'emergency.fracture': 'Dent fracturée ou cassée',
    'emergency.abscess': 'Abcès ou infection',
    'emergency.trauma': 'Traumatisme dentaire',

    // Promo
    'promo.badge': 'OFFRE SPÉCIALE',
    'promo.title': 'PREMIÈRE CONSULTATION GRATUITE',
    'promo.subtitle': 'Comprend une évaluation complète, une radiographie panoramique et un plan de traitement personnalisé',
    'promo.value': 'Évaluée à',
    'promo.urgency': 'Places limitées ce mois-ci',
    'promo.cta': 'Réserver Ma Consultation Gratuite →',
    'promo.disclaimer': 'Offre valable pour les nouveaux patients. Sous réserve de disponibilité.',

    // Manifesto
    'manifesto.label': '— Notre philosophie —',
    'manifesto.quote': 'Votre sourire n\'est pas qu\'une question d\'esthétique. C\'est votre première impression, votre confiance, votre force.',
    'manifesto.body': 'Deux générations de professionnels dédiés à votre santé bucco-dentaire. Nous allions expérience, chaleur humaine et technologie pour vous offrir les meilleurs soins dentaires.',
    'manifesto.p1.title': 'Précision',
    'manifesto.p1.desc': 'Diagnostic et planification minutieux pour chaque cas',
    'manifesto.p2.title': 'Confiance',
    'manifesto.p2.desc': 'Plus de 10 000 patients traités avec succès',
    'manifesto.p3.title': 'Élégance',
    'manifesto.p3.desc': 'Des résultats naturels, harmonieux et durables',
    'manifesto.p4.title': 'Chaleur',
    'manifesto.p4.desc': 'Des soins humains et personnalisés à chaque visite',

    // Services
    'services.label': 'Ce que nous faisons',
    'services.title': 'SERVICES',
    'services.more': 'En savoir plus →',
    'services.book': 'Prendre rendez-vous →',
    'services.search': 'Rechercher un service...',
    'services.all': 'Tous',
    'services.aesthetic': 'Esthétique',
    'services.surgery': 'Chirurgie',
    'services.prevention': 'Prévention',
    'services.diagnostic': 'Diagnostic',
    'services.empty': 'Aucun service trouvé',

    // Testimonials
    'testimonials.label': 'Témoignages',
    'testimonials.title': 'CE QUE DISENT NOS PATIENTS',
    'testimonials.avgRating': 'Note Moyenne',
    'testimonials.verified': 'Avis Vérifiés',
    'testimonials.recommend': 'Recommanderaient',

    // Booking
    'booking.label': 'Planifiez votre visite',
    'booking.title': 'RÉSERVEZ VOTRE RENDEZ-VOUS',
    'booking.subtitle': 'Le premier pas vers votre nouveau sourire.',
    'booking.form': 'Formulaire',
    'booking.online': 'Réserver en Ligne',
    'booking.name': 'Nom complet',
    'booking.email': 'Adresse e-mail',
    'booking.phone': 'Téléphone / WhatsApp',
    'booking.service': 'Service souhaité',
    'booking.message': 'Message optionnel (parlez-nous de votre cas)',
    'booking.submit': 'Envoyer la demande →',
    'booking.sent': 'Demande envoyée ! Nous vous contacterons bientôt',
    'booking.or': 'ou',
    'booking.whatsapp': 'Écrivez-nous sur WhatsApp',
    'booking.privacy': 'Vos données ne servent qu’à gérer votre rendez-vous. Nous ne partageons jamais vos informations.',

    // Footer
    'footer.tagline': 'Centro Odontológico Dra. Lilian Taveras de Lama',
    'footer.rights': '© 2026 Centro Odontológico Dra. Lilian Taveras de Lama. Tous droits réservés.',
    'footer.credit': 'Conçu par',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.legal': 'Mentions Légales',
    'footer.terms': 'Conditions Générales',

    // Accessibility
    'a11y.skip': 'Aller au contenu',

    // Service detail page
    'sp.back': "← Retour à l'accueil",
    'sp.notFound': 'Service introuvable',
    'sp.about': 'À propos de ce service',
    'sp.treatments': 'Traitements inclus',
    'sp.benefits': 'Avantages',
    'sp.faqs': 'Questions fréquentes',
    'sp.ctaTitle': 'Ce traitement vous intéresse ?',
    'sp.ctaDesc': 'Réservez votre consultation d\'évaluation et recevez un plan personnalisé.',
    'sp.ctaBtn': 'Demander via WhatsApp →',
    'sp.ctaPhone': 'Ou appelez-nous : (809) 547-3387',
    'sp.other': 'Autres services',

    // General
    'lang.toggle': 'FR',
  },
};
