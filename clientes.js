/* ══════════════════════════════════════════════════════════════════════
   clientes.js — EL ÚNICO ARCHIVO QUE TOCAS

   Para añadir un prospecto:
     1. Copia un bloque completo de abajo
     2. Pégalo antes del  ];  final
     3. Cambia los datos
     4. Commit changes

   En 60 segundos tienes:  demos.carlosguzmanai.com/el-slug-que-pusiste

   PALETAS:  clinico · confianza · estetica · bienestar · grafito
   ══════════════════════════════════════════════════════════════════════ */

const clientes = [

  // ════════════════════════════════════════════════════════════════
  {
    slug: 'dra-correa',              // ← la URL: /dra-correa
    nombre: 'Dra. Sonia Correa',
    credencial: 'MD',
    especialidad: 'Medicina Interna',
    ciudad: 'San Juan, Puerto Rico',
    whatsapp: '17875550101',         // el de ELLA, con el 1 al frente
    paleta: 'confianza',

    titulo: 'Medicina interna con el tiempo que su caso merece.',
    subtitulo:
      'Atención personalizada en San Juan. Consultas sin prisa, seguimiento real y un plan que se ajusta a usted — no al reloj.',

    datos: [
      { k: 'Ubicación', v: 'San Juan, Puerto Rico' },
      { k: 'Citas', v: 'Por WhatsApp, el mismo día' },
      { k: 'Idiomas', v: 'Español e inglés' },
      { k: 'Enfoque', v: 'Medicina interna de adultos' },
    ],

    servicios: [
      { t: 'Consulta inicial', d: 'Evaluación completa, historial y plan de tratamiento explicado en palabras claras.' },
      { t: 'Manejo de condiciones crónicas', d: 'Presión, diabetes, colesterol. Seguimiento constante y ajuste de terapia.' },
      { t: 'Chequeo preventivo anual', d: 'Laboratorios, evaluación de riesgo y las vacunas que le corresponden.' },
      { t: 'Segunda opinión', d: 'Revisión de un diagnóstico o tratamiento que ya le dieron, con tiempo para explicarle.' },
      { t: 'Seguimiento', d: 'Citas de control para asegurar que el tratamiento va como debe ir.' },
      { t: 'Orientación', d: '¿No sabe qué necesita? Escríbanos y le orientamos sin compromiso.' },
    ],

    porque: [
      { t: 'Consultas sin prisa', d: 'Agenda controlada para dedicarle a cada paciente el tiempo que hace falta.' },
      { t: 'Le explicamos todo', d: 'Sale sabiendo qué tiene, qué vamos a hacer y por qué. En español claro.' },
      { t: 'Contacto directo', d: 'Escribe por WhatsApp y le contesta la oficina, no un sistema automático.' },
    ],

    faq: [
      { q: '¿Acepta planes médicos?', a: 'Escríbanos con el nombre de su plan y le confirmamos antes de la cita.' },
      { q: '¿Cuánto cuesta la consulta?', a: 'Escríbanos por WhatsApp y le damos el costo exacto según lo que necesite.' },
      { q: '¿En cuánto tiempo me dan cita?', a: 'Generalmente dentro de la misma semana. Escríbanos y le decimos la disponibilidad real.' },
      { q: '¿Dónde están ubicados?', a: 'En San Juan. Le enviamos la dirección exacta y cómo llegar cuando confirme la cita.' },
    ],

    sobre: [
      'La Dra. Sonia Correa atiende adultos en San Juan con un enfoque en medicina interna y manejo de condiciones crónicas.',
      'Aquí va su formación: universidad, residencia y certificaciones. Esto es lo que le da confianza al paciente que la está comparando con otros médicos.',
      'Y aquí su filosofía de atención: por qué hace las cosas como las hace y qué puede esperar el paciente cuando entra por la puerta.',
    ],
  },
  // ════════════════════════════════════════════════════════════════

  {
    slug: 'dr-rosado',
    nombre: 'Dr. Ariel Rosado',
    credencial: 'MD',
    especialidad: 'Medicina Estética',
    ciudad: 'San Juan, Puerto Rico',
    whatsapp: '17875550202',
    paleta: 'estetica',

    titulo: 'Resultados naturales, con criterio médico detrás.',
    subtitulo:
      'Medicina estética en San Juan. Evaluación honesta antes de cada tratamiento, y un plan que respeta sus facciones.',

    datos: [
      { k: 'Ubicación', v: 'San Juan, Puerto Rico' },
      { k: 'Citas', v: 'Por WhatsApp, el mismo día' },
      { k: 'Consulta', v: 'Evaluación previa a todo tratamiento' },
      { k: 'Idiomas', v: 'Español e inglés' },
    ],

    servicios: [
      { t: 'Consulta de evaluación', d: 'Revisamos qué busca, qué es realista y qué tratamiento le conviene de verdad.' },
      { t: 'Toxina botulínica', d: 'Aplicación conservadora para suavizar líneas de expresión sin perder naturalidad.' },
      { t: 'Rellenos dérmicos', d: 'Restauración de volumen y contorno con productos aprobados y técnica medida.' },
      { t: 'Tratamientos de piel', d: 'Manchas, textura y cicatrices. Plan por fases con resultados progresivos.' },
      { t: 'Terapias de bienestar', d: 'Vitaminas intravenosas y terapias de apoyo, bajo evaluación médica.' },
      { t: 'Seguimiento', d: 'Cita de control incluida para verificar el resultado y ajustar si hace falta.' },
    ],

    porque: [
      { t: 'Le decimos que no', d: 'Si un tratamiento no le conviene o no le va a dar lo que busca, se lo decimos antes de cobrarle.' },
      { t: 'Resultados naturales', d: 'El objetivo es que se vea descansado, no que se note que se hizo algo.' },
      { t: 'Un médico, no un técnico', d: 'Cada tratamiento lo evalúa y lo aplica un médico licenciado.' },
    ],

    faq: [
      { q: '¿Cuánto duran los resultados?', a: 'Depende del tratamiento y de cada persona. En la consulta le damos un estimado realista para su caso.' },
      { q: '¿Duele?', a: 'La mayoría de los tratamientos son muy tolerables. Usamos anestesia tópica cuando aplica.' },
      { q: '¿Cuánto cuesta?', a: 'Escríbanos por WhatsApp y le damos el costo según lo que busque. La consulta de evaluación se coordina aparte.' },
      { q: '¿Cuándo puedo volver a mi rutina?', a: 'En casi todos los casos, el mismo día. Le damos las indicaciones exactas antes de irse.' },
    ],

    sobre: [
      'El Dr. Ariel Rosado practica medicina estética en San Juan, con énfasis en resultados naturales y evaluación médica previa.',
      'Aquí va su formación: universidad, entrenamiento en estética y certificaciones de los productos que usa.',
      'Y aquí su filosofía: por qué prefiere lo conservador, y qué puede esperar el paciente en la primera visita.',
    ],
  },

  // ⬇️ COPIA DESDE AQUÍ PARA AÑADIR UNO NUEVO ⬇️
  //
  // {
  //   slug: 'nombre-corto',
  //   nombre: 'Dra. Nombre Apellido',
  //   credencial: 'MD',
  //   especialidad: 'Especialidad',
  //   ciudad: 'Pueblo, Puerto Rico',
  //   whatsapp: '1787XXXXXXX',
  //   paleta: 'confianza',
  //   titulo: 'Titular grande de la página.',
  //   subtitulo: 'Dos líneas explicando qué hace y dónde.',
  //   datos: [ { k: 'Ubicación', v: '...' }, { k: 'Citas', v: '...' } ],
  //   servicios: [ { t: 'Servicio', d: 'Descripción.' } ],
  //   porque: [ { t: 'Razón', d: 'Descripción.' } ],
  //   faq: [ { q: 'Pregunta', a: 'Respuesta.' } ],
  //   sobre: [ 'Párrafo uno.', 'Párrafo dos.' ],
  // },

];

export default clientes;

/* ── No toques de aquí para abajo ─────────────────────────────────── */

export const PALETAS = {
  clinico: {
    paper: '#F4F6F5', paper2: '#E8EDEB', white: '#FFFFFF',
    ink: '#0C1917', slate: '#566662', line: '#DCE3E0',
    primary: '#0B5D51', primaryDeep: '#062E29', soft: '#DCEBE5',
    bright: '#5FE3B0', accent: '#B67A22',
  },
  confianza: {
    paper: '#F4F6F8', paper2: '#E7ECF1', white: '#FFFFFF',
    ink: '#0D1721', slate: '#55636F', line: '#DBE2E9',
    primary: '#14507E', primaryDeep: '#0A2B45', soft: '#DCE9F4',
    bright: '#6EC1F0', accent: '#C08A2E',
  },
  estetica: {
    paper: '#FAF6F3', paper2: '#F0E7E1', white: '#FFFFFF',
    ink: '#1E1613', slate: '#6B5C55', line: '#E7DCD5',
    primary: '#9A5A4E', primaryDeep: '#57302A', soft: '#F3E2DB',
    bright: '#E8A894', accent: '#A98246',
  },
  bienestar: {
    paper: '#F6F6F1', paper2: '#EBEBE1', white: '#FFFFFF',
    ink: '#16190F', slate: '#5D6353', line: '#DFE2D6',
    primary: '#4A6031', primaryDeep: '#28361A', soft: '#E4EBD8',
    bright: '#A8CE7B', accent: '#B07C2A',
  },
  grafito: {
    paper: '#F5F5F4', paper2: '#E8E8E6', white: '#FFFFFF',
    ink: '#151513', slate: '#5E5E5A', line: '#DEDEDA',
    primary: '#2E2E2B', primaryDeep: '#161614', soft: '#E3E3DF',
    bright: '#C9B992', accent: '#9A7B3F',
  },
};

/* Tus datos — salen en la barra de cada demo */
export const YO = {
  nombre: 'Carlos Guzmán, PharmD',
  whatsapp: '19392901222',
  sitio: 'https://carlosguzmanai.com',
};

export const getCliente = (slug) => clientes.find((c) => c.slug === slug);
export const getPaleta = (nombre) => PALETAS[nombre] || PALETAS.clinico;
export const waUrl = (tel, msg) =>
  `https://wa.me/${tel}?text=${encodeURIComponent(msg)}`;
