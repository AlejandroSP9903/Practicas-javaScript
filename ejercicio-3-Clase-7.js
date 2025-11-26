/*
Este programa solicita al usuario una lista de palabras separadas por comas mediante prompt().
Luego, utiliza una función principal que recibe un callback para procesar esa lista.
El callback se encarga de:
Convertir el texto ingresado en un arreglo.
Pasar todas las palabras a mayúsculas.
Eliminar espacios adicionales con trim().
Una vez procesadas, el programa imprime cada palabra en la consola, una por una.
Este ejercicio practica:
Uso de funciones callback.
Procesamiento de strings.
Manipulación de arrays con split() y map().
Recorrido de arreglos con ciclos.
*/

function pedirNumeros (callback){
    let datos = prompt("Por favor ingresa una lista de numeros separados por comas, ejemplo; 1, 2, 3, 4, 5...");
  return callback(datos);
}

function procesarNumeros(texto){
    let array = texto.split(",")
    let finalArray = array.map(num => Number (num.trim()))
    for (let i = 0; i < finalArray.length; i++){

//Para este caso si queremos saber si un dato es numerico usamos "Number.isNaN(finalArray[i])"

    if (Number.isNaN(finalArray[i])){
      return null;
    }
  }
return finalArray;
}

function mostrarLista (array){
  for (let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}
function suma (array){
  if (array == null){
    console.log("Error: hay datos inválidos.");
    return;
  }
  const sumarArray = array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  console.log("La suma total es:", sumarArray);
}

let inicio = pedirNumeros(procesarNumeros);
if (inicio !== null ){
mostrarLista(inicio);
}
 sumar(inicio);

