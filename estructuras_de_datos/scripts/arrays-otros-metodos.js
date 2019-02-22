//
let estudiantes = [
    {
        nombre: 'maria',
        calificacion:2
    },
    {
        nombre: 'maria',
        calificacion:1
    },
    {
        nombre: 'maria',
        calificacion:2.5
    },
    {
        nombre: 'maria',
        calificacion:3
    },
    {
        nombre: 'maria',
        calificacion:3.5
    },
    {
        nombre: 'maria',
        calificacion:2.9
    },
    {
        nombre: 'maria',
        calificacion:5
    },
    {
        nombre: 'maria',
        calificacion:4
    }

]
// map(cb)
//let estudiantesNombre = [];
//for (let i = 0; i < estudiantes.length; i++) {
//    estudiantesNombre.push(estudiantes[i].nombre)  
//}
let estudiantesNombre = estudiantes.map(estudiante => estudiante.nombre);
console.log(estudiantesNombre);
//filter
let estudiantesAprobados = estudiantes.filter(estudiante => estudiante.calificacion >3);
console.log(estudiantesAprobados);
let estudiantesAprobadosNombre = estudiantesAprobados.map(estudiante => estudiante.nombre);
console.log(estudiantesAprobadosNombre);
//reduce(cb())
let numeros = [2,5,8,5,6,7];
let suma = numeros.reduce( (a,b) => a + b);
console.log(suma);

let maxNuemero = numeros.reduce( (a,b) => a > b ? a : b);
console.log(maxNuemero);

let promedio = numeros.reduce( (a,b,i,arr) =>{
    b += a;
    return i == arr.length -1 ? b/arr.length : b;
});
console.log(promedio);

let nombreMejorCalificacion = estudiantes
                            .reduce( (a,b) =>{
                                if(a.calificacion>b.calificacion){
                                    return{
                                        nombre: a.nombre,
                                        calificacion: a.calificacion
                                    }
                                }else{
                                    return{
                                        nombre: b.nombre,
                                        calificacion: b.calificacion
                                    }
                                }
                            });
console.log(nombreMejorCalificacion);
