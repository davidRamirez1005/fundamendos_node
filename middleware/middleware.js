/**
 * ! Actúan como intermediarios entre el cliente y el servidor, y se ejecutan secuencialmente en el orden en que se definen.
 * 
 * ? Los middlewares pueden realizar diversas tareas, como modificar los objetos de solicitud y respuesta, realizar validaciones, autenticar usuarios, administrar sesiones, registrar información de registro, comprimir o cifrar datos, entre otros.
 */
const express = require('express');
const app = express();

// Middleware personalizado
const miMiddleware = (req, res, next) => {
  console.log('Este es un middleware personalizado.');
  next(); // Llama al siguiente middleware en la cadena o a la ruta controladora.
};

// Middleware de registro de solicitudes
const loggerMiddleware = (req, res, next) => {
  console.log(`Solicitud recibida en: ${Date.now()}`);
  next();
};

// Uso de middlewares en la aplicación
app.use(miMiddleware);
app.use(loggerMiddleware);

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});