/*
Implementación personalizada de la función "find" en JavaScript.
La función myFind recorre un array y ejecuta un callback sobre cada elemento.
Retorna el PRIMER valor que cumple la condición del callback.
Si ningún elemento coincide, retorna null.
Ejercicio diseñado para practicar funciones de orden superior, callbacks
y el manejo manual de arrays en JavaScript.
*/

let frutas = ["Pera","sandia","mango","banano","fresa","mora","papaya", "quiwi", "lulo"];

//ESTA ES LA FORMA CORRECTA DE HACERLO, ESTOY ENTENDIENDO UN POCO MAS ACERCA DE ESTE PROCESO
// LEER Y REVISAR CADA UNO DE ESTOS EJERCICIOS ANTES DE DE LAS PROXIMAS SESIONES (O ALMENOS HASTA QUE DOMINE LA LOGICA)

function myFind (array,callback){
  for ( let i = 0; i < array.length; i++){
    if (callback(array[i])){
      return (array[i])
    }
  } return null;
}


// ESTA PARTE FUE LA QUE HIZE PRIMERO, LO CUAL ESTABA MAL YA QUE REGRESABA UN ARREGLO,
// LO QUE NO ES MUY EFICIENTE YA QUE EL EJERCICIO ME SOLICITABA UN SOLO DATO.

/*
function myFind (array, callback){
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++){
   if (callback(array[i])){
    nuevoArray.push(array[i]);
    break
   }
  }
  return nuevoArray;
}
*/

let procesar = myFind (frutas, (fruta) => fruta.length > 5);
console.log (procesar)






