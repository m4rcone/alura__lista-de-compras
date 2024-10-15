const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");

export function verificaLista(lista) {
    const liElements = lista.querySelectorAll('li');
    if (liElements.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}