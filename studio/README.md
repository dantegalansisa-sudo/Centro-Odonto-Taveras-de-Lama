# Panel de administración — Taveras de Lama (Sanity)

Este es el panel donde la clínica edita la web (fotos, videos, reseñas, precio de
consulta y foto de los doctores). El sitio web lee estos datos automáticamente.

- **Project ID:** `cv4uufvl`
- **Dataset:** `production`

---

## Puesta en marcha (una sola vez — lo hace el desarrollador)

Desde la carpeta `studio/`:

```bash
cd studio
npm install
npx sanity login        # inicia sesión con la misma cuenta que creó el proyecto
npx sanity deploy       # publica el panel en https://taveras-de-lama.sanity.studio
```

Después de `deploy`, la clínica entra a **https://taveras-de-lama.sanity.studio**
con su cuenta y ya puede editar.

### Permitir que la web lea los datos (CORS)
En https://www.sanity.io/manage → proyecto **Taveras de Lama** → **API** → **CORS origins**,
agrega (sin credenciales):

- `http://localhost:5173`
- `https://centro-odonto-taveras-de-lama.vercel.app` (y cualquier dominio final)

Y verifica que el dataset `production` sea **público** (API → Datasets).

### Invitar a la doctora / Dr. Ismael
En https://www.sanity.io/manage → **Members** → **Invite** → su email. El plan
gratuito permite varios usuarios.

---

## Cómo usa el panel la clínica (cosas sencillas)

- **📷 Galería:** botón *Create* → sube la foto → guarda. Para quitar una, la borra.
- **🎬 Videos:** *Create* → sube el `.mp4` (o pega un enlace) → guarda.
- **⭐ Reseñas:** *Create* → nombre, texto, estrellas y país (la bandera sale sola).
- **⚙️ Configuración general:** cambia el *precio de la consulta* y la *foto de los doctores*.

Cada cambio se refleja en la web en uno o dos minutos (al publicar).

> Nota: mientras el panel esté vacío, la web muestra el contenido por defecto que
> ya está cargado. En cuanto se agrega contenido en el panel, este reemplaza al
> de por defecto en esa sección.
