/*Este ejercicio valida un arreglo de notas asegurando que todas estén entre 0 y 5 usando el método .every().
Si los valores son correctos, calcula la suma total con .reduce() y luego obtiene el promedio final. También 
incluye una función que retorna un mensaje de error cuando las notas no cumplen la condición.
*/


let notas = [2.5, 3, 4.9, 3.6, 4.1];

let sonValidas = notas.every(num => num < 5 && num > 0);

// IMPRIMO LA VARIABLE QUE CREE CON EVERY PARA RECTIFICAR QUE
// QUE ESTE FUNCIONAL.

console.log(sonValidas);

// EN ESTA FUNCION ESTA INTENTANDO HACER UN CALLBACK PERO "SONVALIDAS" ES UNA BOOLEANO, LO QUE ROMPIA LA LOGICA

function total (array, sonValidas){
  if (!sonValidas){
    return 'Debe ingresar notas entre 0 y 5';
  }
  let promedio = array.reduce((contador, item) => {

// Y AQUI ESTABA INTENTANDO DIVIDIR EL TOTAL POR EL VALOR TOTAL DE ITEMS DEL ARREGLO, LO QUE LO HACIA POR CADA SUMA, ESTABA MAL
  // YA QUE ESO SE HACE FUERA Y NO DENTRO PARA QUE SE HAGA SOLO UNA VES.
    
    return contador + item; 
    },0 );
  return promedio
}

let final = total(notas, sonValidas);

// AQUI DEFINI MAL ESTA VARIABLE YA QUE DEBI HACERLO MEJOR DESDE DENTRO DE LA FUNCION "TOTAL" CON EL VALOR DEL "PROMEDIO" DIRECTAMENTE
// ESTO AYUDA A QUE NO DEBA VOLVER A DIVIDIR Y EVITA ROMPER EL CODIGO SI NO SE DIVIDE EN LAS NOTAS DE OTRO ESTUDIANTE

let notaFinal = final / notas.length;

console.log(notaFinal);
