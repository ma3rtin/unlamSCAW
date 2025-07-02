const questions = [
  {
    "question": "Dentro de una Red WAN con tecnología ATM los circuitos conmutados establecidos entre nodo y nodo se los denomina:",
    "options": [
      "Circuito Real.",
      "Circuito Encaminado.",
      "Circuito Virtual.",
      "Canal Físico.",
      "Transroute",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Circuito Virtual."
  },
  {
    "question": "Dentro del Protocolo Frame Relay la unidad de transmisión o paquete a enviar por un sistema físico heterogéneo corresponde a la denominación de:",
    "options": [
      "Datagrama.",
      "Cluster.",
      "Frame o MTU.",
      "NTFS",
      "ISDN.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Frame o MTU."
  },
  {
    "question": "Dentro de una Red WAN, cuando nos referimos a xDSL estamos hablando de:",
    "options": [
      "Una tecnología estandarizada de comunicaciones de alta velocidad.",
      "Un tipo de servidor de acceso para módems.",
      "Un tipo de DTU para canales punto a punto digital.",
      "Una tecnología estandarizada de comunicaciones digitales.",
      "Ambas a y d.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Ambas a y d."
  },
  {
    "question": "Dentro de una Red WAN, cuando nos referimos a SONET estamos hablando de:",
    "options": [
      "Una tecnología estandarizada de comunicaciones de alta velocidad.",
      "Un tipo de servidor de acceso para módems.",
      "Un Protocolo de Transporte para Redes en Anillos de Fibra Óptica.",
      "Una tecnología estandarizada de comunicaciones digitales.",
      "Un Protocolo de Transporte para Redes Privadas Virtuales.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Un Protocolo de Transporte para Redes en Anillos de Fibra Óptica."
  },
  {
    "question": "Dentro de las Redes WAN con tecnología ATM se realiza la verificación de errores en los nodos que origina:",
    "options": [
      "La Corrección de los Paquetes.",
      "La Detección de Errores.",
      "La Retransmisión de los paquetes del origen.",
      "Ambas a y c.",
      "Ambas b y c",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Ambas b y c"
  },
  {
    "question": "La tecnología ISDN o lo que se denomina Red Digital de Servicios Integrados divide el ancho de banda en canales de acuerdo al siguiente detalle:",
    "options": [
      "Un Canal de Tipo D de 64 Kbps utilizado para información de Control.",
      "Canales de Tipo B de 64 Kbps utilizados para Transmisión de Voz y Datos.",
      "Canales de Tipo H de 64 Kbps utilizados para información de Control.",
      "Canales de Tipo H de 64 Kbps utilizados para Transmisión de Voz y Datos.",
      "Ambas a y b.",
      "Ambas a y d.",
      "Ninguna de las Anteriores es Correcta."
    ],
    "answer": "Ambas a y b."
  },
  {
    "question": "La contratación de Un Canal E1 para una portadora de WAN para acceder a Internet nos permite acceder a un ancho de banda de 2 MBPS sabiendo que dicho canal corresponde a los Estándares de normas europeas. El tipo de portadora contratada corresponde a:",
    "options": [
      "ISDN.",
      "ADSL.",
      "Cablemódem (HFC).",
      "PDH-T-CARRIER.",
      "X25.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "PDH-T-CARRIER."
  },
  {
    "question": "Dentro de las portadoras para el transporte de información existe lo que se denomina PDH-T--CARRIER que corresponde a:",
    "options": [
      "Una tecnología estandarizada de comunicaciones para redes LANS.",
      "Un tipo de servidor de acceso para módems.",
      "Un Protocolo sincrónico de Transporte para Redes Fibra Óptica.",
      "Un protocolo de transporte de alta velocidad de tipo Plesincrónico",
      "Un Protocolo de Transporte para Redes Privadas Virtuales.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Un protocolo de transporte de alta velocidad de tipo Plesincrónico"
  },
  {
    "question": "Las partes topológicas de una red de Cablemodem (HFC) como estructura de transporte de Video y Datos para Redes WAN de tipo híbrida corresponden a:",
    "options": [
      "Enlace Satelital.",
      "Cabecera.",
      "Red Troncal.",
      "Red de Distribución.",
      "Red de abonado.",
      "Ambas a, b , c y d.",
      "Ambas a, b, c y e.",
      "Ambas b, c, d y e.",
      "Ninguna de las anteriores es Correcta."
    ],
    "answer": "Ambas b, c, d y e."
  },
  {
    "question": "La extensión aplicada de las redes Ethernet sobre un par de cable trenzado a distancias en Redes MAN de más de 1,800 metros se la denomina:",
    "options": [
      "HDSL.",
      "LRE.",
      "PDH-T-CARRIER.",
      "ISDN.",
      "SONET.",
      "SLA.",
      "Ninguna de las Anteriores es Correcta."
    ],
    "answer": "LRE."
  },
  {
    "question": "Decimos que el Cablemódem es una estructura de transporte de Video y Datos para Redes WAN de tipo híbrida, que posee desde la cabecera hasta la red de abonado como medio físico de transmisión a:",
    "options": [
      "Microondas.",
      "Cable Coaxil.",
      "WIRELESS",
      "Fibra Óptica Monomodo.",
      "Ambas B y D.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Ambas B y D."
  },
  {
    "question": "El Protocolo Normalizado que correspondía a los primeros tres niveles del modelo OSI (Física, Enlace y Red), que trabaja bajo a una topología que se la denomina malla, con modo de transmisión asincrónica y aplica detección y corrección de errores corresponde a:",
    "options": [
      "X-25",
      "ISDN.",
      "ATM.",
      "SDH - Sonet.",
      "HDSL.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "X-25"
  },
  {
    "question": "El Jitter es la variación en el tiempo en la llegada de los paquetes, causada por congestión de red, perdida de sincronización o por las diferentes rutas seguidas por los paquetes para llegar al destino y entre el punto inicial y final de la comunicación debiera ser inferior a 100 ms. Esta medida es parte del Protocolo:",
    "options": [
      "SLA.",
      "ATM.",
      "RFC.",
      "LRE.",
      "MPLS.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "SLA."
  },
  {
    "question": "Cuando transportamos datos en un canal STM-4 para una portadora de WAN de acceso a Internet, que nos permite tener un ancho de banda de 622 MBPS, el tipo de tecnología utilizada corresponde a:",
    "options": [
      "ISDN.",
      "ADSL",
      "Cablemódem (HFC).",
      "PDH-T-CARRIER.",
      "SONET.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "SONET."
  },
  {
    "question": "La Red WAN, creada como backbone primario para Internet 2, que posee servicios de conexión de alto rendimiento entre puntos de agregación regional, que comenzó a prestar servicios en enero de 1999 y es resultante del Proyecto UCAID corresponde a:",
    "options": [
      "ARPANET.",
      "MILNET.",
      "ALOHA.",
      "ABILENE.",
      "STARTEL.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "ABILENE."
  },
  {
    "question": "El Protocolo Normalizado de transporte de datos estándar creado por la IETF y definido en el RFC 3031, que opera entre la capa de enlace de datos y la capa de red del modelo OSI y fue diseñado para unificar el servicio de transporte de datos para las redes basadas en circuitos y las basadas en paquetes corresponde a:",
    "options": [
      "ATM.",
      "ISDN.",
      "X-25.",
      "SDH - Sonet.",
      "MPLS.",
      "LRE.",
      "Ninguna de las Anteriores es Correcta."
    ],
    "answer": "MPLS."
  },
  {
    "question": "La tecnología HDSL es utilizada por las compañías de comunicaciones para entregar comunicaciones a Internet a centro de procesamiento de datos, con un ancho de banda superior a 1,54 MBPS, El canal ascendente y descendente de comunicaciones son del tipo:",
    "options": [
      "Simétrico.",
      "Sincrónico.",
      "Asimétrico.",
      "Asincrónico.",
      "Ambas a y b",
      "Ambas a y d.",
      "Ninguna de las Anteriores es Correcta."
    ],
    "answer": "Ambas a y d."
  },
  {
    "question": "La red de abonado, dentro de la estructura de cablemódem, es la última derivación de cable coaxial hasta la base de conexión de abonado. Para entregar la señal de Video y datos utiliza tecnología:",
    "options": [
      "ISDN",
      "ADSL",
      "HDSL.",
      "PDH-E-CARRIER.",
      "X25.",
      "ATM.",
      "Ninguna de las Anteriores es Correcta."
    ],
    "answer": "ADSL"
  },
  {
    "question": "El protocolo plasmado en un documento de carácter legal por el que una compañía que presta un servicio de comunicaciones de transporte a otra, donde se compromete a prestar el mismo bajo unas determinadas condiciones y con unas prestaciones mínimas corresponde a:",
    "options": [
      "LRE.",
      "ATM.",
      "RFC.",
      "SLA.",
      "MPLS.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "SLA."
  },
  {
    "question": "Una Red WAN telefónica, para realizar las llamadas entre corresponsales utiliza como principio básico para establecer los enlaces:",
    "options": [
      "Protocolo H323.",
      "Conmutación de Paquetes.",
      "Conmutación de Circuitos.",
      "Protocolo SIP.",
      "Ambas a y d.",
      "Ninguna de las Anteriores es correcta"
    ],
    "answer": "Conmutación de Circuitos."
  },
  {
    "question": "El Servicio/protocolo de red de tipo Protocolo Cliente –Servidor en el que generalmente un servidor posee una lista de direcciones IP dinámicas y las va asignando a los clientes conforme éstas van estando libres, sabiendo en todo momento quién ha estado en posesión de esa IP, cuánto tiempo la ha tenido y a quién se la ha asignado después corresponde a:",
    "options": [
      "HTTP.",
      "FTP.",
      "SMTP.",
      "DNS.",
      "SNMP.",
      "DHCP.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "DHCP."
  },
  {
    "question": "El Servicio/ Protocolo de Internet, que implementa un Servicio de directorio (metadirectorio) Jerárquico y Distribuido, utilizado para administrar un repositorio centralizado de usuarios, aplicaciones y recursos y define permisos, configurados por el administrador para permitir el acceso a ciertos usuarios a la base de datos, y mantener información en privado corresponde a:",
    "options": [
      "LDAP.",
      "FTP.",
      "SMTP",
      "DNS.",
      "HTTP.",
      "DHCP.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "LDAP."
  },
  {
    "question": "El Protocolo de red que permite el intercambio de datos utilizando un canal seguro entre dos dispositivos conectados en red y permite emulación de Terminal en modo Túnel se lo denomina:",
    "options": [
      "DNS.",
      "SSH.",
      "ICMP.",
      "TELNET.",
      "SONET.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "SSH."
  },
  {
    "question": "Dentro de los Servicios ofrecidos dentro de un dominio o nodo de Internet, cuando nos referimos al Servicio HTTPS estamos hablando de:",
    "options": [
      "El acceso en modo terminal remoto a un equipo computador.",
      "Protocolo de Transferencia de archivos.",
      "Protocolo mundial para intercambiar mensajes de texto en un canal.",
      "Colección de ficheros o páginas WEB que incluyen todo tipo de información e hipermedia.",
      "Protocolo Simple de transferencia de Correo.",
      "Protocolo Simple de Transferencia de Hipertexto Seguro.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Protocolo Simple de Transferencia de Hipertexto Seguro."
  },
  {
    "question": "El Reverse Proxy Server es un componente que aplica técnicas para:",
    "options": [
      "Resolver nombres de dominio.",
      "Bloquear el acceso a puertos.",
      "Optimizar el correo electrónico.",
      "Asignar dinámicamente direcciones IP.",
      "Realizar Balanceo de carga.",
      "Realizar el NAT.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Realizar Balanceo de carga."
  },
  {
    "question": "Dentro del Esquema del Protocolo TCP/ IP, y para identificar cada WWW, existe un sistema de nombres jerárquico que permite desarrollar el nombre a partir de una secuencia de segmentos alfanuméricos separados por puntos, teniendo la parte izquierda del mismo correspondiente al nombre de la computadora y los otros segmentos al grupo al cual pertenecen. Por lo tanto, nos estamos refiriendo al:",
    "options": [
      "Sistema de Nombres de Dominio (DNS).",
      "Proxy Reverse.",
      "Monitor de Web.",
      "Ambas a y c.",
      "Todas las Anteriores son Correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Sistema de Nombres de Dominio (DNS)."
  },
  {
    "question": "Dentro de los Servicios ofrecidos dentro de un dominio o nodo de Internet, el Sistema de Nombres de Dominio para realizar las comunicaciones a través de un firewall utiliza el Puerto:",
    "options": [
      "Puerto 80.",
      "Puertos 20 y 21.",
      "Puerto 25.",
      "Puerto 53.",
      "Puerto 8080.",
      "Ambas a y e.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Puerto 53."
  },
  {
    "question": "Dentro de los Servicios ofrecidos dentro de un dominio o nodo de Internet, el servicio de Webmail, para realizar las comunicaciones a través de un firewall utiliza el Puerto:",
    "options": [
      "HTTP Puerto 80.",
      "FTP Puertos 20 y 21.",
      "SMTP Puerto 25.",
      "DNS Puerto 53.",
      "HTTP Puerto 8080.",
      "Ambas a y e.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Ambas a y e."
  },
  {
    "question": "Dentro de los Servicios ofrecidos dentro de un dominio o nodo de Internet, cuando nos referimos al Servicio FTPS estamos hablando de:",
    "options": [
      "El acceso en modo terminal remoto a un equipo computador.",
      "Protocolo de Transferencia de archivos",
      "Protocolo mundial para intercambiar mensajes de texto en un canal.",
      "Colección de ficheros o páginas WEB que incluyen todo tipo de información e hipermedia.",
      "Protocolo Simple de transferencia de Correo",
      "Protocolo Simple de Transferencia de Hipertexto.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Ninguna de las Anteriores es correcta."
  },
  {
    "question": "Dentro de los Servicios ofrecidos dentro de un dominio o nodo de Internet, el Protocolo Simple de Transferencia de Correo, para realizar las comunicaciones a través de un firewall utiliza el Puerto:",
    "options": [
      "HTTP Puerto 80.",
      "FTP Puertos 20 y 21.",
      "SMTP Puerto 25.",
      "DNS Puerto 53.",
      "HTTP Puerto 8080.",
      "Ambas a y e.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "SMTP Puerto 25."
  },
  {
    "question": "Dentro de los Servicios ofrecidos dentro de un dominio o nodo de Internet, cuando nos referimos al Servicio IRC estamos hablando de:",
    "options": [
      "El acceso en modo terminal remoto a un equipo computador.",
      "Protocolo de Transferencia de archivos.",
      "Protocolo mundial para intercambiar mensajes de texto en un canal.",
      "Colección de ficheros o páginas WEB que incluyen todo tipo de información e Hipermedia.",
      "Protocolo Simple de transferencia de Correo.",
      "Protocolo Simple de Transferencia de Hipertexto.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Protocolo mundial para intercambiar mensajes de texto en un canal."
  },
  {
    "question": "El servicio RR-DNS (Round Robin DNS): es una herramienta que se utiliza para aplicar técnicas de:",
    "options": [
      "Cacheo de Páginas Webs.",
      "Monitoreo de Reglas de firewall.",
      "Monitoreo de Ancho de Banda.",
      "Monitoreo de Correo Electrónico",
      "Balanceo de Carga.",
      "Monitoreo de Página WEB.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Balanceo de Carga."
  },
  {
    "question": "Dentro de los Servicios ofrecidos dentro de un dominio o nodo de Internet, aquel que limita el tamaño de los archivos atacheados en el servicio de correo electrónico comunicaciones corresponde a:",
    "options": [
      "Proxy.",
      "Monitor de Correo Electrónico.",
      "Firewall.",
      "Monitor de Ancho de Banda.",
      "Radius.",
      "Monitor de Pagina WEB.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Monitor de Correo Electrónico."
  },
  {
    "question": "Aquel servicio que se encarga de validar y dar acceso remoto a usuarios a la Red Interna se lo denomina:",
    "options": [
      "Firewall.",
      "Proxy.",
      "Proxy Reverse.",
      "Access Server.",
      "Active Directory.",
      "Router.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Access Server."
  },
  {
    "question": "El servicio que limita tiempos de acceso al uso de la red internet en lo que respecta a páginas Webs se lo denomina:",
    "options": [
      "Proxy.",
      "Editor de Reglas.",
      "Monitor de Ancho de Banda.",
      "Monitor de Correo Electrónico.",
      "Radius.",
      "Monitor de Página WEB.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Monitor de Página WEB."
  },
  {
    "question": "El servicio de internet que se encarga de Mantener un Cache Configurable (Activo/Pasivo) de los datos (páginas Webs) más solicitados o recientemente recuperados para mejorar la performance de respuesta ante solicitudes se lo denomina:",
    "options": [
      "Proxy.",
      "Proxy Reverse.",
      "Monitor de Ancho de Banda.",
      "Monitor de Correo Electrónico.",
      "Radius.",
      "Monitor de Página WEB.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Proxy."
  },
  {
    "question": "Dentro de los Servicios ofrecidos dentro de un dominio o nodo de Internet, cuando nos referimos al Servicio SSH estamos hablando de:",
    "options": [
      "El acceso en modo terminal remoto a un equipo computador por canal encriptado.",
      "Protocolo de Transferencia de archivos.",
      "Protocolo mundial para intercambiar mensajes de texto en un canal.",
      "Colección de ficheros o páginas WEB que incluyen todo tipo de información e Hipermedia.",
      "Protocolo Simple de transferencia de Correo.",
      "Protocolo Simple de Transferencia de Hipertexto.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "El acceso en modo terminal remoto a un equipo computador por canal encriptado."
  },
  {
    "question": "Dentro de los Servicios ofrecidos dentro de un dominio o nodo de Internet, cuando nos referimos al Servicio SMTP estamos hablando de:",
    "options": [
      "El acceso en modo terminal remoto a un equipo computador.",
      "Protocolo de Transferencia de archivos.",
      "Protocolo mundial para intercambiar mensajes de texto en un canal.",
      "Colección de ficheros o páginas WEB que incluyen todo tipo de información e hipermedia.",
      "Protocolo Simple de transferencia de Correo.",
      "Protocolo Simple de Transferencia de Hipertexto.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Protocolo Simple de transferencia de Correo."
  },
  {
    "question": "Dentro de los Servicios ofrecidos dentro de un dominio o nodo de Internet, El Firewall realiza una protección de nuestra red bloqueando las comunicaciones a través de los Puertos. Para configurar un servicio y poder ser ofrecido a través de los mismos debo hacer uso del:",
    "options": [
      "Proxy.",
      "Editor de Reglas.",
      "Monitor de Ancho de Banda.",
      "Active Directory.",
      "Radius.",
      "Monitor de Pagina WEB.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Editor de Reglas."
  },
  {
    "question": "Decimos que el modelo Internet está basado en una red de redes con arquitectura o paradigma cliente-servidor, que aparte de los componentes físicos, hardware, protocolos, y Sistemas operativos la interacción cliente servidor necesita de:",
    "options": [
      "La aplicación del servidor.",
      "La aplicación del cliente.",
      "Un algoritmo de compresión de datos.",
      "Un algoritmo de encriptación de datos.",
      "Ambas a y c.",
      "Ambas a y b.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Ambas a y b."
  },
  {
    "question": "El Componente de un nodo de Internet, que está compuesto por un conjunto de módems en línea con sus puertos conectados a accesos telefónicos unitarios o rotativos; que se encarga de filtrar los accesos bajo clave de identificación se lo denomina:",
    "options": [
      "Access Server.",
      "Router.",
      "WWW.",
      "Proxy.",
      "Firewall.",
      "Proxy Reverse.",
      "Ninguna de las Anteriores es Correcta."
    ],
    "answer": "Access Server."
  },
  {
    "question": "Cuando configuramos a nuestros DNSs para realizar Asignación en forma cíclica respetando un orden a servicios WEBs, estamos aplicando una técnica de:",
    "options": [
      "Administración de Ancho de banda.",
      "Administración de Web.",
      "Balanceo de Carga.",
      "Administración de Correo Electrónico.",
      "Administración de Usuarios.",
      "NAT.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta"
    ],
    "answer": "Balanceo de Carga."
  },
  {
    "question": "Una Computadora que se desempeña como Monitor de Red, compuesto por Hardware y Software, se caracteriza por ser:",
    "options": [
      "Un medidor de nivel de desempeño del Sistema de Red.",
      "Un Servidor de Red que Exclusivamente comparte las tareas del monitoreo con la administración de Usuarios.",
      "Un supervisor de Hechos específicos y labrador de estadísticas.",
      "Un medidor de nivel de colisiones.",
      "Ambas a, b y c.",
      "Ambas a b y d.",
      "Ambas a c y d.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Ambas a c y d."
  },
  {
    "question": "Un grupo de computadores (servidores) interconectados que a su vez actúan como un único servidor, que están localizados conjuntamente en una posición física determinada, manejando las peticiones realizadas por los usuarios a través de Internet se lo denomina:",
    "options": [
      "Host.",
      "Intranet.",
      "Montante.",
      "Granja de Servidores.",
      "DMZ.",
      "Extranet.",
      "Ninguna de las Anteriores es Correcta."
    ],
    "answer": "Granja de Servidores."
  },
  {
    "question": "Para poder bloquear un bombardeo de E-mails y aplicar la utilidad de filtro Spam se debe acceder al:",
    "options": [
      "Administrador de Ancho de banda.",
      "Administrador de Web.",
      "Balanceo de Carga.",
      "Monitor de Correo Electrónico.",
      "NAT.",
      "Administrador de Usuarios.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Monitor de Correo Electrónico."
  },
  {
    "question": "Para evitar el acceso de los usuarios a determinadas páginas de Internet que están prohibidas por la empresa se debe hacer uso y configurar el:",
    "options": [
      "DNS Primario.",
      "Router.",
      "WWW.",
      "Proxy",
      "Firewall.",
      "Proxy Reverse",
      "Monitor de Página Web o W-Manager",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Monitor de Página Web o W-Manager"
  },
  {
    "question": "El elemento de un nodo de Internet, compuesto por un computador (Hardware y Software) que realiza el servicio de cachear las páginas más accedidas dentro del tiempo de acceso para acelerar la respuesta a la solicitud del usuario se lo denomina:",
    "options": [
      "Access Server.",
      "Router.",
      "WWW.",
      "Proxy Reverse",
      "Firewall.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Ninguna de las Anteriores es correcta."
  },
  {
    "question": "Para limitar el servicio de FTPS, dentro de un Dominio Respectivo, se debe modificar y acceder al:",
    "options": [
      "Access Server.",
      "Router.",
      "WWW.",
      "Proxy.",
      "Firewall.",
      "Proxy Reverse.",
      "Ninguna de las Anteriores es Correcta."
    ],
    "answer": "Firewall."
  },
  {
    "question": "Cuando cambiamos de proveedor de comunicaciones (Telco), dicha empresa nos asigna un rango de direcciones IP públicas a los efectos de identificar nuestros servicios en la red de Internet. Por lo tanto, para ello ocurra se debe modificar la configuración de:",
    "options": [
      "El Servicio de Correo electrónico.",
      "Router.",
      "Firewall.",
      "Proxy.",
      "Registros DNS.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Registros DNS."
  },
  {
    "question": "El elemento de un nodo de Internet, compuesto por un computador (Hardware y Software) con interfaz de red multipuerto, que habilita o deshabilita servicios en forma parcial/global de acuerdo a las políticas de la organización se lo denomina:",
    "options": [
      "Access Server.",
      "Router.",
      "WWW",
      "Proxy.",
      "Firewall.",
      "Servidor de Correo electrónico.",
      "Monitor de Correo Electrónico.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Firewall."
  },
  {
    "question": "Cuando observamos un aumento considerable dentro de las peticiones procedentes de los servicios WWW institucional y eso se traduce en lentitud para responder a las peticiones solicitadas podemos reconfigurar instalando un:",
    "options": [
      "Monitor de Página Web o Web Manager.",
      "Router Adicional.",
      "Monitor de Correo electrónico o E Manager.",
      "Servidor Balanceador de Carga.",
      "Servidor de Transacciones Intermedias.",
      "Otro Proxy.",
      "Todas las anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Servidor Balanceador de Carga."
  },
  {
    "question": "El programa o software de administración instalado en el Firewall o en proximidad, que Registra alertas de ataques en un Archivo el Origen, de donde proviene la incursión (Dirección IP), El Servicio, el Puerto, la Fecha y Hora de cuando fue realizado el Intento se lo denomina:",
    "options": [
      "Firewall.",
      "IDS.",
      "Relevador de Alertas.",
      "Router.",
      "Monitor de Red",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "IDS."
  },
  {
    "question": "Dentro de los primeros servicios de Internet, aquel elemento basado en uno o varios servidores; que permite visualizar directorios, acceder a información a través de una interfaz basada en menú y trabaja con componentes como Ítems, Documentos, Bookmark corresponde a:",
    "options": [
      "Gopher.",
      "Archie.",
      "Wais.",
      "Finger.",
      "BBS.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Gopher."
  },
  {
    "question": "El Dispositivo que separa/protege dos redes asegurando la unidireccionalidad en el flujo de información permitiendo que la información de una red llegue a otra red (pero no viceversa) corresponde a:",
    "options": [
      "Firewall.",
      "Proxy",
      "Access Server.",
      "Router.",
      "Diodo de datos.",
      "DNS",
      "Proxy Reverse.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Diodo de datos."
  },
  {
    "question": "El firewall es un dispositivo de defensa perimetral que separa redes y filtra tráfico dependiendo de reglas predefinidas, También realiza las siguientes acciones:",
    "options": [
      "Protege a nuestra RED de ataques internos.",
      "Protege a nuestra Red de accesos no autorizados.",
      "Protege a nuestra Red de todos los ataques dañinos de malwares.",
      "Releva las Alertas de Ataque cuando se producen.",
      "Divide a la red en 3 zonas básicas, Interna, externa y DMZ.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Divide a la red en 3 zonas básicas, Interna, externa y DMZ."
  },
  {
    "question": "El Software de Administración y control para Servidores de Acceso Remoto, que autentica las acciones de acceso remoto mediante las llamadas, protocolos y filtros y soporta la seguridad adicional de los servidores proxy corresponde a:",
    "options": [
      "Gopher.",
      "TFTP.",
      "Wais.",
      "Finger.",
      "Radius.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Radius."
  },
  {
    "question": "Dentro de los primeros servicios de Internet, aquel servicio de Internet que publica basado en Bases de datos de documentos indexados bajo el Protocolo ANSI Z39.50 con acceso a través de Telnet corresponde a:",
    "options": [
      "Gopher.",
      "Archie.",
      "Wais.",
      "Finger.",
      "BBS.",
      "Trace",
      "Ninguna de las Anteriores es Correcta."
    ],
    "answer": "Wais."
  },
  {
    "question": "Dentro de las técnicas de balanceo de carga, podemos detallar:",
    "options": [
      "Balanceo de Ruteo.",
      "Balanceo de Peticiones.",
      "Balanceo de Aplicaciones.",
      "Balanceo de Sesiones.",
      "Ambas B y D.",
      "Ambas A y C.",
      "Todas las anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Ambas B y D."
  },
  {
    "question": "El Servidor especial encargado, entre otras cosas, de centralizar el tráfico entre Internet y una red privada, de forma que evita que cada una de las máquinas de la red interior tenga que disponer necesariamente de una conexión directa a la red. Al mismo tiempo contiene mecanismos que impiden accesos no autorizados desde el exterior hacia la red privada. Dicho servidor corresponde a:",
    "options": [
      "Firewall.",
      "Proxy.",
      "Access Server.",
      "Router.",
      "Monitor de Red.",
      "Proxy Reverse",
      "Ninguna de las Anteriores es Correcta."
    ],
    "answer": "Proxy."
  },
  {
    "question": "EL Modelo de N-Tiers (N-Capas) es un concepto utilizado en Arquitectura Cliente-Servidor en Redes de Procesamiento de datos centralizadas y nace con la necesidad de compartir aplicaciones centralizadas en distintas computadoras y que las mismas otorguen servicios a través de Internet. A su vez normaliza las aplicaciones centralizándolas en capas para que el Procesamiento sea seguro y confiable.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "answer": "Falso."
  },
  {
    "question": "El Protocolo IP Sec utilizado para realizar encriptación de datos aplicable a redes remotas y heterogéneas puede ser configurado como:",
    "options": [
      "Modo Túnel.",
      "Modo Digital.",
      "Modo Transporte.",
      "Modo Analógico",
      "Ambas A y C.",
      "Ambas B y C.",
      "Todas las anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Modo Túnel."
  },
  {
    "question": "Dentro de los Beneficios del uso de la Firma Digital podemos destacar:",
    "options": [
      "Garantía de Procedencia.",
      "Capacidad de Virtualizar.",
      "Seguridad de no Intervención.",
      "Identificación del firmante.",
      "Todas las anteriores son correctas.",
      "Hay más de una respuesta correcta.",
      "Ninguna de las Anteriores es Correcta."
    ],
    "answer": "Hay más de una respuesta correcta."
  },
  {
    "question": "La Norma técnica anunciada por VISA y MASTERCARD que incluye el uso de Certificados Digitales, que asegura y autentica la integridad de los participantes en una operación económica y su código aplica técnicas de criptografía manteniendo el carácter confidencial de la información se la denomina",
    "options": [
      "PGP.",
      "Kerberos.",
      "SET.",
      "SSL.",
      "IP Sec.",
      "S/MIME.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "SET."
  },
  {
    "question": "La Pieza electrónica que prueba la identidad de su propietario, así como el derecho a acceder a la información están basados en la norma estándar para los certificados digitales que corresponde a:",
    "options": [
      "RSA.",
      "HASH.",
      "DSA.",
      "PGP.",
      "X509.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "X509."
  },
  {
    "question": "Dentro de la firma digital, La función o algoritmo aplicada a un mensaje de M bits, que da como resultado un Función de N bits y que constituye un resumen del mensaje original a transmitir dentro del sobre digital se la denomina:",
    "options": [
      "RSA.",
      "DSA",
      "HASH.",
      "X509.",
      "Ambas a y c.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "HASH."
  },
  {
    "question": "El protocolo IP Sec cuando es configurado para transportar datos dentro de una red homogénea de tipo LAN en modo transporte encripta exclusivamente datos.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "answer": "Verdadero."
  },
  {
    "question": "El conjunto de datos asociados a un mensaje digital que permite garantizar la identidad del firmante y la integridad del mensaje se lo denomina:",
    "options": [
      "Certificado.",
      "Firma Electrónica.",
      "Firma Holográfica.",
      "X509.",
      "Firma Digital.",
      "Ninguna de las anteriores es correcta."
    ],
    "answer": "Firma Digital."
  },
  {
    "question": "El ataque Syn Flood se basa con el comienzo de cientos de conexiones a un servidor, e interrumpiéndola inmediatamente. Corresponde a un tipo de ataque:",
    "options": [
      "Fuerza Bruta.",
      "Spoofing.",
      "Autenticación.",
      "Denegación de Servicio.",
      "Escaneo de Puertos.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Denegación de Servicio."
  },
  {
    "question": "El Conjunto de Protocolos para soportar seguridad de intercambio de paquetes en VPNs estandarizado en IPv6 Se lo denomina:",
    "options": [
      "PGP.",
      "Kerberos.",
      "SET.",
      "SSL.",
      "IP Sec.",
      "DH5.",
      "AES.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "IP Sec."
  },
  {
    "question": "Existe un programa que permite verificar la ruta que realiza un conjunto de Paquetes o bloques de información a través de una Red de Internet. Dicho servicio debe estar bloqueado por nuestro Firewall para toda comunicación entrante en nuestra red. Este programa corresponde a:",
    "options": [
      "WHOIS.",
      "ICMP.",
      "TraceRoute.",
      "Finger.",
      "Spoofing.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "TraceRoute."
  },
  {
    "question": "La técnica de Jamming o Flooding o inundación es una técnica que busca generar solicitudes maliciosas a un servicio de internet con la finalidad de hacer que el mismo se sature o entre en un modo de espera, de esta forma anula o limita su funcionamiento. Dicho ataque de acuerdo con su tipo corresponde a:",
    "options": [
      "Fuerza Bruta",
      "Ramsomware.",
      "Denegación de Servicio",
      "Escaneo de Puertos.",
      "Autenticación.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Denegación de Servicio"
  },
  {
    "question": "Cuando nos referimos a MAC SPOOFING podemos afirmar que:",
    "options": [
      "Es un tipo de ataque de robo de identidad.",
      "Es una técnica para clonar la dirección MAC de un dispositivo de red.",
      "Es una Técnica que se utiliza en comunicaciones inalámbricas.",
      "Es una técnica para cambiar la dirección MAC de un dispositivo de red.",
      "Todas las Anteriores son Correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Todas las Anteriores son Correctas."
  },
  {
    "question": "El Programa malicioso que restringe el acceso a determinadas partes o archivos del sistema operativo infectado, reteniendo el control del equipo y que encripta la información almacenada en el mismo para que no pueda ser accedida; solicitando un rescate financiero en criptomonedas para que sean desactivados se lo denomina:",
    "options": [
      "Jamming.",
      "Pharming.",
      "Keylogger.",
      "Spoofing.",
      "ARP Poisoning.",
      "Ramsomware.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Ramsomware."
  },
  {
    "question": "Un Programa Antivirus dentro de un entorno de red controlado debe cumplir con las siguientes funciones:",
    "options": [
      "La prevención de ejecución de código malicioso y su replicación en memoria.",
      "La protección y bloqueo de Puertos",
      "Analizar y buscar código malicioso desde archivos hasta comunicaciones (E-mail, tráfico Web, etc.) dentro de nuestro entorno de red, servidores y terminales.",
      "Proteger con sistemas de encriptación la información a ser transportada por la red.",
      "Ambas a y b.",
      "Ambas a y c",
      "Ambas a y d.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Ambas a y c"
  },
  {
    "question": "El tipo de ataque informático que consiste en una técnica de sniffing de paquetes circulantes e inyección de datos malignos para producir determinados resultados en comunicaciones inalámbricas se lo denomina:",
    "options": [
      "Jamming.",
      "Pharming.",
      "Keylogger.",
      "Spoofing.",
      "ARP Poisoning.",
      "Ramsomware.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Ninguna de las Anteriores es correcta."
  },
  {
    "question": "El software o hardware subrepticio que se encarga de registrar las pulsaciones que se realizan en el teclado, para posteriormente memorizarlas en un archivo o enviarlas a través de internet se lo denomina:",
    "options": [
      "Keylogger.",
      "Ramsomware.",
      "Jamming.",
      "IDS.",
      "Pharming.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Keylogger."
  },
  {
    "question": "Existe un tipo de peste o alimaña que funciona en su PC, sin su consentimiento o como parte de un consentimiento genérico, habitualmente se ejecuta en background y le abre ventanas emergentes en el programa navegador en concordancia con los sitios habituales que UD. visualiza. El tipo de malware corresponde a:",
    "options": [
      "Virus de Macro",
      "Gusano.",
      "Caballo de troya",
      "Virus de sector de Arranque.",
      "Spyware.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Spyware."
  },
  {
    "question": "Cuando se realiza una ciberincursión que provoca el “DNS Hijacking” y “DNS Poisoning” que consisten en la publicación ilegítima de resolución de un dominio mediante la modificación de los registros de un servidor DNS, Dicho ataque corresponde a:",
    "options": [
      "Jamming.",
      "Pharming.",
      "Keylogger.",
      "Man in the Midlee.",
      "ARP Poisoning.",
      "Ramsomware.",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Pharming."
  },
  {
    "question": "El Conficker (2008) era un virus que apareció en Ucrania e infectaba computadoras con sistemas Windows PC, Server 2003 y 2008. El Malware desactivaba Servicios de Update, Windows Security Center, Sistema Antivirus Defender. A su vez bloqueaba cuentas de Usuario, inundaba ARP y volvía los controladores de dominio lentos. Usaba como modo de propagación las redes y los pendrives. El tipo de virus corresponde a:",
    "options": [
      "Virus de Macro.",
      "Gusano.",
      "Caballo de troya.",
      "Virus de Arranque.",
      "Virus de Script.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Gusano."
  },
  {
    "question": "Aquella incursión informática ilegal que tiene por objeto, el robo de datos personales de identidad e información de credenciales financieras; y a veces simula un sitio web para capturar datos de login con una pantalla de ingreso al sistema se la denomina:",
    "options": [
      "Keylogger.",
      "Ramsomware.",
      "Phishing.",
      "Flooding.",
      "Pharming.",
      "Ninguna de las Anteriores es correcta"
    ],
    "answer": "Phishing."
  },
  {
    "question": "La Tecnología Mimo que permite múltiples rutas de acceso a múltiples antenas que mejora considerable en cuanto a la velocidad de transferencia, una cobertura mayor, mayor capacidad de más usuarios conectados y una mayor estabilidad se aplica tanto en comunicaciones WI FI (802.11 AC) como en comunicaciones celulares (4G).",
    "options": ["Verdadero", "Falso"],
    "answer": "Verdadero"
  },
  {
    "question": "La Tecnología de uso de comunicaciones celulares que permite múltiples rutas de acceso a múltiples antenas que mejora considerable en cuanto a la velocidad de transferencia, una cobertura mayor, mayor capacidad de más usuarios conectados y una mayor estabilidad se la denomina:",
    "options": ["WCDMA", "MIMO", "TDMA", "CDMA", "MQAM", "FHSS", "DHSS", "Ninguna de las Anteriores es correcta."],
    "answer": "MIMO"
  },
  {
    "question": "Dentro de la 1ª Generaciones de Comunicaciones Celulares, el tipo de acceso donde cada corresponsal transmite y recibe información en una frecuencia asignada corresponde a:",
    "options": ["FDMA", "TDMA", "CDMA", "CSMA CD", "CSMA CA", "Ninguna de las Anteriores es correcta."],
    "answer": "FDMA"
  },
  {
    "question": "Se pueden detallar los siguientes conceptos que caracterizaron a la comunicación celular de la 1ª Generación (1G).",
    "options": [
      "Comunicaciones Analógicas",
      "Comunicaciones Digitales",
      "Solo Comunicaciones de Voz",
      "Transmisión de SMS",
      "Velocidad 2,4 KBPS",
      "Velocidad 2 MBPS",
      "Ambas a, c y e",
      "Ambas b, d y f"
    ],
    "answer": "Ambas a, c y e"
  },
  {
    "question": "Es el sistema que nos permite realizar llamadas de voz sobre la tecnología 4G o LTE., que utiliza tecnologías para llamadas de voz en internet como el protocolo SIP se lo denomina:",
    "options": ["IPSec", "LTE-TDD", "SET", "LAA", "VoLTE", "NB-LTE", "Todas las Anteriores son correctas.", "Ninguna de las Anteriores es correcta."],
    "answer": "VoLTE"
  },
  {
    "question": "Los Estándares de 2ª generación de celulares como GSM/GRPS/EGRPS emplean el tipo de accesos donde varios usuarios comparten una frecuencia, pero transmiten en tiempos diferidos, a esos intervalos se les conoce como (Time Slot) ranuras de tiempo. Dicho tipo de acceso corresponde a:",
    "options": ["DHSS", "MQAM", "FHSS", "CDMA", "WCDMA", "TDMA", "Ninguna de las Anteriores es Correcta."],
    "answer": "TDMA"
  },
  {
    "question": "El área delimitada donde se realiza la comunicación efectiva con un teléfono celular en la cual se encaminan las comunicaciones en forma de ondas de radio desde y hasta los terminales de los usuarios se la denomina:",
    "options": ["WAN", "TELCO", "CELDA", "Espectro Electromagnético.", "SAN", "Ninguna de las Anteriores es correcta."],
    "answer": "CELDA"
  },
  {
    "question": "La implementación de la tecnología 4 G tiene consigo el empleo de las siguientes características:",
    "options": [
      "Tecnología móvil, que se caracteriza por emplear redes IP.",
      "Los Datos se transfieren por paquetes conmutados.",
      "Su velocidad de transferencia puede superar 1 GBPS",
      "Puede obtener una perfecta recepción para televisión de alta resolución.",
      "Todas las anteriores son correctas.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Todas las anteriores son correctas."
  },
  {
    "question": "Dentro de las distintas generaciones de desarrollo de los celulares, el Smartphone aparece en la:",
    "options": ["1ª Generación", "2ª Generación", "3ª Generación", "04ª Generación", "5ª Generación", "Ninguna de las Anteriores es correcta."],
    "answer": "3ª Generación"
  },
  {
    "question": "La tecnología de Celulares 4 G trajo consigo la característica de un gran aumento de ancho de banda, esto fue posible a través de la tecnología de Modulación:",
    "options": ["MQAM", "OFDM", "TDMA", "CDMA", "2B1Q", "MPSK", "Ninguna de las Anteriores es Correcta"],
    "answer": "OFDM"
  },
  {
    "question": "Dentro de la 2ª generación de telefonía celular, con las tecnologías GSM/GPRS/EGPRS, que aplican el tipo de acceso TDMA; la porción de tiempo asignada a cada frecuencia para realizar la comunicación se la denomina:",
    "options": ["Intervalo", "Salto de tiempo", "Porción", "Time slot", "Ambas a y b", "Ninguna de las Anteriores es correcta."],
    "answer": "Time slot"
  },
  {
    "question": "En una Arquitectura de Red Mobile donde conviven las celdas normales o denominadas macro y small cells o denominadas micro se la denomina:",
    "options": ["HetNet", "Mobile Híbrida", "Backhaul", "Nodo Combinado", "NAT", "FHSS", "DHSS", "Ninguna de las Anteriores es correcta."],
    "answer": "HetNet"
  },
  {
    "question": "La red de Transporte de Datos Mobile que incluyen las antenas de celulares combinado con enlaces de fibra y microondas se la denomina técnicamente:",
    "options": [
      "Backbone de Comunicaciones",
      "Troncal de Comunicaciones",
      "Core de Comunicaciones",
      "Topología Mobile",
      "Red de Backhaul",
      "Red de Tráfico",
      "Red de Transporte",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Red de Backhaul"
  },
  {
    "question": "La sección de red telefónica celular encargada del manejo del trafico de voz y de datos, responsable de dirigir y conmutar la llamada se la denomina:",
    "options": [
      "BTS–Base Station Transceiver System",
      "MS–Mobile Station.",
      "BSC–Base Station Controller.",
      "PSTN-Public Switched Telephone Network.",
      "BT – Transceptor Base.",
      "HetNet.",
      "Small Cells.",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "BSC–Base Station Controller."
  },
  {
    "question": "El dispositivo similar a nuestro Access Point WI FI pero que emite en la banda de 3G se lo denomina:",
    "options": ["Gateway", "Extension Point", "Bridge", "Femtocelda", "Modem PLC", "Ninguna de las Anteriores es correcta."],
    "answer": "Femtocelda"
  },
  {
    "question": "El Canal de comunicaciones establecido de un teléfono celular a una torre de antenas de celulares es de tipo:",
    "options": [
      "Analógico y Asincrónico.",
      "Digital y Sincrónico.",
      "Simplex.",
      "Full Duplex.",
      "Ambas a y d.",
      "Ambas b y c.",
      "Ninguna de las Anteriores es Correcta."
    ],
    "answer": "Ambas a y d."
  },
  {
    "question": "El Primer teléfono celular prototipo fabricado por IBM en 1992 que podía hacer y recibir llamadas telefónicas, faxes, correos electrónicos, que poseía un procesador de 16-bits a una velocidad de 16 MHz compatible con computadores de arquitectura x86 y solo tenía 1 MB de memoria RAM y 1 MB de almacenamiento, correspondía a:",
    "options": [
      "Simon",
      "BlackBerry 5810.",
      "DynaTAC 8000x",
      "Handie Talkie H-12-16.",
      "Motorola PT-300",
      "Ninguna de las Anteriores es correcta."
    ],
    "answer": "Simon"
  },
  {
    "question": "La tecnología LTE (Log Term Evolution) de la 4ª generación de Celulares utiliza como tipo de acceso para sus comunicaciones:",
    "options": ["OFDM", "OFDM/MIMO", "TDMA", "CDMA", "CSMA CA", "CSMA CD", "Ninguna de las Anteriores es Correcta."],
    "answer": "OFDM/MIMO"
  },
  {
    "question": "El tipo de acceso en esquemas de 2ª y 3ª generación donde varios suscriptores transmiten en la misma frecuencia y al mismo tiempo, pero con códigos diferentes, que solamente puede ser codificado por el usuario final, se la denomina:",
    "options": ["FDMA", "TDMA", "CSMA CD", "CDMA", "CSMA CA", "Ninguna de las Anteriores es correcta."],
    "answer": "CDMA"
  },
  {
    "question": "La Tecnología emergente basada en el uso de los teléfonos celulares que permiten conectarse a través a redes Wifi corresponde a:",
    "options": [
      "SMALL CELLS",
      "WIFI HIBRID",
      "WIFI OFFLOAD",
      "TRUSTED WIFI",
      "WIFI AAA",
      "WIFI DIRECT NETWORK",
      "Todas las Anteriores son correctas.",
      "Ninguna de las Anteriores es correcta"
    ],
    "answer": "WIFI OFFLOAD"
  }
];
