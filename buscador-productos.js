/*Función en JavaScript que busca un producto por ID y valida si está disponible en stock usando .find().
*/

const productos = [
  { id: 1, nombre: "Laptop", precio: 3500000, stock: 4, categoria: "tecnologia" },
  { id: 2, nombre: "Mouse", precio: 35000, stock: 0, categoria: "tecnologia" },
  { id: 3, nombre: "Gorra", precio: 40000, stock: 10, categoria: "ropa" },
  { id: 4, nombre: "Camisa", precio: 80000, stock: 3, categoria: "ropa" },
  { id: 5, nombre: "Audífonos", precio: 120000, stock: 2, categoria: "tecnologia" },
];


// AQUI ME PEDIA DEVOLVER EL OBJETO COMO ENCONTRADO O NO, Y LUEGO VALIDAR EL STOCK, TODO 
// EN DIFRENTES PASOS DENTRO DE LA FUNCION

function buscarProducto(array,idBuscado){
  let encontrar = array.find(id => id.id === idBuscado && id.stock > 0);
  if (encontrar){
    return 'Disponible.';
  }
  else {
    return 'Producto no encontrado.'
  }
}

let buscardor = buscarProducto(productos, 3);
console.log(buscardor)
