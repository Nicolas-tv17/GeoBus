let p_latitud = document.getElementById('latitud');
let p_longitud = document.getElementById('longitud');
let iframe = document.getElementById('mapa');

function obtenerUbicacion() {
    navigator.geolocation.getCurrentPosition(
        position => {
            // Obtener las coordenadas de la ubicación actual
            let latitud = position.coords.latitude;
            let longitud = position.coords.longitude;

            

            if (p_latitud && p_longitud && iframe) {
                p_latitud.textContent = latitud;
                p_longitud.textContent = longitud;

                // Actualizar la URL del iframe de Google Maps con la ubicación en tiempo real
                console.log(latitud + ' ' + longitud);
                iframe.src = `https://www.google.com/maps?q=${latitud},${longitud}&z=15&output=embed`;
            } else {
                console.error("No se encontraron los elementos DOM requeridos.");
            }
        },
        error => {
            console.error("Error al obtener la ubicación:", error);
        }
    );
}

function iniciarSeguimientoUbicacion() {
    if (navigator.geolocation) {
        // Llamar a obtenerUbicacion cada 2 segundos
        setInterval(obtenerUbicacion, 5000);
    } else {
        console.error("La geolocalización no es soportada por este navegador.");
    }
}

// Llamar a la función para comenzar a obtener la ubicación en tiempo real
iniciarSeguimientoUbicacion();
