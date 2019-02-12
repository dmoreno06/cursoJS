let saludo = 'my mundo a tu lado';

let longitud = saludo.length;
    console.log(saludo);

console.log(saludo.trim());
console.log(saludo.toUpperCase());
console.log(saludo.toLowerCase());


console.log(saludo.indexOf('y',2));
console.log(saludo.indexOf('y',2));
let substring,substr,slice;

substring = saludo.substring(4,-1);
console.log(substring);

substr = saludo.substr(4,3)
console.log(substr);

slice = saludo.substr(4,5)
console.log(slice);

console.log(saludo.startsWith('y'));
console.log(saludo.endsWith('o'));
console.log(saludo.includes('omy'));