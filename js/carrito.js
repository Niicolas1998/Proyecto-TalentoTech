function mostrarCarrito() {
    const productosCarrito = document.getElementById('productos-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    productosCarrito.innerHTML = ''; // Limpiar contenido previo

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = 0;

    carrito.forEach((producto, index) => {
        // Crear un div para cada producto
        const productoElemento = document.createElement('div');
        productoElemento.classList.add('producto-en-carrito');
        productoElemento.innerHTML = `
            <p>${producto.nombre}</p>
            <p>$${producto.precio}</p>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        productosCarrito.appendChild(productoElemento);

        total += producto.precio;
    });

    totalCarrito.textContent = total;
}

function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

document.getElementById('vaciar-carrito').addEventListener('click', () => {
    localStorage.removeItem('carrito');
    mostrarCarrito();
});

mostrarCarrito();
