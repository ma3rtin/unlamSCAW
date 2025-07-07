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
    "answer": "Que sean publicos"
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
    "answer": "Diseño"
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
    "question": "¿Cual de los siguientes es un método de autorización en dode se asegura la información mediante etiquetas de sencibilidad en la información y comparando esto con el nivel de sensibilidad de un usuario?",
    "options": [
      "Directionary Access Control (DAC)",
      "Role Based Access Control (RBAC)",
      "Mandatory Access Control (MAC)",
      "Ninguna de las opciones"
    ],
    "answer": "Mandatory Access Control (MAC)"
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
    "question": "¿Como opera el modo ECB (Electronic Codebook)?",
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
    "answer": "Simétrica y Asimétrica"
  }
]