/*
Este ejercicio implementa la función procesarLista, que recibe un array y dos callbacks: 
uno para validar cada elemento y otro para transformarlo si cumple la condición.

La función recorre el array original sin modificarlo directamente, creando un nuevo 
array con los valores transformados cuando el callback de verificación lo permite, 
y dejando los demás elementos intactos. Este ejercicio refuerza el uso de funciones 
de orden superior, callbacks y lógica aplicada al procesamiento de listas.
*/

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function procesarLista (array, callbackVerificar, callbackOperar){
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++){
    let elemento = array[i];
    if (callbackVerificar(elemento)){
       nuevoArray.push (callbackOperar(elemento));

// AQUI USE "!" PARA AYUDARME A IDENTIFICAR CUALES NO CUMPLEN CON "NUM % 2 === 0"
// YA QUE SI SOLO HACIA EL PUSH SIN ESTE CONDICIONAL, SE LLENARIA CON TODOS LOS NUMEROS, ICLOUYENDO LOS PARES
// DIN OPERAR, EN ESE CASO QUEDARIA CON DOS NUMEROS, UNO OPERADO Y UNO SIN IPERAR, LA LISTA QUEDARIA CON 15 ELEMENTOS

// AQUI ERA MEJOR USAR "ELSE" EN LUGAR DE "IF", PARA EVITAR EVALUAR LA CONDICION 2 VECES, FUNCIONARIA IGUAL.

    }if (!callbackVerificar(elemento)){
      nuevoArray.push (elemento)
    }
  } return nuevoArray;
}


let resultado = procesarLista(lista,
(num) => num % 2 === 0,
(num) => num * 10
);

console.log (resultado);

// Debe imprimir: 1, 20, 3, 40, 5, 60, 7, 80, 9, 100.
