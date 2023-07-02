async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola, ${nombre}`);
      (typeof nombre === 'undefined') ? reject("ha habido un error") : resolve(nombre);
    }, 1500);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Bla bla bla bla...`);
      (typeof nombre === 'undefined') ? reject("ha habido un error") : resolve(nombre);
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adiós, ${nombre}`);
      (typeof nombre === 'undefined') ? reject("ha habido un error") : resolve(nombre);
    }, 1000);
  });
}

async function main() {
console.log("Empezamos el proceso");
  let nombre = await hola("jose david");
  await hablar(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await adios(nombre);
console.log("Terminamos el proceso");
}

main();
