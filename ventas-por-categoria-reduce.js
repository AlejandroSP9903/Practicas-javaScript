/*Agrupa ventas por categoría usando reduce y determina la categoría con mayor total de ventas.
*/

const ventas = [
  { categoria: "tecnologia", total: 3000000 },
  { categoria: "ropa", total: 200000 },
  { categoria: "tecnologia", total: 1500000 },
  { categoria: "ropa", total: 350000 }
];

// AQUI SIGO CONFUNDIENDO LA SINTAXIS, SIN EMBARGO IDENTIFIQUE EL ERROR MAS RAPIDO QUE ANTES.

let agrupar = ventas.reduce((acc, item) => {
  acc[item.categoria] = (acc[item.categoria] || 0) + item.total;
  return acc;
}, {});

// ME PASO LO MISMO AQUI, SIN EMBARGO IGUAL LO PUDE ARRGLAR VIENDO LA LOGICA DE OTRO EJERCICIO, SIN CONSULTAR FUENTES EXTERNAS

let elMasCostoso = Object.entries(agrupar).reduce(
  (max, item)=>{
    return item[1] > max[1] ? item:max;
  });;

console.log(elMasCostoso)
