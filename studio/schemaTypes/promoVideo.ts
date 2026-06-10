import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'promoVideo',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'videoFile',
      title: 'Archivo de video (.mp4)',
      description: 'Sube aquí el video vertical. (Si prefieres, deja esto vacío y usa el enlace de abajo.)',
      type: 'file',
      options: { accept: 'video/*' },
    }),
    defineField({
      name: 'videoUrl',
      title: 'O enlace del video',
      description: 'Alternativa: pega un enlace directo a un .mp4. Si subes un archivo arriba, deja esto vacío.',
      type: 'url',
    }),
    defineField({
      name: 'poster',
      title: 'Portada (opcional)',
      description: 'Imagen que se muestra antes de reproducir. Si no la pones, se usa el primer cuadro del video.',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      initialValue: 100,
    }),
  ],
  orderings: [
    { title: 'Orden', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { media: 'poster', order: 'order' },
    prepare({ media, order }) {
      return { title: 'Video', subtitle: order != null ? `Orden: ${order}` : '', media };
    },
  },
});
