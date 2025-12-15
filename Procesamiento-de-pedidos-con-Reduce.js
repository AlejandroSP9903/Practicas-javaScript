/* Implementación de reduce() para consolidar múltiples resultados: total de ventas, 
acumulado por cliente y detección de pedidos no entregados, optimizando el recorrido del arreglo.
*/

const pedidos = [
  { cliente: "Ana", total: 120000, entregado: true },
  { cliente: "Luis", total: 450000, entregado: false },
  { cliente: "Ana", total: 80000, entregado: true },
  { cliente: "Carlos", total: 200000, entregado: false }
];

// ESTA LOGICA LA EMPIEZO A ENTENDER SIN EMBARGO ME CONFUNDO AUN BASTANTE CON LOS TERMINOS, MAÑANA REPASARE UN POCO DE LA TERMINOLOGIA PARA DARLE "CARA" A CADA UNO DE ELLOS.

let respuestas = pedidos.reduce((acc, item) =>{
acc.totalGeneral += item.total
// 2) YA QUE AQUI SE DEFINEN SIN NECESIDAD DE HACERLO DE NUEVO EN EL OBJECT INICIAL.
acc.totalPorCliente[item.cliente] = (acc.totalPorCliente[item.cliente] || 0) + item.total
if (item.entregado === false){
  acc.pendientes.push(item.cliente);
}
return acc;
}, {
  totalGeneral: 0,
  totalPorCliente: {
  //1) EN ESTA LINEA NO ERA NECESARIO DEFINIR LOS NOMBRES. 
    Ana: 0,
    Luis: 0,
    Carlos: 0
  },
  pendientes: []
});

console.log(respuestas);
