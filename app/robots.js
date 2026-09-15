/* Ningún demo se indexa. Protege el sitio real del cliente
   y evita que aparezcan en Google páginas que él no encargó. */
export default function robots() {
  return { rules: [{ userAgent: '*', disallow: '/' }] };
}
