/*Implementación manual de una función tipo "map" que recibe un array y un callback. 
La función recorre el array, aplica el callback a cada elemento y retorna un nuevo 
array con los resultados. Ejercicio para practicar funciones de orden superior 
y callbacks en JavaScript.
*/

let numeros = [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];

function miMap (array, callback){
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++){
    let resultado = callback(array[i])
    nuevoArray.push (resultado)
  }
  return nuevoArray
}

let resultado = miMap(numeros,(n)=> n * 2);
