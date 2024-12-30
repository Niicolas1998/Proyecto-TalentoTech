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
        // Recuperar el carrito del localStorage
        carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Agregar el producto al carrito
        carrito.push(producto);

        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Actualizar el contador del carrito
        actualizarContadorCarrito();

        alert(`${producto.nombre} ha sido agregado al carrito.`);
    }
}

// Función para eliminar un producto del carrito
function eliminarProductoCarrito(indice) {
    // Recuperar el carrito del localStorage
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Eliminar el producto en el índice especificado
    carrito.splice(indice, 1);

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar el contador del carrito
    actualizarContadorCarrito();

    // Mostrar mensaje de éxito
    alert("Producto eliminado del carrito.");
}

// Función para vaciar el carrito completo
function vaciarCarrito() {
    // Vaciar el carrito
    carrito = [];

    // Guardar el carrito vacío en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar el contador del carrito
    actualizarContadorCarrito();

    // Mostrar mensaje de éxito
    alert("El carrito ha sido vaciado.");
}

// Función para actualizar el contador de productos en el carrito
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contadorCarrito = document.getElementById('contador-carrito');

    if (contadorCarrito) {
        contadorCarrito.textContent = carrito.length; // Mostrar el número total de productos en el carrito
    }
}

// Función para mostrar los productos en el carrito (con opción de eliminar)
function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedorCarrito = document.getElementById('contenedor-carrito'); // Donde mostrar los productos

    // Limpiar el contenedor antes de mostrar los nuevos productos
    contenedorCarrito.innerHTML = "";

    carrito.forEach((item, index) => {
        // Crear un contenedor para cada producto
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');

        // Crear contenido para el producto
        divProducto.innerHTML = `
            <p>${item.nombre} - $${item.precio}</p>
            <button onclick="eliminarProductoCarrito(${index})">Eliminar</button>
        `;

        // Agregar el producto al contenedor
        contenedorCarrito.appendChild(divProducto);
    });

    // Agregar un botón para vaciar el carrito
    const botonVaciar = document.createElement('button');
    botonVaciar.textContent = "Vaciar carrito";
    botonVaciar.onclick = vaciarCarrito;

    // Agregar el botón al contenedor
    contenedorCarrito.appendChild(botonVaciar);
}

// Función para cargar el contador cuando la página se carga
window.onload = function() {
    actualizarContadorCarrito();
};
