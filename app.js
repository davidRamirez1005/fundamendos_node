let fs = require('fs');
const config = require('./modulo')

// console.log(config);
console.log(config.saludar());
console.log(config.dato());

console.log(__filename);
console.log(__dirname);

// try {
//     fs.unlinkSync(__dirname +'/hola.txt')
//     console.log('File removed')
//   } catch(err) {
//     console.error('Something wrong happened removing the file', err)
//   }



// let nombre = process.env.NOMBRE
// console.log("hola " + nombre);



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


