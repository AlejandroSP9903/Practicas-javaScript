/*Este ejercicio crea una versión manual de every() llamada miEvery, que recibe un array y un 
callback para validar cada elemento. La función recorre el arreglo y retorna true solo si todos 
los elementos cumplen la condición. En este caso, verifica si todos los números son pares.
*/

let numeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// AQUI ESTABA RETORNADO "TRUE" AND "FALSE" COMO STRINGS, LO IDEA ERA HACER "RETURN TRUE" Y "RETURN FALSE"

function miEvery (array, callback){
  for ( let i = 0; i < array.length; i++){
    let arreglo = array[i];
    if (!callback(arreglo)){
      return false;
    }
  }return true
}

let definir = miEvery(numeros, (num) => num % 2 === 0);

console.log(definir);

//Debe retornar "True".
