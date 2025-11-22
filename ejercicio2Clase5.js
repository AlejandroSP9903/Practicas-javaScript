/*Crea una función llamada filtrarArreglo que reciba:
Un arreglo de números.
Un callback que decida si un número se debe guardar o no.
La función debe:
Recorrer el arreglo.
Aplicar el callback a cada número.
Si el callback retorna true, agregar ese número a un nuevo arreglo.
Al final, retornar ese nuevo arreglo.
*/

// AUNQUE FUNCIONA, NO LOGRE HACERLO CON FUNCIONES
// COMPRENDO LA LOGICA PERO NO SE APLICAR LOS CONCEPTOS AUN
let cantidad = Number(prompt("Ingresa la cantida de numero a evaluar."));

let lista = [];
let listaFinal = [];

for (let i = 1; i <= cantidad; i++){
  let dato = Number(prompt("ingrese el numero de la posicion " + i + "."))
  lista.push(dato);
 
}
for (let a = 0; a < cantidad; a++ ){
 let validacion = false;
if (lista[a] % 2 != 0){
  validacion = true;
   } if (validacion === true){
    listaFinal.push(lista[a]);
  }
 }
for (let h = 0; h < listaFinal.length; h++){
  console.log(listaFinal[h]);
}
