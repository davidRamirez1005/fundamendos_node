# NODE.JS

node es transcopilador, su lenguaje es js y su franwork es express.

se basa en el motor de JavaScript V8 de Google Chrome. A diferencia de la ejecución de JavaScript en un navegador web, Node.js permite ejecutar código JavaScript en el lado del servidor

Node.js utiliza un modelo de E/S sin bloqueo y basado en eventos, lo que significa que puede manejar muchas solicitudes simultáneamente sin bloquear el flujo de ejecución

usa npm como administrador de paquetes

## npm (Node Package Manager)

npm te permite descargar, instalar y administrar fácilmente paquetes y módulos de JavaScript de código abierto que puedes utilizar en tus aplicaciones.

**Arquitectura orientada a módulos** => node.js

 Node.js utiliza el sistema de módulos de CommonJS, lo que facilita la reutilización de código y la creación de aplicaciones modularizadas. Esto permite a los desarrolladores separar el código en módulos y utilizar paquetes de terceros fácilmente a través del administrador de paquetes npm.

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

