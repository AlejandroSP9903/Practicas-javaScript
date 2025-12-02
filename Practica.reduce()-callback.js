/*Crea una función llamada analizarLista que reciba dos cosas:
Un array de números
Un callback que reciba cada número y retorne un texto como:
 "par", "impar", "positivo", "negativo", "cero" 
 (tú eliges la lógica dentro del callback)
*/


let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, 0, 0 , 0, 19, 18, -2, -9];

// AQUI NO USE EL CALLBACK DE LA FUNCION, EN ESTE CASO DEBIA USAR REDUCE
// SOLO PARA CLASIFICAR Y LA FUNCION PARA CREAR LOS RESPECTIVOS GRUPOS
// DEBO SEGUIR PRACTICANDO ESTE MISMO TEMA PARA PODER AFIANZAR EL CONOCIMIENTO

function analizarLista (array, callback){
  let grupos = array.reduce((contador, elementoActual) => {
    if (elementoActual % 2 === 0 && elementoActual > 0){
      contador.pares.push(elementoActual)
    }if (elementoActual === 0){
      contador.cero.push(elementoActual)
    }if (elementoActual > 0 && elementoActual % 2 !== 0){
      contador.impares.push(elementoActual)
    }if (elementoActual < 0){
      contador.negativos.push(elementoActual)
    } return contador;
  }, {pares: [], cero: [], impares: [], negativos: []});
  return grupos;
}


let resultado = analizarLista(lista);

console.log (resultado);

/* Debe retornar: 
pares:(6) [2, 4, 6, 8, 10, 18]
cero:(3) [0, 0, 0]
impares:(12) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 19, ...]
negativos:(3) [-11, -2, -9]
*/
