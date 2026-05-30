import type { Lang } from '../i18n/translations';

export type ServiceCategory = 'estetica' | 'cirugia' | 'prevencion' | 'diagnostico';

export interface ServiceContent {
  title: string;
  subtitle: string;
  desc: string;
  details: string[];
  longDesc: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
}

export interface Service extends ServiceContent {
  slug: string;
  number: string;
  icon: string;
  category: ServiceCategory;
}

interface ServiceBase {
  slug: string;
  number: string;
  icon: string;
  category: ServiceCategory;
  i18n: Record<Lang, ServiceContent>;
}

const serviceData: ServiceBase[] = [
  {
    slug: 'ortodoncia',
    number: '01',
    icon: '◈',
    category: 'estetica',
    i18n: {
      es: {
        title: 'ORTODONCIA',
        subtitle: 'Alineación de Precisión',
        desc: 'Brackets y alineadores invisibles. Tecnología digital para planificar tu sonrisa antes de comenzar.',
        details: ['Alineadores invisibles Invisalign', 'Brackets metálicos y cerámicos', 'Ortodoncia lingual', 'Simulación 3D del resultado'],
        longDesc: 'Nuestro departamento de ortodoncia combina las técnicas más avanzadas con tecnología de planificación digital para ofrecerte el tratamiento más eficiente y cómodo. Desde brackets tradicionales hasta alineadores transparentes, diseñamos un plan personalizado que se adapta a tu estilo de vida.',
        benefits: ['Sonrisa alineada y armónica', 'Mejora de la mordida y función masticatoria', 'Prevención de desgaste dental', 'Mayor facilidad para la higiene oral'],
        faqs: [
          { q: '¿Cuánto dura el tratamiento de ortodoncia?', a: 'Depende de cada caso, pero generalmente entre 12 y 24 meses. Los alineadores invisibles pueden ser más rápidos en casos leves.' },
          { q: '¿Los alineadores invisibles funcionan igual que los brackets?', a: 'Sí, para la mayoría de los casos. En casos complejos, los brackets pueden ser más efectivos.' },
        ],
      },
      en: {
        title: 'ORTHODONTICS',
        subtitle: 'Precision Alignment',
        desc: 'Braces and invisible aligners. Digital technology to plan your smile before you begin.',
        details: ['Invisalign invisible aligners', 'Metal and ceramic braces', 'Lingual orthodontics', '3D simulation of the result'],
        longDesc: 'Our orthodontics department combines the most advanced techniques with digital planning technology to offer you the most efficient and comfortable treatment. From traditional braces to clear aligners, we design a personalized plan that adapts to your lifestyle.',
        benefits: ['An aligned, harmonious smile', 'Improved bite and chewing function', 'Prevention of tooth wear', 'Easier oral hygiene'],
        faqs: [
          { q: 'How long does orthodontic treatment take?', a: 'It depends on each case, but generally between 12 and 24 months. Invisible aligners can be faster in mild cases.' },
          { q: 'Do invisible aligners work as well as braces?', a: 'Yes, for most cases. In complex cases, braces may be more effective.' },
        ],
      },
      fr: {
        title: 'ORTHODONTIE',
        subtitle: 'Alignement de Précision',
        desc: 'Bagues et aligneurs invisibles. Technologie numérique pour planifier votre sourire avant de commencer.',
        details: ['Aligneurs invisibles Invisalign', 'Bagues métalliques et céramiques', 'Orthodontie linguale', 'Simulation 3D du résultat'],
        longDesc: "Notre département d'orthodontie associe les techniques les plus avancées à la technologie de planification numérique pour vous offrir le traitement le plus efficace et confortable. Des bagues traditionnelles aux aligneurs transparents, nous concevons un plan personnalisé adapté à votre mode de vie.",
        benefits: ['Un sourire aligné et harmonieux', "Amélioration de la mastication et de l'occlusion", "Prévention de l'usure dentaire", 'Une hygiène bucco-dentaire facilitée'],
        faqs: [
          { q: "Combien de temps dure un traitement orthodontique ?", a: 'Cela dépend de chaque cas, mais généralement entre 12 et 24 mois. Les aligneurs invisibles peuvent être plus rapides dans les cas légers.' },
          { q: 'Les aligneurs invisibles sont-ils aussi efficaces que les bagues ?', a: 'Oui, dans la plupart des cas. Dans les cas complexes, les bagues peuvent être plus efficaces.' },
        ],
      },
    },
  },
  {
    slug: 'estetica-dental',
    number: '02',
    icon: '◇',
    category: 'estetica',
    i18n: {
      es: {
        title: 'ESTÉTICA',
        subtitle: 'Arte en tu Sonrisa',
        desc: 'Carillas de porcelana, blanqueamiento LED y diseño de sonrisa digital.',
        details: ['Carillas de porcelana ultrafinas', 'Blanqueamiento LED profesional', 'Diseño digital de sonrisa (DSD)', 'Resinas estéticas de alta gama'],
        longDesc: 'La estética dental es donde la ciencia se encuentra con el arte. Utilizamos tecnología de diseño digital de sonrisa (DSD) para que veas tu resultado antes de comenzar. Nuestras carillas de porcelana ultrafinas y tratamientos de blanqueamiento LED te darán la sonrisa que siempre soñaste.',
        benefits: ['Sonrisa natural y luminosa', 'Resultados inmediatos con blanqueamiento', 'Corrección de forma, color y tamaño', 'Autoestima y confianza renovadas'],
        faqs: [
          { q: '¿Las carillas dañan los dientes?', a: 'No. Las carillas ultrafinas requieren mínima preparación dental y protegen la superficie del diente.' },
          { q: '¿Cuánto dura el blanqueamiento?', a: 'Los resultados duran entre 1 y 3 años dependiendo de tus hábitos alimenticios y de higiene.' },
        ],
      },
      en: {
        title: 'AESTHETICS',
        subtitle: 'Art in Your Smile',
        desc: 'Porcelain veneers, LED whitening and digital smile design.',
        details: ['Ultra-thin porcelain veneers', 'Professional LED whitening', 'Digital Smile Design (DSD)', 'High-end aesthetic composites'],
        longDesc: 'Dental aesthetics is where science meets art. We use Digital Smile Design (DSD) technology so you can see your result before we begin. Our ultra-thin porcelain veneers and LED whitening treatments will give you the smile you have always dreamed of.',
        benefits: ['A natural, radiant smile', 'Immediate results with whitening', 'Correction of shape, color and size', 'Renewed self-esteem and confidence'],
        faqs: [
          { q: 'Do veneers damage your teeth?', a: 'No. Ultra-thin veneers require minimal tooth preparation and protect the tooth surface.' },
          { q: 'How long does whitening last?', a: 'Results last between 1 and 3 years depending on your eating and hygiene habits.' },
        ],
      },
      fr: {
        title: 'ESTHÉTIQUE',
        subtitle: "L'Art de Votre Sourire",
        desc: 'Facettes en porcelaine, blanchiment LED et conception numérique du sourire.',
        details: ['Facettes en porcelaine ultrafines', 'Blanchiment LED professionnel', 'Conception numérique du sourire (DSD)', 'Composites esthétiques haut de gamme'],
        longDesc: "L'esthétique dentaire, c'est là où la science rencontre l'art. Nous utilisons la technologie de conception numérique du sourire (DSD) pour que vous puissiez voir votre résultat avant de commencer. Nos facettes en porcelaine ultrafines et nos traitements de blanchiment LED vous offriront le sourire dont vous avez toujours rêvé.",
        benefits: ['Un sourire naturel et lumineux', 'Des résultats immédiats avec le blanchiment', 'Correction de la forme, la couleur et la taille', 'Une estime de soi et une confiance renouvelées'],
        faqs: [
          { q: 'Les facettes abîment-elles les dents ?', a: 'Non. Les facettes ultrafines nécessitent une préparation dentaire minimale et protègent la surface de la dent.' },
          { q: 'Combien de temps dure le blanchiment ?', a: "Les résultats durent entre 1 et 3 ans selon vos habitudes alimentaires et d'hygiène." },
        ],
      },
    },
  },
  {
    slug: 'implantes-dentales',
    number: '03',
    icon: '◉',
    category: 'cirugia',
    i18n: {
      es: {
        title: 'IMPLANTES',
        subtitle: 'Raíces Permanentes',
        desc: 'Implantes de titanio con guía quirúrgica. Resultados que duran toda la vida.',
        details: ['Implantes de titanio grado médico', 'Cirugía guiada por computadora', 'Carga inmediata', 'Rehabilitación sobre implantes'],
        longDesc: 'Los implantes dentales son la solución más avanzada y duradera para reemplazar dientes perdidos. Utilizamos implantes de titanio grado médico con cirugía guiada por computadora para máxima precisión y mínima invasividad. Con la técnica de carga inmediata, puedes salir con dientes el mismo día.',
        benefits: ['Solución permanente y duradera', 'Aspecto y función como dientes naturales', 'Preservación del hueso maxilar', 'No afecta dientes adyacentes'],
        faqs: [
          { q: '¿Los implantes duelen?', a: 'El procedimiento se realiza con anestesia local. Las molestias postoperatorias son mínimas y se controlan con medicación.' },
          { q: '¿Cuánto duran los implantes?', a: 'Con buen cuidado, los implantes pueden durar toda la vida. La corona sobre el implante puede necesitar reemplazo después de 15-20 años.' },
        ],
      },
      en: {
        title: 'IMPLANTS',
        subtitle: 'Permanent Roots',
        desc: 'Titanium implants with a surgical guide. Results that last a lifetime.',
        details: ['Medical-grade titanium implants', 'Computer-guided surgery', 'Immediate loading', 'Implant-supported restorations'],
        longDesc: 'Dental implants are the most advanced and durable solution for replacing missing teeth. We use medical-grade titanium implants with computer-guided surgery for maximum precision and minimal invasiveness. With the immediate-loading technique, you can leave with teeth the same day.',
        benefits: ['A permanent, lasting solution', 'Look and function like natural teeth', 'Preservation of the jawbone', 'Does not affect adjacent teeth'],
        faqs: [
          { q: 'Do implants hurt?', a: 'The procedure is performed under local anesthesia. Post-operative discomfort is minimal and controlled with medication.' },
          { q: 'How long do implants last?', a: 'With good care, implants can last a lifetime. The crown on the implant may need replacement after 15-20 years.' },
        ],
      },
      fr: {
        title: 'IMPLANTS',
        subtitle: 'Des Racines Permanentes',
        desc: 'Implants en titane avec guide chirurgical. Des résultats qui durent toute une vie.',
        details: ['Implants en titane de qualité médicale', 'Chirurgie guidée par ordinateur', 'Mise en charge immédiate', 'Réhabilitation sur implants'],
        longDesc: "Les implants dentaires sont la solution la plus avancée et durable pour remplacer les dents manquantes. Nous utilisons des implants en titane de qualité médicale avec une chirurgie guidée par ordinateur pour une précision maximale et une invasivité minimale. Grâce à la technique de mise en charge immédiate, vous pouvez repartir avec des dents le jour même.",
        benefits: ['Une solution permanente et durable', 'Aspect et fonction comme des dents naturelles', "Préservation de l'os maxillaire", "N'affecte pas les dents adjacentes"],
        faqs: [
          { q: 'Les implants sont-ils douloureux ?', a: "L'intervention est réalisée sous anesthésie locale. Les gênes postopératoires sont minimes et contrôlées par des médicaments." },
          { q: 'Combien de temps durent les implants ?', a: "Avec de bons soins, les implants peuvent durer toute une vie. La couronne sur l'implant peut nécessiter un remplacement après 15 à 20 ans." },
        ],
      },
    },
  },
  {
    slug: 'endodoncia',
    number: '04',
    icon: '◎',
    category: 'cirugia',
    i18n: {
      es: {
        title: 'ENDODONCIA',
        subtitle: 'Salvamos tu Diente',
        desc: 'Tratamientos de conducto con microscopio dental. Sin dolor.',
        details: ['Microscopio operatorio', 'Rotatorios de níquel-titanio', 'Retratamiento de conductos', 'Apicoectomía'],
        longDesc: 'La endodoncia moderna no tiene nada que ver con lo que era antes. Con microscopio operatorio y sistemas rotatorios de última generación, realizamos tratamientos de conducto precisos, rápidos y prácticamente sin dolor. Nuestro objetivo es siempre salvar tu diente natural.',
        benefits: ['Eliminación del dolor dental', 'Conservación del diente natural', 'Procedimiento rápido (1-2 sesiones)', 'Éxito superior al 95%'],
        faqs: [
          { q: '¿La endodoncia duele?', a: 'No. Se realiza con anestesia local completa. De hecho, la endodoncia elimina el dolor causado por la infección.' },
          { q: '¿Un diente con endodoncia dura menos?', a: 'No necesariamente. Con una buena restauración (corona), un diente tratado puede durar toda la vida.' },
        ],
      },
      en: {
        title: 'ENDODONTICS',
        subtitle: 'We Save Your Tooth',
        desc: 'Root canal treatments with a dental microscope. Pain-free.',
        details: ['Operating microscope', 'Nickel-titanium rotary files', 'Root canal retreatment', 'Apicoectomy'],
        longDesc: 'Modern endodontics has nothing to do with what it used to be. With an operating microscope and state-of-the-art rotary systems, we perform precise, fast and virtually painless root canal treatments. Our goal is always to save your natural tooth.',
        benefits: ['Elimination of dental pain', 'Preservation of the natural tooth', 'Fast procedure (1-2 sessions)', 'Success rate above 95%'],
        faqs: [
          { q: 'Is a root canal painful?', a: 'No. It is performed under complete local anesthesia. In fact, a root canal eliminates the pain caused by the infection.' },
          { q: 'Does a tooth with a root canal last less?', a: 'Not necessarily. With a good restoration (crown), a treated tooth can last a lifetime.' },
        ],
      },
      fr: {
        title: 'ENDODONTIE',
        subtitle: 'Nous Sauvons Votre Dent',
        desc: 'Traitements de canal au microscope dentaire. Sans douleur.',
        details: ['Microscope opératoire', 'Instruments rotatifs nickel-titane', 'Retraitement canalaire', 'Apicectomie'],
        longDesc: "L'endodontie moderne n'a plus rien à voir avec ce qu'elle était autrefois. Avec un microscope opératoire et des systèmes rotatifs de dernière génération, nous réalisons des traitements de canal précis, rapides et pratiquement indolores. Notre objectif est toujours de sauver votre dent naturelle.",
        benefits: ['Élimination de la douleur dentaire', 'Conservation de la dent naturelle', 'Procédure rapide (1 à 2 séances)', 'Un taux de réussite supérieur à 95 %'],
        faqs: [
          { q: 'Le traitement de canal est-il douloureux ?', a: "Non. Il est réalisé sous anesthésie locale complète. En fait, l'endodontie élimine la douleur causée par l'infection." },
          { q: 'Une dent dévitalisée dure-t-elle moins longtemps ?', a: 'Pas nécessairement. Avec une bonne restauration (couronne), une dent traitée peut durer toute une vie.' },
        ],
      },
    },
  },
  {
    slug: 'odontopediatria',
    number: '05',
    icon: '◦',
    category: 'prevencion',
    i18n: {
      es: {
        title: 'ODONTOPEDIATRÍA',
        subtitle: 'Desde Pequeños',
        desc: 'Atención especializada para niños. Técnicas mínimamente invasivas.',
        details: ['Sellantes de fosas y fisuras', 'Flúor profesional', 'Pulpotomías', 'Mantenedores de espacio'],
        longDesc: 'Nuestro equipo de odontopediatría está especialmente entrenado para crear experiencias positivas en los más pequeños. Utilizamos técnicas de manejo conductual y procedimientos mínimamente invasivos para que cada visita sea agradable y libre de miedo.',
        benefits: ['Ambiente amigable para niños', 'Prevención temprana de problemas dentales', 'Técnicas sin dolor', 'Educación en higiene dental'],
        faqs: [
          { q: '¿A qué edad debo llevar a mi hijo al dentista?', a: 'La primera visita debe ser al cumplir el primer año o cuando salga el primer diente.' },
          { q: '¿Los dientes de leche necesitan tratamiento?', a: 'Sí. Los dientes de leche mantienen el espacio para los permanentes y son importantes para la masticación y el habla.' },
        ],
      },
      en: {
        title: 'PEDIATRIC DENTISTRY',
        subtitle: 'From an Early Age',
        desc: 'Specialized care for children. Minimally invasive techniques.',
        details: ['Pit and fissure sealants', 'Professional fluoride', 'Pulpotomies', 'Space maintainers'],
        longDesc: 'Our pediatric dentistry team is specially trained to create positive experiences for the little ones. We use behavioral management techniques and minimally invasive procedures so that every visit is pleasant and fear-free.',
        benefits: ['A child-friendly environment', 'Early prevention of dental problems', 'Pain-free techniques', 'Education in dental hygiene'],
        faqs: [
          { q: 'At what age should I take my child to the dentist?', a: "The first visit should be at their first birthday or when the first tooth appears." },
          { q: 'Do baby teeth need treatment?', a: 'Yes. Baby teeth hold the space for permanent teeth and are important for chewing and speech.' },
        ],
      },
      fr: {
        title: 'DENTISTERIE PÉDIATRIQUE',
        subtitle: 'Dès le Plus Jeune Âge',
        desc: 'Soins spécialisés pour les enfants. Techniques peu invasives.',
        details: ['Scellement des sillons', 'Fluor professionnel', 'Pulpotomies', "Mainteneurs d'espace"],
        longDesc: 'Notre équipe de dentisterie pédiatrique est spécialement formée pour créer des expériences positives chez les tout-petits. Nous utilisons des techniques de gestion du comportement et des procédures peu invasives pour que chaque visite soit agréable et sans peur.',
        benefits: ['Un environnement convivial pour les enfants', 'Prévention précoce des problèmes dentaires', 'Des techniques sans douleur', "Éducation à l'hygiène dentaire"],
        faqs: [
          { q: 'À quel âge dois-je emmener mon enfant chez le dentiste ?', a: "La première visite doit avoir lieu à son premier anniversaire ou à l'apparition de la première dent." },
          { q: 'Les dents de lait nécessitent-elles un traitement ?', a: "Oui. Les dents de lait maintiennent l'espace pour les dents permanentes et sont importantes pour la mastication et la parole." },
        ],
      },
    },
  },
  {
    slug: 'periodoncia',
    number: '06',
    icon: '◌',
    category: 'prevencion',
    i18n: {
      es: {
        title: 'PERIODONCIA',
        subtitle: 'La Base de Todo',
        desc: 'Tratamiento de encías. La salud de tu sonrisa comienza por las raíces.',
        details: ['Limpieza profunda (curetaje)', 'Cirugía periodontal', 'Injertos de encía', 'Mantenimiento periodontal'],
        longDesc: 'Las encías son la base de una sonrisa saludable. Nuestro departamento de periodoncia trata las enfermedades de las encías con técnicas avanzadas, desde limpiezas profundas hasta cirugías regenerativas. La prevención y el mantenimiento son clave para conservar tus dientes toda la vida.',
        benefits: ['Encías saludables y firmes', 'Prevención de pérdida dental', 'Eliminación de mal aliento', 'Base sólida para otros tratamientos'],
        faqs: [
          { q: '¿Cómo sé si tengo enfermedad periodontal?', a: 'Signos comunes: encías que sangran al cepillarse, enrojecimiento, inflamación, mal aliento persistente o dientes que se mueven.' },
          { q: '¿La enfermedad periodontal tiene cura?', a: 'En etapas tempranas (gingivitis) es completamente reversible. En etapas avanzadas se puede controlar y estabilizar.' },
        ],
      },
      en: {
        title: 'PERIODONTICS',
        subtitle: 'The Foundation of Everything',
        desc: 'Gum treatment. The health of your smile starts at the roots.',
        details: ['Deep cleaning (scaling and root planing)', 'Periodontal surgery', 'Gum grafts', 'Periodontal maintenance'],
        longDesc: 'The gums are the foundation of a healthy smile. Our periodontics department treats gum disease with advanced techniques, from deep cleanings to regenerative surgery. Prevention and maintenance are key to keeping your teeth for life.',
        benefits: ['Healthy, firm gums', 'Prevention of tooth loss', 'Elimination of bad breath', 'A solid foundation for other treatments'],
        faqs: [
          { q: 'How do I know if I have periodontal disease?', a: 'Common signs: gums that bleed when brushing, redness, swelling, persistent bad breath or loose teeth.' },
          { q: 'Can periodontal disease be cured?', a: 'In early stages (gingivitis) it is completely reversible. In advanced stages it can be controlled and stabilized.' },
        ],
      },
      fr: {
        title: 'PARODONTIE',
        subtitle: 'La Base de Tout',
        desc: 'Traitement des gencives. La santé de votre sourire commence par les racines.',
        details: ['Détartrage profond (surfaçage radiculaire)', 'Chirurgie parodontale', 'Greffes de gencive', 'Maintenance parodontale'],
        longDesc: "Les gencives sont la base d'un sourire sain. Notre département de parodontie traite les maladies des gencives avec des techniques avancées, du détartrage profond à la chirurgie régénératrice. La prévention et la maintenance sont essentielles pour conserver vos dents toute la vie.",
        benefits: ['Des gencives saines et fermes', 'Prévention de la perte des dents', 'Élimination de la mauvaise haleine', "Une base solide pour d'autres traitements"],
        faqs: [
          { q: "Comment savoir si j'ai une maladie parodontale ?", a: 'Signes courants : gencives qui saignent au brossage, rougeur, gonflement, mauvaise haleine persistante ou dents mobiles.' },
          { q: 'La maladie parodontale se guérit-elle ?', a: 'Aux stades précoces (gingivite), elle est totalement réversible. Aux stades avancés, elle peut être contrôlée et stabilisée.' },
        ],
      },
    },
  },
  {
    slug: 'cirugia-oral',
    number: '07',
    icon: '✦',
    category: 'cirugia',
    i18n: {
      es: {
        title: 'CIRUGÍA ORAL',
        subtitle: 'Precisión Máxima',
        desc: 'Extracciones y cirugía reconstructiva con protocolos de última generación.',
        details: ['Extracción de cordales', 'Injertos óseos', 'Cirugía pre-protésica', 'Biopsia de tejidos orales'],
        longDesc: 'Nuestro equipo de cirugía oral realiza desde extracciones simples hasta procedimientos reconstructivos complejos. Utilizamos protocolos quirúrgicos de última generación con planificación digital para minimizar el tiempo de recuperación y maximizar los resultados.',
        benefits: ['Mínima invasividad', 'Recuperación rápida', 'Planificación digital previa', 'Protocolos de bioseguridad estrictos'],
        faqs: [
          { q: '¿Debo extraerme las muelas del juicio?', a: 'No siempre. Solo se recomienda cuando causan problemas o no tienen espacio para erupcionar correctamente.' },
          { q: '¿Cuánto tarda la recuperación?', a: 'Depende del procedimiento. Una extracción simple: 2-3 días. Cirugía de cordales: 5-7 días.' },
        ],
      },
      en: {
        title: 'ORAL SURGERY',
        subtitle: 'Maximum Precision',
        desc: 'Extractions and reconstructive surgery with state-of-the-art protocols.',
        details: ['Wisdom tooth extraction', 'Bone grafts', 'Pre-prosthetic surgery', 'Oral tissue biopsy'],
        longDesc: 'Our oral surgery team performs everything from simple extractions to complex reconstructive procedures. We use state-of-the-art surgical protocols with digital planning to minimize recovery time and maximize results.',
        benefits: ['Minimal invasiveness', 'Fast recovery', 'Prior digital planning', 'Strict biosafety protocols'],
        faqs: [
          { q: 'Do I need to have my wisdom teeth removed?', a: 'Not always. It is only recommended when they cause problems or do not have room to erupt properly.' },
          { q: 'How long does recovery take?', a: 'It depends on the procedure. A simple extraction: 2-3 days. Wisdom tooth surgery: 5-7 days.' },
        ],
      },
      fr: {
        title: 'CHIRURGIE ORALE',
        subtitle: 'Précision Maximale',
        desc: 'Extractions et chirurgie reconstructrice avec des protocoles de dernière génération.',
        details: ['Extraction des dents de sagesse', 'Greffes osseuses', 'Chirurgie pré-prothétique', 'Biopsie des tissus oraux'],
        longDesc: 'Notre équipe de chirurgie orale réalise aussi bien des extractions simples que des procédures reconstructrices complexes. Nous utilisons des protocoles chirurgicaux de dernière génération avec une planification numérique pour minimiser le temps de récupération et maximiser les résultats.',
        benefits: ['Une invasivité minimale', 'Une récupération rapide', 'Une planification numérique préalable', 'Des protocoles de biosécurité stricts'],
        faqs: [
          { q: 'Dois-je faire extraire mes dents de sagesse ?', a: "Pas toujours. Cela n'est recommandé que lorsqu'elles causent des problèmes ou n'ont pas la place de sortir correctement." },
          { q: 'Combien de temps dure la récupération ?', a: 'Cela dépend de la procédure. Une extraction simple : 2 à 3 jours. Chirurgie des dents de sagesse : 5 à 7 jours.' },
        ],
      },
    },
  },
  {
    slug: 'diagnostico-3d',
    number: '08',
    icon: '⬡',
    category: 'diagnostico',
    i18n: {
      es: {
        title: 'DIAGNÓSTICO 3D',
        subtitle: 'Ver Antes de Tratar',
        desc: 'Escáner intraoral y planificación digital. Diagnóstico perfecto.',
        details: ['Tomografía Cone Beam (CBCT)', 'Escáner intraoral digital', 'Radiografía panorámica', 'Fotografía clínica profesional'],
        longDesc: 'El diagnóstico preciso es el primer paso hacia un tratamiento exitoso. Contamos con tecnología de imagen de última generación que nos permite ver tu anatomía oral en 3D, planificar tratamientos con precisión milimétrica y mostrarte los resultados esperados antes de comenzar.',
        benefits: ['Diagnóstico preciso al 100%', 'Planificación predecible', 'Menor radiación que métodos convencionales', 'Resultados inmediatos'],
        faqs: [
          { q: '¿La tomografía 3D es segura?', a: 'Sí. La radiación es mínima, mucho menor que una tomografía médica convencional.' },
          { q: '¿Para qué sirve el escáner intraoral?', a: 'Reemplaza las impresiones con pasta. Es más cómodo, preciso y permite ver tu boca en 3D al instante.' },
        ],
      },
      en: {
        title: '3D DIAGNOSIS',
        subtitle: 'See Before Treating',
        desc: 'Intraoral scanner and digital planning. A perfect diagnosis.',
        details: ['Cone Beam CT (CBCT)', 'Digital intraoral scanner', 'Panoramic X-ray', 'Professional clinical photography'],
        longDesc: 'An accurate diagnosis is the first step toward successful treatment. We have state-of-the-art imaging technology that lets us see your oral anatomy in 3D, plan treatments with millimetric precision and show you the expected results before we begin.',
        benefits: ['100% accurate diagnosis', 'Predictable planning', 'Less radiation than conventional methods', 'Immediate results'],
        faqs: [
          { q: 'Is 3D imaging safe?', a: 'Yes. The radiation is minimal, much lower than a conventional medical CT scan.' },
          { q: 'What is the intraoral scanner for?', a: 'It replaces putty impressions. It is more comfortable, precise and lets you see your mouth in 3D instantly.' },
        ],
      },
      fr: {
        title: 'DIAGNOSTIC 3D',
        subtitle: 'Voir Avant de Traiter',
        desc: 'Scanner intra-oral et planification numérique. Un diagnostic parfait.',
        details: ['Tomographie Cone Beam (CBCT)', 'Scanner intra-oral numérique', 'Radiographie panoramique', 'Photographie clinique professionnelle'],
        longDesc: "Un diagnostic précis est la première étape vers un traitement réussi. Nous disposons d'une technologie d'imagerie de dernière génération qui nous permet de voir votre anatomie buccale en 3D, de planifier les traitements avec une précision millimétrique et de vous montrer les résultats attendus avant de commencer.",
        benefits: ['Un diagnostic précis à 100 %', 'Une planification prévisible', 'Moins de radiation que les méthodes conventionnelles', 'Des résultats immédiats'],
        faqs: [
          { q: 'La tomographie 3D est-elle sûre ?', a: "Oui. La radiation est minime, bien inférieure à celle d'un scanner médical conventionnel." },
          { q: 'À quoi sert le scanner intra-oral ?', a: 'Il remplace les empreintes à la pâte. Il est plus confortable, plus précis et permet de voir votre bouche en 3D instantanément.' },
        ],
      },
    },
  },
];

export function getServices(lang: Lang): Service[] {
  return serviceData.map(({ i18n, ...base }) => ({ ...base, ...i18n[lang] }));
}

// Backwards-compatible default export (Spanish) for any non-localized consumer.
export const services: Service[] = getServices('es');
