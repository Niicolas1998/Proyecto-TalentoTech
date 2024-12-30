document.getElementById('contacto-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const provincia = document.getElementById('provincia').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Verificar si algún campo está vacío
    if (nombre === '' || email === '' || provincia === '' || asunto === '' || mensaje === '') {
        console.log('Por favor, completa todos los campos del formulario.');
    } else {
        console.log('Todos los campos están completos.');
        // Si todos los campos están completos, enviar el formulario
        event.target.submit();
    }
});
