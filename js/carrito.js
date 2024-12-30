function mostrarCarrito() {
    const productosCarrito = document.getElementById('productos-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    productosCarrito.innerHTML = ''; // Limpiar el contenido previo

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = 0;

    carrito.forEach((producto, index) => {
        // Crear un div para cada producto
        const productoElemento = document.createElement('div');
        productoElemento.classList.add('producto-en-carrito');
        
        // Estructura HTML para mostrar el producto
        productoElemento.innerHTML = `
            <div class="producto-info">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
                <div class="producto-detalles">
                    <p class="nombre-producto">${producto.nombre}</p>
                    <p class="precio-producto">$${producto.precio}</p>
                </div>
            </div>
            <button class="eliminar" data-index="${index}">Eliminar</button>
        `;
        productosCarrito.appendChild(productoElemento);

        total += producto.precio;
    });

    totalCarrito.textContent = total;

    actualizarContadorCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Vaciar el carrito
document.getElementById('vaciar-carrito').addEventListener('click', () => {
    localStorage.removeItem('carrito');
    mostrarCarrito(); // Llamamos a la función para vaciar la interfaz
});

// Escuchar clics en los botones "Eliminar"
document.getElementById('productos-carrito').addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('eliminar')) {
        const index = event.target.getAttribute('data-index');
        eliminarDelCarrito(index); // Llamamos a la función eliminar al clic en el botón
    }
});

function vaciarCarrito() {
    // Vaciar el carrito
    carrito = [];

    // Guardar el carrito vacío en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar el contador del carrito
    actualizarContadorCarrito();
    alert("Producto eliminado del carrito.");

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

// Función para cargar el contador cuando la página se carga
window.onload = function() {
    actualizarContadorCarrito();
};


// Inicializar el carrito al cargar la página
mostrarCarrito();
