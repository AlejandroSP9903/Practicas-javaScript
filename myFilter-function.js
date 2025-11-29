/*Implementación personalizada de la función "filter" en JavaScript. 
La función myFilter recibe un array y un callback, recorre cada elemento, 
ejecuta el callback y agrega al nuevo array únicamente los valores que 
cumplen la condición definida en el callback. 
Ejercicio enfocado en practicar funciones de orden superior, callbacks 
y manipulación manual de arrays en JavaScript.
*/


let numeros = [1, 2, 3, 4, 5, 6, 10, 22, 15, 35, 44];
let palabras = ["perro", "gato", "casa", "luz", "perez", "jorge", "luis", "then", "else", "one"];

function myFilter (array, callback){
  
  let nuevoArray = [];

/* AQUI NO ESTABA COLOCANDO EL CALLBACK CON EL DATO DEL ARRAY DONDE DEBIA IR, ESTO GENERO QUE ME RETORNARA TODA LA 
LISTA SIN FILTRAR NADA.
*/ 

  for  ( let i = 0; i < array.length; i++){
    if (callback(array[i]))
    nuevoArray.push(array[i]);
  }
return nuevoArray
}

let procesar = myFilter(numeros,(n) => n % 2 === 0);

console.log(procesar)

/* AQUI ESTABA COLOCANDO CODIGO DEMAS PARA ESTE FILTRO, ERA INNCESARIO 
Y EVITABA QUE RETORNARA LO QUE LE ESTABA INTENTADO PEDIR
*/

let procesar2 = myFilter(palabras, (palabra) => palabra.length === 5);

console.log (procesar2)
