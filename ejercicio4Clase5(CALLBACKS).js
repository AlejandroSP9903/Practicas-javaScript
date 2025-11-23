// YA EMPIEZO A ENTENDER LAS FUNCIONES Y COMO HACER LOS CALLBACK
// EJERCICIO 1
function procesarText (callback){
  let dato = prompt("Ingresa el texto a procesar.")
  return callback (dato);
}
function primeraL (text){
return text.charAt(0);
}
function ultimaL (text){
return text.charAt(text.length -1)
}
function invertir (text){
   let dividir = text.split("");
   let revertir = dividir.reverse()
   let unir = revertir.join("");
   return unir;
}

let firtsL = procesarText(primeraL);
console.log ("La primera letra del texto proporcionado es: " + firtsL);

let lastL = procesarText(ultimaL);
console.log ("La ultima letra del texto es: " + lastL);

let invert = procesarText(invertir);
console.log ("El texto invertido es: " + invert)
