const fs = require('fs');

const directorio = './async';
const preuba = './eje';

// verificar si existe el directorio y si no existe lo crea
try {
  fs.mkdirSync(directorio);
  console.log('Directorio creado:', directorio);
} catch (error) {
  console.error('Error al crear el directorio:', error);
}

// lee el directorio
fs.readdir(directorio, (error, archivos) => {
  if (error) {
    console.error('Error al leer el directorio:', error);
    return;
  }
  console.log('Archivos en el directorio:', archivos);
});

// elimina el directorio
try {
  fs.rmdirSync(prueba);
  console.log('Directorio eliminado:', prueba);
} catch (error) {
  console.error('Error al eliminar el directorio:', error);
}