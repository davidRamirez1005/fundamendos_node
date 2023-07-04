import sharp from 'sharp';

const inputPath = '/modulos/img/rata.png';
const outputPath = '/modulos/img/rata2.0.png';

sharp(inputPath)
  .resize(100, 100)
  //.rotate()
  .grayscale()
  .toFile(outputPath)
  .then(() => {
    console.log('Imagen procesada y guardada correctamente.');
  })
  .catch(error => {
    console.error('Error al procesar la imagen:', error);
  });
