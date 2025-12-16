/*Este ejercicio utiliza el método .reduce() para agrupar el total de ventas por cliente a partir de un arreglo de objetos.
El objetivo es:
Calcular el total acumulado de ventas por cada cliente.
Identificar el cliente con el mayor monto total de ventas.
*/
const ventas = [
  { cliente: "Ana", total: 120000 },
  { cliente: "Luis", total: 450000 },
  { cliente: "Ana", total: 80000 },
  { cliente: "Carlos", total: 200000 },
  { cliente: "Luis", total: 50000 }
];


//AUNQUE PARECE FUNCIONAR, ME QUEDO MAL ESTE .REDUCE(), YA QUE CON ITEM.TOTAL DENTRO DEL IF,
// CALCULO EL TOTAL DEL ARREGLO PRINCIPAL, ME HACE FALTA EL MAX PARA GUARDARLO EN LA MEMORIA Y PODER CALCULAR
// EL MAXIMO GRAN TOTAL Y MAS ALTO.

let totales = ventas.reduce((acc, item) => {
  acc.totalPorCliente[item.cliente] = (acc.totalPorCliente[item.cliente] || 0) + item.total;
  let valorActual = acc.totalPorCliente[item.cliente];
  if(valorActual > item.total){
  acc.clienteTop = item.cliente;
  }
  return acc
}, {totalPorCliente:{}, clienteTop: null});

console.log(totales);
