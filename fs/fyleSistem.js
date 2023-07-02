const fs = require('fs');


async function leer(path) {
    const data = await fs.promises.readFile(path);
    return data.toString();
}
async function agregarContenido(path, contenido) {
    await fs.promises.appendFile(path, contenido);
    console.log('Contenido agregado exitosamente al archivo');
}
async function eliminar (path) {
    fs.unlinkSync(path)
}
async function editar(path, contenido) {
    await fs.promises.writeFile(path, contenido);
    console.log('Archivo editado exitosamente');
}


module.exports={
    leer,
    agregarContenido,
    eliminar,
    editar
}