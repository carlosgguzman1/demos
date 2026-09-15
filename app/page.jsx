import clientes, { YO } from '@/clientes';
import Ficha from '@/components/Ficha';

export const metadata = {
  title: 'Demos — uso interno',
  robots: { index: false, follow: false },
};

export default function Indice() {
  return (
    <div style={{
      '--paper':'#F4F6F5','--paper2':'#E8EDEB','--white':'#FFFFFF',
      '--ink':'#0C1917','--slate':'#566662','--line':'#DCE3E0',
      '--primary':'#0B5D51','--primary-deep':'#062E29','--soft':'#DCEBE5',
      '--bright':'#5FE3B0','--accent':'#B67A22',
    }}>
      <section className="sec">
        <div className="wrap">
          <Ficha>Uso interno · {YO.nombre}</Ficha>
          <h1 style={{ marginBottom: 16 }}>Páginas de muestra</h1>
          <p className="lead" style={{ marginBottom: 40 }}>
            {clientes.length} {clientes.length === 1 ? 'demo activo' : 'demos activos'}.
            Ninguno aparece en Google. Borra los que no contesten en tres semanas.
          </p>

          <div className="lista">
            {clientes.map((c) => (
              <a className="lista-item" key={c.slug} href={`/${c.slug}`}>
                <div className="k">{c.especialidad}</div>
                <h3>{c.nombre}</h3>
                <p style={{ fontSize: '.9rem', color: 'var(--slate)' }}>{c.ciudad}</p>
                <span className="u">/{c.slug}</span>
              </a>
            ))}
          </div>

          <p className="note-mono" style={{ marginTop: 44, textAlign: 'left' }}>
            Para añadir uno: edita <b>clientes.js</b>, copia un bloque, cambia los datos,
            Commit changes.
          </p>
        </div>
      </section>
    </div>
  );
}
