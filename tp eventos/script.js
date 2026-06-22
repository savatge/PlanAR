const categorias = ["Conciertos", "Ferias", "Deportes"];

const listaCategorias = document.getElementById('lista-categorias');

if (listaCategorias) {
    categorias.forEach(categoria => {
        const item = document.createElement('li');
        item.textContent = categoria;
        listaCategorias.appendChild(item);
    });
}
