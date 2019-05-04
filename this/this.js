/* smyObj={
    nombre:'Camila',
    saludar(){
        console.log(`hola ${this.nombre}`)
    }
};
myObj.saludar();
'use stricts'
function checkThis(){
    console.log(this);
} */

/* function checkThis(){
    console.log(this);
}
checkThis(); */
//sumar.apply(undefined, numeros);

//Lexical this
function Boy(edad) {

    this.edad = 0;
    //lexical this
    setInterval(() => {this.edad++}, 1000)
}
let maria = new Boy();
