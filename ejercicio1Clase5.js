/*Crea una función llamada procesarArreglo que reciba:
Un arreglo de números.
Un callback.
La función debe recorrer el arreglo y por cada número ejecutar el callback, enviándole ese número.
*/

let cantidad = Number(prompt("Ingrese la cantidad de datos a procesar."));

let numeros = [];

for (let i = 1; i <= cantidad; i++){
 let numero = Number(prompt("Ingrese el numero de la posicion " + i + "."));
 numeros.push(numero);
}

//SIGO COLOCANDO EL "RETURN" DENTRO DEL "FOR", LO QUE ESTA ROMPIENDO EL CICLO
// EN ESTE CASO LO QUE SE HACIA ERA PONER EL CALL BACK SENTRO DEL "FOR"
// YA QUE QUIERO QUE PARA CADA NUMERO SE LE APLIQUE ESE "CALLBACK"

function procesarArreglo(numeros, callback){
  for (let r = 0; r < numeros.length; r++){
  callback (numeros[r])
  }
}

function mostrarNumero(n){
  console.log("Procesando " + n);
};

procesarArreglo (numeros, mostrarNumero);
