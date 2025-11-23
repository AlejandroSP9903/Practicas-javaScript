/*Quiero que intentes escribir una función llamada procesarTexto que reciba:
un texto por prompt
un callback en formato arrow function
*/

function procesarTexto (callback){
  let dato = prompt("Ingresa tu nombres.");
  return callback (dato);
}

// IN THIS FUNCTION I DID NOT PUT THE CODE TOGETTER, I SPLIT IT OUT AND
// THAT DID NOT LET THE CODE RUN  

var name = text => text.charAt(0).toUpperCase() + text.slice(1);

console.log(procesarTexto(name));
