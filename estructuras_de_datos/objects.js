let persona = {
    nombre: 'diana',
    edad: '28',
    altura: '170',
    gustoMucical: ['rock','reggeton','salsa','vallenato'],
    hijos: 'no',
    saludar(){
        return 'hola a todas las personas';
    }
}
persona.ciudad= 'medellin';
console.log(persona.ciudad);
//operadores delete= elimina una propiedad 
//delete persona.nombre;
console.log(persona.persona);
//in = revisa que exista la propiedad en el objeto
console.log('gustoMucical' in persona);
// copia de objeto con es6
let aliens= Object.assign({},persona);