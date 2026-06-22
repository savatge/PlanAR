const btnReservar = document.getElementById("reservarBtn");
const mensaje = document.getElementById("mensajeReserva");

btnReservar.addEventListener("click", function () {
    listaCategorias.innerHTML = ""; 

    if (mensaje.textContent === "") {
        mensaje.textContent = "Reserva realizada correctamente";
    } else {
        mensaje.textContent = "";
    }
});

const btnCategorias = document.getElementById("categoriasBtn");
const listaCategorias = document.getElementById("categorias");

const categorias = ["Conciertos", "Ferias", "Deportes"];

btnCategorias.addEventListener("click", function ()  {
    mensaje.textContent = "";

    listaCategorias.innerHTML = "<h3>Categorías:</h3>";

    categorias.forEach(categoria => {
        listaCategorias.innerHTML += `<p>${categoria}</p>`;
    });
});

