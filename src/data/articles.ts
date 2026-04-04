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

export const articles: Article[] = [
  {
    slug: 'carillas-o-blanqueamiento',
    category: 'Estética',
    title: '¿Carillas o blanqueamiento? Guía para elegir el tratamiento ideal',
    excerpt: 'Ambos mejoran tu sonrisa, pero funcionan de forma diferente. Te explicamos cuál es la mejor opción según tu caso.',
    readTime: '4 min',
    img: '/imagenes/taveras-de-lama/blog-estetica.png',
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
  {
    slug: 'mitos-implantes-dentales',
    category: 'Implantes',
    title: '5 mitos sobre los implantes dentales que debes dejar de creer',
    excerpt: 'Desde "duelen mucho" hasta "se notan falsos". Desmontamos los mitos más comunes con datos reales.',
    readTime: '5 min',
    img: '/imagenes/taveras-de-lama/blog-implantes.png',
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
  {
    slug: 'rutina-higiene-dental',
    category: 'Prevención',
    title: 'La rutina de higiene dental que recomiendan los especialistas',
    excerpt: 'Cepillado, hilo dental y enjuague no son suficientes. Descubre los pasos que realmente protegen tu sonrisa.',
    readTime: '3 min',
    img: '/imagenes/taveras-de-lama/blog-prevencion.png',
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
];
