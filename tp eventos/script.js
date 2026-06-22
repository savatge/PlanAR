const btnReservar = document.getElementById("reservarBtn");
const mensaje = document.getElementById("mensajeReserva");

btnReservar.addEventListener("click", () => {
    mensaje.textContent = "Reserva realizada correctamente";
});