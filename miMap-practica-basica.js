/*
  Ejercicio: Práctica básica con miMap y callbacks
  
  Descripción:
  Este ejercicio implementa una función personalizada llamada "miMap",
  que imita el comportamiento del método .map() de JavaScript.
  A partir de un arreglo de números, se aplican tres transformaciones
  diferentes mediante callbacks:
  
  1. Convertir cada número en su versión negativa.
  2. Determinar si cada número es par o impar.
  3. Elevar cada número al cuadrado.
  
  El objetivo es entender cómo funcionan los callbacks y cómo crear
  funciones de orden superior que procesan arreglos.
*/
let numeros = [1, 2, 3, 4, 5];

function miMap (array, callback){
  let totalArray = [];
  for (let i =  0 ; i < array.length; i++){
    totalArray.push(callback(array[i]))
  }
  return (totalArray); 
}


//EN ESTE CASO DEBIA USAR ALGO MAS SIMPLE Y CLARO, EN VES DE USAR "n - n - n" SE PUEDE USAR ALGO MAS SIMPLE QUE SERIA "0 - n = -n" O INCLUSO "return -n;" SOLO n CON EL SIMBOLO RESTAR.

let resultado1 = miMap(numeros, function(n){
  return n - n - n
});

console.log (resultado1);

let resultado2 = miMap(numeros, function(n){
  if (n % 2 === 0){
    return "Es par"
  }else {
  return "Impar"  
  }
});
console.log (resultado2)

let resultado3 = miMap(numeros, function(n){
return n * n
});
console.log(resultado3)
