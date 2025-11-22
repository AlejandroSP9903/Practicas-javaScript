/*
Preguntas cuántos valores va a tener el arreglo.
Lo llenas con un ciclo.
Preguntas qué valor deseas contar.
Creas la función contarApariciones(arreglo, valor) que:
Recorra el arreglo
Vaya contando cada coincidencia
Retorne cuántas veces apareció
Muestras el resultado en consola.
*/
let cantidad = Number(prompt ("ingrese la cantidad de numeros a validar:"));
let numeros = [];

// No defini que el usuario pondria numeros, se debe poner Number

for (let i = 1; i <= cantidad; i++){
  let numero = Number(prompt("Ingrese el numero de la posicion " + i + ":"));
  numeros.push (numero);
}let contar = Number(prompt ("Ingrese el numero a contar:"));

//EN lA FUNCION NO DEFINI FUERA DEL CICLO EL "total" Y ESTABA RETORNANDO DENTRO DEL CONDICIONAL
// LO QUE HACIA QUE RETORNARA SOLO UNA COINCIDENCIA
// LA SOLUCION, RETORNAR LA SUMA "total++" Y LUEGO FURA RETORNAR EL VALOR

function contarApariciones (numeros, contar){
  let total = 0;
  for (let u = 0; u < numeros.length; u++)
  if (contar === numeros[u]){
   total++;}
   return total;
  }
let respuesta = contarApariciones(numeros, contar);
console.log (respuesta);
