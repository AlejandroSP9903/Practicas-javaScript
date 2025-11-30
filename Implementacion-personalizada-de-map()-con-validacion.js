/*
Este ejercicio implementa una función personalizada llamada miMapPro, diseñada para replicar 
el comportamiento básico del método nativo Array.prototype.map().
La función incluye validaciones para garantizar un uso correcto:
+ Verifica que el primer parámetro sea un array.
+ Verifica que el callback sea una función.
+ Recorre el array original y aplica el callback a cada elemento.
+ Construye y retorna un nuevo array con los valores transformados.
El propósito del ejercicio es profundizar en:
+ Funciones de orden superior
+ Callbacks
+ Validación de parámetros
+ Construcción manual de métodos similares a los nativos
+ Buenas prácticas al trabajar con arrays en JavaScript
*/
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function miMapPro (array, callback){
  let nuevoArray = [];
  if (!Array.isArray(array)){
       console.error ("El primer parametro no es un array.")

  //AQUI HABIA ESCRITO "TYPEOF CALLBACK ==! 'FUNCTION'" LO CUAL ES INVALIDO POR QUE NI SIQUIERA EXISTE.

  }else if (typeof callback !== 'function'){
      console.error ("El callback no es una funcion.")
  }
  else{
    for ( let i = 0; i < array.length; i++){
    
    //AQUI DEBIA CREAR UNA VARIABLE CON "ARRAY[I]"

    let main = array [i];

      // EL CALLBACK IBA EN ESTA LINEA DE PUSH, (LLENADO DEL NUEVO ARRAY)

      nuevoArray.push (callback(main))
  }
  }
  return nuevoArray;
}
let resultado = miMapPro(numeros, (num) => num * 3);

console.log(resultado)

// Respuesta esperada: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30.
