/*Crea un programa que:
Pida una lista de palabras separadas por comas por prompt.
Use una función principal procesarPalabras(callback)
El callback debe:
Convertir el texto en array.
Pasar todas las palabras a mayúsculas.
Quitar espacios extra.
La función principal debe retornar el array procesado.
Finalmente, imprime la lista en consola una por una.
*/
function pedirPalabras (callback){
  let datos = prompt("Por favor ingresa la lista de palabras, separadas por comas; ejemplo, casa, loro, carro, comercio, etc...");
  return callback(datos);
}
 var ordenar  =(text) => {
  let array = text
  .split(",")
  .map(palabra => palabra.toUpperCase().trim())
  return array;
 }

 function imprimir (array){

// AQUI EN EL CICLO NO PUSE LA CONDICION "I < ARRAY.LENGTH" ESTO GENERO QUE EL BUCLE SE CONVIRTIERA EN INFINITO 
// DEBO TENER MUCHO CUIDADO YA QUE ESTO PUEDE AFECTAR EL SISTEMA Y GENERAR RETRASOS Y INCONVENIENTES MAYORES, SI EL CODIGO
// NO ESTA BIEN OPTIMIZADO

  for (let i = 0; i < array.length; i++){
    console.log(array[i])
  }
 }

// TAMBIEN DIFINI LA VARIABLE "let mostrar = imprimir(crearOrdenar);" CUANDO "IMPRIMIR"
// NO RETORNA NAADA ESTO GENERA EL ERROR DE UNDEFINED.

let crearOrdenar = pedirPalabras(ordenar);
imprimir(crearOrdenar);
