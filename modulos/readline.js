//importa o trae el modulo readline/promises 
//y no esta en ningun lado es una libreria (apis locales)
//PRIMERA PARTE
//const readline=require('node:readline/promises');
//SEGUNDA PARTE
import readline from 'node:readline'; //importa o trae el modulo readline/promises

//crea la interfaz de comunicacion en el proceso
//esta variable va a escuchar o imprimir los datos de la consola
//1. no se tiene que crear un evento de escucha 1 x 1 y de paso crea los chunks armados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el nombre?\n', (nombre) => {
    readline.cursorTo(process.stdout, 0, 1); //mueve el cursor a la posicion 0,0
    readline.clearScreenDown(process.stdout); //limpia la pantalla en ese cursos
    console.log(`Data imprimida de ${nombre}`); //imprime el nombre
    //process.exit(); //cierra el proceso


    rl.question('Ingrese el edad?\n', (edad) => {
        readline.cursorTo(process.stdout, 0, 3); //mueve el cursor a la posicion 0,0
        readline.clearScreenDown(process.stdout); //limpia la pantalla en ese cursos
        console.log(`Data imprimida de ${edad}`); //imprime el nombre
        //rl.close(); //cierra la interfaz
        process.exit();
    });
});