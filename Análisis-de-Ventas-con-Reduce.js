/*Este proyecto procesa un arreglo de ventas utilizando el método reduce() de JavaScript para obtener múltiples resultados en una sola pasada.
El programa calcula:
El total general de ventas
El total de ventas por vendedor
La venta individual más alta (vendedor, producto y monto)
El objetivo del ejercicio es consolidar el patrón mental de reduce, entendiendo el uso del acumulador, la inicialización de estructuras complejas y la 
comparación de valores para obtener máximos.
*/

const ventas = [
  { vendedor: "Ana", producto: "Laptop", total: 3500000 },
  { vendedor: "Luis", producto: "Mouse", total: 40000 },
  { vendedor: "Ana", producto: "Teclado", total: 90000 },
  { vendedor: "Carlos", producto: "Monitor", total: 1200000 },
  { vendedor: "Luis", producto: "Teclado", total: 80000 }
];


let totales = ventas.reduce((acc, item)=>{
acc.totalGeneral += item.total;
acc.ventasPorVendedor[item.vendedor] = (acc.ventasPorVendedor[item.vendedor] || 0) + item.total;
let valorActual = item.total;
// AQUI EN EL IF, ME TRABE YA QUE NO ME ARROJA EL RESULTADO, TUBE QUE VER UNA REFERENCIA PARA PODER COMPLETAR EL ODIGO YA QUE ME FALTA EL
// .TOTAL EN "acc.ventaMasAlta.total"
if(valorActual > acc.ventaMasAlta.total){
  acc.ventaMasAlta = item;
}
return acc;
},{totalGeneral: 0,
ventasPorVendedor:{},
ventaMasAlta:{vendedor: "",
    producto: "",
    total: 0}
});

console.log(totales);
