let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>El amigo secreto es: ${nombreSorteado}</li>`;
}

function reiniciarJuego() {
    amigos = [];

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let input = document.getElementById("amigo");
    input.value = "";
}
