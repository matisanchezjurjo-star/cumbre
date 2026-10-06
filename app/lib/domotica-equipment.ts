// Equipamiento de domótica que instalamos. Sin precio ni stock todavía —
// se migran a productos reales en products.ts cuando estén cargados.
export type DomoticaEquipment = {
  slug: string;
  title: string;
  images: { src: string; alt: string }[];
  description: string;
  details: string;
  installation: string[];
};

export const DOMOTICA_EQUIPMENT: DomoticaEquipment[] = [
  {
    slug: "cerradura-inteligente",
    title: "Cerradura inteligente",
    images: [
      {
        src: "/domotica-cerradura-v1.webp",
        alt: "Cerradura inteligente con teclado táctil y sensor de huella en puerta de entrada",
      },
    ],
    description:
      "Acceso sin llave con teclado táctil, sensor de huella y apertura remota desde la app. Asigná códigos temporales para visitas o personal de limpieza, y recibí notificaciones cada vez que se abre la puerta.",
    details:
      "Reemplaza la cerradura tradicional de la puerta principal (u otras puertas de la casa) por un sistema de acceso sin llave: teclado táctil con código numérico, sensor de huella digital y apertura remota desde el celular. Podés crear códigos de acceso permanentes o temporales — para un alquiler temporario, el personal de limpieza o una visita puntual — y revisar el historial de accesos desde la app.",
    installation: [
      "Retiramos la cerradura mecánica existente y montamos la cerradura inteligente en el mismo hueco de la puerta, sin modificar la carpintería.",
      "Vinculamos el dispositivo a tu red WiFi y lo configuramos en la app.",
      "Cargamos los usuarios, códigos de acceso y huellas que necesites.",
      "Te mostramos cómo administrar accesos temporales y ver el historial desde el celular.",
    ],
  },
  {
    slug: "videoportero-inteligente",
    title: "Videoportero inteligente",
    images: [
      {
        src: "/domotica-videoportero-v1.webp",
        alt: "Videoportero inteligente con cámara en la entrada y pantalla de video en el living",
      },
    ],
    description:
      "Cámara con visión nocturna en la entrada, con video en vivo desde el panel de la casa o tu celular. Atendé, hablá y abrile la puerta a quien toque timbre estés donde estés.",
    details:
      "Reemplaza el timbre tradicional por una unidad con cámara, micrófono y parlante en la puerta de entrada. Cuando alguien toca timbre, ves quién es en video en vivo —con visión nocturna— desde el panel de la casa o tu celular, estés donde estés, y podés hablarle y abrirle la puerta a distancia si tenés una cerradura inteligente integrada.",
    installation: [
      "Instalamos la unidad exterior junto a la puerta de entrada, cableada o a batería según el modelo.",
      "La vinculamos a tu red WiFi y la emparejamos con el panel central (si tu casa tiene uno) y con tu celular.",
      "Configuramos las notificaciones push para que te avise estés donde estés.",
      "Si ya tenés cerradura inteligente instalada, integramos la apertura remota desde la misma app.",
    ],
  },
  {
    slug: "camara-seguridad-exterior",
    title: "Cámara de seguridad exterior",
    images: [
      {
        src: "/domotica-camara-v1.webp",
        alt: "Cámara de seguridad inteligente para exterior instalada bajo el alero de una casa",
      },
    ],
    description:
      "Cámara resistente a la intemperie con detección de movimiento y grabación en la nube. Mirá el patio, el acceso o el perímetro de tu casa en vivo desde la app, de día o de noche.",
    details:
      "Cámara exterior resistente a la intemperie, pensada para cubrir el patio, el acceso vehicular o el perímetro de la propiedad. Detecta movimiento, graba en la nube o en almacenamiento local según el plan que elijas, y te deja ver el video en vivo desde la app en cualquier momento, de día o de noche gracias a su visión nocturna.",
    installation: [
      "Definimos junto a vos el punto de mejor cobertura: alero, pared o poste.",
      "Montamos la cámara y resolvemos la alimentación eléctrica (cableada o a batería, según el modelo).",
      "La conectamos a tu red WiFi y configuramos las zonas de detección de movimiento.",
      "Activamos la grabación en la nube o en tarjeta local, según lo que hayas elegido.",
    ],
  },
  {
    slug: "iluminacion-inteligente-integral",
    title: "Iluminación inteligente integral",
    images: [
      {
        src: "/domotica-iluminacion-switch-v1.webp",
        alt: "Panel de control de iluminación inteligente en la pared",
      },
      {
        src: "/domotica-iluminacion-ambiente-v1.webp",
        alt: "Living y cocina con iluminación inteligente integrada, luz cálida en toda la escena",
      },
    ],
    description:
      "Controlá la intensidad y el color de cada ambiente desde un panel en la pared o la app, con escenas predefinidas para cada momento del día. Integrá luminarias de techo, tiras LED y lámparas en un solo sistema.",
    details:
      "Sistema de iluminación controlado desde un panel en la pared o la app, que integra luminarias de techo, tiras LED y lámparas de pie en un solo sistema. Permite ajustar intensidad y color por ambiente, y armar escenas predefinidas (por ejemplo, 'cena', 'película' o 'buenas noches') que encienden o atenúan varias luces a la vez con un solo toque.",
    installation: [
      "Reemplazamos los interruptores tradicionales por módulos inteligentes compatibles con la instalación eléctrica existente — en la mayoría de los casos, sin necesidad de recablear.",
      "Sumamos las luminarias, tiras LED o lámparas que quieras integrar al sistema.",
      "Agrupamos las luces por ambiente y armamos las escenas que nos pidas.",
      "Programamos horarios automáticos si los necesitás (por ejemplo, luces exteriores al atardecer).",
    ],
  },
  {
    slug: "termostato-inteligente",
    title: "Termostato inteligente",
    images: [
      {
        src: "/domotica-termostato-v1.webp",
        alt: "Termostato inteligente en la pared mostrando la temperatura configurada",
      },
    ],
    description:
      "Programá la climatización por horario o ambiente y ajustala de forma remota desde la app. Aprende tus hábitos para optimizar el consumo, sin perder confort.",
    details:
      "Reemplaza el control tradicional de tu sistema de climatización por un panel inteligente que programás por horario o por ambiente, y ajustás de forma remota desde la app aunque no estés en casa. Con el uso, ajusta sus sugerencias a tus hábitos para cuidar el consumo eléctrico sin resignar confort.",
    installation: [
      "Conectamos el termostato al sistema de climatización existente — split, calefacción central o losa radiante, según el caso.",
      "Lo vinculamos a tu red WiFi y lo emparejamos con la app.",
      "Configuramos horarios y zonas de climatización según cómo usás cada ambiente.",
      "Te mostramos cómo ajustar todo de forma remota desde el celular.",
    ],
  },
];
