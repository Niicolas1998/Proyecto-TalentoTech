document.addEventListener("DOMContentLoaded", async () => {
    const ciudades = ["Buenos Aires", "Madrid", "Londres", "París", "New York"];
    const apiKey = "82dbce27870f4a8282e163829243012"; // Reemplaza con tu propia clave de API
    const contenedor = document.getElementById("clima-contenedor");

    for (let ciudad of ciudades) {
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${ciudad}&lang=es`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            // Crear la tarjeta de clima
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta-clima");

            tarjeta.innerHTML = `
                <h3>${data.location.name}</h3>
                <p class="temperatura">${data.current.temp_c}°C</p>
                <p>${data.current.condition.text}</p>
            `;

            // Añadir la tarjeta al contenedor
            contenedor.appendChild(tarjeta);
        } catch (error) {
            console.error("Error al obtener los datos del clima:", error);
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta-clima");
            tarjeta.innerHTML = `
                <h3>${ciudad}</h3>
                <p>No disponible</p>
            `;
            contenedor.appendChild(tarjeta);
        }
    }
});
