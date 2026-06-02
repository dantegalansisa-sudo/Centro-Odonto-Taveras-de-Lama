import type { Lang } from '../i18n/translations';

export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  img: string;
  content: string[];
  tips?: string[];
}

interface ArticleContent {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  content: string[];
  tips?: string[];
}

interface ArticleBase {
  slug: string;
  img: string;
  i18n: Record<Lang, ArticleContent>;
}

const articleData: ArticleBase[] = [
  {
    slug: 'carillas-o-blanqueamiento',
    img: '/imagenes/lalane/blog-estetica.png',
    i18n: {
      es: {
        category: 'Estética',
        title: '¿Carillas o blanqueamiento? Guía para elegir el tratamiento ideal',
        excerpt: 'Ambos mejoran tu sonrisa, pero funcionan de forma diferente. Te explicamos cuál es la mejor opción según tu caso.',
        readTime: '4 min',
        content: [
          'Cuando se trata de mejorar la apariencia de tu sonrisa, dos de las opciones más populares son las carillas dentales y el blanqueamiento. Aunque ambos tratamientos buscan darte una sonrisa más brillante y atractiva, funcionan de maneras muy diferentes.',
          'El blanqueamiento dental es un procedimiento no invasivo que utiliza agentes químicos para aclarar el color natural de tus dientes. Es ideal para personas con dientes sanos que simplemente quieren eliminar manchas causadas por el café, el té, el vino o el tabaco. Los resultados pueden durar entre 6 meses y 2 años dependiendo de tus hábitos.',
          'Las carillas dentales, por otro lado, son láminas ultrafinas de porcelana o composite que se adhieren a la superficie frontal de los dientes. No solo cambian el color, sino que también pueden corregir la forma, el tamaño y pequeñas imperfecciones como espacios entre dientes o bordes irregulares.',
          '¿Cuándo elegir blanqueamiento? Si tus dientes están sanos, bien alineados y solo necesitan un cambio de color, el blanqueamiento es la opción más conservadora y económica. Es un excelente primer paso para rejuvenecer tu sonrisa.',
          '¿Cuándo elegir carillas? Si además del color quieres corregir la forma, cerrar espacios o uniformizar tu sonrisa, las carillas ofrecen una transformación más completa y duradera. Las carillas de porcelana pueden durar entre 10 y 15 años con el cuidado adecuado.',
          'En Centro Odontológico Taveras de Lama evaluamos cada caso de forma personalizada. Durante tu consulta, analizaremos el estado de tus dientes, tus expectativas y tu presupuesto para recomendarte el tratamiento que mejor se adapte a ti.',
        ],
        tips: [
          'Consulta siempre con un especialista antes de decidir',
          'El blanqueamiento no funciona sobre restauraciones existentes',
          'Las carillas requieren una preparación mínima del diente',
          'Ambos tratamientos necesitan mantenimiento periódico',
        ],
      },
      en: {
        category: 'Aesthetics',
        title: 'Veneers or whitening? A guide to choosing the right treatment',
        excerpt: 'Both improve your smile, but they work differently. We explain which is the best option for your case.',
        readTime: '4 min',
        content: [
          'When it comes to improving the appearance of your smile, two of the most popular options are dental veneers and whitening. Although both treatments aim to give you a brighter, more attractive smile, they work in very different ways.',
          'Teeth whitening is a non-invasive procedure that uses chemical agents to lighten the natural color of your teeth. It is ideal for people with healthy teeth who simply want to remove stains caused by coffee, tea, wine or tobacco. Results can last between 6 months and 2 years depending on your habits.',
          'Dental veneers, on the other hand, are ultra-thin layers of porcelain or composite that bond to the front surface of the teeth. They not only change the color, but can also correct the shape, size and small imperfections such as gaps between teeth or irregular edges.',
          'When should you choose whitening? If your teeth are healthy, well aligned and only need a color change, whitening is the most conservative and affordable option. It is an excellent first step to rejuvenate your smile.',
          'When should you choose veneers? If, in addition to color, you want to correct the shape, close gaps or even out your smile, veneers offer a more complete and lasting transformation. Porcelain veneers can last between 10 and 15 years with proper care.',
          'At Centro Odontológico Taveras de Lama we evaluate each case individually. During your consultation, we analyze the condition of your teeth, your expectations and your budget to recommend the treatment that best suits you.',
        ],
        tips: [
          'Always consult a specialist before deciding',
          'Whitening does not work on existing restorations',
          'Veneers require minimal tooth preparation',
          'Both treatments need periodic maintenance',
        ],
      },
      fr: {
        category: 'Esthétique',
        title: 'Facettes ou blanchiment ? Guide pour choisir le traitement idéal',
        excerpt: 'Les deux améliorent votre sourire, mais fonctionnent différemment. Nous vous expliquons la meilleure option selon votre cas.',
        readTime: '4 min',
        content: [
          "Lorsqu'il s'agit d'améliorer l'apparence de votre sourire, deux des options les plus populaires sont les facettes dentaires et le blanchiment. Bien que les deux traitements visent à vous offrir un sourire plus éclatant et attrayant, ils fonctionnent de manières très différentes.",
          'Le blanchiment dentaire est une procédure non invasive qui utilise des agents chimiques pour éclaircir la couleur naturelle de vos dents. Il est idéal pour les personnes ayant des dents saines qui souhaitent simplement éliminer les taches causées par le café, le thé, le vin ou le tabac. Les résultats peuvent durer entre 6 mois et 2 ans selon vos habitudes.',
          "Les facettes dentaires, en revanche, sont de fines lamelles de porcelaine ou de composite qui se collent sur la surface avant des dents. Elles ne changent pas seulement la couleur, mais peuvent aussi corriger la forme, la taille et de petites imperfections comme les espaces entre les dents ou les bords irréguliers.",
          'Quand choisir le blanchiment ? Si vos dents sont saines, bien alignées et n’ont besoin que d’un changement de couleur, le blanchiment est l’option la plus conservatrice et économique. C’est un excellent premier pas pour rajeunir votre sourire.',
          'Quand choisir les facettes ? Si, en plus de la couleur, vous souhaitez corriger la forme, combler des espaces ou uniformiser votre sourire, les facettes offrent une transformation plus complète et durable. Les facettes en porcelaine peuvent durer entre 10 et 15 ans avec des soins appropriés.',
          'Au Centro Odontológico Taveras de Lama, nous évaluons chaque cas de manière personnalisée. Lors de votre consultation, nous analysons l’état de vos dents, vos attentes et votre budget pour vous recommander le traitement le mieux adapté.',
        ],
        tips: [
          'Consultez toujours un spécialiste avant de décider',
          'Le blanchiment ne fonctionne pas sur les restaurations existantes',
          'Les facettes nécessitent une préparation minimale de la dent',
          'Les deux traitements nécessitent un entretien périodique',
        ],
      },
    },
  },
  {
    slug: 'mitos-implantes-dentales',
    img: '/imagenes/lalane/blog-implantes.png',
    i18n: {
      es: {
        category: 'Implantes',
        title: '5 mitos sobre los implantes dentales que debes dejar de creer',
        excerpt: 'Desde "duelen mucho" hasta "se notan falsos". Desmontamos los mitos más comunes con datos reales.',
        readTime: '5 min',
        content: [
          'Los implantes dentales son una de las soluciones más avanzadas y efectivas para reemplazar dientes perdidos. Sin embargo, existen muchos mitos que generan miedo o dudas innecesarias. Hoy desmontamos los 5 más comunes.',
          'Mito 1: "Los implantes duelen mucho." La realidad es que la colocación de un implante se realiza bajo anestesia local y el procedimiento en sí es menos doloroso de lo que la mayoría imagina. La mayoría de pacientes reportan menos molestias que con una extracción dental simple.',
          'Mito 2: "Se notan falsos." Los implantes modernos utilizan coronas de porcelana diseñadas digitalmente que replican el color, la forma y la translucidez de tus dientes naturales. Es prácticamente imposible distinguirlos a simple vista.',
          'Mito 3: "Son solo para personas mayores." La pérdida dental puede ocurrir a cualquier edad debido a accidentes, enfermedades periodontales u otros factores. Los implantes son una solución viable para adultos de cualquier edad con buena salud ósea.',
          'Mito 4: "No duran mucho." Con el cuidado adecuado, un implante dental puede durar toda la vida. El titanio del que están hechos se integra con el hueso en un proceso llamado osteointegración, creando una base permanente y estable.',
          'Mito 5: "Son demasiado caros." Si bien la inversión inicial es mayor que otras opciones, los implantes son la solución más rentable a largo plazo. Un puente dental necesita reemplazo cada 7-10 años, mientras que un implante bien cuidado no necesita ser reemplazado.',
          'En Centro Odontológico Taveras de Lama utilizamos tecnología de diagnóstico 3D para planificar cada implante con precisión milimétrica, asegurando los mejores resultados posibles para cada paciente.',
        ],
        tips: [
          'La tasa de éxito de los implantes supera el 95%',
          'El proceso completo toma entre 3 y 6 meses',
          'Una buena higiene oral es clave para la durabilidad',
          'El diagnóstico 3D permite una planificación más precisa',
        ],
      },
      en: {
        category: 'Implants',
        title: '5 myths about dental implants you should stop believing',
        excerpt: 'From "they hurt a lot" to "they look fake". We debunk the most common myths with real facts.',
        readTime: '5 min',
        content: [
          'Dental implants are one of the most advanced and effective solutions for replacing missing teeth. However, there are many myths that create unnecessary fear or doubt. Today we debunk the 5 most common ones.',
          'Myth 1: "Implants hurt a lot." The reality is that placing an implant is done under local anesthesia and the procedure itself is less painful than most people imagine. Most patients report less discomfort than with a simple tooth extraction.',
          'Myth 2: "They look fake." Modern implants use digitally designed porcelain crowns that replicate the color, shape and translucency of your natural teeth. It is practically impossible to tell them apart with the naked eye.',
          'Myth 3: "They are only for older people." Tooth loss can occur at any age due to accidents, periodontal disease or other factors. Implants are a viable solution for adults of any age with good bone health.',
          'Myth 4: "They do not last long." With proper care, a dental implant can last a lifetime. The titanium they are made of integrates with the bone in a process called osseointegration, creating a permanent, stable base.',
          'Myth 5: "They are too expensive." While the initial investment is higher than other options, implants are the most cost-effective solution in the long run. A dental bridge needs replacement every 7-10 years, whereas a well-maintained implant does not need to be replaced.',
          'At Centro Odontológico Taveras de Lama we use 3D diagnostic technology to plan each implant with millimetric precision, ensuring the best possible results for every patient.',
        ],
        tips: [
          'The success rate of implants is over 95%',
          'The complete process takes between 3 and 6 months',
          'Good oral hygiene is key to durability',
          '3D diagnosis allows for more precise planning',
        ],
      },
      fr: {
        category: 'Implants',
        title: '5 mythes sur les implants dentaires que vous devez cesser de croire',
        excerpt: 'De « ça fait très mal » à « ça fait faux ». Nous démontons les mythes les plus courants avec des faits réels.',
        readTime: '5 min',
        content: [
          'Les implants dentaires sont l’une des solutions les plus avancées et efficaces pour remplacer les dents manquantes. Pourtant, de nombreux mythes génèrent des peurs ou des doutes inutiles. Aujourd’hui, nous démontons les 5 plus courants.',
          'Mythe 1 : « Les implants font très mal. » En réalité, la pose d’un implant se fait sous anesthésie locale et la procédure elle-même est moins douloureuse que la plupart ne l’imaginent. La majorité des patients rapportent moins de gêne qu’avec une simple extraction dentaire.',
          'Mythe 2 : « Ça fait faux. » Les implants modernes utilisent des couronnes en porcelaine conçues numériquement qui reproduisent la couleur, la forme et la translucidité de vos dents naturelles. Il est pratiquement impossible de les distinguer à l’œil nu.',
          'Mythe 3 : « C’est seulement pour les personnes âgées. » La perte dentaire peut survenir à tout âge en raison d’accidents, de maladies parodontales ou d’autres facteurs. Les implants sont une solution viable pour les adultes de tout âge ayant une bonne santé osseuse.',
          'Mythe 4 : « Ça ne dure pas longtemps. » Avec des soins appropriés, un implant dentaire peut durer toute une vie. Le titane dont ils sont faits s’intègre à l’os dans un processus appelé ostéo-intégration, créant une base permanente et stable.',
          'Mythe 5 : « C’est trop cher. » Bien que l’investissement initial soit plus élevé que d’autres options, les implants sont la solution la plus rentable à long terme. Un bridge dentaire doit être remplacé tous les 7 à 10 ans, alors qu’un implant bien entretenu n’a pas besoin d’être remplacé.',
          'Au Centro Odontológico Taveras de Lama, nous utilisons la technologie de diagnostic 3D pour planifier chaque implant avec une précision millimétrique, garantissant les meilleurs résultats possibles pour chaque patient.',
        ],
        tips: [
          'Le taux de réussite des implants dépasse 95 %',
          'Le processus complet prend entre 3 et 6 mois',
          'Une bonne hygiène bucco-dentaire est essentielle à la durabilité',
          'Le diagnostic 3D permet une planification plus précise',
        ],
      },
    },
  },
  {
    slug: 'rutina-higiene-dental',
    img: '/imagenes/lalane/blog-prevencion.png',
    i18n: {
      es: {
        category: 'Prevención',
        title: 'La rutina de higiene dental que recomiendan los especialistas',
        excerpt: 'Cepillado, hilo dental y enjuague no son suficientes. Descubre los pasos que realmente protegen tu sonrisa.',
        readTime: '3 min',
        content: [
          'Mantener una buena salud bucal va más allá del cepillado tres veces al día. Los especialistas recomiendan una rutina integral que muchas personas desconocen o pasan por alto.',
          'Paso 1: Cepillado correcto. No se trata solo de cepillar, sino de cómo lo haces. Usa un cepillo de cerdas suaves con movimientos circulares suaves durante al menos 2 minutos. Presta especial atención a la línea de las encías, donde se acumula la mayor cantidad de placa.',
          'Paso 2: Hilo dental diario. El cepillo solo alcanza el 60% de la superficie dental. El hilo dental limpia los espacios interdentales donde las bacterias se refugian y causan caries y enfermedad periodontal.',
          'Paso 3: Limpiador lingual. La lengua alberga una gran cantidad de bacterias que causan mal aliento y contribuyen a problemas dentales. Usa un limpiador lingual o el reverso de tu cepillo cada vez que te laves los dientes.',
          'Paso 4: Enjuague bucal terapéutico. Elige un enjuague con flúor o clorhexidina según la recomendación de tu dentista. Úsalo después del cepillado y el hilo dental para una protección completa.',
          'Paso 5: Visitas regulares al dentista. Una limpieza profesional cada 6 meses es fundamental para eliminar el sarro que el cepillado no puede remover y para detectar problemas a tiempo.',
          'En Centro Odontológico Taveras de Lama creemos que la prevención es la mejor inversión en tu salud dental. Nuestro equipo está disponible para enseñarte las técnicas correctas y crear un plan de prevención personalizado.',
        ],
        tips: [
          'Cambia tu cepillo cada 3 meses',
          'Espera 30 minutos después de comer para cepillarte',
          'Bebe agua después de consumir alimentos ácidos',
          'Las limpiezas profesionales previenen el 90% de los problemas dentales',
        ],
      },
      en: {
        category: 'Prevention',
        title: 'The dental hygiene routine that specialists recommend',
        excerpt: 'Brushing, flossing and rinsing are not enough. Discover the steps that really protect your smile.',
        readTime: '3 min',
        content: [
          'Maintaining good oral health goes beyond brushing three times a day. Specialists recommend a comprehensive routine that many people are unaware of or overlook.',
          'Step 1: Correct brushing. It is not just about brushing, but how you do it. Use a soft-bristled brush with gentle circular movements for at least 2 minutes. Pay special attention to the gum line, where the most plaque accumulates.',
          'Step 2: Daily flossing. The brush only reaches 60% of the tooth surface. Floss cleans the interdental spaces where bacteria hide and cause cavities and periodontal disease.',
          'Step 3: Tongue cleaner. The tongue harbors a large amount of bacteria that cause bad breath and contribute to dental problems. Use a tongue cleaner or the back of your brush every time you brush your teeth.',
          'Step 4: Therapeutic mouthwash. Choose a rinse with fluoride or chlorhexidine as recommended by your dentist. Use it after brushing and flossing for complete protection.',
          'Step 5: Regular dental visits. A professional cleaning every 6 months is essential to remove tartar that brushing cannot, and to detect problems early.',
          'At Centro Odontológico Taveras de Lama we believe prevention is the best investment in your dental health. Our team is available to teach you the correct techniques and create a personalized prevention plan.',
        ],
        tips: [
          'Change your brush every 3 months',
          'Wait 30 minutes after eating before brushing',
          'Drink water after eating acidic foods',
          'Professional cleanings prevent 90% of dental problems',
        ],
      },
      fr: {
        category: 'Prévention',
        title: 'La routine d’hygiène dentaire recommandée par les spécialistes',
        excerpt: 'Brossage, fil dentaire et bain de bouche ne suffisent pas. Découvrez les étapes qui protègent vraiment votre sourire.',
        readTime: '3 min',
        content: [
          'Maintenir une bonne santé bucco-dentaire va au-delà du brossage trois fois par jour. Les spécialistes recommandent une routine complète que beaucoup ignorent ou négligent.',
          'Étape 1 : Un brossage correct. Il ne s’agit pas seulement de brosser, mais de la manière dont vous le faites. Utilisez une brosse à poils souples avec de légers mouvements circulaires pendant au moins 2 minutes. Portez une attention particulière à la ligne des gencives, où s’accumule le plus de plaque.',
          'Étape 2 : Le fil dentaire quotidien. La brosse n’atteint que 60 % de la surface dentaire. Le fil dentaire nettoie les espaces interdentaires où les bactéries se réfugient et causent des caries et des maladies parodontales.',
          'Étape 3 : Le nettoyeur de langue. La langue abrite une grande quantité de bactéries responsables de la mauvaise haleine et qui contribuent aux problèmes dentaires. Utilisez un nettoyeur de langue ou le dos de votre brosse à chaque brossage.',
          'Étape 4 : Le bain de bouche thérapeutique. Choisissez un bain de bouche au fluor ou à la chlorhexidine selon la recommandation de votre dentiste. Utilisez-le après le brossage et le fil dentaire pour une protection complète.',
          'Étape 5 : Des visites régulières chez le dentiste. Un nettoyage professionnel tous les 6 mois est essentiel pour éliminer le tartre que le brossage ne peut pas retirer et pour détecter les problèmes à temps.',
          'Au Centro Odontológico Taveras de Lama, nous pensons que la prévention est le meilleur investissement pour votre santé dentaire. Notre équipe est disponible pour vous enseigner les bonnes techniques et créer un plan de prévention personnalisé.',
        ],
        tips: [
          'Changez votre brosse tous les 3 mois',
          'Attendez 30 minutes après avoir mangé avant de vous brosser les dents',
          'Buvez de l’eau après avoir consommé des aliments acides',
          'Les nettoyages professionnels préviennent 90 % des problèmes dentaires',
        ],
      },
    },
  },
];

export function getArticles(lang: Lang): Article[] {
  return articleData.map(({ i18n, ...base }) => ({ ...base, ...i18n[lang] }));
}

// Backwards-compatible default export (Spanish).
export const articles: Article[] = getArticles('es');
