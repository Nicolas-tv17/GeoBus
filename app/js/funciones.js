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
            iframe.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d835.7943748171397!2d${longitud}!3d${latitud}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3887434840a9f9%3A0x5ddd4b4343acbc34!2sSede%20SENA%20CAISA%20(la%2020)!5e0!3m2!1ses-419!2sco!4v1716387179046!5m2!1ses-419!2sco`;
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