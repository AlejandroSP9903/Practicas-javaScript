/*Este ejercicio utiliza el método reduce() para recorrer un arreglo de números y separarlos en 
dos grupos: pares e impares. La función construye un objeto con ambos arreglos y demuestra cómo 
reduce puede usarse para organizar y clasificar datos de forma eficiente
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
function agruparParesImpares (array){ 
  let grupos = array.reduce((contador, elementoActual) =>{ 
    if (elementoActual % 2 === 0){ 
      contador.pares.push(elementoActual) 
      }else { contador.impares.push(elementoActual) } 
      return contador; 
      //AQUI SE INICIA DESDE "PARES: []" Y "IMAPRES: []" POR QUE SERAN ARRAYS LOS SE GENERARAN, 
      // O ALMENOS ESTO ES LO QUE CREO FRENTE A ESTA LOGICA. 
      },{pares: [], impares: []}); return grupos; } 
      let resultado = agruparParesImpares(numeros); console.log(resultado); 

      /* Debe imprimir: pares:(5) [2, 4, 6, 8, 10] 
      impares:(5) [1, 3, 5, 7, 9] 
     */
