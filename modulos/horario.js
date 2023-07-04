import moment from 'moment';

let ahora = moment()


console.log('====================================');
console.log(ahora.toString());
console.log('====================================');
console.log(ahora.format('YYYY/MM/DD - HH:mm'))
console.log('====================================');
// Calcular la diferencia de días entre dos fechas
const startDate = moment('2023-07-01');
const endDate = moment('2023-07-10');
const daysDiff = endDate.diff(startDate, 'days');
console.log(daysDiff);
console.log('====================================');