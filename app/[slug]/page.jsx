import { notFound } from 'next/navigation';
import clientes, { getCliente, getPaleta, waUrl } from '@/clientes';
import Ficha from '@/components/Ficha';
import Reveal from '@/components/Reveal';
import FAQ from '@/components/FAQ';
import WAIcon from '@/components/WAIcon';
import BarraDemo from '@/components/BarraDemo';
import CierreDemo from '@/components/CierreDemo';

/* Genera una página por cada cliente en clientes.js */
export function generateStaticParams() {
  return clientes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = getCliente(slug);
  if (!c) return { title: 'No encontrada' };
  return {
    title: `${c.nombre}, ${c.credencial} — ${c.especialidad}`,
    description: c.subtitulo,
    robots: { index: false, follow: false },
  };
}

const iniciales = (n) =>
  n.replace(/\b(Dra|Dr|Lcda|Lcdo|MD|DMD|DDS|PharmD)\b\.?\s*/gi, '')
   .trim().split(/\s+/).filter(Boolean).slice(0, 2)
   .map((w) => w[0]).join('').toUpperCase();

export default async function DemoCliente({ params }) {
  const { slug } = await params;
  const c = getCliente(slug);
  if (!c) notFound();

  const T = getPaleta(c.paleta);
  const vars = {
    '--paper': T.paper, '--paper2': T.paper2, '--white': T.white,
    '--ink': T.ink, '--slate': T.slate, '--line': T.line,
    '--primary': T.primary, '--primary-deep': T.primaryDeep,
    '--soft': T.soft, '--bright': T.bright, '--accent': T.accent,
  };

  const waCita = waUrl(c.whatsapp, 'Hola, quisiera coordinar una cita. ¿Qué disponibilidad tienen?');

  return (
    <div style={vars}>
      <BarraDemo cliente={c} />

      {/* ── NAV ── */}
      <header className="nav stuck">
        <div className="wrap nav-in">
          <div className="brand">
            <span className="brand-mark">{iniciales(c.nombre)}</span>
            <span className="brand-txt">
              {c.nombre}
              <small>{c.especialidad}</small>
            </span>
          </div>
          <nav className="nav-links" aria-label="Principal">
            <a href="#servicios">Servicios</a>
            <a href="#sobre">Sobre</a>
            <a href="#citas">Citas</a>
          </nav>
          <div className="nav-cta">
            <a className="btn btn-wa btn-sm" href={waCita} target="_blank" rel="noopener noreferrer">
              <WAIcon size={17} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ── HERO ── */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <Ficha>{c.ciudad}</Ficha>
              <h1>{c.titulo}</h1>
              <p className="lead">{c.subtitulo}</p>
              <div className="btn-row">
                <a className="btn btn-wa" href={waCita} target="_blank" rel="noopener noreferrer">
                  <WAIcon />
                  Pedir una cita
                </a>
                <a className="btn btn-ghost" href="#servicios">Ver servicios</a>
              </div>
              <p className="hero-note">
                {c.nombre}, {c.credencial} · {c.especialidad}
              </p>
            </div>

            <figure className="portrait">
              <div className="portrait-fallback">
                <div className="pf-mark">{iniciales(c.nombre)}</div>
                <div className="pf-t">{c.nombre}</div>
                <div className="pf-s">Aquí va su foto</div>
              </div>
              <figcaption className="portrait-cap">
                <span>{c.especialidad}</span>
                <span><b>{c.ciudad.split(',')[0]}</b></span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── FRANJA ── */}
        <section className="strip">
          <div className="wrap" style={{ paddingInline: 0 }}>
            <div className="strip-in">
              {c.datos.map((d) => (
                <div className="strip-cell" key={d.k}>
                  <div className="strip-k">{d.k}</div>
                  <div className="strip-v">{d.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICIOS ── */}
        <section className="sec" id="servicios">
          <div className="wrap">
            <Reveal className="sec-head narrow">
              <Ficha>Servicios</Ficha>
              <h2>Lo que atendemos.</h2>
              <p className="lead">
                Cada servicio se explica antes de empezar: qué es, qué esperar y cuánto
                cuesta. Sin sorpresas.
              </p>
            </Reveal>
            <Reveal className="grid-3">
              {c.servicios.map((s) => (
                <article className="card" key={s.t}>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                  <a
                    className="arrow"
                    href={waUrl(c.whatsapp, `Hola, me interesa información sobre ${s.t}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preguntar →
                  </a>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── POR QUÉ ── */}
        <section className="sec sec-alt">
          <div className="wrap">
            <Reveal className="sec-head narrow">
              <Ficha>Por qué con nosotros</Ficha>
              <h2>Lo que nos diferencia.</h2>
            </Reveal>
            <Reveal className="facts">
              {c.porque.map((p) => (
                <div className="fact" key={p.t}>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section className="sec" id="sobre">
          <div className="wrap narrow">
            <Reveal className="prose">
              <Ficha>Sobre la práctica</Ficha>
              <h2 style={{ marginBottom: 20 }}>Quién le va a atender.</h2>
              {c.sobre.map((p, i) =>
                i === 0 ? <p className="lead" key={i}>{p}</p> : <p key={i}>{p}</p>
              )}
            </Reveal>
          </div>
        </section>

        {/* ── CITAS ── */}
        <section className="sec sec-dark" id="citas">
          <div className="wrap narrow cta-band">
            <Reveal>
              <Ficha pale center>Citas</Ficha>
              <h2>Coordine su cita en un mensaje.</h2>
              <p className="lead" style={{ marginTop: 16 }}>
                Escríbanos por WhatsApp con su nombre y qué necesita.
                Le contestamos el mismo día.
              </p>
              <div className="btn-row" style={{ justifyContent: 'center' }}>
                <a className="btn btn-wa" href={waCita} target="_blank" rel="noopener noreferrer">
                  <WAIcon />
                  Escribir por WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="sec">
          <div className="wrap">
            <Reveal className="sec-head center narrow">
              <Ficha center>Preguntas</Ficha>
              <h2>Lo que más nos preguntan</h2>
            </Reveal>
            <Reveal><FAQ items={c.faq} /></Reveal>
          </div>
        </section>
      </main>

      <CierreDemo cliente={c} />

      <footer className="foot">
        <div className="wrap">
          <p className="legal">
            Página de muestra con fines de demostración. El contenido es informativo
            y no constituye consejo médico. Esta página no recibe ni almacena
            información de pacientes. {c.nombre} no ha encargado ni aprobado este
            material — se preparó como ejemplo y se retira a solicitud.
          </p>
        </div>
      </footer>
    </div>
  );
}
