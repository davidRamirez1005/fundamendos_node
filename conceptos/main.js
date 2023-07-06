import { saludar, dato }from './modulo.js';
/**
 * ?de esta manera puede crear el archivo .env y ahí configurar las variables necesarias.Y luego accederlas donde las necesite
 */
import dotenv from 'dotenv';

dotenv.config();
/**
 * ! llamar las funciones que fueron importadas del archivo modulo
 */
// console.log(config);
console.log(saludar());
console.log(dato());


/**
 * ! variable de entorno
 */
let nombre = process.env.NAME
console.log("hola " + nombre);



/**
 ** input en node
 */
// process.stdin.on("data",(input) => {
//     console.log(input.toString());
// });


// let input = process.stdin

// input.setEncoding("utf8")
// input.on("data",(chuck) => {
//     console.clear()
//     console.log(`data recibida ${chuck}`);
//     // process.exit()
// });


/**
 * ? direccion completa hacia al archivo y direccion hacia la carpeta
 */
// console.log(__filename);
// console.log(__dirname);
console.log(import.meta.url);