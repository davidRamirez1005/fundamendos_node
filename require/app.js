import datos from './datos.json';

console.log('====================================');
console.log("json :",datos);
console.log('====================================');
console.log('====================================');
console.log("json id: ",datos.campus.map(res => res.id).join('//'));
console.log('====================================');
console.log('====================================');
console.log("json name: ",datos.campus.map(res => res.name).join('//'));
console.log('====================================');