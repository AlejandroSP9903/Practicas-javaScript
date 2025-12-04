let notas = [2.5, 3, 4.9, 3.6, 4.1];
/*Este ejercicio valida un arreglo de notas asegurando que todas estén entre 0 y 5 usando el método .every().
Si los valores son correctos, calcula la suma total con .reduce() y luego obtiene el promedio final. También 
incluye una función que retorna un mensaje de error cuando las notas no cumplen la condición.
*/


let sonValidas = notas.every(num => num < 5 && num > 0);

// IMPRIMO LA VARIABLE QUE CREE CON EVERY PARA RECTIFICAR QUE
// QUE ESTE FUNCIONAL.

console.log(sonValidas);


function total (array, sonValidas){
  if (!sonValidas){
    return 'Debe ingresar notas entre 0 y 5';
  }
  let promedio = array.reduce((contador, item) => {
       return contador + item; 
    },0 );
  return promedio
}

let final = total(notas, sonValidas);

let notaFinal = final / notas.length;

console.log(notaFinal);
