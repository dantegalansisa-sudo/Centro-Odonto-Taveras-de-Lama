import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Taveras de Lama — Panel',
  projectId: 'cv4uufvl',
  dataset: 'production',

  plugins: [
    structureTool({
      // Estructura amigable: "Configuración general" como documento único arriba.
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            S.listItem()
              .title('⚙️ Configuración general')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.documentTypeListItem('galleryImage').title('📷 Galería (fotos)'),
            S.documentTypeListItem('promoVideo').title('🎬 Videos'),
            S.documentTypeListItem('review').title('⭐ Reseñas'),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
