/*Este ejercicio implementa una función de orden superior llamada miTransformador, que recibe un array y dos 
callbacks: uno para filtrar elementos y otro para transformarlos. El programa demuestra cómo combinar filtrado 
y transformación usando programación funcional. El resultado final muestra solo los números mayores a 4, 
multiplicados por 3.
*/


let numeros = [2, 3, 5, 10, 6, 1, 4, 11, 9];

function miTransformador (array, callbackFiltrado, callbackTransformador){
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++){
    let arreglo = array[i];
    if (callbackFiltrado(arreglo)){

//AQUI OLVIDE PONER EL ".PUSH" Y POR ELLO NO LLENABA EL ARREGLO Y EL CODIGO NO ARROJABA NADA. 

      nuevoArray.push(callbackTransformador(arreglo))
    }
  } return nuevoArray;
}

function filtrar (num){
  return num > 4;
}
function transformar (num){
  return num * 3;
}

let final = miTransformador(numeros, filtrar, transformar);

console.log(final);

// Deberia imprimir: 15, 30, 18, 33, 27.
