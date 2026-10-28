# Academia de Péptidos · Farmacia Mia

Sitio estático (HTML + JS, sin build) para adiestrar al personal: 152 péptidos con mapa 3D del cuerpo, fichas completas en español, flashcards, quiz y progreso.

## Archivos
- `index.html` – diseño y estructura
- `app.js` – búsqueda, filtros, fichas, flashcards, quiz y progreso
- `body3d.js` – cuerpo 3D interactivo (Three.js)
- `data.js` – los 152 péptidos (editar aquí para cambiar textos)
- `vendor/three.min.js` – Three.js r128 (MIT), incluido para no depender de un CDN
- `vercel.json` – configuración de Vercel

## Publicar en Vercel
Vercel → Add New → Project → importar este repositorio → Framework Preset: **Other** → Deploy.
Cada cambio que se suba a GitHub se publica solo.

## Editar un péptido
Busca el nombre en `data.js`. Campos principales:
`u` para qué se usa · `m` marca/vía · `a` punto clave · `ca` fda|ensayos|wellness|cosmetico · `ev` fda|alta|moderada|baja.
Dentro de `x`: `r` resumen · `q` qué es · `m` mecanismo · `mp` pasos · `f` estatus FDA · `e` estudios · `s` efectos · `sg` advertencias · `d` dosis · `k` puntos para el personal.

> Uso interno educativo. El estatus FDA/503A cambia: verificar siempre antes de dispensar o preparar.
