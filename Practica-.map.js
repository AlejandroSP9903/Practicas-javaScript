// PRACTICA .MAP()
// Practica # 1
const users = [
  { nombre: "Luis", edad: 28 },
  { nombre: "Pedro", edad: 19 },
  { nombre: "Daniela", edad: 27 }
];


let mapeo = users.map(value => `Su nombre es ${value.nombre}, y tiene ${value.edad} años.`);

console.log(mapeo);

// Practica # 2

let nuevoMapeo = users.map(user=> ({
nombre: user.nombre,
esMayor: user.edad > 21,
}));

console.log(nuevoMapeo);

// Practica # 3

const productos = ["Cerveza", "Pan", "Huevos", "Galletas"];


const numerar = productos.map((item, contador) =>
`${contador + 1}. ${item}.`
);
console.log(numerar)

//Practica # 4

const inventario = [
  { nombre: "Cerveza", precio: 5000, stock: 10 },
  { nombre: "Pan", precio: 2000, stock: 20 },
  { nombre: "Agua", precio: 1500, stock: 30 }
];

//AQUI PODIA USAR "MATH.ROUND" PARA REDONDEAR EL VALOR Y QUE NO TUVIERA MUCHOS DECIMALES.
// Ó CON "toFix(2)" AQUI TENDRIA QUE USAR PARENTECIS PARA LA OPERACION Y "TOFIX(2)" FUERA DE ELLOS.
const calcular = [...inventario].map(item => ({
  nombre: item.nombre,
  valorConIva: item.precio * 1.19
}));

console.log(calcular);

//Practica # 5

const productos2 = [
  { nombre: "Cerveza", precio: 5000, stock: 10 },
  { nombre: "Whiskey", precio: 55000, stock: 2 },
  { nombre: "Galletas", precio: 2000, stock: 20 },
  { nombre: "Agua", precio: 1500, stock: 30 }
];

const filtrar2 = productos2.filter(dato => dato.precio > 3000);
const nuevoArray2 = filtrar2.map(value => ({
  nombre: value.nombre,
  valorConIva: (value.precio * 1.19).toFixed(2)
}));

console.log(nuevoArray2);

//Practica # 6
const ventas = [
  { producto: "Cerveza", cantidad: 10, precioUnidad: 5000 },
  { producto: "Galletas", cantidad: 20, precioUnidad: 2000 },
  { producto: "Whiskey", cantidad: 2, precioUnidad: 55000 }
];

const totalMap = ventas.map(valor => ({
producto: valor.producto,
valorTotal: valor.cantidad * valor.precioUnidad
}));

let sumar = totalMap.reduce((contador, itemActual) =>{
  return contador + itemActual.valorTotal}, 0);

console.log(totalMap ,sumar);

//Practica # 7

const productos3 = [
  { nombre: "Cerveza", precio: 5000, stock: 10 },
  { nombre: "Whiskey", precio: 55000, stock: 2 },
  { nombre: "Galletas", precio: 2000, stock: 20 },
  { nombre: "Agua", precio: 1500, stock: 30 },
  { nombre: "Vino", precio: 25000, stock: 4 }
];

const filtrador = productos3.filter(v => v.stock > 5);
const mapeando = filtrador.map((v) => ({
nombre: v.nombre,
valorTotal: v.precio * v.stock
})
);

const sumaFiltrado = mapeando.reduce((acc, item) => acc + item.valorTotal, 0);

const outcomes = {
  mapeando,
  sumaFiltrado
};
console.log (outcomes);

// Practica # 8

const inventario2 = [
  { nombre: "Cerveza", precio: 5000, stock: 10 },
  { nombre: "Agua", precio: 1500, stock: 30 },
  { nombre: "Galletas", precio: 2000, stock: 20 },
  { nombre: "Vino", precio: 25000, stock: 4 },
  { nombre: "Whiskey", precio: 55000, stock: 2 }
];

const myMap = inventario2.map((v) => ({
nombre: v.nombre,
precio: v.precio,
stock: v.stock,
valorTotal: v.stock * v.precio
})
);

const order = myMap.sort((a, b) => b.valorTotal - a.valorTotal);

//EN ESTA LINEA DE CODIGO TUBE QUE BASARME EN EL .SORT YA QUE NO SABIA EXACTAMENTE COMO
// HAYAR EL VALOR MAYOR DE EL ARRAY

const find = order.find(value => `El producto mas costoso es${value.valorTotal}`);

const totals = {myMap,
order,
find
};
console.log(totals);
