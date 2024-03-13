//hoisting 

//si funciona
sumar();

function sumar(){
    console.log(2+2);
}

//no funciona
sumar2();

const sumar2 = function() {
    console.log(2+2);
}