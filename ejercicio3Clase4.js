/*
Crear una función que reciba un arreglo y retorne el número más grande dentro de él.
Este ejercicio te ayuda a:
Recorrer arreglos
Comparar valores
Manejar variables dentro de funciones
Pensar paso a paso como un programador real
*/
let cantidad = Number(prompt("Ingrese la cantidad de edades a revisar."));

let edades = [];

for (let i = 1; i <= cantidad; i++){
  let edad = Number(prompt("Ingrese la edad numero "+ i +"."));
  edades.push(edad);
}

// AQUI "elMayor" LO HABIA DEFINIDO DENTRO DEL "for" LO QUE HACIA QUE SE REINICIARA E IMPRIMIERA EL PRIMER VALOR.

let elMayor = edades[0];
function mayor (edades, cantidad){
for (let r = 0;r < cantidad; r++){
  if (elMayor < edades[r] ){
    elMayor = edades[r]
   }
 }

//EL "return" VA SIEMPRE FUERA DEL CICLO "for" PARA EVITAR QUE LO CORTE

return elMayor
}
let resultado = mayor (edades,cantidad);
  console.log (resultado);
