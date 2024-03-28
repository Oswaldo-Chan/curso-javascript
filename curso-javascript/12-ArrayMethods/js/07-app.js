const meses1 = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];
const meses2 = ["julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

const resultado = meses.concat(meses2, 'nuevo mes');
console.log(resultado);

const resultado2 = [...meses, ...meses2, ...'nuevo mes'];
console.log(resultado2);
