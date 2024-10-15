import { verificaLista } from "./verificaLista.js";
import { verificaListaComprados } from "./verificaListaComprados.js";

const listaDeCompras = document.getElementById("lista-compras");
const listaComprados = document.getElementById("lista-comprados");

export const excluirItem = (elemento, nomeDoElemento) => {
    let retornoUsuario = confirm(`Deseja excluir o item (${nomeDoElemento}) ?`);
    if (retornoUsuario) {
        elemento.remove();

        verificaLista(listaDeCompras);
        verificaListaComprados(listaComprados);
    }
}