/*Este ejercicio recrea el método some() mediante la función miSome, que recorre un array y utiliza un 
callback para evaluar cada elemento. La función retorna true apenas encuentre un valor que cumpla la 
condición. En este caso, verifica si existe al menos un número par dentro de la lista.
*/
let pedirLista = prompt("Ingrese una lista de numeros separados por comas para validar si almenos uno comple con la condicion.")

/* ESTABA INTENTANDO CREAR OTRA VARIABLE PARA CONVERTIR LOS ELEMENTOS DE "ARRAY" A NUMEROS
PERO LO UNICO QUE DEBIA HACER ERA RETORNAR EL ARRAY CON ".MAP" APLICADO EN LA MISMA LINEA.
*/

function convertirArreglo (texto){
  let array = texto.split(",");
  return array.map(num => Number(num.trim()));
}


function miSome (array, callback){
  for (let i = 0; i < array.length; i++){
    let item = array[i];
    if (callback(item)){
      return true
      }
    }return false
  }

/* Y AQUI DEBIA CREAR OTRA VARIABLE, LA QUE GENERARIA EL ARREGLO DE NUMEROS CON LA LISTA QUE EL USUARIO PROPORCIONO.
CREO QUE DEBO EMPEZAR A TRABAJAR EN ESTE TIPO DE EJERCICIOS YA QUE ME CONFUNDO AL REALIZARLOS.
*/

let crearArreglo = convertirArreglo(pedirLista);
let final = miSome(crearArreglo,(numero) => numero % 2 === 0);
console.log (final);
