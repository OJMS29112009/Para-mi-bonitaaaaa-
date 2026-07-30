// CAMBIA ESTA FECHA por la fecha en que iniciaron su relación (Año, Mes-1, Día)
// Nota: En JavaScript los meses van de 0 (Enero) a 11 (Diciembre)
const fechaInicio = new Date(2026, 6, 17); // Ejemplo: 14 de Febrero de 2023

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / 1000 / 60) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById('dias').innerText = dias;
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;
}

// Actualiza cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();