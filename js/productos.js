// Definir un array para almacenar los productos en el carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(productoId) {
    // Detalles de los productos
    const productos = {
        producto1: { nombre: "Kit reemplazo", precio: 500 },
        producto2: { nombre: "Kit 2 reemplazo", precio: 600 },
        producto3: { nombre: "Kit de herramientas", precio: 700 },
        producto4: { nombre: "Kit 2 de herramientas", precio: 800 },
        producto5: { nombre: "Aire de ventana", precio: 300 },
        producto6: { nombre: "Aire de ventana", precio: 400 },
        producto7: { nombre: "Aire acondicionado Industrial", precio: 4500 },
        producto8: { nombre: "Aire acondicionado Industrial", precio: 5000 },
        producto9: { nombre: "Producto 1", precio: 500 },
        producto10: { nombre: "Producto 2", precio: 600 },
        producto11: { nombre: "Producto 3", precio: 700 },
        // Agregar más productos si es necesario
    };

    // Obtener los detalles del producto usando el id
    const producto = productos[productoId];

    if (producto) {
        carrito.push(producto); // Agregar el producto al carrito
        alert(`${producto.nombre} ha sido agregado al carrito.`);
    }
}

// Mostrar los productos en el carrito (opcional)
function mostrarCarrito() {
    console.log("Productos en el carrito:");
    carrito.forEach(item => {
        console.log(`${item.nombre} - $${item.precio}`);
    });
}
// Función para agregar un producto al carrito
function agregarAlCarrito(productoId) {
    const productos = {
        producto1: { nombre: "Producto 1", precio: 9000 },
        producto2: { nombre: "Producto 2", precio: 6000 },
        producto3: { nombre: "Producto 3", precio: 87000 },
        producto4: { nombre: "Producto 4", precio: 76800 },
        producto5: { nombre: "Producto 5", precio: 77900 },
        producto6: { nombre: "Producto 6", precio: 166000 },
        producto7: { nombre: "Producto 7", precio: 177100 },
        producto8: { nombre: "Producto 8", precio: 18200 },
        producto9: { nombre: "Producto 9",precio: 139000 },
        producto10: { nombre: "Producto 10", precio: 461400 },
        producto11: { nombre: "Producto 11", precio: 461500 },
        producto12: { nombre: "Producto 12", precio: 461600 },

        // Agrega más productos si es necesario
    };

    const producto = productos[productoId];
    
    if (producto) {
        // Recuperar el carrito del localStorage
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Agregar el producto al carrito
        carrito.push(producto);

        // Guardar el carrito en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        alert(`${producto.nombre} ha sido agregado al carrito.`);
    }
}
