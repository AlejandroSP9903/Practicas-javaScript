/*
Este ejercicio implementa una función de orden superior llamada filtrarYProcesar, que recibe un 
array y dos callbacks: uno para decidir qué elementos cumplen una condición, y otro para transformar 
cada elemento filtrado. El objetivo es replicar la lógica combinada de filter() y map() usando únicamente estructuras 
básicas, reforzando el entendimiento de callbacks, funciones puras y la creación de nuevos arrays sin mutar 
los originales.
*/



let arrayNumeros = [2, 5, 6, 10, 32, 54, 109, 80, 76, 53, 12, 11];

function filtrarYProcesar (array, condicionCallback, procesoCallback){
  let nuevoArray = [];

//AQUI ME RECOMIENDAN GUARDAR EL "ARRAY[I]" EN UNA FUNCION PARA HACER EL CODIGO MAS LIMPIO
  
  for ( let i = 0; i < array.length; i++){
    if (condicionCallback(array[i])){
      nuevoArray.push (procesoCallback(array[i]));
    }
  }
  return nuevoArray;
}

let resultado = filtrarYProcesar( arrayNumeros,
(num) => num > 9,
(num) => num * 2);

console.log (resultado);

// Respuesta esperada: 20, 64, 108, 218, 160, 152, 106, 24.
