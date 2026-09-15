import { YO } from '@/clientes';

export const metadata = { title: 'No encontrada', robots: { index: false } };

export default function NotFound() {
  return (
    <div style={{
      '--paper':'#F4F6F5','--ink':'#0C1917','--slate':'#566662',
      '--line':'#DCE3E0','--primary':'#0B5D51','--accent':'#B67A22',
      '--white':'#FFFFFF','--paper2':'#E8EDEB','--primary-deep':'#062E29',
      '--soft':'#DCEBE5','--bright':'#5FE3B0',
    }}>
      <section className="wrap err-page">
        <div className="err-code">404 · Página no encontrada</div>
        <h1 style={{ maxWidth: '18ch' }}>Esta muestra no existe o fue retirada.</h1>
        <p className="lead" style={{ marginTop: 20, maxWidth: '48ch' }}>
          El enlace que seguiste no está activo.
        </p>
        <div className="btn-row" style={{ justifyContent: 'center' }}>
          <a className="btn btn-ink" href={YO.sitio}>Ir a carlosguzmanai.com</a>
        </div>
      </section>
    </div>
  );
}
