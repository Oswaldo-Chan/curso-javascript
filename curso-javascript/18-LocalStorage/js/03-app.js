//eliminar elemento
localStorage.removeItem('nombre');

//actualizar elemento
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray)
mesesArray.push('nuevo mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));

//eliminar todo
localStorage.clear();