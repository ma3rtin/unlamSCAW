const questions = [
  {
    "question": "¿Para que se utiliza la firma digital?",
    "options": [
      "Generar datos aleatorios",
      "Garantizar la confidencialidad de los datos",
      "Garantizar la autenticidad de datos",
      "Ninguna de estas opciones"
    ],
    "answer": "Garantizar la autenticidad de datos"
  },
  {
    "question": "¿Cual de los siguientes algoritmos es denominado AES?",
    "options": [
      "Serpent",
      "Rijndael",
      "IDEA",
      "DES"
    ],
    "answer": "Rijndael"
  },
  {
    "question": "¿Que condiciona el libre uso de los algoritmos?",
    "options": [
      "Ninguna de estas opciones",
      "Que sean publicos",
      "Que tengan patentes en vigencia",
      "que sean privados"
    ],
    "answer": "Que tengan patentes en vigencia"
  },
  {
    "question": "¿Cual de los siguientes elementos NO corresponde a una función de negocio de SAMM?",
    "options": [
      "Gobierno",
      "Implementacion",
      "Verificacion",
      "Diseño",
      "Construccion"
    ],
    "answer": "Construccion"
  },
  {
    "question": "¿Cual de los siguientes elementos NO corresponde a una característica positiva de los sistemas criptograficos simetricos?",
    "options": [
      "Robustez",
      "Velocidad de cifrado",
      "Longitud del mensaje limitada por la implementacion",
      "Sencillez de implementacion"
    ],
    "answer": "Longitud del mensaje limitada por la implementacion"
  },
  {
    "question": "¿Cual de los siguientes no es un modo de cifrado de bloques?",
    "options": [
      "CBC - Cipher Block Chaining",
      "OFB - Output Feedback",
      "CFB - Cipher Feedback",
      "Ninguna de las opciones"
    ],
    "answer": "Ninguna de las opciones"
  },
  {
    "question": "¿Cual de las siguientes NO es una propiedad de la firma digital?",
    "options": [
      "Va ligada indisolublemente al mensaje",
      "Se genera en base a la clave publica del destinatario",
      "solo puede ser generada por su legítimo titular",
      "es públicacmente verificable"
    ],
    "answer": "Se genera en base a la clave publica del destinatario"
  },
  {
    "question": "¿Que significa el acronimo CMM?",
    "options": [
      "Capacity Model Metrics",
      "Capability Maturity Model",
      "Capability Model and Metrics",
      "Capacity Measure Model"
    ],
    "answer": "Capability Maturity Model"
  },
  {
    "question": "¿Que norma define la metodología SCRUM?",
    "options": [
      "Ninguna de estas opciones",
      "ISO 25000",
      "ISO /IEC 9126",
      "ISO/IEC14598"
    ],
    "answer": "Ninguna de estas opciones"
  },
  {
    "question": "¿A que se denomina 'Padding'?",
    "options": [
      "Al método para autenticar mensajes con algoritmos asimétricos",
      "Al método para completar el inicio de un bloque de datos",
      "Al método que permite generar una distorsión entre los distintos bloques",
      "Al método para completar el final de un bloque de datos"
    ],
    "answer": "Al método para completar el final de un bloque de datos"
  },
  {
    "question": "¿Cual de los siguientes datos no esta contenido en los campos de un certificado X509?",
    "options": [
      "Numero de serie",
      "Nombre de sujeto",
      "Clave privada del sujeto",
      "clave publica del sujeto"
    ],
    "answer": "Clave privada del sujeto"
  },
  {
    "question": "¿Cual de los siguientes puntos no es de interés para el manejo de sesiones de estado?",
    "options": [
      "Seguridad de transporte",
      "Ataques de autenticación de sesión",
      "Paginas y credenciales en formularios",
      "Entropía de credencial de sesión"
    ],
    "answer": "Paginas y credenciales en formularios"
  },
  {
    "question": "¿Cual de estos elementos no corresponde a la lista de requerimientos verificación de ASVS2014?",
    "options": [
      "Cryptography at Rest",
      "Authentication",
      "Data Protection",
      "Communications",
      "Mobile",
      "Performance"
    ],
    "answer": "Performance"
  },
  {
    "question": "Indique cual es la definición correcta de j según la siguiente representación de un sistema criptográfico Dj(Ej (m))=m",
    "options": [
      "Representa el conjunto de transformaciones de cifrado",
      "Representa el conjunto de claves que se pueden emplear",
      "Representa el conjunto de todos los mensajes sin cifrar",
      "Representa el conjunto de todos los posibles mensajes cifrados"
    ],
    "answer": "Representa el conjunto de claves que se pueden emplear"
  },
  {
    "question": "¿Cual de los siguientes elementos NO se corresponde con una propiedad de la Calidad en uso?",
    "options": [
      "Productividad",
      "Seguridad",
      "Satisfacción",
      "Eficacia",
      "Ninguna de las opciones"
    ],
    "answer": "Ninguna de las opciones"
  },
  {
    "question": "¿Que establece el marco legal para el uso de la Firma Digital en la Republica Argentina?",
    "options": [
      "El pacto de San Jose de Costa Rica",
      "La ley 25506",
      "La ley 24449",
      "La constitución nacional"
    ],
    "answer": "La ley 25506"
  },
  {
    "question": "¿Que característica de calidad interna/externa no esta contemplada en SquaRE?",
    "options": [
      "Portabilidad",
      "Mantenibilidad",
      "Ninguna de estas opciones",
      "Fiabilidad"
    ],
    "answer": "Ninguna de estas opciones"
  },
  {
    "question": "¿A que tipo de algoritmo corresponde el cifrado del Cesar?",
    "options": [
      "Cifrado por transposición de grupos",
      "Cifrado por sustitución",
      "Cifrado Asimetrico",
      "Cifrado de simetrico de flujo"
    ],
    "answer": "Cifrado por sustitución"
  },
  {
    "question": "¿Cual de los siguientes puntos No es un objetivo de la administración de usuarios y privilegios?",
    "options": [
      "Los usuarios no pueden acceder o utilizar funcionalidades administrativas",
      "Las funciones de nivel de administrador están segregadas apropiadamente de la actividad del usuario",
      "Los usuarios transmiten información de manera cifradad y confidencial",
      "Proveer la necesaria auditoría y trazabilidad de funcionalidad administrativa"
    ],
    "answer": "Los usuarios transmiten información de manera cifradad y confidencial"
  },
  {
    "question": "¿Cual de este elementos corresponde a la escala con que se representan los niveles de madures de SAMM?",
    "options": [
      "A, B, C",
      "Bajo, Medio, Alto",
      "1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
      "0, 1, 2, 3"
    ],
    "answer": "0, 1, 2, 3"
  },
  {
    "question": "¿Sobre que tecnología estan desarrollados los Web Services?",
    "options": [
      "XML/SOAP",
      "HTTPS",
      "AES",
      "HTML"
    ],
    "answer": "XML/SOAP"
  },
  {
    "question": "Indique a que corresponde la siguiente definición: Se define como una función o método para generar un valor que represente de manera casi unívoca a un dato",
    "options": [
      "Función de encriptación de datos",
      "Función de descifrado de datos",
      "Función hash",
      "Función de firma digital"
    ],
    "answer": "Función hash"
  },
  {
    "question": "Indique cual es el orden creciente en base al nivel de seguridad de las siguientes técnicas de autenticación de usuarios",
    "options": [
      "Basica y segura, Basada en formas, Integrada, Fuerte, Basada en certificado",
      "Basada en formas, Basica y segura, Integrada, Fuerte, Basada en certificado",
      "Basica y segura, Integrada, Basada en formas, Basada en certificado, Fuerte",
      "Basica y segura, Basada en formas, Integrada, Basada en certificado, Fuerte"
    ],
    "answer": "Basica y segura, Basada en formas, Integrada, Basada en certificado, Fuerte"
  },
  {
    "question": "¿Cual de estos elementos corresponde a un nivel que no define requerimientos detallados de verificación ASVS?",
    "options": [
      "Advanced",
      "Cursory",
      "Opportunistic",
      "Standard"
    ],
    "answer": "Cursory"
  },
  {
    "question": "¿Que cantidad de PAs estan definidos para el SSE-CMM?",
    "options": [
      "24",
      "16",
      "18",
      "22"
    ],
    "answer": "22"
  },
  {
    "question": "¿Que modelo de autorización utiliza un sistema UNIX/Linux convencional para manejar sus archivos?",
    "options": [
      "Mandatory Access Control (MAC)",
      "Discretionary Access Control (DAC)",
      "Role Based Access Control (RBAC)",
      "Ninguna de estas opciones"
    ],
    "answer": "Discretionary Access Control (DAC)"
  },
  {
    "question": "¿Que mecanismo adiciona criptografía al proceso de hash con el fin de incorporar autenticación a la seguridad del mismo?",
    "options": [
      "MD5",
      "MAC",
      "AES",
      "Ninguna de estas opciones"
    ],
    "answer": "MAC"
  },
  {
    "question": "¿Cual de los siguientes algoritmos se basa en la dificultad para factorizar grandes números?",
    "options": [
      "Ninguna de estas opciones",
      "RSA",
      "AES",
      "ElGamal"
    ],
    "answer": "RSA"
  },
  {
    "question": "¿Que estandar se ha definido para la seguridad específica de Web Services?",
    "options": [
      "WSDL",
      "TLS",
      "HTTPS",
      "WSS"
    ],
    "answer": "WSS"
  },
  {
    "question": "Dada la clave publica (p, y, n) y la clave privada (p, x, n). Indique a que algoritmo corresponden las siguientes definiciones de cifrado: a = p^k (mod n) y b = y^k m (mod n)",
    "options": [
      "ElGamal",
      "AES",
      "RSA",
      "Ninguna de estas opciones"
    ],
    "answer": "ElGamal"
  },
  {
    "question": "¿Cual es el significado SSL?",
    "options": [
      "Secure Sockets Layer",
      "SimpleSocket Layer",
      "Secure Socket Level",
      "Standard Socket Layer"
    ],
    "answer": "Secure Sockets Layer"
  },
  {
    "question": "¿Cual de los siguientes algoritmos NO requiere confidencialidad en la distribución de la clave?",
    "options": [
      "AES",
      "ElGamal",
      "Ninguna de estas opciones",
      "DES"
    ],
    "answer": "ElGamal"
  },
  {
    "question": "¿Que modelo de infraestructura de seguridad utiliza PGP?",
    "options": [
      "Anillo o Círculo de confianza",
      "PKI - Infraestructura de Clave Publica",
      "Ninguna opcion es valida",
      "ISI - Identificación integrada de seguridad"
    ],
    "answer": "Anillo o Círculo de confianza"
  },
  {
    "question": "¿Cual de las siguientes es una ventaja de los algoritmos SIMETRICOS?",
    "options": [
      "No requiere confidencialidad en la distribución de clave",
      "La misma clave puede ser utilizada por múltiples actores en la comunicación",
      "Permite autentificar mensajes",
      "Sencillez de implementacion"
    ],
    "answer": "Sencillez de implementacion"
  },
  {
    "question": "¿Cual de las siguientes opciones corresponde a un modelo enfocado en la madurez de las características esenciales de los procesos que deben existir en una organización para asegurar sistemas?",
    "options": [
      "PCI DSS",
      "ISO/IEC 21827:2008",
      "A4609",
      "ISO 25000"
    ],
    "answer": "ISO/IEC 21827:2008"
  },
  {
    "question": "¿Cual es el significado del acronimo DSA?",
    "options": [
      "Ninguna de estas opciones",
      "Data Signature Algorithm",
      "Digital Signature Algorithm",
      "Dynamic Signature Algorithm"
    ],
    "answer": "Digital Signature Algorithm"
  },
  {
    "question": "¿Cual de los siguientes puntos corresponde al grupo PAs para 'PROJECT AND ORGANIZATIONAL BASE PRACTICES'?",
    "options": [
      "Specify Security Needs",
      "Build Assurance Argument",
      "Assess Security Risk",
      "Plan Technical Effort"
    ],
    "answer": "Plan Technical Effort"
  },
  {
    "question": "¿Cual de los siguientes es un método de autorización en donde se asegura la información mediante etiquetas de sensibilidad en la información y comparando esto con el nivel de sensibilidad de un usuario?",
    "options": [
      "Discretionary Access Control (DAC)",
      "Role Based Access Control (RBAC)",
      "Mandatory Access Control (MAC)",
      "Ninguna de las opciones"
    ],
    "answer": "Mandatory Access Control (MAC)"
  },
  {
    "question": "Según Deming, ¿cual de los siguientes elementos no es una etapa del ciclo de calidad total?",
    "options": [
      "Auditar",
      "Planificar",
      "Actuar",
      "Hacer"
    ],
    "answer": "Auditar"
  },
  {
    "question": "La tecnología TLS es un aporte para reducir la probabilidad de cual de los siguientes tipos de ataque?",
    "options": [
      "Fallas Criptográficas",
      "Almacenamiento criptográfico inseguro",
      "Inyección",
      "XSS - Cross site reference"
    ],
    "answer": "Fallas Criptográficas"
  },
  {
    "question": "¿Cual de los siguientes es la encargada de firmar documentos con la finalidad de probar que existían antes de un determinado instante de tiempo?",
    "options": [
      "Autoridad de Certificación",
      "Autoridad de Registro",
      "Autoridad de Validación",
      "Autoridad de Sellado de Tiempo"
    ],
    "answer": "Autoridad de Sellado de Tiempo"
  },
  {
    "question": "¿A que Capability Level corresponden los siguientes common features: Objetively Managing Performance y Establish Measure Quality Goals",
    "options": [
      "Capability level 4",
      "Capability level 2",
      "Capability level 5",
      "Capability level 3"
    ],
    "answer": "Capability level 4"
  },
  {
    "question": "¿Cual de las siguientes normas ha sido emitida por la Union Europea?",
    "options": [
      "CCPA",
      "GDPR",
      "HIPAA",
      "A4609"
    ],
    "answer": "GDPR"
  },
  {
    "question": "¿Cual de los siguientes es una ventaja de los algoritmos Asimetricos?",
    "options": [
      "Longitud del mensaje 'Ilimitada'",
      "No requiere confidencialidad en la distribución de clave",
      "Velocidad de cifrado",
      "Robustez"
    ],
    "answer": "No requiere confidencialidad en la distribución de clave"
  },
  {
    "question": "¿Cual de las siguientes opciones NO es una buena practica para evitar vulnerabilidades de XSS?",
    "options": [
      "Validación de entrada positiva o de 'Lista blanca'",
      "Ninguna de estas opciones",
      "Codificar los datos no confiables basados en el contexto donde seran ubicados",
      "Utilizar APIs de auto-sanitización"
    ],
    "answer": "Ninguna de estas opciones"
  },
  {
    "question": "¿Que se utiliza cuando una clave publica pierde su validez y debe ser anulada?",
    "options": [
      "La clave privada del certificado",
      "Un certificado de revocación",
      "No se requieren acciones, simplemente se procede a crear un nuevo certificado",
      "Un mail de cancelación firmado digitalmente"
    ],
    "answer": "Un certificado de revocación"
  },
  {
    "question": "Indique a que elemento corresponde la siguiente definición: es un marco de trabajo abierto para ayudar a las organizaciones formular e implementar una estrategia de seguridad para software que sea adecuada a las necesidades",
    "options": [
      "WSS",
      "SAMM",
      "SCRUM",
      "Square"
    ],
    "answer": "SAMM"
  },
  {
    "question": "¿Cual de los siguientes es un método de autorización en donde las decisiones de accesos se basan en las funciones de un individuo dentro de la organización?",
    "options": [
      "Mandatory Access Control (MAC)",
      "Discretionary Access Control (DAC)",
      "Ninguna de las opciones",
      "Role Based Access Control (RBAC)"
    ],
    "answer": "Role Based Access Control (RBAC)"
  },
  {
    "question": "¿Cual es el puerto por defecto para transmisiones HTTPS?",
    "options": [
      "843",
      "8080",
      "80",
      "443"
    ],
    "answer": "443"
  },
  {
    "question": "¿Cual de las siguientes opciones no corresponde a un protocolo para interactuar con una aplicación sin contraseña?",
    "options": [
      "HTTP",
      "XML",
      "Opción 2",
      "HTTPS"
    ],
    "answer": "HTTP"
  },
  {
    "question": "¿Cual de los siguientes es un método de autorización en donde se restringe el acceso a la información sobre la pertenencia a ciertos grupos?",
    "options": [
      "DAC",
      "MAC",
      "DAB",
      "POM"
    ],
    "answer": "DAC"
  },
  {
    "question": "¿Cual de los siguientes verifica la relación de los certificados y la identidad de sus titulares?",
    "options": [
      "Autoridad de registro",
      "Autoridad por contraseña",
      "Implementación de métodos asincrónicos",
      "Implementación de métodos sincrónicos"
    ],
    "answer": "Autoridad de registro"
  },
  {
    "question": "¿Que tipo de algoritmo es Salsa20?",
    "options": [
      "Cifrado simetrico de flujo",
      "Cifrado por remplazo",
      "RSA",
      "Cifrado Vigenere"
    ],
    "answer": "Cifrado simetrico de flujo"
  },
  {
    "question": "¿Cual de las siguientes es una VENTAJA de los algoritmos ASIMETRICOS?",
    "options": [
      "Permite autentificar mensajes",
      "Permite autenticar a los usuarios",
      "Es de facil implementacion",
      "Todas las anteriores"
    ],
    "answer": "Permite autentificar mensajes"
  },
  {
    "question": "¿Cual de las siguientes es una DESVENTAJA de los algoritmos ASIMETRICOS?",
    "options": [
      "Se requieren claves de gran extension",
      "No es tan segura como la simetrica",
      "Se requieren mas de 5 llaves",
      "Ninguna de las anteriores"
    ],
    "answer": "Se requieren claves de gran extension"
  },
  {
    "question": "Dentro de calidad externa-interna ¿cual de las siguientes es una caracteristica de usabilidad?",
    "options": [
      "Operabilidad",
      "Performance",
      "Adaptabilidad",
      "Adecuacion"
    ],
    "answer": "Operabilidad"
  },
  {
    "question": "¿A que corresponde la siguiente definicion? Propiedad o conjunto de propiedades inherentes a un objeto que permiten apreciarlo como mejor, igual o peor que otros objetos de su especie?",
    "options": [
      "Definicion de CALIDAD de la RAE",
      "Definicion de ADECUACION de la RAE",
      "Definicion de USABILIDAD de la RAE",
      "Ninguna de las anteriores es valida"
    ],
    "answer": "Definicion de CALIDAD de la RAE"
  },
  {
    "question": "Concepto de calidad externa-interna--- cual de las siguientes es una caracteristica de FUNCIONALIDAD?",
    "options": [
      "Adecuación",
      "Adaptabilidad",
      "Usabilidad",
      "Todas las anteriores"
    ],
    "answer": "Adecuación"
  },
  {
    "question": "Concepto de calidad externa-interna... cual de las siguientes es una caracteristica de PORTABILIDAD?",
    "options": [
      "Adaptabilidad",
      "Usabilidad",
      "Adecuacion",
      "Todas las anteriores"
    ],
    "answer": "Adaptabilidad"
  },
  {
    "question": "¿Cual de estas tecnologías no se utiliza para la implementacion de Web Services?",
    "options": [
      "JSON",
      "SOAP",
      "XML",
      "WSDL"
    ],
    "answer": "JSON"
  },
  {
    "question": "¿Cual de los siguientes elementos no corresponde a un modo de operacion por bloques para algoritmos simetricos?",
    "options": [
      "CBC",
      "ECB",
      "MDQ",
      "GCM"
    ],
    "answer": "MDQ"
  },
  {
    "question": "¿Cual de los siguientes elementos NO se vincula al area de Portabilidad?",
    "options": [
      "Adaptabilidad",
      "Coexistencia",
      "Utilización de recursos",
      "Intercambiabilidad"
    ],
    "answer": "Utilización de recursos"
  },
  {
    "question": "¿Cuál es la utilidad de OWASP ASVS?",
    "options": [
      "Normalizar el nivel de rigurosidad disponible en una verificación de seguridad",
      "Normalizar el rango de cobertura en una verificación de seguridad",
      "Todas son correctas",
      "Establecer un estandar tanto para consumidores como para proveedores de servicio o herramienta"
    ],
    "answer": "Todas son correctas"
  },
  {
    "question": "¿Cuál de los siguientes algoritmos corresponde a un cifrador simétrico de flujo?",
    "options": [
      "MARS",
      "Salsa20",
      "AES",
      "Serpent"
    ],
    "answer": "Salsa20"
  },
  {
    "question": "¿Cuál de los siguientes elementos no forma parte de las funciones de negocio del modelo SAMM?",
    "options": [
      "Implementación",
      "Gobierno",
      "Constitución",
      "Verificación"
    ],
    "answer": "Constitución"
  },
  {
    "question": "Los cifradores de sustitución utilizan la tecnica de",
    "options": [
      "Permutación de cada carácter de texto claro por otro correspondiente al texto cifrado",
      "Ninguna",
      "Modificación de cada carácter de texto claro por otro correspondiente al texto cifrado",
      "Calculo de hash de los caracteres del texto claro para reemplazar el texto cifrado"
    ],
    "answer": "Modificación de cada carácter de texto claro por otro correspondiente al texto cifrado"
  },
  {
    "question": "¿Que NO se debe registrar en un log?",
    "options": [
      "Ids de sesión",
      "Eventos legales",
      "Fallos de autenticación",
      "Fallos de validación"
    ],
    "answer": "Ids de sesión"
  },
  {
    "question": "¿Cuál de los siguientes algoritmos corresponde a un cifrador asimétrico?",
    "options": [
      "3DES",
      "RSA",
      "AES",
      "Twofish"
    ],
    "answer": "RSA"
  },
  {
    "question": "¿Cuál de las siguientes no es una buena práctica para la autenticación?",
    "options": [
      "Utilizar sistemas de autenticación de factor múltiple",
      "El uso de case sensitive para los user IDs",
      "Solicitar re-autenticación",
      "Almacenar contraseñas de forma segura"
    ],
    "answer": "El uso de case sensitive para los user IDs"
  },
  {
    "question": "¿Cómo opera el modo ECB (Electronic Codebook)?",
    "options": [
      "Divide el mensaje en partes y cifra cada parte de manera independiente",
      "Realiza un XOR con el bloque previo antes de cifrar cada parte",
      "Utiliza un vector de inicialización para cifrar el mensaje",
      "Opera de manera similar a CFB pero con bloques de salida"
    ],
    "answer": "Divide el mensaje en partes y cifra cada parte de manera independiente"
  },
  {
    "question": "¿Cuáles son las dos ramas principales de la criptografía mencionadas en el resumen?",
    "options": [
      "Clásica y Moderna",
      "Simétrica y Asimétrica",
      "Transposición y Sustitución",
      "ECB y CBC"
    ],
    "answer": "Clásica y Moderna"
  }
]