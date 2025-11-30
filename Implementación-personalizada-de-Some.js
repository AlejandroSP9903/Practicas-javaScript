/*Este ejercicio recrea el método some() mediante la función miSome, que recorre un array y utiliza un 
callback para evaluar cada elemento. La función retorna true apenas encuentre un valor que cumpla la 
condición. En este caso, verifica si existe al menos un número par dentro de la lista.
*/

let lista = [1, 3, 5, 7, 9, 10];

function miSome (array, callback){
  for (let i = 0; i < array.length; i++){
    let item = array[i];
    if (callback(item)){
      return true
      }
    }
    return false
  }

let final = miSome(lista,(numero) => numero % 2 === 0);
console.log (final);
