let arr = ['luz','sueños',1000,'amor',1,'ensenanza'];
// 0 1 2 3  indice
/*console.log(arr.length);
console.log(arr[0]);
//contador de las pciciones de arredos
let sum = 0;
for (let index = 0; index < array.length; index++) {
    //let element = arr[index];
    let element = arr[index];
    if(typeof element == 'number') continue;
    //sum += arr[index];
    sum += element;
}
Array.prototype.saludo = 'hola';
console.log(arr.saludo);*/

//indexOf()
console.log(arr.indexOf(2));
//agregar elementos con .push() y .unshift()
    console.log(arr.length);
    arr.push('javascript');
    let newlength = arr.unshift('nodejs');
    console.log(arr);
    console.log(newlength);

//eleminar elementos//
    let deleteElement = arr.pop();
    console.log(arr);
    console.log(deleteElement);
//separador join('separador')//
    console.log(arr.join('/'));
//splice(a,b,items);
    arr.splice(2,1);//elemina el elemento que esta en la pocicion dos
    console.log(arr);
    arr.splice(2,2,'felicidad','ser','sonreir');
    console.log(arr);
//slice(a,b);
    console.log(arr);
        let arr2 = arr.slice();
    console.log(arr2);
//algo nuevo de ES6
    //Array.find();
    let arr1 =[1,2,3,4,5];
    let num = arr1.find(parametro => parametro > 3);
    console.log(num);
//numIndex 
    console.log(numIndex);
//iteradores
    let iterador = arr.keys();
        console.log(iterador.next());
