import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'review',
  title: 'Reseña',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre de la persona',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Texto de la reseña',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Estrellas (1 a 5)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'country',
      title: 'País (bandera)',
      type: 'string',
      initialValue: 'do',
      options: {
        list: [
          { title: 'República Dominicana', value: 'do' },
          { title: 'Estados Unidos', value: 'us' },
          { title: 'España', value: 'es' },
          { title: 'Francia', value: 'fr' },
          { title: 'Cuba', value: 'cu' },
          { title: 'Puerto Rico', value: 'pr' },
        ],
        layout: 'dropdown',
      },
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
    select: { title: 'name', subtitle: 'text' },
  },
});
