/*Crea una función llamada sumarConReduce que reciba un array de números y retorne la suma total usando reduce().
*/

let numeros = [2, 4, 6, 8];

function sumarConReduce (array){

  // DENTRO DE LA FUNCION DEBIA RETORNAR DOS VECES, DENTRO DEL ".REDUCE" Y FUERA DE EL LA VARIABLE QUE CREE.

  let total = array.reduce((acumulador, elementoActual) => {
    return acumulador + elementoActual;
  }, 0); 
  return total;
}

let resultado = sumarConReduce(numeros);

console.log (resultado);

// Debe imprimir: 20.
