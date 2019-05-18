const laura ={
    nombre: 'laura',
    apellido: 'ciro',
    cursos: ['angular','javascript','nest.js'], 
    pais:'colombia'
}

const camilo ={
    nombre: 'camilo',
    apellido: 'montoya',
    cursos: ['node.js','javascript','react.js'], 
    pais:'colombia'
}
//plantilla para crear objetos

//antes de ecs6 era una funcion contructora
var PersonagesImportantes = function(nombre,apellido, pais){
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
};
//luego se istancia
var diana = new PersonagesImportantes('Laura','ciro','coombia');

//clase en Es6

class Personas{
    constructor(nombre,apellido,pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        this.nombreCompleto = `${nombre} ${apellido}`
    }
//metodo
    saludar(){
        return `Hola , soy ${this.nombreCompleto} y vivo en ${this.pais}`;
    }
    //metodo stativo son metodos que no requieren ser instanciados
    
    static describirPersona(persona){
        return `Esta persona se llama ${persona.nombreCompleto} y es de ${persona.pais}`
    }
}
//crear un objeto persona
const migel = new Personas('Migel','angel','Colombia');
console.log(migel.saludar());

//herencia o sobclase
class Profesor extends Personas{
    constructor(nombre,apellido,pais,cursos,tecnologias){
        super(nombre,apellido,pais);
        this.cursos = cursos;
        this.tecnologias = tecnologias;
    }

    invitatAlCurso() {
        return `hola a todos los invito a que aprendan con migo de  ${this.cursos }`;
    }
}

const dianas = new Profesor('diana', 'moreno', 'colombia','java');
console.log(dianas.invitatAlCurso());
console.log(Personas.describirPersona(dianas));