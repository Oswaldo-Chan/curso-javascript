const producto = {
    id: 1
}

const weakmap = new WeakMap();

weakmap.set(producto, 'tableta');
console.log(weakmap);
console.log(weakmap.has(producto));
console.log(weakmap.get(producto));
weakmap.delete(producto); 
console.log(weakmap);