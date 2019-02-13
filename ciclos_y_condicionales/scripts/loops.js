//for
let teachers = ['Diana','Laura','Marcela','Mateo','Camilo'];
for (let i = 1; i <= teachers.length; i++) {
    if(teachers[i].toUpperCase(),indexOf('A') == 0){
        console.log(teachers[i]);
    }
    if(teachers[i].toUpperCase(),indexOf('A') != 0){
        continue;

    }
//break: se sale del ciclo
//continue: continua       
}

//while
let i = 100;
//while(i--){
while(i>0){
    console.log('no debo de dejar de aprender');
    i--;
}
//do while
let password = 'ED';
let pass;
do{
     pass = prompt('Introduzca la contraseña');
}while (pass != 'ED');

//for of (es6);
for(let value of teachers){
    console.log(value);
}
let nombre = 'Marcela';
for(let value of nombre){
    console.log(value);
}