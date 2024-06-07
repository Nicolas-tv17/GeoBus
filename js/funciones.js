let p_latitud = document.getElementById('latitud');
let p_longitud = document.getElementById('longitud');

function obtenerUbicacionEnTiempoReal() {
    // Establecer el observador para obtener la ubicación en tiempo real
    let watcher = navigator.geolocation.watchPosition(
        position => {
            // Obtener las coordenadas de la ubicación actual
            let latitud = position.coords.latitude;
            let longitud = position.coords.longitude;

            p_latitud.textContent = latitud;
            p_longitud.textContent =longitud;

            // Actualizar la URL del iframe de Google Maps con la ubicación en tiempo real
            let iframe = document.getElementById('mapa');
            iframe.src = `https://www.google.com/maps?q=${latitud},${longitud}&z=15&output=embed`;
        },
        error => {
            console.error("Error al obtener la ubicación:", error);
        }
    );
    
    // Si deseas detener el seguimiento de la ubicación en algún momento, puedes usar:
    // navigator.geolocation.clearWatch(watcher);
}

// Llamar a la función para comenzar a obtener la ubicación en tiempo real
obtenerUbicacionEnTiempoReal();