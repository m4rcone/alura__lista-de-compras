const listaComprados = document.getElementById("lista-comprados");

export function verificaListaComprados(lista) {
    const liElements = lista.querySelectorAll('li');
    if (liElements.length === 0) {
        listaComprados.classList.add("display-none");
    } else {
        listaComprados.classList.remove("display-none");
    }
}