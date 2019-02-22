const persona = {
    nombre: 'diana',
    edad: '28',
    altura: '170',
    gustoMucical: ['rock','reggeton','salsa','vallenato'],
    hijos: 'no',
    saludar(){
        return 'hola a todas las personas';
    }
};
persona.ciudad= 'medellin';
console.log(persona.ciudad);
//operadores delete= elimina una propiedad 
//delete persona.nombre;
console.log(persona.persona);
//in = revisa que exista la propiedad en el objeto
console.log('gustoMucical' in persona);
// copia de objeto con es6
let aliens= Object.assign({},persona);
console.log(persona);

let m ='hola';
let n = 'mundo';
let myObj = {
    m,
    n
}
console.log(myObj);
//expreciones en propiedad
let a ='hola',b= 'mundo';
let myObj2 = {
    [a+b]: 'hola mundo'
}
console.log(myObj2);