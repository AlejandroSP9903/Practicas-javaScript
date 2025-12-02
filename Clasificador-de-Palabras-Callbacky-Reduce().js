
/*Este ejercicio implementa una función que clasifica palabras en categorías usando un callback y el método reduce().
La lógica analiza cada palabra para determinar si es alfa-numérica, larga, comienza con vocal o con consonante, agrupándolas dinámicamente en un objeto.
El callback define la regla de clasificación, mientras que reduce() se encarga de construir los grupos sin duplicar ni sobreescribir.
*/

let lista = ["caSa19", "perro", "casa", "arbol", "sol", "aire", "pez", "colosal"];

function clasificarPalabras (array, callback){
  return array.reduce((contador, elemento) =>{
    let categoria = callback(elemento);
    if (!contador[categoria]){
      contador[categoria] = [];
    }
    contador[categoria].push(elemento);
    return contador;
  }, {});
}

let filtrar = clasificarPalabras (lista, (word) => {
  let arrayText = word.toLowerCase();
  for ( let i = 0; i < arrayText.length; i++){

    // CON ESTA ESTRUCTURA REVISAMOS SI TENEMOS NUMEROS DENTRO DE LA PALABRA.

    if (/\d/.test(arrayText)){
      return 'Alfa Numerica';
    }
  }
  if (arrayText.length >= 5) return 'Larga';

// EN ESTE PUNTO PUSE DEMACIADO CODIGO PARA VALIDAR SI ERA VOCAL, ERA MAS EFICIENTE USAR;
// "if ("aeiou".includes(lower[0])) return "vocal";"

  else if (arrayText[0] === 'a' || arrayText[0] === 'e' || arrayText[0] === 'i' || arrayText[0] === 'o' || arrayText[0] === 'u')return 'vocal';
return 'consonante';
}   
)

console.log(filtrar);
/* Respuesta en consola: 
Alfa Numerica:(1) ["caSa19"]
Larga:(3) ["perro", "arbol", "colosal"]
consonante:(3) ["casa", "sol", "pez"]
vocal:(1) ["aire"]
*/
