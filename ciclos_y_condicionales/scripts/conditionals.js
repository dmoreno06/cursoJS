//condicionales
let edad = prompt('Dime tu edad');
if(edad < 12){
    console.log('eres niño');
}else if (edad >= 12 && edad < 18 ){
    console.log('eres edolecente');
}else if (edad >= 18 && edad < 60 ){
    console.log('eres adulto');
}else{
    console.log('eres un adulto mayor');
}
//truthy y falsy values

if(edad){
    console.log('Ingresaste un valor truthy');
}else{
    console.log('Ingresaste un valor falsy');
}
//switch
let animal = prompt(`escoje un animal - (escribe su numero): 
    1. Perro
    2. Gato
    3. Pez
    4. Tortuga
    5.  Mico`);
switch (animal) {
    case '1':
        console.log('Escojistes el Perro, es un animal muy jugeton');
        break;
    case '2':
        console.log('Escojistes el Gato, es un animal muy independiente y energetico');
        break;
    case '3':
        console.log('Escojistes el Pez, es un animal inteligente e interezante iradia clama y frescura');
        break;
    case '4':
        console.log('Escojistes el Tortuga, es un animal el cual no deberias tener en casa pero es un animal que transmite calma, constancia y perceberancia');
        break;
    default:
        console.log('Escojistes el perro, es un animal demaciado inteligente que es muy compatible con el humano en su adn pero no debes de tenerlo en cautiverio.');
        break;
}
//operador terminar
    //condicion ? valorTrue: valorFalse
    let nombre = prompt('Escribe tu nombre');

    nombre.length > 5 ?console.log( 'tu nombre es largo') : console.lo('your name is small');