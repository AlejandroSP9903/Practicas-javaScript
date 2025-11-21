/*Pides varios nombres y los guardas en un arreglo (como ya sabes hacerlo).
Luego, el usuario escribe un nombre a buscar.
El programa debe decir:
"El nombre SÍ está en la lista", o
"El nombre NO está en la lista".
*/
let cantidad = Number(prompt("Ingrese la cantidad de nombres que desea ingresar."));
let nombres = [];
for (let i = 1; i <= cantidad; i++){
  let nombre = prompt("Ingrese el nombre " + i + ".");
  nombres.push(nombre);
}
for (let k = 0; k < nombres.length; k++) {
  console.log(nombres[k]);
}
let resultado = false;
let verificar = prompt("Ingrese el nombre que quiere revisar.");
for (let h = 0; h < nombres.length; h++) {

// En este punto puse la h entre parentesis y no entre corchetes lo que no dejo correr el codigo.
// aparte estaba volviendo a crear la variable "resultado", lo que impide que el resultado rel cambie

if (verificar === nombres[h]){
  resultado = true;
} else {
  resultado = false;
  break; // con este break, lo que hacemos es que se detenga la busqueda s elo encontro, ayuda a optimizar recursos y tiempo.
}
}if (resultado){
  console.log ("El nombre SI esta en la lista.");
} 
if (resultado === false){
  console.log("El nombre NO existe en la lista.")
}
