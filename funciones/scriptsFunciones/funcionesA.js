// suma de dos numeros
function sumar(n1,n2){
    let resultado;
    resultado = n1+n2;
    console.log(resultado);
}
sumar(3,8);

function sumarOtra(n1,n2){
    if(n1>n2){
        return n1+n2;
    }
    return n2;
}
let resultado1 = sumarOtra(1,8);
console.log(resultado1);

function resta(n1,n2){
    if(n1>n2){
        return {
                n1: n1 - 1,
                n2: n2 - 1
                }
    }
    return n2;
}
let resultado2 = resta(10,8);
console.log(resultado2);
//funcion autoinvocada
let multiplicar = (function(n,m){
    return n*m;
})(5,8);
console.log(multiplicar);
//funcion constructora

let Municipios = function(nombre,poblacion){
    this.nombre = nombre;
    this.poblacion = poblacion;
}

let choco = new Municipios('Quibdo', 1799);

console.log(choco);

//apply() y call()

function addSum(a,b,c) {
    return a+b+c;
}
let numeros = [5,4,7];
let myAdd = addSum.apply(undefined, numeros);
console.log(myAdd);

let myAddCall = addSum.call(undefined, 4,7,9);
console.log(myAddCall);