import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Configuración general',
  type: 'document',
  fields: [
    defineField({
      name: 'consultationPrice',
      title: 'Precio de la consulta',
      description: 'Ej.: US$200 / €200. Aparece en el bloque "Sobre la consulta".',
      type: 'string',
    }),
    defineField({
      name: 'directorPhoto',
      title: 'Foto de los doctores (Dirección)',
      description: 'Foto que aparece en el bloque "Dirección de la clínica".',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Configuración general' };
    },
  },
});
