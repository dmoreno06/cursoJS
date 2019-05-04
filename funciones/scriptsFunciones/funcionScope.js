/* function holaMundo(){
   let hola;
    hola = 'Hola javascript';
}
console.log(hola);

function sumar(a){
    return function(b){
        return a+b;
    }
} */


//closures
function saludar(){
    let saludo = 'hola';
    return function saludarIniterno(frient){
        console.log(saludo + ' ' +frient);
    }
}
let miSaludo = saludar();
miSaludo('Laura');
miSaludo('Vanessa');

function afuera(){
    let numero = 1;
    return function(){
        numero++;
        console.log(numero);
    }
}

let aumentar = afuera();
    aumentar();
    aumentar();
    aumentar();
    afuera()();