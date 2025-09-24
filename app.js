// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    // Obtener el elemento UL donde se mostrarán los amigos
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista antes de volver a llenarla
    lista.innerHTML = "";

    // Recorrer el array de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li> por cada amigo
        let li = document.createElement("li");
        li.textContent = amigos[i]; // Asignar el nombre del amigo
        lista.appendChild(li);      // Agregar el <li> a la lista
    }
}

// Función para agregar un amigo desde el input
function agregarAmigo() {
    // Obtener el valor del input
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Actualizar la lista en pantalla
    actualizarLista();

    // Limpiar el input
    input.value = "";
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
