function hola(nombre) {
return new Promise((resolve, reject) => {
  setTimeout(function() {
    console.log("hola", nombre);
    (typeof nombre === 'undefined') ? reject("ha habido un error") : resolve(nombre);
  }, 1000);
});
}

function hablar(nombre) {
return new Promise((resolve, reject) => {
  setTimeout(function() {
    console.log("bla bla bla bla...");
    (typeof nombre === 'undefined') ? reject("ha habido un error") : resolve(nombre);
  }, 1000);
});
}

function adios(nombre) {
return new Promise((resolve, reject) => {
  setTimeout(function() {
    console.log("adios", nombre);
    (typeof nombre === 'undefined') ? reject("ha habido un error") : resolve(nombre);
  }, 1000);
});
}

let nombre = 'jose david'

console.log("Iniciando proceso");
hola(nombre)
.then(hablar)
.then(hablar)
.then(hablar)
.then(hablar)
.then(adios)
.then(function() {
  console.log("Terminado el proceso");
})
.catch(function(err) {
  console.error("Ha habido un error");
  console.error(err);
});
