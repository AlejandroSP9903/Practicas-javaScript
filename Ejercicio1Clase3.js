/*Pide al usuario cuántos nombres quiere ingresar.
Luego, guarda cada nombre en un arreglo.
Al final, imprime todos los nombres usando un ciclo.
*/
let cantidad = Number(prompt('¿Cuantos nombres vas a ingresar?'));
let nombres = [];
for (let i = 1; i <= cantidad; i++) {
  //Para solicitar una cadena de texto no es necesario poner "String" fuera de de los () y antes del prompt
  // ya que js lo detectara como una cadena de texto o null
  let nombre = prompt('Ingrese el nombre ' + i);
  nombres.push(nombre);
}
// CORRECCION; puse "k <= cantidad" eso va imprimir un objeto de la lista extra que no existe
// correccion "k < cantidad."
for (let k = 0; k < cantidad; k++){
console.log(nombres[k]);
}

// Para "cantidad" es mejor usar en su lugar "nombres.length", ya que con esto nos da la catidad de elementos del arreglo.
