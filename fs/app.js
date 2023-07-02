
/**
 * ? se requiere el archivo donde estan todas las funciones y podemos llamar a la que necesitemos
 */
const config = require('./fyleSistem');
// ruta del archivo
const path = __dirname + '/hola.txt';
/**
 * ! leer un archivo
 */
async function leerHola() {
try {
  const data = await config.leer(path);
  console.log(data);
} catch (error) {
  console.error(error);
}
}
/**
 * ! agregar al final de un archivo
 */
let contenidoNuevo = '\nEste es el contenido que se agregará al archivo x2';

async function agregarCosa(path,contenidoNuevo){
try {
const data = await config.agregarContenido(path,contenidoNuevo);
} catch (error) {
    console.log(error);
};

}
/**
 * ! eliminar un archivo
 */
async function eliminarArchivo(path){
try {
  const data = await config.eliminar(path);
  console.log("archivo eliminado");
} catch (error) {
  console.error(error);
}
}
/**
 * ! editar un archivo por completo
 */
let contenido = 'Este es el nuevo contenido del archivo segunda prueba';

async function archivoEditado(path,contenido){
try {
const data = await config.editar(path, contenido);
} catch (error) {
    console.log(error);
};
}

// -------------------------------------------------------


/**
 * * let input = process.stdin; se utiliza para crear un flujo de entrada estándar (stdin) en Node.js. Esto permite leer datos desde la entrada estándar, como el teclado.
 */
let input = process.stdin
/**
 * * se establece el formato de codificación de la entrada estándar a 'utf8'. Luego, se utiliza el evento 'data' para capturar los datos ingresados por el usuario
 */
input.setEncoding("utf8")
input.on("data",(chuck) => {
    console.clear()
    let opcion = chuck.trim().toLowerCase();

    switch (opcion) {
    case "leer":
        leerHola();
    break;
    case "agregar":
      agregarCosa(path, contenidoNuevo);
      break;
    case "eliminar":
      eliminarArchivo(path);
      break;
    case "editar":
      archivoEditado(path, contenido);
      break;
      case "salir":
        process.exit()
      break;
    default:
      console.log("Opción no válida :(");
      break;
  }
});