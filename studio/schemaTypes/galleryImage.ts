import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'galleryImage',
  title: 'Foto de galería',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Foto',
      description: 'Foto vertical (formato Instagram). Se muestra completa, sin recortes.',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      description: 'Número para ordenar las fotos (1, 2, 3...). Menor aparece primero.',
      type: 'number',
      initialValue: 100,
    }),
  ],
  orderings: [
    { title: 'Orden', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { media: 'image', order: 'order' },
    prepare({ media, order }) {
      return { title: `Foto de galería`, subtitle: order != null ? `Orden: ${order}` : '', media };
    },
  },
});
