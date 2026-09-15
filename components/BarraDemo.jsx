import { YO, waUrl } from '@/clientes';
import WAIcon from './WAIcon';

export default function BarraDemo({ cliente }) {
  const msg =
    `Hola Carlos, vi la página de muestra que preparaste para ${cliente.nombre}. Quiero hablar contigo.`;

  return (
    <div className="barra">
      <span className="barra-txt">
        Página de muestra preparada por <b>{YO.nombre}</b> — sin costo y sin compromiso
      </span>
      <a href={waUrl(YO.whatsapp, msg)} target="_blank" rel="noopener noreferrer">
        <WAIcon size={15} />
        Hablar con Carlos
      </a>
    </div>
  );
}
