/**
 * ?  un router es una forma de organizar y gestionar las rutas de una aplicación web de manera modular
 * * Los routers son especialmente útiles cuando deseamos organizar nuestra aplicación en secciones más específicas, como por ejemplo para separar rutas relacionadas con la autenticación, el perfil del usuario, la administración, etc. Esto mejora la estructura y mantenibilidad del código.
 * 
 */
// routes.js
const express = require('express');
const router = express.Router();

// Ruta raíz del router
router.get('/', (req, res) => {
  res.send('¡Bienvenido a la página principal del router!');
});

// Otra ruta en el router
router.get('/about', (req, res) => {
  res.send('¡Esto es una página sobre nosotros!');
});

module.exports = router;
