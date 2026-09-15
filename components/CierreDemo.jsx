import { YO, waUrl } from '@/clientes';
import Ficha from './Ficha';
import WAIcon from './WAIcon';

export default function CierreDemo({ cliente }) {
  const msg =
    `Hola Carlos, vi la página que preparaste para ${cliente.nombre} y me interesa. ¿Cómo seguimos?`;

  return (
    <section className="cierre">
      <div className="wrap narrow cierre-inner">
        <Ficha center>Sobre esta página</Ficha>
        <h2>Esto no es una plantilla. Se la hice a usted.</h2>
        <p className="lead" style={{ marginTop: 16 }}>
          Soy {YO.nombre}, farmacéutico de compounding en San Juan. Preparé esta muestra
          con la información pública de su práctica para que viera cómo se vería.
          Nadie me la pidió y no le cuesta nada.
        </p>
        <p style={{ marginTop: 14 }}>
          Si le gusta, la versión completa lleva su contenido real, sus fotos,
          su dominio propio y el sistema de citas conectado. Si no, aquí queda
          y no le vuelvo a escribir.
        </p>
        <div className="btn-row">
          <a className="btn btn-wa" href={waUrl(YO.whatsapp, msg)} target="_blank" rel="noopener noreferrer">
            <WAIcon />
            Hablar con Carlos
          </a>
          <a className="btn btn-pale" href={YO.sitio} target="_blank" rel="noopener noreferrer">
            Ver mi trabajo
          </a>
        </div>
      </div>
    </section>
  );
}
