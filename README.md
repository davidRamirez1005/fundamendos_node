# NODE.JS

node es transcopilador, su lenguaje es js y su framework es express.

se basa en el motor de JavaScript V8 de Google Chrome. A diferencia de la ejecución de JavaScript en un navegador web, Node.js permite ejecutar código JavaScript en el lado del servidor

Node.js utiliza un modelo de E/S sin bloqueo y basado en eventos, lo que significa que puede manejar muchas solicitudes simultáneamente sin bloquear el flujo de ejecución

usa npm como administrador de paquetes

#### *Asincronia de Node:*

**Event Queue:** Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

**Event Loop:** Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.

**Thread Pool:** Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pasa a Event Queue o no.



#### *Variables de entorno:*

En caso de querer tener variables de entorno en un archivo, puede utilizar [dotenv](https://www.npmjs.com/package/dotenv), de esta manera puede crear el archivo .env y ahí configurar las variables necesarias.Y luego accederlas donde las necesite

## npm (Node Package Manager)

npm te permite descargar, instalar y administrar fácilmente paquetes y módulos de JavaScript de código abierto que puedes utilizar en tus aplicaciones.

**Arquitectura orientada a módulos** => node.js

 Node.js utiliza el sistema de módulos de CommonJS, lo que facilita la reutilización de código y la creación de aplicaciones modularizadas. Esto permite a los desarrolladores separar el código en módulos y utilizar paquetes de terceros fácilmente a través del administrador de paquetes npm.

*\#Iniciar un proyecto*

 npm init 

*#Iniciar un proyecto con configuración automática*

 npm init -y

 *#Instalar dependencias para producción*

npm install nombreDelPaquete --save  

*#Alternativa 2 de Instalar dependencias para producción o desarrollo* 

npm i nombreDelPaquete -S  

*#Instalar dependencias para desarrollo*

npm install nombreDelPaquete --save-dev 

o: npm i nombreDelPaquete -D 

*#Instalar dependencias de manera global* 

npm install -g nombreDelPaquete 

o: npm i -g nombreDelPaquete 

*#Instalar una versión especifica de una dependencia* 

npm install -g nombreDelPaquete@1.0.0 

*#Desinstalar dependencias*  

npm uninstall nombreDelPaquete 

*#Ver dependencias desactualizadas* 

npm outdate 

*#Actualizar las dependencias desactualizadas* 

npm update

------

**Escalabilidad**

para manejar grandes cantidades de solicitudes concurrentes con eficiencia

 **Orientado a eventos**

 lo que significa que las operaciones se desencadenan en respuesta a eventos específicos

### Como funciona Node

**Inicialización**

 Se cargan los módulos necesarios, se establecen las variables de entorno y se configuran los parámetros de ejecución

**Gestión de solicitudes**

El servidor registra una devolución de llamada (callback) para manejar la solicitud y continúa con otras tareas mientras la solicitud se procesa en segundo plano

**Operaciones de E/S no bloqueantes**

lo que significa que puede iniciar una operación de E/S (como leer o escribir en un archivo, hacer una solicitud a una base de datos o enviar una solicitud HTTP) y continuar con otras tareas sin esperar a que se complete la operación.

**Devoluciones de llamada (callbacks)**

 Las devoluciones de llamada se ejecutan cuando se produce un evento o cuando se completa una operación de E/S. Esto permite que Node.js maneje múltiples solicitudes y operaciones de manera eficiente y no bloqueante.

## NVM (Node Version Manager)

 es una herramienta que permite administrar múltiples versiones de Node.js en un sistema. Con NVM, puedes instalar, cambiar y administrar fácilmente las versiones de Node.js en tu entorno de desarrollo.

##### **Nodemon:**

npm i -E -D nodemon
scripts => "dev":"nodemon --quiet start"

De forma nativa: 
node --watch
#####  **package.json:**

npm init -y

#####  **.env** => Crea un archivo .env en la raíz de tu proyecto y define las variables de entorno en él

npm install dotenv
require('dotenv').config();

#####  **bcrypt:** => encriptar contraseñas

npm i bcrypt

#####  **moment:** => mostrar fechas

npm i moment

#####  **sharp:** => imagenes

npm i sharp

#####  **puppeteerp:** => scraping

npm i puppeteer

#####  **joi:** => validacion de datos

npm i joi

### peticiones HTTP:

Es el protocologo de comunicación
que permite las transferencias de información en la web.

*Porque es importante ?*
Un lenguaje comun para todas las comunicaciones.

*Cómo funciona una petición?*
Cliente —> Internet --> servidor Y luego se devuelve la respuesta
Cliente <— Internet <— servidor

La diferencia de http y https es que https pasa por un canal de encriptacion haciendo que los datos que se envían por Internet sean imposibles de entender y cuando llegan al servido estos se descifra.

**Para instalar eslint:**

npm install -D eslint

Para configurarlo:

npx eslint --init

<hr/>

las cookies son pequeños fragmentos de información que se almacenan en el lado
del cliente (generalmente en el navegador) y se utilizan para realizar un
seguimiento de la información relacionada con la sesión del usuario o para
almacenar preferencias específicas.

DTO significa Data Transfer Object (Objeto de Transferencia de Datos). Es un
patrón de diseño que se utiliza en la programación de software, especialmente en
arquitecturas de varias capas, donde se necesita transferir datos entre capas o
componentes del software.