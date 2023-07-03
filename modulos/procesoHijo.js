const { exec } = require('child_process');


/**
 * ! Ejemplo: Ejecutar un archivo
 */
// exec('node require/app.js', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error al ejecutar el comando: ${error}`);
//     return;
//   }
//   console.log(`\nSalida del comando:\n${stdout}`);
// });


/**
 * ! Ejemplo: Ejecutar el comando 'ls -la' en la línea de comandos
 */
// exec('ls -la', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error al ejecutar el comando: ${error}`);
//     return;
//   }
//   console.log(`\nSalida del comando:\n${stdout}`);
// });


/**
 * ! Ejemplo: Ejecutar el comando 'pwd' (imprimir el directorio actual)
 */
// exec('pwd', (error, stdout, stderr) => {
//  if (error) {
//    console.error(`Error al ejecutar el comando: ${error}`);
//    return;
//  }
//  console.log(`Salida del comando:\n${stdout}`);
// });


/**
 * ! Ejemplo: Ejecutar el comando 'mkdir new_directory' (crear un nuevo directorio)
 */
// exec('mkdir directorio', (error, stdout, stderr) => {
//  if (error) {
//    console.error(`Error al ejecutar el comando: ${error}`);
//    return;
//  }
//  console.log(`Salida del comando:\n${stdout}`);
// });


/**
 * ! Ejemplo: Ejecutar el comando 'rm -rf directory' (eliminar un directorio recursivamente)
 */
// exec('rm -rf directorio', (error, stdout, stderr) => {
//  if (error) {
//    console.error(`Error al ejecutar el comando: ${error}`);
//    return;
//  }
//  console.log(`Salida del comando:\n${stdout}`);
// });


/**
 * ! Ejemplo: Ejecutar el comando 'echo Hello, World!' (imprimir en la consola)
 */
// exec('echo Hello, World!', (error, stdout, stderr) => {
//  if (error) {
//    console.error(`Error al ejecutar el comando: ${error}`);
//    return;
//  }
//  console.log(`Salida del comando:\n${stdout}`);
// });


/**
 * ! Ejemplo: Ejecutar el comando 'cat archivo.txt' (mostrar contenido de un archivo)
 */
// exec('cat ./main.js', (error, stdout, stderr) => {
//  if (error) {
//    console.error(`Error al ejecutar el comando: ${error}`);
//    return;
//  }
//  console.log(`Salida del comando:\n${stdout}`);
// });


/**
 * ! Ejemplo: Crear una carpeta y luego un archivo dentro de ella
 */
// exec('mkdir miCarpeta && touch miCarpeta/nuevoArchivo.txt', (error, stdout, stderr) => {
//  if (error) {
//    console.error(`Error al ejecutar el comando: ${error}`);
//    return;
//  }
//  console.log('Carpeta y archivo creados exitosamente');
// });


/**
 * ! Ejemplo: Crear un archivo dentro de una carpeta específica
 */
// exec('touch async/nuevoArchivo.txt', (error, stdout, stderr) => {
//  if (error) {
//    console.error(`Error al ejecutar el comando: ${error}`);
//    return;
//  }
//  console.log('Archivo creado exitosamente');
// });


/**
 * ! Ejemplo: Crear archivo y escribir contenido dentro de él
 */
// const contenido = 'Hola, mundo!';
// exec(`touch async/nuevoArchivo.txt && echo "${contenido}" > async/nuevoArchivo.txt`, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error al ejecutar el comando: ${error}`);
//     return;
//   }
//   console.log('Archivo creado y contenido escrito exitosamente');
// });