import type { Lang } from '../i18n/translations';

/* ───────────────────────────────────────────────────────────
   INVESTIGACIONES CIENTÍFICAS — Dres. Taveras de Lama
   Espacio para publicar investigación odontológica propia.
   Para añadir una nueva publicación: duplica un bloque del array
   `researchData`, asigna un `slug` único, la imagen, el PDF
   (opcional, colócalo en /public/investigaciones/) y traduce el
   contenido en es / en / fr.
   ─────────────────────────────────────────────────────────── */

export interface ResearchPaper {
  slug: string;
  area: string;
  title: string;
  abstract: string;
  authors: string[];
  date: string;        // ej. "Marzo 2025"
  readTime: string;    // ej. "8 min"
  img: string;
  pdf?: string;        // ruta opcional al PDF
  content: string[];
  keywords?: string[];
}

interface ResearchContent {
  area: string;
  title: string;
  abstract: string;
  date: string;
  readTime: string;
  content: string[];
  keywords?: string[];
}

interface ResearchBase {
  slug: string;
  img: string;
  pdf?: string;
  authors: string[];
  i18n: Record<Lang, ResearchContent>;
}

const researchData: ResearchBase[] = [
  {
    slug: 'manifestaciones-orofaciales-diabetes-mellitus',
    img: '/imagenes/taveras-de-lama/educacion-1.png',
    authors: [
      'Ismael David Lama Taveras',
      'Francineide Pereira Da Silva Peña',
      'Maira Tiyomi Sacata Tongu Nazima',
      'Mayla Rosa Guimarães',
      'María Izabel Cortes Volpe',
      'Lethicia Barreto Brandão',
    ],
    i18n: {
      es: {
        area: 'Medicina Oral',
        title: 'Manifestaciones orofaciales en personas con diabetes mellitus: una revisión integradora',
        abstract: 'Revisión integradora de la evidencia científica sobre las manifestaciones orales en personas con diabetes mellitus en la atención primaria de salud.',
        date: '2024',
        readTime: '8 min',
        content: [
          'La diabetes mellitus (DM) se caracteriza por niveles elevados de glucosa en sangre y representa un desafío significativo para la salud mundial debido a sus complicaciones sistémicas. Esta revisión tiene como objetivo profundizar la comprensión de las manifestaciones orofaciales asociadas con esta condición.',
          'Objetivo. Identificar la evidencia científica sobre las manifestaciones orales en personas con diabetes mellitus en la atención primaria de salud.',
          'Método. Se realizó una revisión integradora en las bases de datos PubMed, Embase, Lilacs, Ibecs, BDEnf, Web of Science y Scopus entre marzo y abril de 2024, sin restricciones de idioma ni período. Se combinaron los descriptores controlados (MeSH y DeCS) "Oral Manifestations" y "Diabetes Mellitus" con los operadores booleanos "AND" y "OR".',
          'Resultados. Se identificaron 389 artículos, de los cuales 10 conformaron la muestra final, seleccionando los más relevantes para la construcción de la tabla sinóptica de resultados.',
          'Conclusión. Se observó un predominio significativo de complicaciones orales en personas con diabetes, como xerostomía, enfermedad periodontal y lesiones mucosas, lo que subraya la necesidad de un enfoque interdisciplinario para el manejo adecuado de estas afecciones.',
          'Publicación científica · DOI: 10.55905/oelv23n2-043.',
        ],
        keywords: ['Diabetes mellitus', 'Manifestaciones orales', 'Xerostomía', 'Enfermedad periodontal'],
      },
      en: {
        area: 'Oral Medicine',
        title: 'Orofacial manifestations in people with diabetes mellitus: an integrative review',
        abstract: 'An integrative review of the scientific evidence on oral manifestations in people with diabetes mellitus in primary health care.',
        date: '2024',
        readTime: '8 min',
        content: [
          'Diabetes mellitus (DM) is characterized by high blood glucose levels and represents a significant global health challenge due to its systemic complications. This review aims to deepen the understanding of the orofacial manifestations associated with this condition.',
          'Objective. To identify the scientific evidence on oral manifestations in people with diabetes mellitus in primary health care.',
          'Method. An integrative review was carried out in the PubMed, Embase, Lilacs, Ibecs, BDEnf, Web of Science and Scopus databases between March and April 2024, with no language or time restrictions, combining the controlled descriptors (MeSH and DeCS) "Oral Manifestations" and "Diabetes Mellitus".',
          'Results. 389 articles were identified, of which 10 made up the final sample.',
          'Conclusion. A significant predominance of oral complications was observed in people with diabetes, such as xerostomia, periodontal disease and mucosal lesions, underscoring the need for an interdisciplinary approach to their proper management.',
          'Scientific publication · DOI: 10.55905/oelv23n2-043.',
        ],
        keywords: ['Diabetes mellitus', 'Oral manifestations', 'Xerostomia', 'Periodontal disease'],
      },
      fr: {
        area: 'Médecine Orale',
        title: 'Manifestations orofaciales chez les personnes atteintes de diabète sucré : une revue intégrative',
        abstract: 'Revue intégrative des données scientifiques sur les manifestations orales chez les personnes atteintes de diabète sucré en soins primaires.',
        date: '2024',
        readTime: '8 min',
        content: [
          'Le diabète sucré (DS) se caractérise par des taux élevés de glucose dans le sang et représente un défi majeur pour la santé mondiale en raison de ses complications systémiques. Cette revue vise à approfondir la compréhension des manifestations orofaciales associées à cette affection.',
          'Objectif. Identifier les données scientifiques sur les manifestations orales chez les personnes atteintes de diabète sucré en soins primaires.',
          'Méthode. Une revue intégrative a été réalisée dans les bases de données PubMed, Embase, Lilacs, Ibecs, BDEnf, Web of Science et Scopus, entre mars et avril 2024, en combinant les descripteurs contrôlés (MeSH et DeCS) « Oral Manifestations » et « Diabetes Mellitus ».',
          'Résultats. 389 articles ont été identifiés, dont 10 ont constitué l’échantillon final.',
          'Conclusion. Une prédominance significative des complications orales a été observée chez les personnes diabétiques, telles que la xérostomie, la maladie parodontale et les lésions muqueuses, soulignant la nécessité d’une approche interdisciplinaire.',
          'Publication scientifique · DOI : 10.55905/oelv23n2-043.',
        ],
        keywords: ['Diabète sucré', 'Manifestations orales', 'Xérostomie', 'Maladie parodontale'],
      },
    },
  },
  {
    slug: 'microfiltracion-marginal-cavidades-clase-2',
    img: '/imagenes/taveras-de-lama/educacion-2.png',
    authors: ['Dr. Ismael D. Lama Taveras'],
    i18n: {
      es: {
        area: 'Odontología Restauradora',
        title: 'Microfiltración marginal en cavidades Clase II ocluso-proximales selladas con diferentes materiales de obturación temporal: un estudio in vitro',
        abstract: 'Estudio in vitro que determina la microfiltración marginal en cavidades Clase II ocluso-proximales selladas con tres materiales de obturación temporal.',
        date: 'Agosto 2023',
        readTime: '7 min',
        content: [
          'La microfiltración marginal es la microseparación mecánica entre el material restaurador y las paredes de la cavidad, que permite la infiltración de fluidos salivales. El propósito de este estudio fue determinar la microfiltración marginal en cavidades Clase II ocluso-proximales selladas con diferentes materiales de obturación temporal.',
          'Método. Sesenta premolares superiores e inferiores se dividieron en tres grupos (N=20 cada uno) para los materiales de obturación temporal C.I.V, IRM R y COLTOSOL. Tras la profilaxis y la preparación de las cavidades Clase II, estas se desinfectaron, sellaron e inmergieron en solución salina, y se tiñeron con azul de metileno. Los cortes sagitales se midieron con un microscopio digital (50x–1000x).',
          'Resultados. El C.I.V mostró menor microfiltración marginal y mayor efectividad de sellado (E.S.M.O.P.) que el IRM R y el COLTOSOL.',
          'Conclusión. Los materiales de obturación temporal C.I.V y COLTOSOL presentaron menos microfiltración marginal en cavidades Clase II ocluso-proximales en comparación con el IRM R.',
          'Publicado en el Asian Journal of Dental Sciences, vol. 6, n.º 1, pp. 252–273, 2023.',
        ],
        keywords: ['Microfiltración', 'Materiales dentales', 'Obturación temporal', 'Cavidad Clase II'],
      },
      en: {
        area: 'Restorative Dentistry',
        title: 'Marginal Microleakage in Class II Occlusal-Proximal Cavities Sealed with Different Temporary Filling Materials: An in vitro Study',
        abstract: 'An in vitro study determining marginal microleakage in Class II occlusal-proximal cavities sealed with three temporary filling materials.',
        date: 'August 2023',
        readTime: '7 min',
        content: [
          'Marginal microleakage is the mechanical micro-separation between the restorative material and the cavity walls, allowing the infiltration of salivary fluids. The purpose of this study was to determine the marginal microleakage in Class II occlusal-proximal cavities sealed with different temporary filling materials.',
          'Method. Sixty upper and lower premolars were divided into three groups (N=20 each) for the temporary filling materials C.I.V, IRM R and COLTOSOL. After prophylaxis and Class II cavity preparation, the cavities were disinfected, sealed and immersed in saline solution, then stained with methylene blue. Sagittal cuts were measured with a digital microscope (50x–1000x).',
          'Results. C.I.V showed lower marginal microleakage and higher sealing effectiveness (E.S.M.O.P.) than IRM R and COLTOSOL.',
          'Conclusion. The temporary filling materials C.I.V and COLTOSOL exhibited less marginal microleakage in Class II occlusal-proximal cavities compared to IRM R.',
          'Published in the Asian Journal of Dental Sciences, vol. 6, no. 1, pp. 252–273, 2023.',
        ],
        keywords: ['Microleakage', 'Dental materials', 'Temporary filling', 'Class II cavity'],
      },
      fr: {
        area: 'Dentisterie Restauratrice',
        title: 'Micro-infiltration marginale dans les cavités de Classe II occluso-proximales scellées avec différents matériaux d’obturation temporaire : une étude in vitro',
        abstract: 'Étude in vitro déterminant la micro-infiltration marginale dans les cavités de Classe II occluso-proximales scellées avec trois matériaux d’obturation temporaire.',
        date: 'Août 2023',
        readTime: '7 min',
        content: [
          'La micro-infiltration marginale est la micro-séparation mécanique entre le matériau de restauration et les parois de la cavité, permettant l’infiltration des fluides salivaires. Cette étude visait à déterminer la micro-infiltration marginale dans les cavités de Classe II occluso-proximales scellées avec différents matériaux d’obturation temporaire.',
          'Méthode. Soixante prémolaires ont été réparties en trois groupes (N=20 chacun) pour les matériaux C.I.V, IRM R et COLTOSOL. Après préparation des cavités de Classe II, elles ont été scellées, immergées dans une solution saline et colorées au bleu de méthylène, puis mesurées au microscope numérique (50x–1000x).',
          'Résultats. Le C.I.V a présenté une micro-infiltration marginale plus faible et une meilleure efficacité d’étanchéité que l’IRM R et le COLTOSOL.',
          'Conclusion. Les matériaux C.I.V et COLTOSOL ont montré moins de micro-infiltration marginale que l’IRM R.',
          'Publié dans l’Asian Journal of Dental Sciences, vol. 6, n° 1, pp. 252–273, 2023.',
        ],
        keywords: ['Micro-infiltration', 'Matériaux dentaires', 'Obturation temporaire', 'Cavité de Classe II'],
      },
    },
  },
  {
    slug: 'estrategia-prevencion-deglucion-atipica-adultos',
    img: '/imagenes/taveras-de-lama/educacion-3.png',
    authors: ['Dra. Lilian A. Taveras-Rivera'],
    i18n: {
      es: {
        area: 'Ortodoncia',
        title: 'Estrategia de prevención para disminuir la deglución atípica en pacientes adultos',
        abstract: 'Investigación orientada a desarrollar estrategias preventivas para disminuir la deglución atípica en pacientes adultos.',
        date: '2025',
        readTime: '6 min',
        content: [
          'La presente investigación tuvo como principal objetivo desarrollar estrategias para disminuir la deglución atípica en pacientes adultos. El estudio tuvo un enfoque cuantitativo, de tipo descriptivo, con un diseño no experimental.',
          'La recolección de datos evidenció que, de los pacientes adultos con deglución atípica, la mayoría correspondía al grupo etario de 20 a 30 años, del sexo femenino, de población urbana e ingresos bajos, con mordida abierta anterior como maloclusión, siendo el tratamiento más empleado los educadores linguales o espolones.',
          'La mayoría de los pacientes tratados no habían recibido medidas preventivas previas ni información sobre la deglución atípica, sus consecuencias y cómo tratarla. La estrategia preventiva permitió identificar tempranamente patrones de deglución atípica en adultos, mejorando la precisión diagnóstica y reduciendo los hábitos disfuncionales asociados.',
          'El plan de acción se orientó al diseño de herramientas preventivas visuales, charlas motivacionales y simulaciones para educar a los pacientes sobre la importancia de una intervención temprana. La estrategia fue evaluada por expertos, quienes destacaron su pertinencia y viabilidad.',
          'Conclusión. La deglución atípica está influenciada por múltiples factores. Las estrategias de prevención, que combinan elementos clínicos y educativos, proporcionan una solución integral para disminuirla en adultos y contribuir a su calidad de vida.',
        ],
        keywords: ['Deglución atípica', 'Prevención', 'Ortodoncia', 'Pacientes adultos'],
      },
      en: {
        area: 'Orthodontics',
        title: 'Prevention strategy to reduce atypical swallowing in adult patients',
        abstract: 'Research aimed at developing preventive strategies to reduce atypical swallowing in adult patients.',
        date: '2025',
        readTime: '6 min',
        content: [
          'The main objective of this research was to develop strategies to reduce atypical swallowing in adult patients. The study employed a quantitative, descriptive and non-experimental design.',
          'Data collection revealed that, of all the adult patients selected with atypical swallowing, the majority were female, aged 20 to 30 years, from urban areas with low incomes, and presented anterior open bite as the malocclusion. The most frequently used treatment was tongue trainers or spurs.',
          'None of the treated patients had previously received preventive measures, nor had they been informed about atypical swallowing, its consequences, or how to treat it. Implementing a preventive strategy allows for the early identification of atypical swallowing patterns in adults, improving diagnostic accuracy and reducing associated dysfunctional habits.',
          'The action plan focused on designing visual preventive tools, motivational talks and simulations to educate patients about the importance of early intervention. The strategy was evaluated by experts, who highlighted its relevance and feasibility.',
          'Conclusion. Atypical swallowing is influenced by multiple factors. Prevention strategies that combine clinical and educational elements provide a comprehensive solution to reduce it in adults and contribute to their quality of life.',
        ],
        keywords: ['Atypical swallowing', 'Prevention', 'Orthodontics', 'Adult patients'],
      },
      fr: {
        area: 'Orthodontie',
        title: 'Stratégie de prévention pour réduire la déglutition atypique chez les patients adultes',
        abstract: 'Recherche visant à développer des stratégies préventives pour réduire la déglutition atypique chez les patients adultes.',
        date: '2025',
        readTime: '6 min',
        content: [
          'L’objectif principal de cette recherche était de développer des stratégies pour réduire la déglutition atypique chez les patients adultes. L’étude a adopté une approche quantitative, descriptive et non expérimentale.',
          'La collecte de données a révélé que, parmi les patients adultes présentant une déglutition atypique, la majorité étaient des femmes, âgées de 20 à 30 ans, issues de zones urbaines à faibles revenus, avec une béance antérieure comme malocclusion. Le traitement le plus utilisé était les grilles ou éperons linguaux.',
          'Aucun des patients traités n’avait reçu auparavant de mesures préventives ni d’information sur la déglutition atypique. La stratégie préventive permet d’identifier précocement les schémas de déglutition atypique chez l’adulte, améliorant la précision diagnostique et réduisant les habitudes dysfonctionnelles associées.',
          'Le plan d’action s’est concentré sur la conception d’outils préventifs visuels, de conférences motivationnelles et de simulations pour éduquer les patients sur l’importance d’une intervention précoce. La stratégie a été évaluée par des experts qui ont souligné sa pertinence et sa faisabilité.',
          'Conclusion. La déglutition atypique est influencée par de multiples facteurs. Les stratégies de prévention combinant éléments cliniques et éducatifs offrent une solution complète pour la réduire chez l’adulte.',
        ],
        keywords: ['Déglutition atypique', 'Prévention', 'Orthodontie', 'Patients adultes'],
      },
    },
  },
];

export function getResearch(lang: Lang): ResearchPaper[] {
  return researchData.map(({ i18n, ...base }) => ({ ...base, ...i18n[lang] }));
}
