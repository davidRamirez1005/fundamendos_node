import readline from 'node:readline';
import { euros, libras } from './conversor.js'
import cowsay from 'cowsay'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Ingrese la cantidad de dolares: \n', (dolar) => {
    readline.cursorTo(process.stdout, 0, 1); 
    readline.clearScreenDown(process.stdout); 
    try {
        const cantidadDolares = parseFloat(dolar);
        
        if (isNaN(cantidadDolares)) {
            throw new Error('No es un número');
        }
        rl.question('Ingrese a que quiere convertir?\n', (opcion) => {
            readline.cursorTo(process.stdout, 0, 3); 
            readline.clearScreenDown(process.stdout); 
            let variable = opcion.trim().toLowerCase();
            switch (variable) {
                case 'euro':
                    console.log(cowsay.say({
                        text: `la cantidad de ${cantidadDolares} dolares a euros es de: ${euros(dolar)}`,
                        f : 'eyes'
                       }))
                break;
                case 'libra':
                    console.log(cowsay.say({
                        text: `la cantidad de ${cantidadDolares} dolares a libras es de: ${libras(dolar)}`,
                        f : 'skeleton'
                       }))
                break;
                default:
                    console.log(cowsay.say({
                        text: `opcion no valida`,
                        f : 'satanic'
                       }))
                    setTimeout(() => {
                         process.exit();
                    }, 1000);
                break;
            }
        });
    } catch (error) {
        console.log(cowsay.say({
            text: `no es un numero :(`,
            f : 'dragon'
           }))
        setTimeout(() => {
             process.exit();
        }, 1000);
    };
});