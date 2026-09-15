# Máquina de demos

Un solo proyecto. Cada prospecto es una URL.

```
demos.carlosguzmanai.com/dra-correa
demos.carlosguzmanai.com/dr-rosado
```

Vienen dos ya hechos: **Dra. Sonia Correa** (medicina interna, paleta azul) y
**Dr. Ariel Rosado** (medicina estética, paleta rosa arena).

---

# PARTE 1 — Subirlo (15 minutos, una sola vez)

## Paso 1 — Repositorio nuevo

1. github.com → **+** → **New repository**
2. Nombre: `demos`
3. **Private**
4. No marques nada más → **Create repository**

## Paso 2 — Subir los archivos

1. Descomprime el ZIP
2. Abre la carpeta `demos`
3. **Add file** → **Upload files**
4. **Selecciona lo de ADENTRO** (Cmd+A) y arrastra

> ⚠️ No arrastres la carpeta `demos` completa. Arrastra su contenido.

5. **Commit changes**

## Paso 3 — Vercel

1. **vercel.com/new** → importa `demos` → **Deploy**
2. Cuando termine: **Settings** → **Domains**
3. Añade: `demos.carlosguzmanai.com`
4. Vercel te da un **CNAME**. En Namecheap → Advanced DNS → **ADD NEW RECORD**:

| Campo | Valor |
|---|---|
| Type | `CNAME Record` |
| Host | `demos` |
| Value | *lo que te dé Vercel* |
| TTL | `Automatic` |

5. **Check verde ✓** para guardar

Listo. Nunca más tocas Vercel para esto.

---

# PARTE 2 — Añadir un prospecto (5 minutos)

**Solo tocas `clientes.js`.**

1. GitHub → repo `demos` → **clientes.js** → **lápiz** ✏️
2. Al final hay un bloque comentado que empieza con `// ⬇️ COPIA DESDE AQUÍ`
3. Cópialo, pégalo antes del `];`, quítale los `//`
4. Cambia los datos
5. **Commit changes**

En 60 segundos: `demos.carlosguzmanai.com/el-slug-que-pusiste`

## Los campos

| Campo | Qué es |
|---|---|
| `slug` | La URL. Minúsculas y guiones: `dra-melendez` |
| `nombre` | Como aparece en el sitio |
| `credencial` | MD, DMD, DDS, ND |
| `especialidad` | Dermatóloga, Ortodoncista, etc. |
| `ciudad` | Pueblo, Puerto Rico |
| `whatsapp` | **El de ÉL**, con el 1 al frente: `17875551234` |
| `paleta` | `clinico` · `confianza` · `estetica` · `bienestar` · `grafito` |
| `titulo` | El titular grande |
| `subtitulo` | Dos líneas debajo |
| `datos` | Los 4 recuadros de la franja |
| `servicios` | 6 tarjetas (puedes poner más o menos) |
| `porque` | 3 razones para escogerlo |
| `faq` | Preguntas frecuentes |
| `sobre` | Párrafos de la biografía |

## Qué paleta para qué especialidad

| Paleta | Para |
|---|---|
| `confianza` | Medicina interna, cardiología, pediatría, dental |
| `estetica` | Med spa, dermatología, ginecología |
| `bienestar` | Nutrición, medicina funcional, quiropráctica |
| `grafito` | Cirugía, ortopedia, práctica premium |
| `clinico` | Farmacia, laboratorio, medicina general |

## De dónde sacas la información

Del **Instagram del doctor**, en 10 minutos:

- Servicios → de su bio y sus destacados
- Especialidad y pueblo → de su perfil
- Biografía → de sus publicaciones de presentación
- WhatsApp → de su bio o del botón de contacto

No inventes credenciales ni años de experiencia. Si no lo sabes, deja el texto
genérico que viene de ejemplo — dice claramente "aquí va su formación", y eso
le comunica que la página está lista para llevar sus datos reales.

---

# PARTE 3 — Cómo funciona el demo por dentro

**Barra negra arriba:** dice que la preparaste tú, sin costo y sin compromiso,
con un botón de WhatsApp que te escribe **a ti**. Es lo que convierte la
página en venta.

**El sitio completo:** hero, servicios, por qué escogerlo, biografía, citas,
preguntas. Todos los botones de WhatsApp van al número **del doctor** — así
puede probarlo y ve que funciona de verdad.

**Sección de cierre:** explica que esto no es plantilla, que se la hiciste a él,
y que si no le interesa, ahí queda. Dos botones: hablar contigo, o ver tu trabajo.

**Pie de página:** dice explícitamente que él no encargó ni aprobó el material
y que se retira a solicitud. Eso te protege.

---

# PARTE 4 — Reglas

**Ningún demo aparece en Google.** El `robots.js` bloquea todo el subdominio y
cada página lleva `noindex`. Nunca va a competir con el sitio real del doctor.

**Borra los que no contesten en tres semanas.** Abres `clientes.js`, borras el
bloque, commit. Es un minuto y es lo correcto — no dejes vivo indefinidamente
un sitio con el nombre de alguien que nunca te respondió.

**Usa el WhatsApp real del doctor.** Si lo pones mal, prueba el botón, no le
llega nada, y se ve mal. Verifícalo antes de mandar el link.

**Este proyecto genera ingresos.** Sube a Vercel Pro.

---

# PARTE 5 — El mensaje que mandas

> Hola Dra. Correa, soy Carlos Guzmán, farmacéutico de compounding en San Juan.
>
> Le hice una página de prueba a su práctica. Nadie me la pidió y no le cuesta
> nada — quería enseñarle cómo se vería:
>
> demos.carlosguzmanai.com/dra-correa
>
> Si le gusta, conversamos. Si no, se queda ahí y no la molesto más.

**Con gente que ya conoces**, como la Dra. Correa y el Dr. Rosado, quítale el
"soy Carlos Guzmán" y ve directo:

> Dra., le hice algo. Cinco minutos de su tiempo:
> demos.carlosguzmanai.com/dra-correa
>
> Es una muestra de cómo se vería su práctica en línea. Dígame qué opina.

---

# PARTE 6 — Cuando uno diga que sí

El demo **no** es el sitio final. Cuando cierre:

1. Cobras la mitad
2. Le pides contenido real: servicios, precios, horario, fotos
3. Creas un **repositorio aparte** para él, con la plantilla completa
4. Lo despliegas en **la cuenta de Vercel de él** — su dominio, su hosting
5. Cobras el balance
6. Borras el demo de `clientes.js`

El demo es el anzuelo. El sitio real es el producto.

---

# Precios sugeridos

| Opción | Instalación | Mensual |
|---|---|---|
| Solo la web, se la lleva | $600 | $0 |
| Web + mantenimiento | $300 | $50 |
| Web + citas y recordatorios | $300 | $150 |

El descuento de instalación lo paga el compromiso mensual. Así el mensual deja
de ser opcional sin que tengas que presionarlo.

**Define el $50 o te come:** hospedaje, seguridad, respaldo y **hasta dos
cambios al mes**. Más que eso, se cotiza aparte. Sin ese límite, un solo
doctor exigente te borra la ganancia de cinco.
