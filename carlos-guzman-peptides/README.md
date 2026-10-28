# Carlos Guzmán Peptides

Referencia clínica **informativa** de 152 péptidos para profesionales de la salud: mecanismo de acción, evidencia, estatus FDA, seguridad y datos de etiqueta. Incluye lámina anatómica interactiva, flashcards y quiz.

> **Aviso.** Contenido exclusivamente informativo y educativo. No constituye una instrucción, recomendación terapéutica ni guía de prescripción.

## Estructura

| Archivo | Qué contiene | Cuándo editarlo |
|---|---|---|
| `data.js` | Los 152 péptidos (todo el contenido) | Cambiar textos, estudios, dosis, estatus |
| `index.html` | Diseño, colores, portada, aviso legal, pie de página | Cambiar marca, títulos o estilos |
| `app.js` | Biblioteca, filtros, fichas, flashcards, quiz, progreso | Cambiar el comportamiento |
| `body.js` | Lámina anatómica interactiva (SVG) | Ajustar órganos o etiquetas |
| `vercel.json` | Configuración de Vercel | Rara vez |

No hay build: es HTML + JavaScript puro. Abre `index.html` en el navegador para verlo localmente.

## Editar un péptido

En `data.js`, busca el nombre (por ejemplo `"n": "Semaglutide"`) y edita el texto entre comillas.

- Estatus (`ca`): `fda` · `ensayos` · `wellness` · `cosmetico`
- Evidencia (`ev`): `fda` · `alta` · `moderada` · `baja`
- Sistema (`ar`): `cerebro` · `hormonas` · `inmune` · `corazon` · `digestivo` · `piel` · `sexual` · `huesos`
- Ficha completa (`x`): `r` resumen · `q` qué es · `m` mecanismo · `mp` pasos · `f` estatus FDA · `e` estudios `[estudio, población, resultado]` · `en` conclusión · `s` efectos · `sg` advertencias · `d` dosis · `k` práctica clínica

Para **agregar** un péptido, copia un bloque `{ ... }` completo, pégalo al final de la lista (con coma antes) y cambia su `id` por un número nuevo.

Cada ficha tiene enlace directo: `/#p-nombre-del-peptido` (por ejemplo `/#p-semaglutide`).

## Publicar

Vercel publica este directorio (`carlos-guzman-peptides/`) como sitio estático (Framework: Other, sin build command).
