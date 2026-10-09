// Notas de "Cumbre explica". Para sumar una nota, agregá un objeto acá:
// la página índice y la ruta /cumbre-explica/[slug] se generan solas.

export type Article = {
  slug: string;
  tag: string;
  read: string;
  image: string;
  title: string;
  dek: string;
  short: string;
  sections: { h: string; p: string }[];
  cumbre: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "sin-internet",
    tag: "Conectividad",
    read: "3 min",
    image: "/hero-domotica-panel-v1.webp",
    title: "¿Una casa inteligente funciona sin internet?",
    dek: "Depende de cómo esté armado el sistema. Lo importante es saber qué sigue andando y qué no.",
    short:
      "Los equipos con control local siguen funcionando aunque se corte internet. Lo que se pierde es el control a distancia desde el celular y, en algunos casos, los asistentes de voz.",
    sections: [
      {
        h: "Control local y control en la nube",
        p: "Algunos dispositivos se comunican entre sí dentro de tu casa, a través de una central o de tu red. Otros dependen de un servidor del fabricante para cada orden. Los primeros siguen respondiendo a botones, sensores y escenas sin internet. Los segundos, en general, dejan de responder desde la app.",
      },
      {
        h: "Qué sigue funcionando",
        p: "Las teclas de pared, las escenas programadas en una central local, los sensores que disparan una acción dentro de la casa y las cerraduras con código o huella. Si el sistema está bien pensado, la casa sigue siendo usable como siempre.",
      },
      {
        h: "Qué se pierde",
        p: "El acceso remoto: ver cámaras o abrir la puerta cuando no estás, recibir notificaciones en el celular y, según la marca, usar asistentes de voz. Todo vuelve a funcionar cuando vuelve la conexión.",
      },
    ],
    cumbre:
      "Cuando proyectamos un sistema, priorizamos equipos que funcionen de forma local para lo esencial (luces, acceso, clima) y dejamos la nube para lo que realmente la necesita: el control a distancia.",
  },
  {
    slug: "corte-de-luz",
    tag: "Energía",
    read: "3 min",
    image: "/domotica-iluminacion-ambiente-v1.webp",
    title: "¿Qué pasa si se corta la luz?",
    dek: "Una casa automatizada no queda “trabada” por un corte. Pero conviene prever algunas cosas.",
    short:
      "Los equipos que dependen de la red eléctrica se apagan como cualquier artefacto. Las cerraduras inteligentes funcionan con baterías, y un respaldo (UPS) para el router y la central mantiene lo esencial conectado.",
    sections: [
      {
        h: "Las cerraduras",
        p: "La mayoría de las cerraduras inteligentes funcionan a batería, así que un corte no las afecta. Además suelen tener un acceso de emergencia: llave mecánica o una entrada para alimentarlas desde afuera si la batería se agota.",
      },
      {
        h: "La red y la central",
        p: "Si el router y la central de domótica se quedan sin energía, se corta la comunicación entre equipos. Una UPS pequeña los mantiene encendidos durante el corte y evita que el sistema tenga que reconectarse todo de cero.",
      },
      {
        h: "Cuando vuelve la luz",
        p: "Los equipos se reinician solos. Lo que conviene definir en la instalación es cómo arranca cada uno: por ejemplo, que las luces no se prendan todas a la vez a la madrugada cuando vuelve el servicio.",
      },
    ],
    cumbre:
      "En cada proyecto evaluamos qué equipos tienen que seguir funcionando durante un corte y dejamos configurado cómo se comporta la casa cuando vuelve la energía.",
  },
  {
    slug: "que-es-matter",
    tag: "Estándares",
    read: "4 min",
    image: "/hero-domotica-living-v1.webp",
    title: "¿Qué es Matter y por qué importa?",
    dek: "Es un estándar pensado para que dispositivos de distintas marcas se entiendan entre sí.",
    short:
      "Matter es un estándar abierto, impulsado por la Connectivity Standards Alliance junto a Apple, Google, Amazon y Samsung, para que los dispositivos inteligentes funcionen juntos sin importar la marca.",
    sections: [
      {
        h: "El problema que resuelve",
        p: "Hasta ahora, cada marca tenía su propia app y su propio ecosistema. Comprar una lámpara de una marca y un sensor de otra muchas veces significaba dos apps que no se hablaban. Matter busca que eso deje de pasar.",
      },
      {
        h: "Cómo funciona",
        p: "Los dispositivos Matter se comunican por la red de tu casa, por Wi-Fi, Ethernet o Thread, y pueden controlarse de forma local. Un mismo equipo puede usarse desde Apple Home, Google Home, Alexa o SmartThings al mismo tiempo.",
      },
      {
        h: "Qué tener en cuenta",
        p: "No todos los productos son compatibles, y no todas las funciones de cada equipo están cubiertas por el estándar todavía. Antes de comprar conviene revisar que el producto tenga el logo de Matter y qué funciones soporta.",
      },
    ],
    cumbre:
      "Cuando es posible, elegimos equipos compatibles con Matter para que tu sistema no dependa de una sola marca y puedas sumar dispositivos en el futuro sin rehacer todo.",
  },
  {
    slug: "por-donde-empezar",
    tag: "Primeros pasos",
    read: "4 min",
    image: "/domotica-cerradura-despues-v1.webp",
    title: "¿Qué conviene automatizar primero?",
    dek: "No hace falta automatizar toda la casa de una vez. Hay un orden que suele tener más sentido.",
    short:
      "Empezá por lo que usás todos los días: el acceso, la iluminación y el clima. Y si estás en obra, dejá prevista la instalación aunque los equipos lleguen después.",
    sections: [
      {
        h: "1. Acceso",
        p: "Una cerradura inteligente y un videoportero cambian la rutina desde el primer día: no más llaves, accesos temporales para quien necesites y saber quién toca el timbre aunque no estés.",
      },
      {
        h: "2. Iluminación",
        p: "Escenas para cada momento y un botón para apagar todo al salir. Es lo que más se nota en el uso diario y lo que más transforma cómo se ve un ambiente.",
      },
      {
        h: "3. Clima",
        p: "Programar la temperatura antes de llegar y controlar cada ambiente desde el celular. Suma confort y ayuda a no dejar equipos encendidos sin necesidad.",
      },
      {
        h: "Si estás en obra",
        p: "Es el mejor momento para prever cableado, cajas y conexiones. Agregar todo después es posible, pero dejarlo previsto evita romper paredes y abre más opciones.",
      },
    ],
    cumbre:
      "Arrancamos por una charla sobre cómo usás tu casa y armamos un plan por etapas, para que cada paso sume y nada quede incompatible con lo que viene después.",
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
