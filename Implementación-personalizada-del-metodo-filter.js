/*Este ejercicio implementa una versión personalizada del método nativo Array.prototype.filter(), llamada myFilterPro.
La función realiza filtrado basado en un callback e incluye validaciones para un uso seguro:
✔ Características principales
+ Verifica que el primer argumento sea un array.
+ Verifica que el callback sea una función válida.
+ Recorre el array original elemento por elemento.
+ Ejecuta el callback sobre cada valor.
+ Guarda en un nuevo array únicamente los elementos cuyo callback retorne true.
+ Retorna el nuevo array sin modificar el original.
🎯 Propósito del ejercicio
+ Practicar funciones de orden superior.
+ Comprender el funcionamiento interno de filter().
+ Reforzar validación de parámetros.
+ Mejorar la lógica de recorrido y creación de arrays.
+ Construir funciones manuales similares a los métodos nativos.
*/
let edades = [17, 15, 18, 12, 25, 30, 9, 11, 50];

function myFilterPro (array, callback){
  
  // AQUI EN LOS "IF" PUSE "CONSOLE.LOG" PARA MOSTRAR EL ERROR EN PANTALLA, ESTO NUNCA SE DETIENE
  // LO CPRRECTO ES USAR "RETURN "TEXTO""

  if (!Array.isArray(array)){
    return "El primer argumento no es un array.";
  }
  if (typeof callback !== 'function'){
    return "El callback, no es una funcion.";
  }

  let nuevoArray = [];

  for ( let i = 0; i < array.length; i++){
    let mainArray = array[i];

  // AQUI NO ES NECESARIO PONER "=== TRUE" SE ASUME QUE SI ES TRUE, QUEDA MAS LIMPIO SIN ESTO.

    if (callback(mainArray) === true){

//AQUI DEBI USAR LA VARIABLE "mainArray" NO "array[i]", PARA EVITAR CONFUCIONES Y HACER EL CODIGO MAS LEGIBLE.

      nuevoArray.push (array[i]);
    }
  }
  return nuevoArray;
}

let mayores = myFilterPro(edades, (num) => num >= 18);

console.log("Los mayores son: " + mayores)

// El codigo imprime: Los mayores son: 18,25,30,50.
